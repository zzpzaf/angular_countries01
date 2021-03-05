import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Country } from '../dataclasses/country';

@Component({
  selector: 'app-country-crud',
  templateUrl: './country-crud.component.html',
  styleUrls: ['./country-crud.component.css']
})
export class CountryCrudComponent implements OnInit {

 //ccname: string = "";
 // @Input() nc_name: string ="";
  @Input() nc_country: Country = new Country;
  
  @Output() emitAddCountry: EventEmitter<Country> =   new EventEmitter<Country>();
  @Output() emitUpdCountry: EventEmitter<Country> =   new EventEmitter<Country>();
  @Output() emitDelCountry: EventEmitter<number> =   new EventEmitter<number>();
  
  
  constructor() { }

  ngOnInit(): void {
    //this.ccname = this.nc_name;
  }


  // CRUD - Create a new Country
  addRecord(newcid: HTMLInputElement, 
            newcname: HTMLInputElement, 
            newccapital: HTMLInputElement,
            newcregion: HTMLInputElement,  
            newcsubregion: HTMLInputElement, 
            newcpopulation: HTMLInputElement,
            newcarea: HTMLInputElement,
            newcalpha2code: HTMLInputElement,
            newcalpha3code: HTMLInputElement,
            newcgdp:HTMLInputElement
            ): boolean {

    let ncountry: Country = new Country();

    ncountry.id = newcid.valueAsNumber;
    ncountry.name = newcname.value; 
    ncountry.capital = newccapital.value ;
    ncountry.region = newcregion.value;
    ncountry.subregion = newcsubregion.value;
    ncountry.population = newcpopulation.valueAsNumber;
    ncountry.area = newcarea.valueAsNumber;
    ncountry.alpha2code = newcalpha2code.value;
    ncountry.alpha3code = newcalpha3code.value;
    ncountry.gdp = newcgdp.valueAsNumber;

    

    //console.log(ncountry);
    this.emitAddCountry.emit(ncountry);

    //return ncountry;
    return false;

  }

  // CRUD - Update a Country
  updRecord(newcid: HTMLInputElement, 
            newcname:  HTMLInputElement,
            newccapital:  HTMLInputElement,
            newcregion: HTMLInputElement,  
            newcsubregion: HTMLInputElement, 
            newcpopulation: HTMLInputElement,
            newcarea: HTMLInputElement,
            newcalpha2code: HTMLInputElement,
            newcalpha3code: HTMLInputElement,
            newcgdp:HTMLInputElement
            ): boolean {

      let ucountry: Country = new Country();

      ucountry.id = newcid.valueAsNumber;
      ucountry.name = newcname.value; 
      ucountry.capital = newccapital.value ;
      ucountry.region = newcregion.value;
      ucountry.subregion = newcsubregion.value;
      ucountry.population = newcpopulation.valueAsNumber;
      ucountry.area = newcarea.valueAsNumber;
      ucountry.alpha2code = newcalpha2code.value;
      ucountry.alpha3code = newcalpha3code.value;
      ucountry.gdp = newcgdp.valueAsNumber;
  
      //console.log(ucountry);
      this.emitUpdCountry.emit(ucountry);

      //return ucountry;
      return false;


  }

  // CRUD - Delete a Country (get the id of the country to be deleted)
  delRecord(idcountry: HTMLInputElement) : boolean {


    //console.log(idcountry.valueAsNumber);  
    let n: number = idcountry.valueAsNumber;
    console.log(n);
    this.emitDelCountry.emit(n);

    //return idcountry.valueAsNumber;
    //return n;
    return false;
  }

}
