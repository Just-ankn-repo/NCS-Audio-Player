import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './core/pages/home-page/home-page.component';
import { Page404Component } from './core/pages/page404/page404.component';
import { AboutPageComponent } from './core/pages/about-page/about-page.component';

const routes: Routes = [
  {
    path: '',
    component: HomePageComponent
  },
  {
    path: 'about',
    component: AboutPageComponent,
  },
  {
    path: 'library',
    loadChildren: () => import('./modules/sound-library/sound-library.module').then(m => m.SoundLibraryModule)
  },
  {
    path: '**',
    component: Page404Component
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
