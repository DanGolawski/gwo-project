export interface Country {
  alt: string;
  flagUrl: string;
  name: string;
  officialName: string;
  subregion: string;
  capitalCity: string;
  population: number;
  currencies: Currency;
  fifa: string;
}

export interface Currency {
  [key: string]: CurrencyDetails;
}

export interface CurrencyDetails {
  name: string;
  symbol: string;
}