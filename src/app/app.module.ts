import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { ExponentPipe } from './exponent.pipe';
import { ProductFilterPipe } from './product.filter.pipe';
import { ProductsComponent } from './products/products.component';

import { ProductService } from './product.service';
import { ErrorComponent } from './error/error.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ReviewFormComponent } from './review-form/review-form.component';
import { ContactFormComponent } from './contact-form/contact-form.component';

@NgModule({
    declarations: [
        AppComponent,
        ExponentPipe,
        ProductFilterPipe,
        ProductsComponent,
        ErrorComponent,
        DashboardComponent,
        ProductDetailComponent,
        ReviewFormComponent,
        ContactFormComponent
    ], // to declare components, pipes
    providers: [
        ProductService
    ], // used for dependency injection
    imports: [
        BrowserModule,
        FormsModule,
        HttpClientModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        ReactiveFormsModule
    ], // to import dependent modules
    bootstrap: [AppComponent] // starting point
})
export class AppModule {

}
