import { Component, OnInit } from '@angular/core';
import { User } from '../user/user';
import { UserService } from '../user/user.service';
import { catchError, map, tap } from 'rxjs/operators';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  usersInfo: User[] = [];
  userService: UserService;
  constructor(userService: UserService) {
    this.userService = userService;
   }

  ngOnInit(): void {
    console.log('Initialized');
    this.userService.getUsers()
    .subscribe( data => this.usersInfo = data)
  }

}
