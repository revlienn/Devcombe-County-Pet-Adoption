import { Component, inject } from '@angular/core';
import { PetService } from '../../services/pet-service';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Pet } from '../../types/pet';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-pet-details',
  imports: [AsyncPipe],
  templateUrl: './pet-details.html',
  styleUrl: './pet-details.css'
})
export class PetDetails {
  private petService=inject(PetService);
  private route=inject(ActivatedRoute);

  protected pet$? : Observable<Pet>;

  ngOnInit():void{
    this.pet$ = this.loadPet();
  }

  loadPet(){
    const id=this.route.snapshot.paramMap.get('id');
    if(!id) return;
    return this.petService.getPet(id);
  }
}
