import { Routes } from '@angular/router';
import { UserPageComponent } from './pages/user-page/user-page.component';
import { UserCardPageComponent } from './pages/user-card-page/user-card-page.component';


export const routes: Routes = [
    {path: 'userList', component: UserPageComponent, title: "Список пользователей"},
    {path: '', redirectTo: 'usersList', pathMatch: 'full' },
    {path: 'users', component: UserCardPageComponent, title: "Страница пользователя"},
    { path: "**", redirectTo: "userList"},
];
