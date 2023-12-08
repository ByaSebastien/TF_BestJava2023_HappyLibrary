import {Injectable, OnInit} from '@angular/core';
import {LoginFormModel} from "../models/login.form.model";
import {BehaviorSubject, Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthService{

  //Convention $ a la fin quand on parle de BehaviorSubject ou observable
  private _isConnected$!: BehaviorSubject<boolean>;

  constructor() {
    let isLogged = localStorage.getItem('isConnected');
    this._isConnected$ = new BehaviorSubject<boolean>(!!isLogged);
  }

  get isConnected(): boolean{
    return this._isConnected$.value;
  }

  get isConnected$(): Observable<boolean>{
    return this._isConnected$.asObservable();
  }

  login(form: LoginFormModel): boolean{

    if(form.login === 'Roger' && form.password === 'Test1234='){
      this._isConnected$.next(true);
      localStorage.setItem('isConnected','true');
    }
    return this.isConnected;
  }

  logout():void{
    this._isConnected$.next(false);
    localStorage.removeItem('isConnected');
  }
}
