import { CanActivateFn } from '@angular/router';
import {SessionService} from "../../core/services/session.service";
import {inject} from "@angular/core";

export const isLoggedGuard: CanActivateFn = (route, state) => {
  const _sessionService: SessionService = inject(SessionService);

  return !!_sessionService.currentUser;
};
