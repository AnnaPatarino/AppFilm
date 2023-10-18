import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FilmPage } from './film.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { FilmPageRoutingModule } from './film-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    FilmPageRoutingModule
  ],
  declarations: [FilmPage]
})
export class FilmPageModule {}

