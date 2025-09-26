import { ResolveFn, Router } from '@angular/router';
import { Pet } from '../types/pet';
import { inject } from '@angular/core';
import { PetService } from '../services/pet-service';
import { EMPTY } from 'rxjs';

export const petResolver: ResolveFn<Pet> = (route, state) => {
  const petService=inject(PetService);
  const id=route.paramMap.get('id');

  const router=inject(Router);
  if(!id){
    router.navigateByUrl('/not-found');
    return EMPTY;
  }

  return petService.getPet(id);
};
