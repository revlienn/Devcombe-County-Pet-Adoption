import { HttpInterceptorFn } from '@angular/common/http';
import { catchError } from 'rxjs';
import { ToastService } from '../../services/toast-service';
import { inject } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';

export const errorInterceptor: HttpInterceptorFn = (req, next) => {
  const toastService=inject(ToastService);
  const router=inject(Router);

  return next(req).pipe(catchError(err=>{
    if(err){
      switch(err.status){
        case 400:
          if(err.error.errors){
            const modelStateErrors=[];
            for(const key in err.error.errors){
              if(err.error.errors[key]){
                modelStateErrors.push(err.error.errors[key])
              }
            }
            throw modelStateErrors.flat()
          }else{
            toastService.error(`Bad Request`)
          }
          break;
        case 401:
          toastService.error('Unauthorised');
          break;
        case 404:
          toastService.error('Not Found');
          break;
        case 500:
          const navigationExtras:NavigationExtras={state:{error:err.error}};
          router.navigateByUrl('/server-error', navigationExtras);
          toastService.error('Server error');
          break;
        default:
          toastService.error('Something went wrong');
          break;
      }
    }
    throw err;
  }));
};
