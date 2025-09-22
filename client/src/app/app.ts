import { HttpClient } from '@angular/common/http';
import { Component, inject, signal } from '@angular/core';
import { Navbar } from '../navbar/navbar';
import { RouterOutlet } from '@angular/router';
import { RouterUpgradeInitializer } from '@angular/router/upgrade';
import { AccountService } from '../services/account-service';

@Component({
  selector: 'app-root',
  imports: [Navbar,RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  private http=inject(HttpClient);
  private accountService=inject(AccountService);

  protected users=signal<any>([]);
  protected readonly title = signal('client');

  ngOnInit():void{
    this.setCurrentUser();
  }

  setCurrentUser(){
    const userString=localStorage.getItem('user');
    if(!userString) return;

    const user=JSON.parse(userString);
    this.accountService.currentUser.set(user);
  }
}
