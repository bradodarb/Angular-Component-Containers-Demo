import { Component, OnInit } from '@angular/core';
import { BaseComponent } from '../base.component';

@Component({
  selector: 'app-member-user-list-item',
  template: `
        <div class="card">
            <div class="card-header">
                Member User
            </div>
            <div class="card-block">
                <div class="card-media-block wrap">
                    <clr-icon shape="group" class="is-solid" size="72"></clr-icon>
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
export class MemberUserListItemComponent extends BaseComponent implements OnInit {

  constructor() { super() }

  ngOnInit() {
  }

}
