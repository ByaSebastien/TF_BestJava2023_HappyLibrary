import {Injectable} from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import {Observable} from 'rxjs';
import {TokenDtoModel} from "../models/token.dto.model";

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  constructor() {
  }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    let currentUser = localStorage.getItem("currentUser");
    let token;
    if (currentUser) {
      let tokenModel : TokenDtoModel = JSON.parse(currentUser);
      token = tokenModel.accessToken;
    }
    if (token) {
      if (token !== '') {
        let clone = request.clone({
          setHeaders: {'Authorization': 'Bearer ' + token}
        })
        return next.handle(clone);
      }
    }
    return next.handle(request);
  }
}
