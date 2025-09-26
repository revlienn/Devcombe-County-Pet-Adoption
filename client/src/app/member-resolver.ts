import { ResolveFn, Router } from '@angular/router';
import { Member } from '../types/member';
import { inject } from '@angular/core';
import { MemberService } from '../services/member-service';
import { EMPTY } from 'rxjs';

export const memberResolver: ResolveFn<Member> = (route, state) => {
  const memberService=inject(MemberService);
  const id=route.paramMap.get('id');

  const router=inject(Router);
  if(!id){
    router.navigateByUrl('/not-found');
    return EMPTY;
  }

  return memberService.getMember(id);
};
