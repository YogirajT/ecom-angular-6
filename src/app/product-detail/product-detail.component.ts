import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { ProductModel } from '../product.model';

import { ActivatedRoute } from '@angular/router';
import { trigger, state, style, transition, animate } from '@angular/animations';

const zoom = trigger('zoom', [
    state('active',
      style({
        transform: 'scale(1.5)'
      })
    ),
    state('inactive',
      style({
        transform: 'scale(1)'
      })
    ),
    transition('active => inactive', animate('1s ease-out')),
    transition('inactive => active', animate('1s ease-in'))
  ]);

const enterExit = trigger('enterExit', [
  transition(':enter', animate('1s ease-in', style({
    opacity: '1'
  }))),
  transition(':leave', animate('1s ease-out', style({
    opacity: '0'
  }))),
]);

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css'],
  animations: [zoom, enterExit]
})
export class ProductDetailComponent implements OnInit {
  product: ProductModel;
  state = 'inactive';
  estate = false;

  constructor(private productService: ProductService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.getProduct();
  }

  getProduct() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.productService.getProductById(id).subscribe((product) => {
      this.product = product;
    });
  }

  toggleState() {
    this.state = this.state === 'active' ? 'inactive' : 'active';
  }

  toggleEState() {
    this.estate = this.estate === false ? true : false;
  }

}
