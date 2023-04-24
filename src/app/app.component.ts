import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  menuItems: string[] = ['Home', 'Features', 'Pricing'];
  title = 'nabar-with-events-emitter';

  menus: {
    title: string;
    action: string;
    options: { title: string; action: string }[];
  }[] = [
    {
      title: 'QR Menu',
      action: 'diablillo',
      options: [
        {
          title: 'Quick Restaurant Menu',
          action: 'stuff',
        },
        {
          title: 'Free Version',
          action: 'moreStuff',
        },
        {
          title: 'Pro version',
          action: 'stuff',
        },
      ],
    },
    {
      title: 'QR Reservations',
      action: 'yeas',
      options: [
        {
          title: 'Quick Restaurant Reservations',
          action: 'awesomeStuff',
        },
        {
          title: 'Add-on Capacity',
          action: 'moreAwesomeStuff',
        },
        {
          title: 'Add-on Custom Fields',
          action: 'moresAwesomeStuff',
        },
      ],
    },
    {
      title: 'Support',
      action: 'minipocuso',
      options: [
        {
          title: 'Submit Tickets',
          action: 'awesdfomeStuff',
        },
        {
          title: 'My Tickets',
          action: 'moreAwefghgfhsomeStuff',
        },
        {
          title: 'Custom Work',
          action: 'moreAwesofghfghmeStuff',
        },
      ],
    },
    {
      title: 'My Accounts',
      action: 'alain',
      options: [],
    },
  ];
}
