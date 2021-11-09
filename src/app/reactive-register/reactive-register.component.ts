import { Component, OnInit } from '@angular/core';
import { EmailValidator, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-register',
  templateUrl: './reactive-register.component.html',
  styleUrls: ['./reactive-register.component.css']
})
export class ReactiveRegisterComponent implements OnInit {
  loginForm: FormGroup;
  constructor() {
    this.loginForm = new FormGroup({
    name: new FormControl(''),
    email: new FormControl('',[
      Validators.required,
      Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]),
    password: new FormControl(''),
    privacyterms: new FormControl(false,Validators.requiredTrue)
    });
  }
    
  login() {
    const name = this.loginForm.value.name
    const email = this.loginForm.value.email
    const password = this.loginForm.value.password
    alert('name: ' + name + ' email: ' + email + ' password: ' + password)
  }
    

  ngOnInit() {
  }
}
