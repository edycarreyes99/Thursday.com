import {Injectable} from '@angular/core';
import {IGlobalService} from '../../interfaces/global-service';

@Injectable({
  providedIn: 'root'
})
export class GlobalService implements IGlobalService {

  constructor() {
  }

  // Method to generate an ID
  generateID(lengthID: number, prefix: string): string {
    let id = `${prefix}-`;
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_';
    const charLength = chars.length;
    for (let i = 0; i < lengthID; i++) {
      id += chars.charAt(Math.floor(Math.random() * charLength));
    }
    return id;
  }
}
