import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CelebritaPage } from './celebrita.page';

const routes: Routes = [
  {
    path: '',
    component: CelebritaPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CelebritaPageRoutingModule {}
