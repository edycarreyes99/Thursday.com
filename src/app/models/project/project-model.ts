import {IProject} from '../../interfaces/project';
import {IUser} from '../../interfaces/user';
import {ITaskCategory} from '../../interfaces/task-category';

export class ProjectModel implements IProject {
  PID: string;
  createdAt: number;
  createdBy: IUser;
  description: string;
  name: string;
  taskCategories: ITaskCategory[];

  constructor(createdAt: number, createdBy: IUser, description: string, name: string, taskCategories: ITaskCategory[]) {
    this.PID = this.generatePID();
    this.createdAt = createdAt;
    this.createdBy = createdBy;
    this.description = description;
    this.name = name;
    this.taskCategories = taskCategories;
  }

  // Method to generate the Project's ID
  generatePID(): string {
    let pid = '';
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_';
    const charLength = chars.length;
    for (let i = 0; i < 8; i++) {
      pid += chars.charAt(Math.floor(Math.random() * charLength));
    }
    return pid;
  }
}
