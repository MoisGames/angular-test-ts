import { Routes } from '@angular/router';
import { UserPageComponent } from './pages/user-page/user-page.component';
import { UserCardPageComponent } from './pages/user-card-page/user-card-page.component';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

export const routes: Routes = [
    {path: 'userlist', component: UserPageComponent },
    {path: '', component: UserPageComponent  },
    {path: 'users/2', component: UserCardPageComponent},
    { path: "**", redirectTo: "/"},
];
