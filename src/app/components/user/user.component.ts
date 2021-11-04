import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Address, User } from './user';
import { UserService } from './user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  currUser: User;
  userID: string;
  userAddr: Address;
  userService: UserService;
  
  allUsers = true;
  constructor(userService: UserService, private route: ActivatedRoute) {
    this.userService = userService;
    this.currUser = new User(0,"ex","ex","ex", "ex",0);
    this.userID = '0';
    this.userAddr = new Address(0,'','','','','','');
   }

  ngOnInit(): void {
    this.userID = this.route.snapshot.params['userID'];
    this.userService.getUser(this.userID)
    .subscribe( data => this.currUser = data[0]);
  }

  // Include for all users page
  /*onLookup(): void {
    if (this.artistName.length > 5) {
      this.imdbService.getArtists(this.artistName)
        .subscribe((data) => this.setArtistInfo(data));
    }
  }*/

}
