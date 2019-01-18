import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CustomValidators } from 'ng5-validation';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  emailTesting = 'swapi@swapi.com';
  passwordTestig = 'swapitesting';
  submittingForm = false;

  constructor(private fb: FormBuilder, private router: Router) { this.baseLoginForm(); }

  ngOnInit() {}

  baseLoginForm() {
    this.loginForm = this.fb.group({
      'email': ['', [Validators.required, CustomValidators.email, CustomValidators.equal(this.emailTesting)]],
      'password': ['', [Validators.required, CustomValidators.equal(this.passwordTestig)]]
    });
  }

  submitForm() {
    this.submittingForm = true;
    localStorage.setItem('isLoggedin', 'true');
    this.router.navigate(['/home']);
  }

  // para buscar os nomes de campos com maior facilidade
  get f() {return this.loginForm.controls; }

}
