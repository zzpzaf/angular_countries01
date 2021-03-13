import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Country } from '../dataclasses/country';
import { Restphpapi1Service } from '../restphpapi1.service';
//import { HttpClient, HttpResponse } from '@angular/common/http';
//import { Observable } from 'rxjs';

@Component({
  selector: 'app-remoteapicountries1',
  templateUrl: './remoteapicountries1.component.html',
  styleUrls: ['./remoteapicountries1.component.css','../country-crud/country-crud.component.css']
})
export class Remoteapicountries1Component implements OnInit {
  @Output() emitRcountries: EventEmitter<Country[]> =   new EventEmitter<Country[]>();
  @Output() emitLocalCountriess: EventEmitter<boolean> =   new EventEmitter<boolean>();

  Rcountry: Country = new Country();
  Rcountries: Country[] = [];

  headers: any;

  constructor(private myphpapi: Restphpapi1Service) { }

  ngOnInit(): void {
  
    // this.myphpapi.getCountries()
    // .subscribe(data => {
    //   const dd: any = data;

    //   for (const d of (dd.Countries as any)) {
    //     this.Rcountries.push({
    //       id: d.qid,
    //       name: d.qname,
    //       capital: d.qcapital,
    //       region: d.qregion,
    //       subregion: d.qsubregion,
    //       population: d.qpopulation,
    //       area: d.qarea,
    //       code1: d.qalpha2code,
    //       code2: d.qalpha3code,
    //       gdp: d.qgdb
    //     });
    //   }

    //   console.log(this.Rcountries);

    // });

  }

  getRemoteData(): void {

    console.log("------oBSERVABLES aGAIN !!!------");

    this.myphpapi.getCountries()
    .subscribe(resp => {
      
      //console.log(resp);

      const keys = resp.headers.keys();

      this.headers = keys.map(key =>
      `${key}: ${resp.headers.get(key)}`);
      
      const rbody: any = resp.body;
      //console.log(rbody); 
      this.Rcountries = [];  
      for (const data of rbody.Countries as Country[]) {
        this.Rcountries.push(data);
      }

      //console.log(this.Rcountries);
      this.emitRcountries.emit(this.Rcountries);

    });

  }



  getLocalData(){
    let getlocal: boolean = true;
    this.emitLocalCountriess.emit(getlocal);
  }


}
