import { ProductModel } from './product.model';
import { ResponseModel } from './response.model';
import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';
import { map, filter } from 'rxjs/operators';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { PRODUCTS } from './mock';

@Injectable()
export class ProductService {
    constructor(private http: HttpClient) {}

    getProducts(): Observable<ProductModel[]> {
        // return of(PRODUCTS);

        const options = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json'
            })
        };

        return this.http.get<ResponseModel>('/assets/products.json', options)
                .pipe(
                    map((response) => <ProductModel[]>response.data)
                );
    }

    getProductById(id: number): Observable<ProductModel> {
        /*return this.http.get('/assets/products.json')
                .pipe(
                    map((response) => {
                        const models = response.data;
                        for (const model of models) {
                            if (model.id === id) {
                                return model;
                            }
                        }
                    }),
                );*/
        return of(PRODUCTS.find(product => product.id === id));
    }
}
