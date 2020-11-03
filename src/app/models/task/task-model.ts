import {ITask} from '../../interfaces/task';
import {Moment} from 'moment';
import {ITaskCategory} from '../../interfaces/task-category';
import {IUser} from '../../interfaces/user';

export class TaskModel implements ITask {
  TID: string;
  createdAt: number;
  createdBy: IUser;
  name: string;
  taskCategory: ITaskCategory;
  timeline: Moment;
  users: IUser[];

  constructor(createdAt: number, createdBy: IUser, name: string, taskCategory: ITaskCategory, timeline: Moment, users: IUser[]) {
    this.TID = this.generateTID();
    this.createdAt = createdAt;
    this.createdBy = createdBy;
    this.name = name;
    this.taskCategory = taskCategory;
    this.timeline = timeline;
    this.users = users;
  }

  // Mehod to generate the Task's ID
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
