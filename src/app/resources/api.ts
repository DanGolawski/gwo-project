import { ContinentCodes } from "../enums/continents";

export const API = {
  countries: (continent: ContinentCodes) => `https://restcountries.com/v3.1/region/${continent}`
}