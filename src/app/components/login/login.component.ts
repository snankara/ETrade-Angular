import { LocaleStorageService } from './../../services/locale-storage.service';
import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup

  constructor(private formBuilder: FormBuilder, private authService:AuthService, 
              private localStorageService: LocaleStorageService, private router: Router) { }

  ngOnInit(): void {
    this.createLoginForm();
  }

  createLoginForm(){
    this.loginForm = this.formBuilder.group({
      email: ["", Validators.compose([Validators.email, Validators.required])],
      password: ["", Validators.compose([Validators.required, Validators.minLength(5)])]
    })
  }

  login(){
    if (this.loginForm.valid) {
      let loginModel = Object.assign({}, this.loginForm.value)
      this.authService.login(loginModel).subscribe(response => {
        this.localStorageService.set(response.data, "token")
        this.router.navigateByUrl("products");
      })
    }
  }
}
