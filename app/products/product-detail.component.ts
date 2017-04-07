import { ProductService } from './product.service';
import { IProduct } from "./IProduct";
import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";

@Component({
    moduleId: module.id,
    templateUrl: 'product-detail.component.html'
})
export class ProductDetailComponent implements OnInit
{
        errorMessage: any;

    pageTitle:string = "product detail";
    product: IProduct;

    constructor(private _route: ActivatedRoute, private _router: Router, private _productService: ProductService){
    }

            ngOnInit(): void {
            let id = +this._route.snapshot.params['id'];
            this.getProduct(id);
        }

        onBack():void{
            this._router.navigate(['/products']);
        }
        

           getProduct(id: number) {
            this._productService.getProduct(id).subscribe(
            product => this.product = product,
            error => this.errorMessage = <any>error);
    }

}