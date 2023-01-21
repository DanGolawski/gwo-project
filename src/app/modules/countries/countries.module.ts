import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {DynamicDialogModule} from 'primeng/dynamicdialog';
import { CountriesRoutingModule } from './countries-routing.module';
import { CountriesComponent } from './countries.component';
import { CountryDetailsComponent } from './country-details/country-details.component';

@NgModule({
  declarations: [
    CountriesComponent,
    CountryDetailsComponent,
  ],
  imports: [
    CommonModule,
    CountriesRoutingModule,
    DynamicDialogModule
  ],
  entryComponents: [CountryDetailsComponent]
})
export class CountriesModule { }
