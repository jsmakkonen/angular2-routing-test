import { Component } from '@angular/core';
import { Routes } from '@angular/router';

@Component({
  selector: 'my-app',
  template: `
    <div class="nav">
    <a [routerLink]="['/']">Home</a>
    <a [routerLink]="['/about']">About</a>
    </div>
    <div class="container">
    <router-outlet></router-outlet>
    </div>
  `,
})
export class AppComponent  { }
