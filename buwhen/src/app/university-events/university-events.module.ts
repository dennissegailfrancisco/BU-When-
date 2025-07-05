import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UniversityEventsPageRoutingModule } from './university-events-routing.module';

import { UniversityEventsPage } from './university-events.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UniversityEventsPageRoutingModule
  ],
  declarations: [UniversityEventsPage]
})
export class UniversityEventsPageModule {}
