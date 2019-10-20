import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { ChartsModule } from 'ng2-charts';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import {sharedService} from './sharedService';
import { LoyaltyComponent } from './loyalty/loyalty.component';
import { PaymentComponent } from './payment/payment.component';
import { HttpClientModule } from '@angular/common/http';
import { PaymentService } from './payment/payment.service';
import { RegisterService } from './register/register.service';
import { loginService } from './login/login.service';
import { UserComponent } from './user/user.component';
import { UserService } from './user/user.service';
import { LoyaltyService } from './loyalty/loyalty.service';
import { ItemsComponent } from './items/items.component';
import { ItemDetailComponent } from './items/item-detail/item-detail.component';
import { ItemListComponent } from './items/item-list/item-list.component';
import { ChartComponent } from './chart/chart.component';
const appRoutes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register',component: RegisterComponent },
  { path: 'loyalty',component: LoyaltyComponent },
  { path: 'purchase',component: PaymentComponent },
  { path: 'user',component: UserComponent },
  { path: 'dashboard',component: ChartComponent },
  { path: 'cancel',component: PaymentComponent},
  { path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  }
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HeaderComponent,
    LoyaltyComponent,
    PaymentComponent,
    UserComponent,
    ItemsComponent,
    ItemDetailComponent,
    ItemListComponent,
    ChartComponent,
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ChartsModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
    
  ],
  providers: [sharedService,PaymentService,RegisterService,loginService,UserService,LoyaltyService],
  bootstrap: [AppComponent]
})

export class AppModule { }
