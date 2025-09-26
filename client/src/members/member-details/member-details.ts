import { Component, inject } from '@angular/core';
import { MemberService } from '../../services/member-service';
import { Observable } from 'rxjs';
import { Member } from '../../types/member';
import { ActivatedRoute, RouterLink, RouterLinkActive } from '@angular/router';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-member-details',
  imports: [AsyncPipe,RouterLink,RouterLinkActive],
  templateUrl: './member-details.html',
  styleUrl: './member-details.css'
})
export class MemberDetails {
  private memberService=inject(MemberService);
  private router=inject(ActivatedRoute);
  protected member$?:Observable<Member>;

  constructor() {
    this.member$=this.loadMember();
  }

  loadMember(){
    const id=this.router.snapshot.paramMap.get('id');
    if(!id) return;
    return this.memberService.getMember(id);
  }
}
