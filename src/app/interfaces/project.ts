import {ITaskCategory} from './task-category';
import {IUser} from './user';

export interface IProject {
  PID: string;
  name: string;
  description: string;
  createdAt: number;
  taskCategories: ITaskCategory[];
  createdBy: IUser;

  // Method to generate the Project's ID
  generatePID(): string;
}
