import { HttpErrorResponse, HttpEvent, HttpHandlerFn, HttpInterceptorFn, HttpRequest } from '@angular/common/http';
import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { isEmpty, isNil } from 'lodash';
import { EMPTY, Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { ROUTER } from 'src/app/shared';
import { SessionService } from '../services';

export const AuthTokenHeaderInterceptor: HttpInterceptorFn = (req: HttpRequest<any>, next: HttpHandlerFn): Observable<HttpEvent<any>> => {
  const sessionService = inject(SessionService);
  const router = inject(Router);

  const handleAuthError = (err: HttpErrorResponse): Observable<any> => {
    if (err.status === 403 && !router.url.endsWith('landing')) {
      sessionService.destroySession();
      router.navigate([ROUTER.LANDING], {
        queryParams: { returnUrl: router.url }
      });
      return EMPTY;
    }
    return throwError(() => err);
  };

  const accessToken = sessionService.userAccessToken;

  if (!isNil(accessToken) && !isEmpty(accessToken) && isNil(req.headers.get('is-external'))) {
    const authReq = req.clone({
      setHeaders: { Authorization: 'Bearer ' + accessToken }
    });

    return next(authReq).pipe(catchError(handleAuthError));
  }

  return next(req);
};
