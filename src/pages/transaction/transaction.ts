import { Component } from '@angular/core';
import {NavController, NavParams } from 'ionic-angular';
import { NgForm } from '@angular/forms'

@Component({
  selector: 'page-transaction',
  templateUrl: 'transaction.html',
})
export class TransactionPage {
   itemCategory: any = [];
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  
  }

  onSubmit(form: NgForm){
    console.log(form.value);
  }

  ionViewDidLoad() {
    this.itemCategory = ["Office Supplies", "Vehicle", "Gas", "Marketing"];
  }

}
