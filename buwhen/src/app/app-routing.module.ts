import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'university-events',
    loadChildren: () => import('./university-events/university-events.module').then( m => m.UniversityEventsPageModule)
  },
  {
    path: 'department-events',
    loadChildren: () => import('./department-events/department-events.module').then( m => m.DepartmentEventsPageModule)
  },
  {
    path: 'calendar-view',
    loadChildren: () => import('./calendar-view/calendar-view.module').then( m => m.CalendarViewPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
