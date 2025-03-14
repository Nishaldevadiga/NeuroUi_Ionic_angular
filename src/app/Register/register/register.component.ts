import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  standalone:false
})
export class RegisterComponent implements OnInit {
  public registerForm!: FormGroup;
  public countryCode: string = '+1';
  public countryFlag: string = 'US';
  public selectedGender: string | null = null;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router
  ) { }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.registerForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      mobileNumber: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]],
      email: ['', Validators.email],
      gender: ['', Validators.required],
      dateOfBirth: ['']
    });
  }

  selectCountry() {
    // Open country selector
    console.log('Country selector would open here');
  }

  selectGender(gender: string) {
    this.selectedGender = gender;
    this.registerForm.patchValue({ gender: gender });
  }

  goBack() {
    // Navigate back or close the registration flow
    this.router.navigate(['/']);
  }

  onSubmit() {
    if (this.registerForm?.valid) {
      const userData = {
        firstName: this.registerForm.get('firstName')?.value,
        lastName: this.registerForm.get('lastName')?.value,
        mobileNumber: this.countryCode + this.registerForm.get('mobileNumber')?.value,
        email: this.registerForm.get('email')?.value,
        gender: this.registerForm.get('gender')?.value,
        dateOfBirth: this.registerForm.get('dateOfBirth')?.value
      };
      
      console.log('Registration data:', userData);
      // Implement registration logic here
      this.router.navigate(['/verification']);
    } else {
      // Mark all fields as touched to show validation errors
      Object.keys(this.registerForm.controls).forEach(key => {
        const control = this.registerForm.get(key);
        control?.markAsTouched();
      });
    }
  }
}