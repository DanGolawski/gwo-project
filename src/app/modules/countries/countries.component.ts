import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, Observable, tap } from 'rxjs';
import { ContinentCodes } from 'src/app/enums/continents';
import { CountriesApiService } from 'src/app/services/countries-api.service';
import {Location} from '@angular/common';
import { DialogService } from 'primeng/dynamicdialog';
import { CountryDetailsComponent } from './country-details/country-details.component';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.css']
})
export class CountriesComponent implements OnInit {

  protected countries$: Observable<any>; // TODO NADAC TYP
  protected selectedCountryFlagUrl = '../../../assets/space.jpg';

  constructor(
    private route: ActivatedRoute,
    private countriesService: CountriesApiService,
    private location: Location,
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
    if (flagUrl === this.selectedCountryFlagUrl) {
      return;
    }
    this.selectedCountryFlagUrl = flagUrl ?? '../../../assets/space.jpg';
  }

  protected back(): void {
    this.location.back();
  }

  protected openDetailsDialog(country: any): void {
    const ref = this.dialogService.open(CountryDetailsComponent, {
      header: country.name,
      width: '80%'
  });
  }

  private getContinentFromUrl(): ContinentCodes | null {
    const country = this.route.snapshot.paramMap.get('country') as ContinentCodes;
    return Object.values(ContinentCodes).includes(country) ? country : null;
  }

  private getCountriesByContinentCode(continent: ContinentCodes): void {
    this.countries$ = this.countriesService.getCountriesByContinentCode(continent).pipe(
      map(countries => countries.map((country: any) => ({
        flagUrl: country.flags?.png,
        subregion: country.subregion,
        name: country.translations?.pol?.common,
        officialName: country.translations?.pol?.official,
        alt: country.altSpellings?.length > 0 ? country.altSpellings[0] : null
      })))
    );
  }

}
