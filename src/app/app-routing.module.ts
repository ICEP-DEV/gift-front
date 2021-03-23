import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GiftBoxFormComponent } from './components/gift-box-form/gift-box-form.component';
import { StatisticBoxComponent } from './components/statistic-box/statistic-box.component'
import { LandingComponent } from './components/landing/landing.component';
import { AboutusComponent } from './components/aboutus/aboutus.component';
import { ShoplandingComponent } from './components/shoplanding/shoplanding.component';
import { ContactComponent } from './components/contact/contact.component';
import { ViewBoxComponent } from './components/view-box/view-box.component';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';

import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';

import { WishlistComponent } from './components/wishlist/wishlist.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { ProfileComponent } from './components/profile/profile.component';
import { OrderComponent } from "./components/order/order.component";
import { PageNotFoundComponent } from "./components/page-not-found/page-not-found.component";

import { PaymentComponent } from "./components/payment/payment.component";
import { ViewcustomerComponent } from './components/viewcustomer/viewcustomer.component';
import { AdminloginComponent } from "./components/adminlogin/adminlogin.component";

import { CanActivateCustomerGuard } from "./guards/can-activate-customer.guard";

const routes: Routes = [
  { path: '', component: LandingComponent },
  { path: 'giftboxform', component: GiftBoxFormComponent },
  { path: 'statisticbox', component: StatisticBoxComponent },
  { path: 'about', component: AboutusComponent },
  { path: 'shop', component: ShoplandingComponent },
  { path: 'contact', component: ContactComponent },

  { path: 'viewbox', component: ViewBoxComponent },
  { path: 'admindashboard', component: AdminDashboardComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'wish', component: WishlistComponent },

  { path: 'checkout', component: CheckoutComponent, canActivate: [CanActivateCustomerGuard]},
  { path: 'profile', component: ProfileComponent, canActivate: [CanActivateCustomerGuard] },
  { path: 'customer', component: ViewcustomerComponent },
  { path: 'order', component: OrderComponent, canActivate: [CanActivateCustomerGuard] },
  { path: 'payment', component: PaymentComponent, canActivate: [CanActivateCustomerGuard] },
  {path: 'adminlogin', component: AdminloginComponent},
  
  { path: '**', component: PageNotFoundComponent },
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
