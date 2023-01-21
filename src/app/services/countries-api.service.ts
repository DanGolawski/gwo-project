import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ContinentCodes } from '../enums/continents';

@Injectable({
  providedIn: 'root'
})
export class CountriesApiService {

  constructor(private http: HttpClient) { }

  public getCountriesByContinentCode(continent: ContinentCodes): Observable<any> {
    return this.http.get(`https://restcountries.com/v3.1/region/${continent}`)
  }
}
