import { Routes } from '@angular/router';
import { UserPageComponent } from './pages/user-page/user-page.component';
import { UserCardPageComponent } from './pages/user-card-page/user-card-page.component';
import { SettingsPageComponent } from './pages/settings-page/settings-page.component';
import { LoginPage } from './pages/login-page/login-page.component';
import { AuthGuard } from './auth.guard';
import { RegisterPageComponent } from './pages/register-page/register-page.component';


export const routes: Routes = [
    {path:"register", component: RegisterPageComponent, title: "Страница Регистрации"},
    {path:"login", component: LoginPage, title: "Страница Авторизации"},
    {path: 'users', component: UserPageComponent, title: "Список пользователей", canActivate: [AuthGuard]},
    {path: '', redirectTo: 'users', pathMatch: 'full'},
    {path: 'users/:id', component: UserCardPageComponent, title: "Страница пользователя", canActivate: [AuthGuard]},
    {path: 'settings', component: SettingsPageComponent, title: "Страница изменения данных о пользователе", canActivate: [AuthGuard]},
    {path: "**", redirectTo: "login"},
];
