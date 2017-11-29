import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { TransactionsService } from '../../services/transactions';

@Component({
  selector: 'page-dashboard',
  templateUrl: 'dashboard.html',
})
export class DashboardPage {
  transactions: any = []

  constructor(public navCtrl: NavController, public navParams: NavParams, private transactionsService: TransactionsService) {
  }

  ionViewDidLoad() {
   this.transactions = this.transactionsService.loadTransactions();
  }

}
