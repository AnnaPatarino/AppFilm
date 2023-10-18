import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'film',
        loadChildren: () => import('../film/film.module').then(m => m.FilmPageModule)
      },
      {
        path: 'celebrita',
        loadChildren: () => import('../celebrita/celebrita.module').then(m => m.CelebritaPageModule)
      },
      {
        path: 'profilo',
        loadChildren: () => import('../profilo/profilo.module').then(m => m.ProfiloPageModule)
      },
      {
        path: '',
        redirectTo: '/tabs/film',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/film',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
