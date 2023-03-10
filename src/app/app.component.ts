import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  menuItems: string[] = ['New User', 'Refresh'];
  title = 'nabar-with-events-emitter';
}
