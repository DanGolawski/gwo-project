import { Component, OnInit } from '@angular/core';
import { DynamicDialogConfig } from 'primeng/dynamicdialog';
import { Country } from 'src/app/models/country';

@Component({
  selector: 'app-country-details',
  templateUrl: './country-details.component.html',
  styleUrls: ['./country-details.component.css']
})
export class CountryDetailsComponent implements OnInit {

  protected selectedCountry: Country;

  constructor(public config: DynamicDialogConfig) { }

  ngOnInit(): void {
    this.selectedCountry = this.config.data;
  }

}
