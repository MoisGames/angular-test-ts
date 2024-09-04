import { Routes } from '@angular/router';
import { UserPageComponent } from './pages/user-page/user-page.component';
import { ProfileHeaderComponent } from './common-ui/profile-header/profile-header.component';
import { UserCardPageComponent } from './pages/user-card-page/user-card-page.component';

export const routes: Routes = [
    {path: 'userlist', component: UserPageComponent },
    {path: '', component: UserPageComponent  },
    {path: 'user100', component: UserCardPageComponent}
];
