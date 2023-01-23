import { ContinentCodes } from "../enums/continents";

export const API = {
  getCountries: (continent: ContinentCodes) => `region/${continent}`
}