import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UniversityEventsPage } from './university-events.page';

const routes: Routes = [
  {
    path: '',
    component: UniversityEventsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UniversityEventsPageRoutingModule {}
