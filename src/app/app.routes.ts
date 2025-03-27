import { Routes } from '@angular/router';
import { LoginComponent } from './component/page/login/login.component';
import { HomeComponent } from './component/page/home/home.component';
import { AuthGuard } from './authGuard/auth.guard';
import { AboutComponent } from './component/page/about/about.component';
import { ContactComponent } from './component/page/contact/contact.component';

export const routes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'about', component: AboutComponent ,canActivate: [AuthGuard] },
    { path: 'contact', component: ContactComponent,canActivate: [AuthGuard]  },
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
];
