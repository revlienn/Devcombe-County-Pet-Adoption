import { Component, computed, inject, signal } from '@angular/core';
import { MemberService } from '../../services/member-service';
import { filter, Observable } from 'rxjs';
import { Member } from '../../types/member';
import { ActivatedRoute, NavigationEnd, Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { AsyncPipe } from '@angular/common';
import { AccountService } from '../../services/account-service';

@Component({
  selector: 'app-member-details',
  imports: [AsyncPipe,RouterLink,RouterLinkActive,RouterOutlet],
  templateUrl: './member-details.html',
  styleUrl: './member-details.css'
})
export class MemberDetails {
  protected memberService=inject(MemberService);
  private accountService=inject(AccountService);
  private activeRoute=inject(ActivatedRoute);
  private router=inject(Router);
  protected member=signal<Member|undefined>(undefined);
  protected title=signal<string|undefined>('Profile');

  protected isCurrentUser=computed(()=>{
    return this.accountService.currentUser()?.id===this.activeRoute.snapshot.paramMap.get('id');
  })

  constructor() {
    this.activeRoute.data.subscribe({
      next:data=>this.member.set(data['member'])
    })
    this.title.set(this.activeRoute.firstChild?.snapshot?.title);

    console.log('ACTIVE ROUTE: ',this.activeRoute);

    this.router.events.pipe(filter(ev=>ev instanceof NavigationEnd)).subscribe({
      next:()=>
      this.title.set(this.activeRoute.firstChild?.snapshot?.title)
    })
  }
}
