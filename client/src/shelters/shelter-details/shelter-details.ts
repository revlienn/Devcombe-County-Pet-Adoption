import { Component, inject, signal } from '@angular/core';
import { ShelterService } from '../../services/shelter-service';
import { ActivatedRoute, NavigationEnd, Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { Shelter } from '../../types/shelter';
import { filter, Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-shelter-details',
  imports: [AsyncPipe,RouterLink,RouterLinkActive,RouterOutlet],
  templateUrl: './shelter-details.html',
  styleUrl: './shelter-details.css'
})
export class ShelterDetails {
  private shelterService=inject(ShelterService);
  private activeRoute=inject(ActivatedRoute);
  private router=inject(Router);

  protected shelter$?:Observable<Shelter>;
  protected title=signal<string|undefined>('Profile');

  constructor() {
    this.shelter$=this.getShelter();
    this.title.set(this.activeRoute.firstChild?.snapshot?.title);

    this.router.events.pipe(filter(ev=>ev instanceof NavigationEnd)).subscribe({
      next:()=>{
        this.title.set(this.activeRoute.firstChild?.snapshot?.title)
      }
    })
  }

  getShelter(){
    const id=this.activeRoute.snapshot.paramMap.get('id');
    if(!id) return;
    return this.shelterService.getShelter(id);
  }
}
