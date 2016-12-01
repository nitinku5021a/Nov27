import { Component } from '@angular/core';
import { Contact } from './contact';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  
})
export class AppComponent {
  contacts:Contact[];
  constructor(){
    this.contacts = [
      new Contact('Nitin', 'Kumar', 'Bangalore', 9945218815, 'nitin.iit@gmail.com'),
      new Contact('Suchitra', 'Manjunatha', 'Bangalore', 9731438414, 'ca.suchitra@gmail.com'),
      new Contact('Chaitra', 'Avabruth', 'Bangalore', 9731435414, 'ca.hitra@gmail.com')
  ];

  }


}
