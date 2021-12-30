import { LocaleStorageService } from './../services/locale-storage.service';
import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { TokenModel } from '../models/tokenModel';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  
  private tokenModel : TokenModel
  private date : Date

  constructor(private localStorageService: LocaleStorageService, private toastrService: ToastrService, private router: Router) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    this.tokenModel = this.localStorageService.get("token");
    this.date = new Date()      
    let tokenExpiration = new Date(this.tokenModel?.expiration)
    if (tokenExpiration < this.date) {
      this.localStorageService.clear();
      this.router.navigate(["login"])
      this.toastrService.warning("Oturum Zaman Aşımına Uğradı !", "Dikkat !")
      setTimeout(() => {window.location.reload()}, 500)
      return throwError("500")  
    }
    let newRequest : HttpRequest<any>;
    newRequest = request.clone({
      headers: request.headers.set("Authorization", "Bearer " + this.tokenModel?.token)
    })
    return next.handle(request);
  }
}
