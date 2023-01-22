import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, tap } from 'rxjs';
import { ContinentCodes } from '../enums/continents';
import { Country } from '../models/country';

@Injectable({
  providedIn: 'root'
})
export class CountriesApiService {

  constructor(private http: HttpClient) { }

  public getCountriesByContinentCode(continent: ContinentCodes): Observable<Country[]> {
    return this.http.get(`https://restcountries.com/v3.1/region/${continent}`).pipe(
      tap((data: any) => console.log(data[0].capital.length)),
      map((countries: any) => countries.map((country: any) => ({
        flagUrl: country.flags?.png,
        subregion: country.subregion,
        name: country.translations?.pol?.common,
        officialName: country.translations?.pol?.official,
        alt: country.altSpellings?.length ? country.altSpellings[0] : null,
        fifa: country.fifa,
        capitalCity: country.capital[0],
        currencies: country.currencies,
        population: country.population
      })))
    );
  }
}
