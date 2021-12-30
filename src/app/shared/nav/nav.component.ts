import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  signOut(){
    this.authService.signOut();
    this.router.navigateByUrl(""); 
    setTimeout(() => {window.location.reload()}, 100)
  }

  isAuthenticated(){
    return this.authService.isAuthenticated();
  }
}
