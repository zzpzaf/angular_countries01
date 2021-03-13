import { Injectable } from '@angular/core';
<<<<<<< HEAD
//import { catchError } from 'rxjs/internal/operators';
import { HttpClient, HttpResponse } from '@angular/common/http';
//import { HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
//import { map } from 'rxjs/operators';
=======
import { catchError } from 'rxjs/internal/operators';
import { HttpClient, HttpResponse, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map } from 'rxjs/operators';
>>>>>>> 575125da4dcf6bbdd488af33d09e21d92d33165b
import { Country } from './dataclasses/country';


const URLendpoint = 'https://www.phpapi1.com/db/testcCuntriesAPI1.php';

@Injectable({
  providedIn: 'root'
})
export class Restphpapi1Service {


  Rcountry: Country = new Country();
  Rcountries: Country[] = [];


  constructor(private httpserv: HttpClient) {
   }

   getCountries(): Observable<HttpResponse<Country[]>> {

    //return this.httpserv.get(URLendpoint);
    
    let respObservable: Observable<HttpResponse<Country[]>> = new Observable<HttpResponse<Country[]>>();

    respObservable = this.httpserv.get<Country[]>(
      URLendpoint, { 
        observe: 'response' 
      }
    );
    
    return respObservable;

  }



}
