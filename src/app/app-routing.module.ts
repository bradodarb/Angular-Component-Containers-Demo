import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { HomeComponent } from './components/home/home.component';

@NgModule({
  imports: [
    RouterModule.forRoot([
      { path: '', component: HomeComponent }/*,
      {path: 'setup', loadChildren: './components/setup/setup.module#SetupModule'},*/
    ])
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
