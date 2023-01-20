import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PricefeedService {

  constructor(private httpClient : HttpClient) { }

  post(url : any, payload : any){
    return this.httpClient.post(url, payload);
  }

  getAll(){
    return this.httpClient.get(environment.apiGetAllProductsUrl);
  }

  getById(id : number){
    return this.httpClient.get(environment.apiGetAllProductsUrl +'/'+ id);
  }

  put(url : any, payload : any){
    return this.httpClient.put(url,payload)
  }

  delete(url : any){
    return this.httpClient.delete(url)
    .pipe(
      catchError(this.handleError('delete'))
    );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      this.log(`${operation} failed: ${error.message}`);
  
      return of(result as T);
    };
  }
  
  private log(message: string) {
    console.log(message);
  }
}
