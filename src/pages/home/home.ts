import { Component, ViewChild } from '@angular/core';
import { ChangeDetectorRef } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { RegisterPage } from '../register/register';
import { Http } from '@angular/http';
import { ProfilePage } from '../profile/profile';
import { TeacherProfilePage } from '../teacher-profile/teacher-profile';
// import { HomePage } from './home';
import 'rxjs/add/operator/map';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})


export class HomePage {
    posts: any;
    items;
    log: any = 'Vacio';
    

    constructor(public navCtrl: NavController, public http: Http, public navParams: NavParams, private cdRef:ChangeDetectorRef) {
        this.initializeItems();
        this.log = navParams.get('param1');
         if(this.log === undefined){
           this.log = 'Vacio';
         }
    }



    // constructor() {
    //   this.initializeItems();
    // }

    initializeItems() {
      this.items = [
        'Amsterdam',
        'Bogota',
        'Buenos Aires',
        'Cairo',
        'Dhaka',
        'Edinburgh',
        'Geneva'
      ];
    }

    getItems(ev: any) {
      // Reset items back to all of the items
      this.initializeItems();

      // set val to the value of the ev target
      let val = ev.target.value;

      // if the value is an empty string don't filter the items
      if (val && val.trim() != '') {
        this.items = this.items.filter((item) => {
          return (item.toLowerCase().indexOf(val.toLowerCase()) > -1);
        })
      }
    }



    gotoTeacherProfile(){
      this.navCtrl.push(TeacherProfilePage);
    }

    gotoProfile(){
      this.navCtrl.push(ProfilePage);
    } 
  
    contactMaestro(value: any): void{
      // value = 'Maestro';
      this.log = 'Maestro';
      this.cdRef.detectChanges();
    }

    contactAlumno(value: any): void{
      // value = 'Maestro';
      this.log = 'Alumno';
      this.cdRef.detectChanges();
    }

    contactGrupo(value: any): void{
      // value = 'Maestro';
      this.log = 'Grupo';
      this.cdRef.detectChanges();
    }

    gotoHome(value: any): void{
      // value = 'Maestro';
      this.log = 'Vacio';
      this.cdRef.detectChanges();
    }
   // constructor(public navCtrl: NavController, public http: Http) {
 
   //  this.http.get('http://localhost:8080/posts/').map(res => res.json()).subscribe(data => {
   //      this.posts = data.data.children;
   //      // console.log(posts);
   //  });
  }

  // signIn(){
  // 	this.navCtrl.push(LoginPage);
  // }

  // register(){
  // 	this.navCtrl.push(RegisterPage);
  // }


