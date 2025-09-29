import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { Pet } from '../types/pet';
import { Photo } from '../types/member';

@Injectable({
  providedIn: 'root'
})
export class PetService {
  private http=inject(HttpClient);
  private baseApi=environment.apiUrl;

  getPets(){
    return this.http.get<Pet[]>(this.baseApi+'pets');
  }

  getPet(id:string){
    return this.http.get<Pet>(this.baseApi+'pets/'+id);
  }

  getPetPhotos(id:string){
    return this.http.get<Photo[]>(this.baseApi+'pets/'+id+'/photos');
  }
  
}
