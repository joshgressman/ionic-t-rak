import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import { LoginPage } from '../login/login';
import { TransactionPage } from '../transaction/transaction';
import { DashboardPage } from '../dashboard/dashboard';

@Component({
  selector: 'page-menu',
  templateUrl: 'menu.html',
})
export class MenuPage {
  homePage = HomePage;

 @ViewChild('content') childNavCtrl: NavController;

  constructor(public navCtrl: NavController, public navParams: NavParams) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MenuPage');
  }

  openPage(pageName: string){
    if(pageName == 'login') {
    this.navCtrl.push(LoginPage);
    }

    if(pageName == 'transaction'){
      this.navCtrl.push(TransactionPage);
    }

    if(pageName == 'dashboard'){
      this.navCtrl.push(DashboardPage);
    }
  }

}
