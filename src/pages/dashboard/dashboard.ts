import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { TransactionsService } from '../../services/transactions';
import { TransactionPage } from '../transaction/transaction';
import { ViewTransactionPage } from '../view-transaction/view-transaction';

import { Transaction } from '../../models/transaction';

@Component({
  selector: 'page-dashboard',
  templateUrl: 'dashboard.html',
})
export class DashboardPage {
  transactions: Transaction[] = [];
  total = 0;
  displayYear: number;
  constructor(public navCtrl: NavController, public navParams: NavParams, private transactionsService: TransactionsService) {
   
   this.displayYear = new Date().getFullYear();
  }

  ionViewDidLoad() {
   this.transactions = this.transactionsService.loadTransactions();
   console.log("loaded transactions",this.transactions);
    
   if(this.transactions != []){
   for(let i = 0; i < this.transactions.length; i++){
     var toNum = this.transactions[i].cost;
     this.total = this.total + toNum;
    console.log("cost",this.total)
    };

   }
  }

  toTransactions(){
    this.navCtrl.push(TransactionPage);
  }

  viewAllTransactions(){
    this.transactions = this.transactionsService.loadTransactions();
    console.log("Select all",this.transactions);
  }


  //show list of trans or filter on select

}
