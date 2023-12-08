import {Component, OnInit} from '@angular/core';
import {Link} from "../../core/models/link.model";
import {AuthService} from "../../core/services/auth.service";

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit{

  isConnected!: boolean;
  links!: Link[];

  constructor(
    private readonly _authService: AuthService
  ) {
  }

  ngOnInit(): void {
    this.links = [
    ];
    // this._authService.isConnected$.subscribe({
    //   next: () => {},
    //   error: () => {},
    //   complete: () => {}
    // })
    this._authService.isConnected$.subscribe((value) => {
      console.log('Je get!')
      this.isConnected = value;
    })
  }

  logout():void{
    this._authService.logout();
  }
}
