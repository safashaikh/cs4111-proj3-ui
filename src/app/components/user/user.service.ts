import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Address, User } from './user';
import { Observable } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class UserService {
  users: User[] = [];
  userUrl: string;

  constructor(private http: HttpClient) {
    this.userUrl = "";
  }

  getUserServiceUrl(id: string): string {
    const theUrl = window.location.href;
    let result: string;

    if ((theUrl.includes('127.0.0.1')) || (theUrl.includes('localhost')))
    {
      result = 'http://127.0.0.1:5000/users/'+id;
    } else {
      result = 'http://useraddressflask-env.eba-2thfz2gi.us-east-1.elasticbeanstalk.com/users/'+id;
    }
    if (id!=''){
      result = 'http://useraddressflask-env.eba-2thfz2gi.us-east-1.elasticbeanstalk.com/users/'+id;
    }else{
      result = 'http://useraddressflask-env.eba-2thfz2gi.us-east-1.elasticbeanstalk.com/users';
    }
    return result;
  }
  

  getUser(userID: string): Observable<User[]> {
    let theUrl: string;

    theUrl = this.getUserServiceUrl(userID);
    return this.http.get<User[]>(theUrl);
  }

  getUserAddress(userID: string): Observable<Address> {
    let theUrl: string;

    theUrl = this.getUserServiceUrl(userID) + '/address';
    return this.http.get<Address>(theUrl);
  }

  getUsers() : Observable<User[]> {
    let theUrl: string;

    theUrl = this.getUserServiceUrl('');
    return this.http.get<User[]>(theUrl);
  }
}
