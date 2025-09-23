import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';

@Component({
  selector: 'app-test-errors',
  imports: [],
  templateUrl: './test-errors.html',
  styleUrl: './test-errors.css'
})
export class TestErrors {

  private http=inject(HttpClient);
  baseUrl='https://localhost:5001/api/error/';

  get401error(){
    return this.http.get(this.baseUrl+'bad-request').subscribe({
      next:res=>console.log(res),
      error:err=>console.log(err)
    })
  }

  get404error(){
    return this.http.get(this.baseUrl+'not-found').subscribe({
      next:res=>console.log(res),
      error:err=>console.log(err)
    })
  }

  get400error(){
    return this.http.get(this.baseUrl+'bad-request').subscribe({
      next:res=>console.log(res),
      error:err=>console.log(err)
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
      error:err=>console.log(err)
    })
  }

}
