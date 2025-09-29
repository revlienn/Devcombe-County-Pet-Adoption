import { Routes } from '@angular/router';
import { Home } from '../home/home';
import { PetList } from '../pets/pet-list/pet-list';
import { PetDetails } from '../pets/pet-details/pet-details';
import { Favourites } from '../pets/favourites/favourites';
import { Messages } from '../messages/messages';
import { VisitForm } from '../pets/visit-form/visit-form';
import { MemberList } from '../members/member-list/member-list';
import { MemberDetails } from '../members/member-details/member-details';
import { Register } from '../register/register';
import { VisitList } from '../pets/visit-list/visit-list';
import { authGuard } from '../core/guards/auth-guard';
import { TestErrors } from '../test-errors/test-errors';
import { NotFound } from '../errors/not-found/not-found';
import { ServerError } from '../errors/server-error/server-error';
import { Profile } from '../shared/profile/profile';
import { Photos } from '../shared/photos/photos';
import { petResolver } from './pet-resolver';
import { memberResolver } from './member-resolver';
import { PetPhotos } from '../pets/pet-photos/pet-photos';

export const routes: Routes = [
   { path: '', component: Home },
   { path: 'pets', component: PetList },
   { path: 'pets/:id',resolve:{pet:petResolver},component: PetDetails, children:[
      {path:'',redirectTo:'profile',pathMatch:'full'},
      {path:'profile',component:Profile,title:'Profile'},
      {path:'photos',component:PetPhotos,title:'Photos'},
   ] },
   { path: 'pets/visit/:id', component: VisitForm },
   { path: 'register', component: Register },
   {
      path: '',
      runGuardsAndResolvers: 'always',
      canActivate: [authGuard],
      children: [
         { path: 'favourites', component: Favourites },
         { path: 'messages', component: Messages },
         { path: 'members', component: MemberList },
         { path: 'members/:id', resolve:{member:memberResolver},component: MemberDetails, children:[
            {path:'',redirectTo:'profile',pathMatch:'full'},
            {path:'profile',component:Profile,title:'Profile'}
         ] }, 
         { path: 'pets/visits', component: VisitList },
         { path: 'test-errors', component: TestErrors }]
   },
   { path: 'server-error', component: ServerError },
   { path: '**', component: NotFound }
];
