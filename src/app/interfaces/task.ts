import {ITaskCategory} from './task-category';
import {IUser} from './user';
import {Moment} from 'moment';

export interface ITask {
  id: string;
  name: string;
  createdAt: number;
  taskCategory: ITaskCategory;
  createdBy: IUser;
  users: IUser[];
  timeline: { start: Moment, end: Moment };
  priority: number;

  // Method to generate the Task's ID
  generateTID(): string;
}
