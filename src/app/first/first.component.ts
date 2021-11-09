import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent {
  companyname = "Agos Spa";

  changeCompanyName(){
   this.companyname="Click Binding works" 
  }
}