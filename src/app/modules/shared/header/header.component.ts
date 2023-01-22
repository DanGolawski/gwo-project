import { Component, Input } from '@angular/core';
import {Location} from '@angular/common';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  @Input() absolute = false;
  @Input() showBackButton = true;

  constructor(private location: Location) {}

  protected back(): void {
    this.location.back();
  }

}
