import { Component, inject } from '@angular/core';
import { ShelterService } from '../../services/shelter-service';
import { Observable } from 'rxjs';
import { Shelter } from '../../types/shelter';
import { AsyncPipe } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-shelter-list',
  imports: [AsyncPipe,RouterLink],
  templateUrl: './shelter-list.html',
  styleUrl: './shelter-list.css'
})
export class ShelterList {
  private shelterService=inject(ShelterService);
  protected shelters$:Observable<Shelter[]>;

  constructor(){
    this.shelters$=this.shelterService.getShelters();
  }

}
