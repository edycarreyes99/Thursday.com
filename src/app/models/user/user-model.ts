import {IUser} from '../../interfaces/user';

export class UserModel implements IUser {
  UID: string;
  email: string;
  isAdmin: boolean;
  name: string;
  password: string;

  constructor(email: string, isAdmin: boolean, name: string, password: string) {
    this.UID = this.generateUID();
    this.email = email;
    this.isAdmin = isAdmin;
    this.name = name;
    this.password = password;
  }

  // Generates the UID
  generateUID(): string {
    let uid = '';
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_';
    const charLength = chars.length;
    for (let i = 0; i < 8; i++) {
      uid += chars.charAt(Math.floor(Math.random() * charLength));
    }
    return uid;
  }
}
