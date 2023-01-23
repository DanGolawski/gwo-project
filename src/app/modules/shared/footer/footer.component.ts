import { Component, Input } from '@angular/core';
import { DialogService } from 'primeng/dynamicdialog';
import { AboutMeComponent } from '../about-me/about-me.component';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {

  @Input() absolute = false;

  constructor(public dialogService: DialogService) {}

  protected showAuthor(): void {
    this.dialogService.open(AboutMeComponent, {
      width: '70%'
  });
  }

}
