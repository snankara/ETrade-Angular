import { LocaleStorageService } from './locale-storage.service';
import { RegisterModel } from './../models/registerModel';
import { TokenModel } from './../models/tokenModel';
import { ItemResponseModel } from './../models/itemResponseModel';
import { LoginModel } from './../models/loginModel';
import { environment } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  controllerUrl: string = `${environment.apiUrl}/auth`
  
  constructor(private httpClient: HttpClient, private localStorageService: LocaleStorageService) { }

  login(loginModel: LoginModel){
    return this.httpClient.post<ItemResponseModel<TokenModel>>(`${this.controllerUrl}/login`, loginModel);
  }

  register(registerModel: RegisterModel){
    return this.httpClient.post<ItemResponseModel<TokenModel>>(`${this.controllerUrl}/register`, registerModel);
  }

  isAuthenticated() {
    return this.localStorageService.get("token") ? true : false
  }

  signOut(){
    this.localStorageService.clear();
  }
}
