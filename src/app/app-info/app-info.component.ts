import { DatePipe } from '@angular/common';
import { Component, OnInit, ViewChild } from '@angular/core';
import { CountriesTableComponent } from '../countries-table/countries-table.component';
import { Country } from '../dataclasses/country';


@Component({
  selector: 'app-app-info',
  templateUrl: './app-info.component.html',
  styleUrls: ['./app-info.component.css']
})
export class AppInfoComponent implements OnInit {

  @ViewChild(CountriesTableComponent, { static: true })
  ct_child!: CountriesTableComponent;
  
  ARcountry: Country = new Country();
  ARcountries: Country[] = [];

  title: string = 'This is a Countries information Application';
  info: string = '';
  date_created: Date = new Date();


  constructor(private datePipe: DatePipe) { 

  }

  ngOnInit(): void {
    this.myInfo();

  }


  myInfo() {
    //this.info = `${this.title}! Today is: ${this.datePipe.transform(this.date_created, 'EEEE, dd/MM/yyyy')}`;
    this.info = 'Wellcome! Today is: ' + this.myDateFormationStr();
    //this.info = 'Wellcome! Today is: ' + this.date_created;
  }


  myDateFormationStr() : string {
    let retstr = '';
    retstr = this.datePipe.transform(this.date_created, 'EEEE, dd/MM/yyyy')!;
    //retstr = `${this.date_created}`;
    return retstr;
  }


  UpdRemoteCountries(rcountries: Country[]) {

    //console.log(rcountries);
    //console.log("xxxxxxxxxxxx");

    //this.ARcountries = [];
    this.ARcountries = rcountries;
    //console.log(this.ARcountries);

    this.ct_child.remoteCountriesUpdated(this.ARcountries);

  }


  getLocal(b:boolean) {
    this.ct_child.getLocalCountries();
  }











}

