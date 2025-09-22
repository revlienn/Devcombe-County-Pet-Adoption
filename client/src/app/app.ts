import { HttpClient } from '@angular/common/http';
import { Component, inject, signal } from '@angular/core';
import { Navbar } from '../navbar/navbar';
import { RouterOutlet } from '@angular/router';
import { AccountService } from '../services/account-service';
import { lastValueFrom } from 'rxjs';
import { Home } from '../home/home';

@Component({
  selector: 'app-root',
  imports: [Navbar,RouterOutlet,Home],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  private http=inject(HttpClient);
  private accountService=inject(AccountService);

  protected users=signal<any>([]);
  protected readonly title = signal('client');


  async ngOnInit(){
    this.setCurrentUser();
    this.users.set(await this.getMembers());
  }

  setCurrentUser(){
    const userString=localStorage.getItem('user');
    if(!userString) return;

    const user=JSON.parse(userString);
    this.accountService.currentUser.set(user);
  }

  async getMembers(){
    try {
      return lastValueFrom(this.http.get('https://localhost:5001/api/members'));
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
}
