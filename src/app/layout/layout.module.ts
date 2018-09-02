import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutRoutingModule } from './layout-routing.module';
import { LayoutComponent } from './layout.component';
import { FooterComponent } from 'src/app/shared/components/footer/footer.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  imports: [
    CommonModule,
    LayoutRoutingModule,
    FontAwesomeModule
  ],
  declarations: [
    LayoutComponent,
    FooterComponent
  ]
})
export class LayoutModule { }
