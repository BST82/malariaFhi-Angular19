import { Routes } from '@angular/router';
import { LoginComponent } from './component/page/login/login.component';
import { HomeComponent } from './component/page/home/home.component';
import { AuthGuard } from './authGuard/auth.guard';
import { AboutComponent } from './component/page/about/about.component';
import { ContactComponent } from './component/page/contact/contact.component';
import { DashboardComponent } from './component/page/dashboard/dashboard.component';
import { ProductsComponent } from './component/stockProducts/products/products.component';
import { StockAllocationFormComponent } from './component/form/stock-allocation-form/stock-allocation-form.component';
import { StockTransferFormComponent } from './component/form/stock-transfer-form/stock-transfer-form.component';
import { StockRequestRaisedComponent } from './component/form/stock-request-raised/stock-request-raised.component';

export const routes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'about', component: AboutComponent ,canActivate: [AuthGuard] },
    { path: 'contact', component: ContactComponent,canActivate: [AuthGuard]  },
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
    { path: 'dashboard', component: DashboardComponent ,canActivate: [AuthGuard] },
    { path: 'products', component: ProductsComponent ,canActivate: [AuthGuard] },
    { path: 'stockAllocationForm', component: StockAllocationFormComponent ,canActivate: [AuthGuard] },
    { path: 'stockTransferForm', component: StockTransferFormComponent ,canActivate: [AuthGuard] },
    { path: 'stockRequestRaisedRequirementForm', component: StockRequestRaisedComponent ,canActivate: [AuthGuard] },
];
