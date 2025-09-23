import { Component, inject } from '@angular/core';
import { Navbar } from '../navbar/navbar';
import { Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [Navbar,RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected router=inject(Router);
}
