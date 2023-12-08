import {Injectable} from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {TokenDtoModel} from "../models/token.dto.model";

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  private _currentUser$!: BehaviorSubject<TokenDtoModel | undefined>;

  constructor() {
    let json = localStorage.getItem("currentUser");

    this._currentUser$ = new BehaviorSubject<TokenDtoModel | undefined>(json ? JSON.parse(json) : undefined);
  }

  get currentUser(){
    return this._currentUser$.value;
  }

  get currentUser$(){
    return this._currentUser$.asObservable();
  }

  start(dto: TokenDtoModel): void {
    this._currentUser$.next(dto);
    localStorage.setItem("currentUser", JSON.stringify(dto));
  }

  stop(): void {
    this._currentUser$.next(undefined);
    localStorage.removeItem("currentUser");
  }
}
