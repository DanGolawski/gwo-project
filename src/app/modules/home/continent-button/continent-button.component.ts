import { Component, Input, OnInit } from '@angular/core';
import { ContinentCodes, CONTINENT_NAMES } from 'src/app/enums/continents';

@Component({
  selector: 'app-continent-button',
  templateUrl: './continent-button.component.html',
  styleUrls: ['./continent-button.component.css']
})
export class ContinentButtonComponent {

  @Input() continentCode: ContinentCodes;
  protected continentNames = CONTINENT_NAMES;

  protected getContinentName(): string {
    return this.continentNames[this.continentCode];
  }

}
