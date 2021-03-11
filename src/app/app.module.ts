import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppInfoComponent } from './app-info/app-info.component';
import { DatePipe } from '@angular/common';

import { HttpClientModule } from '@angular/common/http';

import { CountriesTableComponent } from './countries-table/countries-table.component';
import { CountryServices } from './dataclasses/countries-services';
import { CountryCrudComponent } from './country-crud/country-crud.component';
import { Remoteapicountries1Component } from './remoteapicountries1/remoteapicountries1.component';

@NgModule({
  declarations: [
    AppComponent,
    AppInfoComponent,
    CountriesTableComponent,
    CountryCrudComponent,
    Remoteapicountries1Component
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [DatePipe, CountryServices],
  bootstrap: [AppInfoComponent]
})


export class AppModule {


}



