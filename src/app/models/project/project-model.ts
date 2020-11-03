import {IProject} from '../../interfaces/project';
import {IUser} from '../../interfaces/user';
import {ITaskCategory} from '../../interfaces/task-category';
import {GlobalService} from '../../services/global/global.service';

export class ProjectModel implements IProject {
  id: string;
  createdAt: number;
  createdBy: IUser;
  description: string;
  name: string;
  taskCategories: ITaskCategory[];
  users: IUser[];

  constructor(PID: string, createdAt: number, createdBy: IUser, description: string, name: string, taskCategories: ITaskCategory[], users: IUser[]) {
    this.id = PID;
    this.createdAt = createdAt;
    this.createdBy = createdBy;
    this.description = description;
    this.name = name;
    this.taskCategories = taskCategories;
    this.users = users;
  }

  // Method to generate the Project's ID
  generatePID(): string {
    const service = new GlobalService(null);
    return service.generateID(8, 'P');
  }
}
