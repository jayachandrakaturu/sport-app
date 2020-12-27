import { Component, OnInit, OnDestroy, Renderer2 } from '@angular/core';

declare const $: any;

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
    $(document).ready(function () {
      setTimeout(function () {
        $(function () {
          $('[data-toggle="tooltip"]').tooltip()
        });
      }, 500);
    });
  }

  ngOnDestroy() {
    this.renderer.removeClass(document.body, 'clsDashboard');
  }

}
