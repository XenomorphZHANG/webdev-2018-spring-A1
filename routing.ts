import {Routes, RouterModule} from '@angular/router';

import {LoginComponent} from './src/app/views/users/login/login.component';
import {ProfileComponent} from './src/app/views/users/profile/profile.component';
import {RegisterComponent} from './src/app/views/users/register/register.component';

const appRoutes: Routes = [
  {path: 'login', component: LoginComponent}, /// route path
  {path: 'profile', component: ProfileComponent},
  {path: 'register', component: RegisterComponent},
];

export const routing = RouterModule.forRoot(appRoutes);
