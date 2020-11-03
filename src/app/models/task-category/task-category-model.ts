import {ITaskCategory} from '../../interfaces/task-category';

export class TaskCategoryModel implements ITaskCategory {
  TCID: string;
  name: string;

  constructor(name: string) {
    this.TCID = this.generateTID();
    this.name = name;
  }

  generateTID(): string {
    let tid = '';
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_';
    const charLength = chars.length;
    for (let i = 0; i < 8; i++) {
      tid += chars.charAt(Math.floor(Math.random() * charLength));
    }
    return tid;
  }
}
