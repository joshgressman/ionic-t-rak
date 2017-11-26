import { Component } from '@angular/core';
import {NavController, NavParams } from 'ionic-angular';


@Component({
  selector: 'page-transaction',
  templateUrl: 'transaction.html',
})
export class TransactionPage {
   itemCategory: any = [];
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.itemCategory = ["Office Supplies", "Vehicle", "Gas", "Marketing"];
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TransactionPage');
  }

}
