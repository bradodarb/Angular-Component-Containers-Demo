import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-user-login',
  template: `
  <div class="login-wrapper">
    <form class="login">
        <label class="title">
            <h3 class="welcome">Welcome Admin User</h3>
            <h5 class="hint">Security Group 1</h5>
        </label>
        <div class="login-group">
            <div class="auth-source select">
                <select id="login-auth-source-1">
                    <option>Ops</option>
                    <option>Dev Ops</option>
                    <option>Backup Ops</option>
                </select>
            </div>
            <input class="username" type="text" id="login_username" placeholder="Username" value="{{context.name}}">
            <input class="username" type="email" id="login_email" placeholder="Email" value="{{context.email}}">
            <input class="password" type="password" id="login_password" placeholder="Password">
            <div class="checkbox">
                <input type="checkbox" id="rememberme">
                <label for="rememberme">
                    Remember me
                </label>
            </div>
            <div class="error active">
                Invalid user name or password
            </div>
            <button type="submit" class="btn btn-primary">NEXT</button>
            <a href="javascript://" class="signup">Sign up for a Company ID</a>
        </div>
    </form>
</div>`
})
export class AdminUserLoginComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
