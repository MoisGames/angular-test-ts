import { Routes } from '@angular/router';
import { UserPageComponent } from './pages/user-page/user-page.component';
import { UserCardPageComponent } from './pages/user-card-page/user-card-page.component';
import { SettingsPageComponent } from './pages/settings-page/settings-page.component';
import { AuthRegisterPageComponent } from './pages/auth-register-page/auth-register-page.component';


export const routes: Routes = [
    {path: 'users', component: UserPageComponent, title: "Список пользователей"},
    {path: '', redirectTo: 'usersList', pathMatch: 'full' },
    {path: 'users/:id', component: UserCardPageComponent, title: "Страница пользователя"},
    {path: 'settings', component: SettingsPageComponent, title: "Страница изменения данных о пользователе"},
    {path: "**", redirectTo: "users"},
    {path:"login", component: AuthRegisterPageComponent, title: "Страница Авторизации"}
];
