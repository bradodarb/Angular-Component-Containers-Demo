import { Component, OnInit } from '@angular/core';
import { ComponentMap } from 'component-containers';

import { AdminUser } from '../../models/users/admin-user.model';
import { MemberUser } from '../../models/users/member-user.model';
import { NewUser } from '../../models/users/new-user.model';

@Component({
  selector: 'app-container-list-demo',
  templateUrl: './container-list-demo.component.html',
  styleUrls: ['./container-list-demo.component.css']
})
export class ContainerListDemoComponent implements OnInit {


  public users = [];

  public codeMap = `map = new ComponentMap([
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
    this.componentMaps.set('users:list', map);`
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



    this.users.push(new AdminUser('Kid Koala', 'kid@koala.ca'));
    this.users.push(new MemberUser('DJ Qbert', 'banned-from-all-battles@skratch-pickles.net'));
    this.users.push(new NewUser('Kanye Wurst'))


  }

  ngOnInit() {
  }

}
