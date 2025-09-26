import { Component, inject } from '@angular/core';
import { ShelterService } from '../../services/shelter-service';
import { ActivatedRoute, RouterLink, RouterLinkActive } from '@angular/router';
import { Shelter } from '../../types/shelter';
import { Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-shelter-details',
  imports: [AsyncPipe,RouterLink,RouterLinkActive],
  templateUrl: './shelter-details.html',
  styleUrl: './shelter-details.css'
})
export class ShelterDetails {
  private shelterService=inject(ShelterService);
  private activeRoute=inject(ActivatedRoute);

  protected shelter$?:Observable<Shelter>;

  constructor() {
    this.shelter$=this.getShelter();
  }

  getShelter(){
    const id=this.activeRoute.snapshot.paramMap.get('id');
    if(!id) return;
    return this.shelterService.getShelter(id);
  }
}
