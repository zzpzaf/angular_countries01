import { Injectable } from '@angular/core';
 
import { Country } from './country';
import { COUNTRIES } from './countries-data';

 
@Injectable()
export class CountryServices {
    fCountry: Country = new Country;
 
  constructor() { }
 
  getCountries(): Country[] {
      return COUNTRIES;
  }
 
  getPopulatedCountries(): Country[] {
      return COUNTRIES.sort((a, b) => b.population - a.population).slice(0, 3);
  }
 
  getLargestCountries(): Country[] {
      return COUNTRIES.sort((a, b) => b.area - a.area).slice(0, 3);
  }
 
  getGDPCountries(): Country[] {
      return COUNTRIES.sort((a, b) => b.gdp - a.gdp).slice(0, 3);
  }
 
  getCountry(cname: string): Country {
      
      this.fCountry = COUNTRIES.find(country => country.name === cname)!;
      
      return this.fCountry;

  }
}