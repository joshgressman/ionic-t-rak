import { Transaction } from '../models/transaction';
import { Storage } from '@ionic/storage';

import { Injectable } from '@angular/core';

@Injectable() //injectable needs to be used with storage
export class TransactionsService {
  //array that will store transaction objects within local storage
  private transactions: Transaction[] = [];

  constructor(private storage: Storage){}

  addTransaction(vendor: string, purchaseDate: Date, category: string, item: string, description: string, cost: number, imagePath: string){
      const trans = new Transaction(vendor, purchaseDate, category, item, description, cost, imagePath);
      this.transactions.push(trans);
      console.log(this.transactions);
  }



}

