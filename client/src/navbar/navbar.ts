import { Component, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-navbar',
  imports: [FormsModule],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css'
})
export class Navbar {
 //private accountService=inject(AccountService);
  protected creds:any={};
  protected loggedIn=signal(false);

  login(){
    console.log("placeholder for later")
    // this.accountService.login(this.creds).subscribe({
    //   next:(res)=>{
    //     console.log(res);
    //     this.loggedIn.set(true);
    //     this.creds={};
    //   },
    //   error:(err)=>alert(`ERROR: ${err.message}`)
    // })
  }

  logout(){
    this.loggedIn.set(false);
  }
}
