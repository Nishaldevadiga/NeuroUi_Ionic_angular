// home.component.ts
import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  standalone: false
})
export class HomeComponent implements OnInit {

  mainImage = {
    src: './assets/brainwave.jpeg', // Update with your image path
  };

  constructor(private navCtrl: NavController) {}

  ngOnInit() {}

  signIn() {
    this.navCtrl.navigateForward('/login');
  }

  signUp() {
    this.navCtrl.navigateForward('/register');
  }
}