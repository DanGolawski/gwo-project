import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ButtonModule } from 'primeng/button';
import { AboutMeComponent } from './about-me/about-me.component';
import { DialogService } from 'primeng/dynamicdialog';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    AboutMeComponent
  ],
  imports: [
    CommonModule,
    ButtonModule
  ],
  exports: [HeaderComponent, FooterComponent],
  providers: [DialogService]
})
export class SharedModule { }
