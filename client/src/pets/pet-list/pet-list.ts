import { Component, inject } from '@angular/core';
import { PetService } from '../../services/pet-service';
import { Pet } from '../../types/pet';
import { Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-pet-list',
  imports: [AsyncPipe],
  templateUrl: './pet-list.html',
  styleUrl: './pet-list.css'
})
export class PetList {

  private petService=inject(PetService);
  protected pets$:Observable<Pet[]>;

  constructor(){
    this.pets$=this.petService.getPets();
  }
}
