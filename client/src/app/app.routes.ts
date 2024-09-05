import { Routes } from '@angular/router';
import { UserPageComponent } from './pages/user-page/user-page.component';
import { UserCardPageComponent } from './pages/user-card-page/user-card-page.component';


export const routes: Routes = [
    {path: 'userlist', component: UserPageComponent },
    {path: '', redirectTo: 'userlist', pathMatch: 'full' },
    {path: 'users/2', component: UserCardPageComponent},
    { path: "**", redirectTo: "/"},
];
