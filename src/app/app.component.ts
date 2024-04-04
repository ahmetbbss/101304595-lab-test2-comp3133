import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Labtest02'; // Adding the title property

  onFilterByYear(year: string): void {
    // Handle filtering logic here
  }
}
