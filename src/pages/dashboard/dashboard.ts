import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { TransactionsService } from '../../services/transactions';
import { TransactionPage } from '../transaction/transaction';

@Component({
  selector: 'page-dashboard',
  templateUrl: 'dashboard.html',
})
export class DashboardPage {
  transactions: any = []
  total: number;
  displayYear: number;
  constructor(public navCtrl: NavController, public navParams: NavParams, private transactionsService: TransactionsService) {
   this.total = 0;
   this.displayYear = new Date().getFullYear();
  }

  ionViewDidLoad() {
   this.transactions = this.transactionsService.loadTransactions();
   console.log(this.transactions);
    
   if(this.transactions != []){
   for(let i = 0; i < this.transactions.length; i++){
     this.total += this.transactions[i].cost;
    };
   }
  }

  toTransactions(){
    this.navCtrl.push(TransactionPage);
  }

}
