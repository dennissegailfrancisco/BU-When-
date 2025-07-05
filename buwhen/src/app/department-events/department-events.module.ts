import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DepartmentEventsPageRoutingModule } from './department-events-routing.module';

import { DepartmentEventsPage } from './department-events.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DepartmentEventsPageRoutingModule
  ],
  declarations: [DepartmentEventsPage]
})
export class DepartmentEventsPageModule {}
