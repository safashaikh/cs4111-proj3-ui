import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-userlogin',
  templateUrl: './userlogin.component.html',
  styleUrls: ['./userlogin.component.scss']
})
export class UserloginComponent implements OnInit {
  loginURL: string = "http://localhost:5000/userlogin/google";
  constructor() { }

  ngOnInit(): void {
  }

}
