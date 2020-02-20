import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
@Injectable({ providedIn: 'root' })
export class ApiService {
    constructor(private http: HttpClient) { }

    post(url: string, data: any) {
        return this.http.post(url, data).pipe(map(response => {
            return response;
        }));
    }

    get(url: string) {
        return this.http.get(url).pipe(map(res => {
            return res;
        }));
    }
}
