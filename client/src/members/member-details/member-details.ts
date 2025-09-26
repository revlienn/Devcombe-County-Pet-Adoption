import { Component, inject, signal } from '@angular/core';
import { MemberService } from '../../services/member-service';
import { filter, Observable } from 'rxjs';
import { Member } from '../../types/member';
import { ActivatedRoute, NavigationEnd, Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-member-details',
  imports: [AsyncPipe,RouterLink,RouterLinkActive,RouterOutlet],
  templateUrl: './member-details.html',
  styleUrl: './member-details.css'
})
export class MemberDetails {
  private memberService=inject(MemberService);
  private activeRoute=inject(ActivatedRoute);
  private router=inject(Router);
  protected member=signal<Member|undefined>(undefined);
  protected title=signal<string|undefined>('Profile');

  constructor() {
    this.activeRoute.data.subscribe({
      next:data=>this.member.set(data['member'])
    })
    this.title.set(this.activeRoute.firstChild?.snapshot?.title);
    console.log(this.activeRoute);

    this.router.events.pipe(filter(ev=>ev instanceof NavigationEnd)).subscribe({
      next:()=>
      this.title.set(this.activeRoute.firstChild?.snapshot?.title)
    })
  }
}
