/*
 * Copyright (c) 2016 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { Component } from "@angular/core";
import { ComponentMapService, ComponentMap } from 'component-containers'

import { AdminUser } from './models/users/admin-user.model';
import { MemberUser } from './models/users/member-user.model';
import { NewUser } from './models/users/new-user.model';

import { AdminUserLoginComponent } from './components/users/logins/admin-user.component'
import { MemberUserLoginComponent } from './components/users/logins/member-user.component'
import { NewUserLoginComponent } from './components/users/logins/new-user.component'

import { AdminUserListItemComponent } from './components/users/list-items/admin-user.component';
import { MemberUserListItemComponent } from './components/users/list-items/member-user.component';
import { NewUserListItemComponent } from './components/users/list-items/new-user.component';

@Component({
  selector: "component-containers-app",
  templateUrl: "./app.component.html",
})
export class AppComponent {
  name = "world";
  closeMessage: string = "";
  indeterminateState: boolean = true;

  onClose(): void {
    this.closeMessage = "The alert has been closed";
  }


  constructor(private componentMaps: ComponentMapService) {
    let map = new ComponentMap([
      {
        model: AdminUser,
        component: AdminUserLoginComponent
      },
      {
        model: MemberUser,
        component: MemberUserLoginComponent
      },
      {
        model: NewUser,
        component: NewUserLoginComponent
      }
    ]);
    this.componentMaps.set('users:default', map);


    map = new ComponentMap([
      {
        model: AdminUser,
        component: AdminUserListItemComponent
      },
      {
        model: MemberUser,
        component: MemberUserListItemComponent
      },
      {
        model: NewUser,
        component: NewUserListItemComponent
      }
    ]);
    this.componentMaps.set('users:list', map);

  }


}
