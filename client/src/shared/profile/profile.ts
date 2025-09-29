import { Component, inject } from '@angular/core';
import { MemberService } from '../../services/member-service';

@Component({
  selector: 'app-profile',
  imports: [],
  templateUrl: './profile.html',
  styleUrl: './profile.css'
})
export class Profile {
  protected memberService=inject(MemberService);
}
