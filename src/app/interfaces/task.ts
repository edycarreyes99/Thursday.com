import {ITaskCategory} from './task-category';
import {IUser} from './user';
import {Moment} from 'moment';

export interface ITask {
  TID: string;
  name: string;
  createdAt: number;
  taskCategory: ITaskCategory;
  createdBy: IUser;
  users: IUser[];
  timeline: Moment;

  // Method to generate the Task's ID
  generateTID(): string;
}
