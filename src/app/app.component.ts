import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    template: `<h1>{{title}}</h1>
        <p class="price">Exponent: {{ 4 | exponent }}</p>
        <nav class="navbar navbar-expand-sm navbar-dark bg-dark">
            <ul class="navbar-nav">
                <li class="nav-item" routerLinkActive="active">
                    <a class="nav-link" routerLink="/dashboard">Dashboard</a>
                </li>
                <li class="nav-item" routerLinkActive="active">
                    <a class="nav-link" routerLink="/products">Products</a>
                </li>
                <li class="nav-item" routerLinkActive="active">
                    <a class="nav-link" routerLink="/contact">Contact Us</a>
                </li>
                <li class="nav-item" routerLinkActive="active">
                    <a class="nav-link" routerLink="/error">Error</a>
                </li>
            </ul>
        </nav>
        <router-outlet></router-outlet>
    `
})
export class AppComponent {
    title = 'Pranit\'s Mobile Store';
}
