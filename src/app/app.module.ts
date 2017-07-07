import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import {
  ClarityModule,
  ClrLayoutModule,
  ClrIconModule,
  ClrButtonGroupModule,
  ClrDataModule,
  ClrFormsModule,
  ClrAlertModule,
  ClrPopoverModule
} from 'clarity-angular';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { ContainerItemDemoComponent } from './components/container-item-demo/container-item-demo.component';
import { ContainerListDemoComponent } from './components/container-list-demo/container-list-demo.component';
import { ContainerListAndItemDemoComponent } from './components/container-list-and-item-demo/container-list-and-item-demo.component';

import { ComponentContainerModule, ComponentMap, ComponentMapService } from 'component-containers';

import { AdminUser } from './models/users/admin-user.model';
import { MemberUser } from './models/users/member-user.model';
import { NewUser } from './models/users/new-user.model';

import { AdminUserLoginComponent } from './components/users/logins/admin-user.component';
import { MemberUserLoginComponent } from './components/users/logins/member-user.component';
import { NewUserLoginComponent } from './components/users/logins/new-user.component';

import { AdminUserListItemComponent } from './components/users/list-items/admin-user.component';
import { MemberUserListItemComponent } from './components/users/list-items/member-user.component';
import { NewUserListItemComponent } from './components/users/list-items/new-user.component';

@NgModule({
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    AppRoutingModule,
    ClarityModule,

    ComponentContainerModule
  ],
  declarations: [
    AppComponent,
    ContainerItemDemoComponent,
    ContainerListDemoComponent,
    ContainerListAndItemDemoComponent,
    AdminUserLoginComponent,
    MemberUserLoginComponent,
    NewUserLoginComponent,
    AdminUserListItemComponent,
    MemberUserListItemComponent,
    NewUserListItemComponent
  ],
  entryComponents: [
    AdminUserLoginComponent,
    MemberUserLoginComponent,
    NewUserLoginComponent,
    AdminUserListItemComponent,
    MemberUserListItemComponent,
    NewUserListItemComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
