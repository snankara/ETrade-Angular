import { LocaleStorageService } from './../../services/locale-storage.service';
import { AuthService } from './../../services/auth.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup

  constructor(private authService:AuthService, private localStorageService: LocaleStorageService, 
              private formBuilder: FormBuilder, private router: Router) { }

  ngOnInit(): void {
    this.createRegisterForm();
  }

  createRegisterForm(){
    this.registerForm = this.formBuilder.group({
      firstName : ["", Validators.required],
      lastName : ["", Validators.required],
      email: ["", Validators.compose([Validators.email, Validators.required])],
      password: ["", Validators.compose([Validators.required, Validators.minLength(5)])]
    })
  }

  register(){
    if (this.registerForm.valid) {
      let registerModel = Object.assign({}, this.registerForm.value)
      this.authService.register(registerModel).subscribe(response => {
        this.localStorageService.set(response.data,"token")
        this.router.navigateByUrl("products");
      });
    }
  }
}
