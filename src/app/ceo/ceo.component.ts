import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-ceo',
  templateUrl: './ceo.component.html',
  styleUrls: ['./ceo.component.css']
})
export class CeoComponent {
  @Input() ceoName = "Steve";
  }
