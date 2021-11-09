import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-register',
  templateUrl: './template-register.component.html',
  styleUrls: ['./template-register.component.css']
})
export class TemplateRegisterComponent implements OnInit {
  user = {
    name: '',
    email: '',
    password: ''
    }
    login() {
      alert('name: ' + this.user.name + ' email: ' + this.user.email + ' password: ' + this.user.password)
    }
  constructor() { }

  ngOnInit() {
  }

}