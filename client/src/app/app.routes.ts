import { Routes } from '@angular/router';
import { Home } from '../home/home';
import { PetList } from '../pets/pet-list/pet-list';
import { PetDetails } from '../pets/pet-details/pet-details';
import { Favourites } from '../pets/favourites/favourites';
import { Messages } from '../messages/messages';

export const routes: Routes = [
   {path:'',component:Home},
   {path:'pets',component:PetList},
   {path:'pets/:id',component:PetDetails},
   {path:'favourites',component:Favourites},
   {path:'messages',component:Messages},
   {path:'**',component:Home}
];
