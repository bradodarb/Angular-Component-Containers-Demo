import { Component, OnInit } from '@angular/core';
import { ComponentMap } from 'component-containers';

import { AdminUser } from '../../models/users/admin-user.model';
import { MemberUser } from '../../models/users/member-user.model';
import { NewUser } from '../../models/users/new-user.model';


@Component({
  selector: 'app-container-item-demo',
  templateUrl: './container-item-demo.component.html',
  styleUrls: ['./container-item-demo.component.css']
})
export class ContainerItemDemoComponent implements OnInit {

  public current: any;

  public users = [];

  public codeMap = ` let map = new ComponentMap([
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
    this.componentMaps.set('users:default', map);`;
  public codeModels = `export class AdminUser {
      public name: string;
      public email: string;
      public group: string;

      constructor(name, email, group = 'Ops') {
        this.name = name;
        this.email = email;
        this.group = group;
      }
    }

    export class MemberUser {
      ...
    export class NewUser {
      ...
    `;
  public codeDirective = ``;
  constructor() {


    this.users.push(new AdminUser('Kid Koala', 'kid@koala.ca'))
    this.users.push(new MemberUser('DJ Qbert', 'banned-from-all-battles@skratch-pickles.net'))
    this.users.push(new NewUser('Kanye Wurst'))
  }

  ngOnInit() {
  }

  selectUser(user) {
    console.log('User: ', user)
    this.current = user;
  }
}
