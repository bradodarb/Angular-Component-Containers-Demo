import { Component, OnInit } from '@angular/core';
import { BaseComponent } from '../base.component';

@Component({
  selector: 'app-member-user-login',
  template: `
  <div class="login-wrapper">
    <form class="login">
        <label class="title">
            <h3 class="welcome">Welcome Member User</h3>
        </label>
        <div class="login-group">
            <input class="username" type="text" id="login_username" placeholder="Username" value="{{context.name}}">
            <input class="username" type="email" id="login_email" placeholder="Email" value="{{context.email}}">
            <input class="password" type="password" id="login_password" placeholder="Password" >
            <div class="checkbox">
                <input type="checkbox" id="rememberme">
                <label for="rememberme">
                    Remember me
                </label>
            </div>
            <button type="submit" class="btn btn-primary">NEXT</button>
        </div>
    </form>
</div>
  `
})
export class MemberUserLoginComponent extends BaseComponent implements OnInit {

  constructor() { super() }

  ngOnInit() {
  }

}
