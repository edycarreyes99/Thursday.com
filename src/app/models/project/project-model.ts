import {IProject} from '../../interfaces/project';
import {IUser} from '../../interfaces/user';
import {ITaskCategory} from '../../interfaces/task-category';
import {GlobalService} from '../../services/global/global.service';

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
    const service = new GlobalService();
    return service.generateID(8, 'P');
  }
}
