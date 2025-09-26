import { HttpClient, HttpHeaders } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { AccountService } from './account-service';
import { environment } from '../environments/environment';
import { Shelter } from '../types/shelter';

@Injectable({
  providedIn: 'root'
})
export class ShelterService {
  private http=inject(HttpClient);
  private accountService=inject(AccountService);

  private baseUrl=environment.apiUrl;

  getShelters(){
    return this.http.get<Shelter[]>(this.baseUrl+'shelters')
  }

  getShelter(id:string){
    return this.http.get<Shelter>(this.baseUrl+'shelters/'+id)
  }
}
