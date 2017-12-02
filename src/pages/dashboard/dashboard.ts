import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { TransactionsService } from '../../services/transactions';

@Component({
  selector: 'page-dashboard',
  templateUrl: 'dashboard.html',
})
export class DashboardPage {
  transactions: any = []
  total: number;

  constructor(public navCtrl: NavController, public navParams: NavParams, private transactionsService: TransactionsService) {
   this.total = 0;
  }

  ionViewDidLoad() {
   this.transactions = this.transactionsService.loadTransactions();
   console.log("trans", this.transactions[0].cost);

   for(let i = 0; i < this.transactions.length; i++){
     this.total += this.transactions[i].cost;
   };
  }

}
