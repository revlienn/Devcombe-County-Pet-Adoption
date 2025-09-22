import { Component, Input, signal } from '@angular/core';
import { Register } from '../register/register';
import { User } from '../types/user';

@Component({
  selector: 'app-home',
  imports: [Register],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {

  protected registerMode=signal(false);
  @Input({required:true}) membersFromApp:User[]=[];
  @Input({required:true}) sheltersFromApp:any=[];

  showRegister(value:boolean){
    this.registerMode.set(value);
  }

}
