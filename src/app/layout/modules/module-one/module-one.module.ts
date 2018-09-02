import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModuleOneRoutingModule } from './module-one-routing.module';
import { ModuleOneComponent } from './module-one.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  imports: [
    CommonModule,
    NgbModule,
    ModuleOneRoutingModule
  ],
  declarations: [ModuleOneComponent]
})
export class ModuleOneModule { }
