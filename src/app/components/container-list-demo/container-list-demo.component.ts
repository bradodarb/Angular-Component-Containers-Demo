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
  public code: string = '' +
  `.some-component {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        flex-wrap: wrap;
    }`;
  constructor() {



    this.users.push(new AdminUser('Kid Koala', 'kid@koala.ca'));
    this.users.push(new MemberUser('DJ Qbert', 'banned-from-all-battles@skratch-pickles.net'));
    this.users.push(new NewUser('Kanye Wurst'))


  }

  ngOnInit() {
  }

}
