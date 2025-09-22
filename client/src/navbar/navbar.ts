import { Component, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AccountService } from '../services/account-service';

@Component({
  selector: 'app-navbar',
  imports: [FormsModule],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css'
})
export class Navbar {
  protected accountService=inject(AccountService);
  protected creds:any={};

  login(){
    this.accountService.login(this.creds).subscribe({
      next:(res)=>{
        this.creds={};
      },
      error:(err)=>alert(`ERROR: ${err.message}`)
    })
  }

  logout(){
    this.accountService.logout();
  }
}
