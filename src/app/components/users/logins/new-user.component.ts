import { Component, OnInit } from '@angular/core';
import { BaseComponent } from '../base.component';

@Component({
  selector: 'app-new-user-login',
  template: `
  <div class="login-wrapper">
    <form class="login">
        <label class="title">
            <h3 class="welcome">Welcome New User</h3>
            <h5 class="hint">Use your Company ID to create a secure login</h5>
        </label>
        <div class="login-group">
            <input class="username" type="text" id="login_username" placeholder="Username" value="{{context.name}}">

            <a href="javascript://" class="signup">Sign up for a Company ID</a>
        </div>
    </form>
</div>`
})
export class NewUserLoginComponent extends BaseComponent implements OnInit {

  constructor() { super() }

  ngOnInit() {

  }

}
