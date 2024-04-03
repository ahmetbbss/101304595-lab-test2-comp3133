import { Component } from '@angular/core';
import { RouterOutlet} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Your Title Here'; // Adding the title property

  onFilterByYear(year: string): void {
    // Handle filtering logic here
  }
}
