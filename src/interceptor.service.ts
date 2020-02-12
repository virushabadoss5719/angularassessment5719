import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpHandler, HttpEvent,HttpRequest, HttpResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';

const PRODUCT_URL = 'http://quickbuy-local.com/';
@Injectable({
  providedIn: 'root'
})
export class InterceptorService implements HttpInterceptor {

  constructor() { }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const apiReq = req.clone({ url: PRODUCT_URL + req.url });
    return next.handle(apiReq);
  }
}
