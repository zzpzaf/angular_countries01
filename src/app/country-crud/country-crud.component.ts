
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Country } from '../dataclasses/country';
import { ViewChild } from '@angular/core';

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
 
  @ViewChild('newcid') i_id: any; // accessing the reference element
  @ViewChild('newcname') i_name: any;
  @ViewChild('newccapital') i_capital: any;
  @ViewChild('newcregion') i_region: any;
  @ViewChild('newcsubregion') i_subregion: any;
  @ViewChild('newcpopulation') i_population: any;
  @ViewChild('newcarea') i_aerea: any;
  @ViewChild('newcalpha2code') i_alpha2code: any;
  @ViewChild('newcalpha3code') i_alpha3code: any;
  @ViewChild('newcgdp') i_gdp: any;


  
  constructor() { }

  ngOnInit(): void {
    //this.ccname = this.nc_name;
  }


  ngOnChanges(): void {

 /*    
    We got a situation where initial values of form input fields can not be displayed 
    after we have cleared them in clsForm(). This issue is quite strange and affects only
    values that are repidetely the same - not all fields with different values
    Using ViewChilde (or ViewChildren) with
    template variables (#...) solved the issue.
    We can start referring to a ViewChild property (variable) after the template/view 
    has been initialized and and rendered. 
    Normally, we can use them inside the ngAfterViewInit life-cycle Hook. 
    However, this works just once. But we want to update the values each time the view 
    is updated with data received e.g. from its parent component.
    So, we can use them here, inside the ngOnChanges() hook, upon we check them are true, 
    i.e. they are not undefined. 
 */
    if (this.i_region) this.i_region.nativeElement.value = this.nc_country.region ;
    if (this.i_subregion) this.i_subregion.nativeElement.value = this.nc_country.subregion ;
    
    //console.log(this.nc_country.id, this.nc_country.region)


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

  clsForm() : boolean {
    this.i_id.nativeElement.value = null;
    this.i_name.nativeElement.value = ' ';
    this.i_capital.nativeElement.value = ' ';
    this.i_region.nativeElement.value = ' ';
    this.i_subregion.nativeElement.value = ' ';
    this.i_population.nativeElement.value =null;
    this.i_aerea.nativeElement.value =null;
    this.i_alpha2code.nativeElement.value = ' ';
    this.i_alpha3code.nativeElement.value = ' ';
    this.i_gdp.nativeElement.value = null;
    return false;
  }






}
