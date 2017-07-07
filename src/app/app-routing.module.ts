import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { ContainerItemDemoComponent } from './components/container-item-demo/container-item-demo.component';
import { ContainerListDemoComponent } from './components/container-list-demo/container-list-demo.component';
import { ContainerListAndItemDemoComponent } from './components/container-list-and-item-demo/container-list-and-item-demo.component';

@NgModule({
  imports: [
    RouterModule.forRoot([
      {
        path: '',
        redirectTo: 'component',
        pathMatch: 'full',
      },
      { path: 'component', component: ContainerItemDemoComponent },
      { path: 'list', component: ContainerListDemoComponent },
      { path: 'list-and-component', component: ContainerListAndItemDemoComponent },

      { path: '**', redirectTo: 'component' }/*,
      {path: 'setup', loadChildren: './components/setup/setup.module#SetupModule'},*/
    ])
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
