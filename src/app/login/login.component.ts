import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  showLogin: boolean;
  constructor() { }

  ngOnInit(): void {
  }
  toggle() { 
    this.showLogin = !this.showLogin;
  }

}
