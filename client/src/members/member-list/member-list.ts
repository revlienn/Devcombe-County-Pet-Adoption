import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { MemberService } from '../../services/member-service';
import { Observable } from 'rxjs';
import { Member } from '../../types/member';
import { AsyncPipe } from '@angular/common';
import { Card } from '../../shared/card/card';

@Component({
  selector: 'app-member-list',
  imports: [AsyncPipe,Card],
  templateUrl: './member-list.html',
  styleUrl: './member-list.css'
})
export class MemberList {
  private memberService=inject(MemberService);
  protected members$: Observable<Member[]>;

  constructor() {
    this.members$=this.memberService.getMembers();
  }


}
