import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-dir',
  templateUrl: './dir.component.html',
  styleUrls: ['./dir.component.css']
})
export class DirComponent implements OnInit {
  languages = ["it","en","es"]
  @Input() currentlanguage="";
  showlang = true
  constructor() { }

  ngOnInit() {
  }

  setLanguage(language:string){
    this.currentlanguage=language
   }

   toggleShowHide(){
    this.showlang = !this.showlang;
   }
}