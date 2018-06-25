import { PipeTransform, Pipe } from '@angular/core';

@Pipe({
    name: 'filterByStock'
})
export class ProductFilterPipe implements PipeTransform {
    transform(products: any[]): any[] {
        return products; // products.filter((product) => product.inStock > 0);
    }
}
