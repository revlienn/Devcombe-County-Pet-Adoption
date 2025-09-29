import { Component, Inject, inject } from '@angular/core';
import { PetService } from '../../services/pet-service';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Photo } from '../../types/member';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-pet-photos',
  imports: [AsyncPipe],
  templateUrl: './pet-photos.html',
  styleUrl: './pet-photos.css'
})
export class PetPhotos {
  private petService=inject(PetService);
  private activeRoute=inject(ActivatedRoute);

  protected photos$?:Observable<Photo[]>;

  constructor(){
    const petId=this.activeRoute.parent?.snapshot.paramMap.get('id');
    if(petId){
      this.photos$=this.petService.getPetPhotos(petId);
    }
  }

  get photoMocks(){
    return Array.from({length:20},(_,i)=>({
      url:'/user.png'
    }))
  }


}
