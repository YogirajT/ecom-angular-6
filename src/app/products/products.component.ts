import { Component, OnInit } from '@angular/core';
import { ProductModel } from '../product.model';
import { PRODUCTS } from '../mock';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  date = new Date();

  products: ProductModel[];

  constructor(private productService: ProductService) {}

  ngOnInit() {
    this.productService.getProducts().subscribe((response) =>  {
      this.products = response;
    });
  }

  totalInStock() {
      let sum = 0;

      if (Array.isArray(this.products)) {
        for (const product of this.products) {
            sum += product.inStock;
        }
      }

      return sum;
  }

  upQuantity(product) {
    if (product.quantity < product.inStock) {
      product.quantity++;
    }
  }

  downQuantity(event, product) {
    console.log(event.target.textContent);
    console.log(event.target.innerHTML);
    console.log(event.target.attributes.id.nodeValue);
    console.log(event.target.className);
    if (product.quantity > 0) {
      product.quantity--;
    }
  }
}
