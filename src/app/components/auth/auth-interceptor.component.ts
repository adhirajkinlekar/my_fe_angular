import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, finalize } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable()
export class AuthHttpInterceptor implements HttpInterceptor {

  constructor(private router: Router) { }

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const token = localStorage.getItem('JWT_TOKEN');
    
    if (token) {
      request = request.clone({
        setHeaders: {
          'Authorization': token
        }
      });
    }
    
    return next.handle(request).pipe(
      catchError((error: HttpErrorResponse) => {
        if (error.status === 403) this.router.navigate(['/unauthorized']);
        
        return throwError(() => error);
      }),
      finalize(() => {
        // If you had spinner service, you can uncomment the following line
        // this.service.showSpinner.next(false);
      })
    );
  }
}
