import { Component, inject, signal } from '@angular/core';
import { PetService } from '../../services/pet-service';
import { ActivatedRoute, NavigationEnd, Router, RouterLink, RouterLinkActive, RouterOutlet, RouterPreloader } from '@angular/router';
import { filter, Observable } from 'rxjs';
import { Pet } from '../../types/pet';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-pet-details',
  imports: [AsyncPipe,RouterLink,RouterLinkActive,RouterOutlet],
  templateUrl: './pet-details.html',
  styleUrl: './pet-details.css'
})
export class PetDetails {
  private activeRoute=inject(ActivatedRoute);
  private router=inject(Router);

  protected pet=signal<Pet|undefined>(undefined);
  protected title=signal<string|undefined>('Profile');

  ngOnInit():void{
    this.activeRoute.data.subscribe({
      next:data=>this.pet.set(data['pet'])
    })
    this.title.set(this.activeRoute.firstChild?.snapshot?.title);

    this.router.events.pipe(filter(ev=>ev instanceof NavigationEnd)).subscribe({
      next:()=>
      this.title.set(this.activeRoute.firstChild?.snapshot?.title)
    })
  }
}
