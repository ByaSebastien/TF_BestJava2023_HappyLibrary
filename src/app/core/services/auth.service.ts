import {Injectable, OnInit} from '@angular/core';
import {LoginFormModel} from "../models/login.form.model";
import {BehaviorSubject, Observable} from "rxjs";
import {RegisterFormModel} from "../models/register.form.model";
import {HttpClient} from "@angular/common/http";
import {TokenDtoModel} from "../models/token.dto.model";

@Injectable({
  providedIn: 'root'
})
export class AuthService{

  constructor(
    private readonly _http: HttpClient
  ){}

  login(form: LoginFormModel): Observable<TokenDtoModel>{
    return this._http.post<TokenDtoModel>("http://localhost:3000/login",form);
  }

  register(form: RegisterFormModel): Observable<TokenDtoModel>{
    return this._http.post<TokenDtoModel>("http://localhost:3000/register",form);
  }
}
