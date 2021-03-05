import { Component, OnInit } from '@angular/core';
import { Country } from '../dataclasses/country';
import {CountryServices } from '../dataclasses/countries-services';



@Component({
  selector: 'app-countries-table',
  templateUrl: './countries-table.component.html',
  styleUrls: ['./countries-table.component.css']
})
export class CountriesTableComponent implements OnInit {

my_country!: Country;
my_countries: Country[] = [];
//hover: boolean = false;

//ncountry: Country = new Country;
//ucountry: Country = new Country;
//did: number = 0;


  constructor(private myCountriesServices: CountryServices) { 

  }

  ngOnInit(): void {
  
    this.my_countries = this.myCountriesServices.getCountries();
    this.my_country = this.my_countries[0];

  }

  selectedCountry(sel_country: any) {
    this.my_country = sel_country;
  }
  

  onAddCountry(extra_country: Country): void {

    /*
    let extra_country: Country = new Country();
    
    extra_country.id = 99;
    extra_country.name = 'Bahaviola'; 
    extra_country.capital = '' ;
    extra_country.region = '';
    extra_country.subregion = '';
    extra_country.population = 1000000;
    extra_country.area = 100000;
    extra_country.alpha2code = 'XX';
    extra_country.alpha3code = 'XXX';
    extra_country.gdp = 1000; 
    */

   console.log("Add");
   console.log(extra_country);

    const fc = this.my_countries.find(e => e.id === extra_country.id);
    if (fc === undefined) { 
      this.my_countries.push(extra_country); 
    }  

  }
  
 
  //sudo kill -9 $(sudo lsof -t -i:4200)

  onUpdCountry(upd_country: Country): void {

    console.log("Upd");
    console.log(upd_country.id);

   const i = this.my_countries.findIndex(the_country => the_country.id == upd_country.id)

   if (i != -1) {

     console.log(i);

     this.my_countries[i].id =  upd_country.id; 
     this.my_countries[i].name =  upd_country.name;
     this.my_countries[i].capital =  upd_country.capital;
     this.my_countries[i].region =  upd_country.region;
     this.my_countries[i].subregion =  upd_country.subregion;
     this.my_countries[i].population =  upd_country.population;
     this.my_countries[i].area =  upd_country.area;
     this.my_countries[i].alpha2code =  upd_country.alpha2code;
     this.my_countries[i].alpha3code =  upd_country.alpha3code;
     this.my_countries[i].gdp =  upd_country.gdp;

   }

  }
  
 

  onDelCountry(n: number): void {

    //const sel_country: Country = this.my_country;
    //const i: number = this.my_countries.indexOf(sel_country);
    
    
    
    const i = this.my_countries.findIndex(the_country => the_country.id == n)

    if (i != -1) {
      console.log(i);
      this.my_countries.splice(i, 1); 
    }

  }

}
