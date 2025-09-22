import { HttpClient } from '@angular/common/http';
import { Component, inject, signal } from '@angular/core';
import { Navbar } from '../navbar/navbar';
import { RouterOutlet } from '@angular/router';
import { AccountService } from '../services/account-service';
import { lastValueFrom } from 'rxjs';
import { Home } from '../home/home';
import { User } from '../types/user';

@Component({
  selector: 'app-root',
  imports: [Navbar,RouterOutlet,Home],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  private http=inject(HttpClient);
  private accountService=inject(AccountService);

  protected users=signal<User[]>([]);
  protected shelters=signal<any>([]);
  protected readonly title = signal('client');


  async ngOnInit(){
    this.setCurrentUser();
    this.users.set(await this.getMembers());
    this.shelters.set(await this.getShelters())
  }

  setCurrentUser(){
    const userString=localStorage.getItem('user');
    if(!userString) return;

    const user=JSON.parse(userString);
    this.accountService.currentUser.set(user);
  }

  async getMembers(){
    try {
      return lastValueFrom(this.http.get<User[]>('https://localhost:5001/api/members'));
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  async getShelters(){
    try {
      return lastValueFrom(this.http.get<User[]>('https://localhost:5001/api/shelters'));
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
}
