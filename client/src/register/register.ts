import { Component, input, signal } from '@angular/core';
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

  register(){
    console.log(this.creds);
  }

  cancel(){
    console.log("CANCELLED");
  }

}
