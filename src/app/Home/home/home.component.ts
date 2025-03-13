import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  standalone:false
})
export class HomeComponent  implements OnInit {

  slideOpts = {
    initialSlide: 0,
    speed: 400,
    autoplay: {
      delay: 3000,
    },
    loop: true
  };

  featuredImages = [
    {
      src: './assets/brain-scan.jpeg',
      alt: 'AI brain scan interface with diagnostic tools'
    },
    {
      src: './assets/doctor.jpeg',
      alt: 'AI healthcare professional with holographic interface'
    },
    {
      src: './assets/brainwave.jpeg',
      alt: 'Brain with neural activity visualization'
    },
    {
      src: './assets/sleep.jpeg',
      alt: 'Sleep monitoring with smartphone app'
    }
  ];

  constructor(private navCtrl: NavController) {}

  ngOnInit() {}

  signIn() {
    this.navCtrl.navigateForward('/login');
  }

  signUp() {
    this.navCtrl.navigateForward('/register');
  }

}
