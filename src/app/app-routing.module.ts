import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './products/products.component';
import { ErrorComponent } from './error/error.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ContactFormComponent } from './contact-form/contact-form.component';

const routes: Routes = [
  { path: 'products', component: ProductsComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'contact', component: ContactFormComponent },
  { path: 'products/:id', component: ProductDetailComponent },
  { path: '', redirectTo: '/products', pathMatch: 'full' },
  { path: '**', component: ErrorComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
