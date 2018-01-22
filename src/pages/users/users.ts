import { Component, ViewChild } from '@angular/core';
import { Navbar, ViewController } from 'ionic-angular';


@Component({
  selector: 'page-users',
  templateUrl: 'users.html',
})
export class UsersPage {
  @ViewChild(Navbar) navBar: Navbar; //First way to do it!

  constructor(private viewCtrl: ViewController){

  }
  ionViewWillEnter(){
  //  this.navBar.setBackButtonText('Home');//First way to do it!
  // this.navBar.hideBackButton = false; // Way to hide the back button with true
   this.viewCtrl.setBackButtonText('Home'); // Second way to do it. Keep in mind the imports
    // this.viewCtrl.showBackButton(false);
  }

}
