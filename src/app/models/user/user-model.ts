import {IUser} from '../../interfaces/user';
import {GlobalService} from '../../services/global/global.service';

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
    const service = new GlobalService();
    return service.generateID(8, 'U');
  }
}
