import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { ContinentButtonComponent } from './continent-button/continent-button.component';


@NgModule({
  declarations: [
    HomeComponent,
    ContinentButtonComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
