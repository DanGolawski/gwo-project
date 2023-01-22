import { Component } from '@angular/core';
import { delay } from 'rxjs';
import { ContinentCodes } from 'src/app/enums/continents';
import { of } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  
  protected keys = Object.keys;
  protected continentCodes = ContinentCodes;
  protected showWelcomeScreen = true;
  protected showVideo = false;

  protected getContinentName(code: string): ContinentCodes {
    return this.continentCodes[code as keyof typeof this.continentCodes];
  }

  protected hideWelcomeScreen(): void {
    setTimeout(() => this.showWelcomeScreen = false, 2000);
  }

}
