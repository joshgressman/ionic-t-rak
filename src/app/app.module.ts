import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { HomePage } from '../pages/home/home';
import { TransactionPage } from '../pages/transaction/transaction';
import { MenuPage } from '../pages/menu/menu';
import { LoginPage } from '../pages/login/login';
import { DashboardPage } from '../pages/dashboard/dashboard';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { TransactionsService } from '../services/transactions';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    MenuPage,
    LoginPage,
    TransactionPage,
    DashboardPage

  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    MenuPage,
    LoginPage,
    TransactionPage,
    DashboardPage 

  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    TransactionsService
  ]
})
export class AppModule {}
