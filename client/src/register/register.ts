import { Component, inject, input, output, signal } from '@angular/core';
import { RegisterCreds, User } from '../types/user';
import { FormsModule } from '@angular/forms';
import { AccountService } from '../services/account-service';

@Component({
  selector: 'app-register',
  imports: [FormsModule],
  templateUrl: './register.html',
  styleUrl: './register.css'
})
export class Register {
  private accountService=inject(AccountService);

  protected creds:RegisterCreds={} as RegisterCreds;
  cancelRegister=output<boolean>();

  register(){
    this.accountService.register(this.creds).subscribe({
      next:(res)=>this.cancel(),
      error:(err)=>console.log(err)
    })
  }

  cancel(){
    this.cancelRegister.emit(false);
  }

}
