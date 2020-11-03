import {IUser} from '../../interfaces/user';
import {GlobalService} from '../../services/global/global.service';

export class UserModel implements IUser {
  id: string;
  email: string;
  isAdmin: boolean;
  name: string;
  password: string;

  constructor(email: string, isAdmin: boolean, name: string, password: string) {
    this.id = this.generateUID();
    this.email = email;
    this.isAdmin = isAdmin;
    this.name = name;
    this.password = password;
  }

  // Method that generates the UID
  generateUID(): string {
    const service = new GlobalService(null);
    return service.generateID(8, 'U');
  }
}
