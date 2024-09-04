import { Routes } from '@angular/router';
import { UserPageComponent } from './pages/user-page/user-page.component';
import { UserCardPageComponent } from './pages/user-card-page/user-card-page.component';

export const routes: Routes = [
    {path: 'userlist', component: UserPageComponent },
    {path: '', component: UserPageComponent  },
    {path: 'users/:id', component: UserCardPageComponent},
    { path: "**", redirectTo: "/"},
];
