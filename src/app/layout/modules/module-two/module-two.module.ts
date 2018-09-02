import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModuleTwoRoutingModule } from './module-two-routing.module';
import { ModuleTwoComponent } from './module-two.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  imports: [
    CommonModule,
    ModuleTwoRoutingModule,
    NgbModule
  ],
  declarations: [ModuleTwoComponent]
})
export class ModuleTwoModule { }
