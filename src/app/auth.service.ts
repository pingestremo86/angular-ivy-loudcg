import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

@Injectable({
 providedIn: 'root',
})

export class AuthService {
 
  constructor(private client: HttpClient) { }
  private islogged$ = new BehaviorSubject(false);
   
  login(){
    this.islogged$.next(true);
  }

  logout(){
    this.islogged$.next(false);
  }

  getLoginState() {
    return this.islogged$.asObservable() ;
  }
}