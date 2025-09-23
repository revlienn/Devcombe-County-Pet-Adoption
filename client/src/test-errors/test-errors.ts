import { HttpClient } from '@angular/common/http';
import { Component, inject, signal } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-test-errors',
  imports: [],
  templateUrl: './test-errors.html',
  styleUrl: './test-errors.css'
})
export class TestErrors {

  private http=inject(HttpClient);
  private router=inject(Router);

  baseUrl='https://localhost:5001/api/error/';
  validationErrors=signal<string[]>([]);

  get401error(){
    return this.http.get(this.baseUrl+'auth').subscribe({
      next:res=>console.log(res),
      error:err=>console.log(err)
    })
  }

  get404error(){
    return this.http.get(this.baseUrl+'not-found').subscribe({
      next:res=>{console.log(res);this.router.navigateByUrl('/not-found')},
      error:err=>console.log(err)
    })
  }

  get400error(){
    return this.http.get(this.baseUrl+'bad-request').subscribe({
      next:res=>console.log(res),
      error:err=>{console.log(err)}
    })
  }

  get500error(){
    return this.http.get(this.baseUrl+'server-error').subscribe({
      next:res=>console.log(res),
      error:err=>console.log(err)
    })
  }

  get400ValidationError(){
    return this.http.post('https://localhost:5001/api/account/register',{}).subscribe({
      next:res=>console.log(res),
      error:err=>{console.log(err);this.validationErrors.set(err)}
    })
  }

}
