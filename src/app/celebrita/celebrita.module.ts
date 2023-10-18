import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CelebritaPage } from './celebrita.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { CelebritaPageRoutingModule } from './celebrita-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    CelebritaPageRoutingModule
  ],
  declarations: [CelebritaPage]
})
export class CelebritaPageModule {}
