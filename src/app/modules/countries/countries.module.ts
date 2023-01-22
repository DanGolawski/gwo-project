import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {DialogService, DynamicDialogModule} from 'primeng/dynamicdialog';
import { CountriesRoutingModule } from './countries-routing.module';
import { CountriesComponent } from './countries.component';
import { CountryDetailsComponent } from './country-details/country-details.component';
import { PipesModule } from 'src/app/pipes/pipes.module';
import { ButtonModule } from 'primeng/button';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    CountriesComponent,
    CountryDetailsComponent,
  ],
  imports: [
    CommonModule,
    CountriesRoutingModule,
    DynamicDialogModule,
    PipesModule,
    ButtonModule,
    SharedModule
  ],
  providers: [DialogService]
})
export class CountriesModule { }
