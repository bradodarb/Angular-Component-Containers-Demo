
export class AdminUser {
  public name: string;
  public email: string;
  public group: string;

  constructor(name, email, group = 'Ops') {
    this.name = name;
    this.email = email;
    this.group = group;
  }
}
