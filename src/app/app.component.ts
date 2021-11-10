import { Component, Injectable } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'electronics-hub';
}

@Injectable()
export class Globals {
  hosturl: string =  'http://127.0.0.1:8111';
  // hosturl: string = 'http://35.237.138.209:8111'; // Use this during build and deploy  time
}