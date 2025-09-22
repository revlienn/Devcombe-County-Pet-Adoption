import { inject, Injectable, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../types/user';
import { tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  private http=inject(HttpClient);
  currentUser=signal<User|null>(null);

  baseUrl='https://localhost:5001/api/';

  login(creds:any){
    return this.http.post<User>(this.baseUrl+'account/login',creds).pipe(
      tap((res)=>{
        if(res){
          localStorage.setItem('user',JSON.stringify(res));
          this.currentUser.set(res)
        }
      })
    )
  }

  logout(){
    localStorage.removeItem('user');
    this.currentUser.set(null);
  }
}
