import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-reactive-login',
  templateUrl: './reactive-login.component.html',
  styleUrls: ['./reactive-login.component.css']
})
export class ReactiveLoginComponent implements OnInit {
  islogged: boolean
  
  loginForm: FormGroup;
  constructor(private _auth: AuthService) {
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
   this._auth.login();
  }

  logout(){
    this._auth.logout();
  }
    

  ngOnInit() {
    this._auth.getLoginState().subscribe( x  => this.islogged = x)
    
    
  }

}