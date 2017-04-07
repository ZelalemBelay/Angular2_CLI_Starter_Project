
import { Injectable } from "@angular/core";
import { IProduct } from "./IProduct";
import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';

@Injectable()
export class ProductService
{
   private productUrl:string="api/products/products.json";    
     
   constructor(private _http: Http){}

    getProducts(): Observable<IProduct[]>
    {
          let headers:Headers = new Headers();
          headers.append("Accept", "application/json");
          headers.append("X-DreamFactory-Api-Key", "36fda24fe5588fa4285ac6c6c2fdfbdb6b6bc9834699774c9bf777f706d05a88");
          headers.append("X-DreamFactory-Session-Token", "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOjEsInVzZXJfaWQiOjEsImVtYWlsIjoiWmVsYWxlbS5CZWxheUBhMi1nLmNvbSIsImZvcmV2ZXIiOmZhbHNlLCJpc3MiOiJodHRwOlwvXC9sb2NhbGhvc3RcL2FwaVwvdjJcL3N5c3RlbVwvYWRtaW5cL3Nlc3Npb24iLCJpYXQiOjE0OTE0ODQ1NTMsImV4cCI6MTQ5MTQ4ODE1MywibmJmIjoxNDkxNDg0NTUzLCJqdGkiOiJkNTdkODdhZThiZGNiM2E1MDYxNWU3MWUxNmEyNGRmNyJ9.3VCGKn_8pckB7SJyKytj3EWEGwfNoQLmx2able0UevE");
          headers.append("Authorization", "Basic emVsYWxlbS5iZWxheUBhMi1nLmNvbTp6b2xhZ2V0bmV0");

          this._http.get("http://localhost/api/v2/mysql/_table/test", headers)
          .do(d=> console.log(JSON.stringify(d)));    

          return this._http.get(this.productUrl)
          .map((response: Response)=> <IProduct[]> response.json())
        //   .do(data => console.log('All: '+JSON.stringify(data)))
          .catch(this.handleError);
    }

    getProduct(id: number): Observable<IProduct> {
        return this.getProducts()
            .map((products: IProduct[]) => products.find(p => p.productId === id));
    }

    private handleError(error: Response){
        console.log(error);
        return Observable.throw(error.json().error || 'Server error');
    }
}