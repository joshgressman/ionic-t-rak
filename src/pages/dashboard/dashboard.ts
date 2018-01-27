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
  currentCategory: string = "";
  showCloseCategorySearch = false;
  showYearFilter: boolean = false;
  yearFilter : number[] = [];
  currentYear: number;
  showYearFilteredTransactions: boolean = false
  showCloseYearSearch = true;
  constructor(public navCtrl: NavController, public navParams: NavParams, private transactionsService: TransactionsService) {
   
   this.displayYear = new Date().getFullYear();
   this.yearFilter = this.transactionsService.yearFilterSelection;
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
    this.showCloseCategorySearch = true;
  }

  closeYearSelection(){
    this.showYearFilteredTransactions = false; 
    this.showYearFilter = false;
    
  }

  closeList(){
    this.showFilteredTransactions = false;
    this.showCategoryFilter = false;
    this.filteredTransactions = [];
  }

  closeYearList(){
    this.showYearFilteredTransactions = false;
    this.filteredTransactions = [];
  }

  onSubmit(form: NgForm) {
    this.currentCategory = form.value.category;
    
    //Iterate through transactions 
    //push to filtered array where category value == this.currentCategory
    for(var i = 0; i < this.transactions.length; i++) {
       if(this.transactions[i].category == this.currentCategory){
         this.filteredTransactions.push(this.transactions[i])
       }
       console.log("transaction array", this.filteredTransactions);
    }
    this.showCloseCategorySearch = false;
    this.showFilteredTransactions = true;
  }

  closeCategorySelection(){
    this.showCategoryFilter = false;
  }

  //Show year filter section
  filterByYear(){
    // Open Year filter
    this.showYearFilter = true
  }

  //Run filter section function
  onFilterYear(form: NgForm){
    this.showCloseYearSearch = false;
    console.log(form.value.yearFilter);
    this.currentYear = form.value.yearFilter
    for(var i = 0; i < this.transactions.length; i++){
      if(this.transactions[i].year == this.currentYear){
        this.filteredTransactions.push(this.transactions[i])
      }
      console.log(this.filteredTransactions)
    }
    this.showYearFilteredTransactions = true;
  }


  //show list of trans or filter on select

}
