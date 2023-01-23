import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { ContinentCodes } from 'src/app/enums/continents';
import { CountriesApiService } from 'src/app/services/countries-api.service';
import { DialogService } from 'primeng/dynamicdialog';
import { CountryDetailsComponent } from './country-details/country-details.component';
import { Country } from 'src/app/models/country';


const BACKGROUND_IMAGE = 'assets/space.jpg';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.css']
})
export class CountriesComponent implements OnInit {

  protected countries$: Observable<Country[]>;
  protected selectedCountryFlagUrl = BACKGROUND_IMAGE;

  constructor(
    private route: ActivatedRoute,
    private countriesService: CountriesApiService,
    public dialogService: DialogService
  ) { }

  public ngOnInit(): void {
    const continent = this.getContinentFromUrl();
    if (!continent) {
      return;
    }
    this.getCountriesByContinentCode(continent);
  }

  protected setBackgroundFlag(flagUrl: string | null): void {
    if (flagUrl !== this.selectedCountryFlagUrl) {
      this.selectedCountryFlagUrl = flagUrl ?? BACKGROUND_IMAGE;
    }
  }

  protected openDetailsDialog(country: any): void {
    const ref = this.dialogService.open(CountryDetailsComponent, {
      data: country,
      width: '80%'
  });
  }

  private getContinentFromUrl(): ContinentCodes | null {
    const country = this.route.snapshot.paramMap.get('continent') as ContinentCodes;
    return Object.values(ContinentCodes).includes(country) ? country : null;
  }

  private getCountriesByContinentCode(continent: ContinentCodes): void {
    this.countries$ = this.countriesService.getCountriesByContinentCode(continent);
  }

}
