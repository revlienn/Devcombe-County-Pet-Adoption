import { HttpClient, HttpHeaders } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { AccountService } from './account-service';
import { environment } from '../environments/environment';
import { Member } from '../types/member';

@Injectable({
  providedIn: 'root'
})
export class MemberService {
  private http=inject(HttpClient);
  private accountService=inject(AccountService);

  private baseUrl=environment.apiUrl;

  getMembers(){
    return this.http.get<Member[]>(this.baseUrl+'members',this.getHttpsOptions())
  }

  getMember(id:string){
    return this.http.get<Member>(this.baseUrl+'members/'+id,this.getHttpsOptions())
  }

  getHttpsOptions(){
    return{
      headers:new HttpHeaders({
        Authorization:'Bearer '+ this.accountService.currentUser()?.token
      })
    }
  }

}
