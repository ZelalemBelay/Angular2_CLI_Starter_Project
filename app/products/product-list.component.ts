import { Component, OnInit } from '@angular/core';
import { IProduct } from './IProduct';
import { ProductService } from "./product.service";

@Component({
    selector: 'pm-products',
    moduleId: module.id,
    templateUrl: 'product-list.component.html',
    styleUrls: ['product-list.component.css'] 
})
export class ProductListComponent implements OnInit 
{
        ngOnInit(): void {
           this.productService.getProducts()
           .subscribe(prs => this.products = prs, 
                      error => this.errorMessage = <any>error);
        }

   errorMessage: string;
      products: IProduct[];
  productService : ProductService;

  constructor (public ps : ProductService){
      this.productService = ps;
  }
        

  pageTitle:string = "Product List";
    imageWidth: number = 50;
    imageMargin: number = 2;
 

showImage:boolean=true;

toggleImage(): void{
    this.showImage=!this.showImage;
}

listFilter: string= '';
ratingDisplay: string='';
  onRatingClicked(message: string): void{
      this.ratingDisplay= message
  }
}