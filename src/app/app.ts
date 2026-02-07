import { Component } from '@angular/core';
import { SourcingListComponent } from './components/sourcing-list.component'; 

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [SourcingListComponent], // Removed RouterOutlet to fix warning
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class AppComponent {
  title = 'sourcing-frontend';
}