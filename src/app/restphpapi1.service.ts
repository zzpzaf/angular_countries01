import { Injectable } from '@angular/core';
import { catchError } from 'rxjs/internal/operators';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map } from 'rxjs/operators';

const URLendpoint = 'https://www.phpapi1.com/db/testcCuntriesAPI1.php';

@Injectable({
  providedIn: 'root'
})
export class Restphpapi1Service {

  constructor(private httpserv: HttpClient) {
   }

   getCountries() {

    return this.httpserv.get(URLendpoint);

  }

}
