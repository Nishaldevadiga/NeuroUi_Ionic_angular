import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController, IonicModule, ToastController } from '@ionic/angular';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  standalone: false
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  loginMethod: 'mobile' | 'email' = 'mobile';
  countryCode = '+1';
  countryFlag = 'US';
  countries = [
    { code: '+1', flag: 'US' },
    { code: '+91', flag: 'india' },
    { code: '+44', flag: 'gb' }
  ];

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private alertController: AlertController,
    private toastController: ToastController
  ) {}

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      mobileNumber: ['', [Validators.required, Validators.pattern(/^\d{10}$/)]],
      email: ['', [Validators.required, Validators.email]]
    });
  }

  async selectCountry(): Promise<void> {
    const alert = await this.alertController.create({
      header: 'Select Country',
      inputs: this.countries.map(c => ({
        type: 'radio',
        label: `${c.flag} ${c.code}`,
        value: c,
        checked: c.code === this.countryCode
      })),
      buttons: [
        { text: 'Cancel', role: 'cancel' },
        {
          text: 'OK',
          handler: (data) => {
            if (data) {
              this.countryCode = data.code;
              this.countryFlag = data.flag;
            }
          }
        }
      ]
    });
    await alert.present();
  }

  goBack(): void {
    this.router.navigate(['/']);
  }

  onSubmit(): void {
    if (this.loginForm.valid) {
      const credentials = this.loginMethod === 'mobile'
        ? `${this.countryCode}${this.loginForm.value.mobileNumber}`
        : this.loginForm.value.email;
      
      console.log('Login credentials:', credentials);
      this.router.navigate(['/dashboard']);
    }
  }

  async navigateToDashboard() {
    const toast = await this.toastController.create({
      message: 'Logged in Successfully!',
      duration: 1000,  // 1 seconds
      position: 'top',
      color: 'success',
      icon: 'checkmark-circle',
      cssClass: 'success-toast'
    });
  
    await toast.present();
    
    // Wait for toast to dismiss before navigating
    await toast.onDidDismiss();
    
    this.router.navigate(['/dashboard']);
  }
}