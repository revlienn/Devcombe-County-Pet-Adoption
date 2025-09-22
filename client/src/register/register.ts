import { Component } from '@angular/core';
import { RegisterCreds } from '../types/user';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-register',
  imports: [FormsModule],
  templateUrl: './register.html',
  styleUrl: './register.css'
})
export class Register {
  protected creds:RegisterCreds={} as RegisterCreds;

  register(){
    console.log(this.creds);
  }

  cancel(){
    console.log("CANCELLED");
  }

}
