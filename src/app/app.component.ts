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
  hosturl: string = 'http://127.0.0.1:8111';
}