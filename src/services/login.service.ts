import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { throwError } from 'rxjs/index';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  login(credentials) {
    console.log('inside service');
    this.http.post('auth/login', credentials).subscribe(data => {
      console.log('response came');
        console.log(data);
    }) 
  }
}
