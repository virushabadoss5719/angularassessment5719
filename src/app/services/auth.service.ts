import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { User } from '../models/user';
import { Router } from '@angular/router';

@Injectable({ providedIn: 'root' })
export class AuthService {
    private currentUserSubject: BehaviorSubject<any>;
    public currentUser: Observable<User>;
    user: object;
    constructor(
        private router: Router
    ) {
        this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
        this.currentUser = this.currentUserSubject.asObservable();
    }

    public get currentUserValue(): User {
        return this.currentUserSubject.value;
    }

    login(credentials) {
        if (credentials.email == 'admin@123.com' && credentials.password == '12345') {
            this.user = { name: 'admin', email: 'admin@123' };
            localStorage.setItem('currentUser', JSON.stringify(this.user));
            this.currentUserSubject.next(this.user);
            return true;
        }
        return false;
    }

    logout() {
        localStorage.removeItem('currentUser');
        this.currentUserSubject.next(null);
        this.router.navigate(['/']);
    }
}
