import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProfiloPage } from './profilo.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { ProfiloPageRoutingModule } from './profilo-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    ProfiloPageRoutingModule
  ],
  declarations: [ProfiloPage]
})
export class ProfiloPageModule {}
