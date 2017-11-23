import { Component, Input } from '@angular/core';
import { NavController } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  @Input('logged') loggedIn: boolean = false;
  constructor(public navCtrl: NavController) {

  }

  //How do you hide show the tabs on the tabs screen if the signin page has the sign in data
  //
  signIn(){
    this.loggedIn = true
  
  }

}
