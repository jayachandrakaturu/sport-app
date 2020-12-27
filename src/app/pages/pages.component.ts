import { Component, OnInit, OnDestroy, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.scss']
})
export class PagesComponent implements OnInit {

  constructor(private renderer: Renderer2) {
    this.renderer.addClass(document.body, 'clsDashboard');
  }

  ngOnInit(): void {
  }

  ngOnDestroy() {
    this.renderer.removeClass(document.body, 'clsDashboard');
  }

}
