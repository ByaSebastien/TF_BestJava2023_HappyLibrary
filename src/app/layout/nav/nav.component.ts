import {Component, OnInit} from '@angular/core';
import {Link} from "../../core/models/link.model";
import {TokenDtoModel} from "../../core/models/token.dto.model";
import {SessionService} from "../../core/services/session.service";
import {Router} from "@angular/router";

const anonymousNav: Link[] = [
  {title: 'Book',url:'/book'},
  {title: 'Login',url: '/login'},
  {title: 'Register',url: '/register'},
];

const connectedNav: Link[] = [
  {title: 'Book',url:'/book'},
];

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  currentUser!: TokenDtoModel | undefined;
  links!: Link[];

  constructor(
    private readonly _sessionService: SessionService,
    private readonly _router: Router
  ) {
  }

  ngOnInit(): void {
    this.links = [];
    this._sessionService.currentUser$.subscribe((value) => {
      this.currentUser = value;
      this.links = value ? connectedNav : anonymousNav;
      console.log("And again");
    })
  }

  logout(): void {
    this._sessionService.stop();
    this._router.navigate(['/']);
  }
}
