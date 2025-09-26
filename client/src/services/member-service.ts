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
    return this.http.get<Member[]>(this.baseUrl+'members')
  }

  getMember(id:string){
    return this.http.get<Member>(this.baseUrl+'members/'+id)
  }

}
