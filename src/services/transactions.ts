import { Transaction } from '../models/transaction';
import { Storage } from '@ionic/storage';

import { Injectable } from '@angular/core';

@Injectable() //injectable needs to be used with storage
export class TransactionsService {
  //array that will store transaction objects within local storage
  private transactions: Transaction[] = [];

  public category = ["Office Supplies", "Vehicle", "Gas", "Marketing"];
  public yearFilterSelection: number[] = [];
  constructor(private storage: Storage){
     
    //set current year
    let data = new Date().getFullYear();
    
    //add dynamic year selection to the tax year drop down
    for(let i = data -1; i <= data + 1; i++){
      let number = i;
      this.yearFilterSelection.push(number);
    }
  }

  //The local storage is being overwritten, need to initialize then resave the array

  addTransaction(vendor: string, purchaseDate: Date, category: string, item: string, description: string, cost: number, imagePath: string, year: number){
      const trans = new Transaction(vendor, purchaseDate, category, item, description, cost, imagePath, year);
      this.transactions.push(trans);
      console.log("Saving transaction",this.transactions);
      this.storage.set('transactions', this.transactions)
      .then(
        data => {
          console.log("transaction saved to storage", this.storage);
        }
      )
      .catch(
        err => {
          console.log(err);
        }
      )
    
  }

  fetchTransactions(){
    return this.storage.get('transactions')
    .then(
      (transactions: Transaction[]) => {
        this.transactions = transactions != null ? transactions : [];
        return this.transactions.slice()
      }
    )
    .catch(
      err => {
        console.log(err);
      }
    )
  }

  loadTransactions(){
    console.log("from storage", this.transactions);
    return this.transactions.slice();
    }
   


}

