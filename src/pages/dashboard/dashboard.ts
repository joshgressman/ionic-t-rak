import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { TransactionsService } from '../../services/transactions';
import { TransactionPage } from '../transaction/transaction';
import { ViewTransactionPage } from '../view-transaction/view-transaction';
import { NgForm } from '@angular/forms';
import { Transaction } from '../../models/transaction';

@Component({
  selector: 'page-dashboard',
  templateUrl: 'dashboard.html',
})
export class DashboardPage {
  transactions: Transaction[] = [];
  filteredTransactions: any[] = [];
  itemCategory: any = [];
  total = 0;
  displayYear: number;
  showCategoryFilter: boolean = false;
  showFilteredTransactions: boolean =  false
  constructor(public navCtrl: NavController, public navParams: NavParams, private transactionsService: TransactionsService) {
   
   this.displayYear = new Date().getFullYear();
  }

  ionViewDidLoad() {
   this.transactions = this.transactionsService.loadTransactions();
   this.itemCategory = this.transactionsService.category;
   console.log("loaded transactions",this.transactions);
    
   if(this.transactions != []){
   for(let i = 0; i < this.transactions.length; i++){
     var toNum = this.transactions[i].cost;
     this.total = this.total + toNum;
     console.log("image path", this.transactions[i].imagePath);
    };

   }
  }

  toTransactions(){
    this.navCtrl.push(TransactionPage);
  }

  viewAllTransactions(){
   this.filteredTransactions = this.transactions;
   this.showFilteredTransactions = true;
  }

  viewFilterCategory(){
    this.showCategoryFilter = true;
  }

  closeList(){
    this.showFilteredTransactions = false;
  }

  onSubmit(form: NgForm) {

  }


  //show list of trans or filter on select

}
