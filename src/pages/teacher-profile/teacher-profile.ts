import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
/**
 * Generated class for the TeacherProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-teacher-profile',
  templateUrl: 'teacher-profile.html',
})
export class TeacherProfilePage {

	
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TeacherProfilePage');
  }

  gotoChat(){
  	this.navCtrl.push(HomePage, {
    param1: 'Maestro'
	});
  	//this.navCtrl.push(HomePage);
  }

}
