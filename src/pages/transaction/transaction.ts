import { Component } from '@angular/core';
import {NavController, NavParams } from 'ionic-angular';
import { NgForm } from '@angular/forms';
import { TransactionsService } from '../../services/transactions';

@Component({
  selector: 'page-transaction',
  templateUrl: 'transaction.html',
})
export class TransactionPage {
   itemCategory: any = [];
  constructor(public navCtrl: NavController, public navParams: NavParams, private transactionsService: TransactionsService) {
  
  }

  onSubmit(form: NgForm){
    let imgUrl = '';
    let theCost = parseInt(form.value.cost)
    this.transactionsService.addTransaction(form.value.vendor, form.value.purchasedDate, form.value.category, form.value.item, form.value.description, theCost, imgUrl);
    form.reset();
  }

  ionViewDidLoad() {
    this.itemCategory = ["Office Supplies", "Vehicle", "Gas", "Marketing"];
  }

  //Will take receipt image. Will add after local storage to test without xcode
  onTakePhoto(){

  }

}
