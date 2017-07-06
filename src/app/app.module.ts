/*
 * Copyright (c) 2016 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {
    ClrLayoutModule,
    ClrIconModule,
    ClrButtonGroupModule,
    ClrDataModule,
    ClrFormsModule,
    ClrAlertModule,
    ClrPopoverModule
} from 'clarity-angular';
import { AppComponent }  from './app.component';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { ContainerItemDemoComponent } from './components/container-item-demo/container-item-demo.component';
import { ContainerListDemoComponent } from './components/container-list-demo/container-list-demo.component';
import { ContainerListAndItemDemoComponent } from './components/container-list-and-item-demo/container-list-and-item-demo.component';

@NgModule({
    imports: [
        BrowserAnimationsModule,
        BrowserModule,
        ClrLayoutModule, //Includes MainContainer, Navigation, & Tabs
        ClrIconModule,
        ClrButtonGroupModule,
        ClrDataModule,
        ClrFormsModule,
        ClrAlertModule,
        ClrPopoverModule
    ],
    declarations: [AppComponent, ContainerItemDemoComponent, ContainerListDemoComponent, ContainerListAndItemDemoComponent],
    bootstrap: [AppComponent]
})
export class AppModule {
}
