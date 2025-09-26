import { HttpClient, HttpHeaders } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { AccountService } from './account-service';
import { Pet } from '../types/pet';

@Injectable({
  providedIn: 'root'
})
export class PetService {
  private http=inject(HttpClient);
  private accountService=inject(AccountService);
  private baseApi=environment.apiUrl;

  getPets(){
    return this.http.get<Pet[]>(this.baseApi+'pets');
  }

  getPet(id:string){
    return this.http.get<Pet>(this.baseApi+'pets/'+id);
  }
  
}
