import { Component, OnInit } from '@angular/core';
import { BaseComponent } from '../base.component';
@Component({
  selector: 'app-admin-user-list-item',
  template: `
        <div class="card">
            <div class="card-header">
                Admin User
            </div>
            <div class="card-block">
                <div class="card-media-block wrap">
                    <clr-icon shape="lock" class="is-solid" size="72"></clr-icon>
                    <div class="card-media-description">
                        <span class="card-media-title">
                            Owner: {{context.name}}
                        </span>
                    </div>
                </div>
                <div class="card-text">
                    ...
                </div>
            </div>
        </div>
        `
})
export class AdminUserListItemComponent extends BaseComponent implements OnInit {

  constructor() { super() }

  ngOnInit() {
  }

}
