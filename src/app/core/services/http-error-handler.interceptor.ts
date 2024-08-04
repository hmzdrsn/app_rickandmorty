import { HttpErrorResponse, HttpInterceptorFn, HttpResponse } from '@angular/common/http';
import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { error, log } from 'console';
import { catchError, throwError } from 'rxjs';

export const httpErrorHandlerInterceptor: HttpInterceptorFn = (req, next) => {
 
  const router = inject(Router);

  return next(req).pipe(
    catchError((error:HttpErrorResponse)=>{
      let errorMsg = '';
      if (error.error instanceof ErrorEvent) {
        errorMsg = `Error: ${error.error.message}`;
        router.navigate(['/error'])
      } 
      else if(error.status===401){
        console.log("Unauthorized error!");
        router.navigate(['/error'])
      }
      else {
        errorMsg = `Error Code: ${error.status},  Message: ${error.message}`;
        router.navigate(['/error'])
      }
      console.error(errorMsg);
      
      return throwError(() => new Error(errorMsg));
    })
  )
};
