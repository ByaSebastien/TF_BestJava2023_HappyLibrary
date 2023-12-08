import {Component, OnInit} from '@angular/core';
import {Link} from "../../core/models/link.model";
import {TokenDtoModel} from "../../core/models/token.dto.model";
import {SessionService} from "../../core/services/session.service";

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  currentUser!: TokenDtoModel | undefined;
  links!: Link[];

  constructor(
    private readonly _sessionService: SessionService
  ) {
  }

  ngOnInit(): void {
    this.links = [];
    this._sessionService.currentUser$.subscribe((value) => {
      this.currentUser = value;
      console.log("And again");
    })
  }

  logout(): void {
    this._sessionService.stop();
  }
}
