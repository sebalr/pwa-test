import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from 'src/app/layout/layout.component';

const routes: Routes = [{
    path: '', component: LayoutComponent,
    children: [
      { path: 'one', loadChildren: 'src/app/layout/modules/module-one/module-one.module#ModuleOneModule' },
      { path: 'two', loadChildren: 'src/app/layout/modules/module-two/module-two.module#ModuleTwoModule' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
