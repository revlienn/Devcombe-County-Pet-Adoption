import { Component, inject, OnInit, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AccountService } from '../services/account-service';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { ToastService } from '../services/toast-service';
import { themes } from '../app/theme';

@Component({
  selector: 'app-navbar',
  imports: [FormsModule,RouterLink,RouterLinkActive],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css'
})
export class Navbar implements OnInit{
  protected accountService=inject(AccountService);
  private toastService=inject(ToastService);
  private router=inject(Router);
  protected creds:any={};

  protected selectedTheme=signal<string>(localStorage.getItem('theme')||'cmyk');
  protected themes=themes;

  ngOnInit(): void {
    document.documentElement.setAttribute('data-theme', this.selectedTheme());
  }

  handleSelectTheme(theme:string){
    this.selectedTheme.set(theme);
    localStorage.setItem('theme',theme);

    document.documentElement.setAttribute('data-theme',theme);
    
    const el = document.activeElement as HTMLDivElement;
    if (el) el.blur()
  }

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
