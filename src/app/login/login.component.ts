import { Component, OnInit, OnDestroy, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  showLogin: boolean;
  constructor(private renderer: Renderer2) {
    this.renderer.addClass(document.body, 'clsAdminPage');
  }


  ngOnInit(): void {
  }

  toggle() {
    this.showLogin = !this.showLogin;
  }

  ngOnDestroy() {
    this.renderer.removeClass(document.body, 'clsAdminPage');
  }

}
