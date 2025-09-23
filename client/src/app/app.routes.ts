import { Routes } from '@angular/router';
import { Home } from '../home/home';
import { PetList } from '../pets/pet-list/pet-list';
import { PetDetails } from '../pets/pet-details/pet-details';
import { Favourites } from '../pets/favourites/favourites';
import { Messages } from '../messages/messages';
import { VisitForm } from '../pets/visit-form/visit-form';
import { AdoptionForm } from '../pets/adoption-form/adoption-form';
import { MemberList } from '../members/member-list/member-list';
import { MemberDetails } from '../members/member-details/member-details';
import { ShelterList } from '../shelters/shelter-list/shelter-list';
import { ShelterDetails } from '../shelters/shelter-details/shelter-details';

export const routes: Routes = [
   {path:'',component:Home},
   {path:'pets',component:PetList},
   {path:'pets/:id',component:PetDetails},
   {path:'pets/visit-form/:id',component:VisitForm},
   {path:'pets/adoption-form/:id',component:AdoptionForm},
   {path:'favourites',component:Favourites},
   {path:'messages',component:Messages},
   {path:'members',component:MemberList},
   {path:'members/:id',component:MemberDetails},
   {path:'shelters',component:ShelterList},
   {path:'shelters/:id',component:ShelterDetails},
   {path:'**',component:Home}
];
