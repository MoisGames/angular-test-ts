import { Routes } from '@angular/router';
import { UserPageComponent } from './pages/user-page/user-page.component';
import { UserCardPageComponent } from './pages/user-card-page/user-card-page.component';
import { SettingsPageComponent } from './pages/settings-page/settings-page.component';
import { AuthRegisterPage } from './pages/auth-register-page/auth-register-page.component';
import { AuthGuard } from './auth.guard';


export const routes: Routes = [
    {path: 'users', component: UserPageComponent, title: "Список пользователей", canActivate: [AuthGuard]},
    {path: '', redirectTo: 'users', pathMatch: 'full'},
    {path: 'users/:id', component: UserCardPageComponent, title: "Страница пользователя", canActivate: [AuthGuard]},
    {path: 'settings', component: SettingsPageComponent, title: "Страница изменения данных о пользователе", canActivate: [AuthGuard]},
    {path: "**", redirectTo: "login"},
    {path:"login", component: AuthRegisterPage, title: "Страница Авторизации"}
];
