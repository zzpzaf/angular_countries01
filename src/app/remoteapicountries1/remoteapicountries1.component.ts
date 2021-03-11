import { Component, OnInit } from '@angular/core';
import { Restphpapi1Service } from '../restphpapi1.service';

@Component({
  selector: 'app-remoteapicountries1',
  templateUrl: './remoteapicountries1.component.html',
  styleUrls: ['./remoteapicountries1.component.css']
})
export class Remoteapicountries1Component implements OnInit {

  Rcountries: any = [];

  constructor(private myphpapi: Restphpapi1Service) { }

  ngOnInit(): void {
  
    this.myphpapi.getCountries()
    .subscribe(data => {
      const dd: any = data;

      for (const d of (dd.Countries as any)) {

        this.Rcountries.push({
          id: d.qid,
          name: d.qname,
          capital: d.qcapital,
          region: d.qregion,
          subregion: d.qsubregion,
          population: d.qpopulation,
          area: d.qarea,
          code1: d.qalpha2code,
          code2: d.qalpha3code,
          gdp: d.qgdb


        });
      }

      console.log(this.Rcountries);

    });

  }


}
