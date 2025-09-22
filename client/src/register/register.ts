import { Component, input, output, signal } from '@angular/core';
import { RegisterCreds, User } from '../types/user';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-register',
  imports: [FormsModule],
  templateUrl: './register.html',
  styleUrl: './register.css'
})
export class Register {
  protected creds:RegisterCreds={} as RegisterCreds;
  membersFromHome=input.required<User[]>();
  sheltersFromHome=input.required<any>();
  cancelRegister=output<boolean>();

  register(){
    console.log(this.creds);
  }

  cancel(){
    this.cancelRegister.emit(false);
  }

}
