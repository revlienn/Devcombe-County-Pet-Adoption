import { Component, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AccountService } from '../services/account-service';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { ToastService } from '../services/toast-service';

@Component({
  selector: 'app-navbar',
  imports: [FormsModule,RouterLink,RouterLinkActive],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css'
})
export class Navbar {
  protected accountService=inject(AccountService);
  private toastService=inject(ToastService);
  private router=inject(Router);
  protected creds:any={};

  login(){
    this.accountService.login(this.creds).subscribe({
      next:(res)=>{
        this.creds={};
        this.router.navigateByUrl('/pets');
        this.toastService.success("Logged in success");
      },
      error:(err)=>this.toastService.error(err.error)
    })
  }

  logout(){
    this.accountService.logout();
    this.router.navigateByUrl('/');
  }
}
