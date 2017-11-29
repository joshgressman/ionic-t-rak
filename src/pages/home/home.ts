import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { TransactionsService } from '../../services/transactions';
import { Transaction } from '../../models/transaction'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  
  transactions: Transaction[] = []

  constructor(public navCtrl: NavController, private transactionsService: TransactionsService) {

  }

  //Initialize data from storage
   ngOnInit(){
     this.transactionsService.fetchTransactions()
     .then(
       (transactions: Transaction[]) => {
         this.transactions = transactions;
         console.log(this.transactions);
       }
     )
   }

}
