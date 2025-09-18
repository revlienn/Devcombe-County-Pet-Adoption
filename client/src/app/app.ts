import { HttpClient } from '@angular/common/http';
import { Component, inject, signal } from '@angular/core';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('client');
  private http=inject(HttpClient);
  protected users=signal<any>([]);

  ngOnInit():void{
    this.http.get('https://localhost:5001/api/members').subscribe({
      next: (response) => this.users.set(response),
      error: (error) => console.log(error),
      complete: () => console.log('HTTP Request Complete'),
    });
  }
}
