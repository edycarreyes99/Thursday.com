import {ITask} from '../../interfaces/task';
import {Moment} from 'moment';
import {ITaskCategory} from '../../interfaces/task-category';
import {IUser} from '../../interfaces/user';
import {GlobalService} from '../../services/global/global.service';

export class TaskModel implements ITask {
  id: string;
  createdAt: number;
  createdBy: IUser;
  name: string;
  taskCategory: ITaskCategory;
  timeline: { start: Moment, end: Moment };
  users: IUser[];
  priority: number;

  constructor(
    createdAt: number,
    createdBy: IUser,
    name: string,
    taskCategory: ITaskCategory,
    priority,
    timeline: { start: Moment, end: Moment },
    users: IUser[]
  ) {
    this.id = this.generateTID();
    this.createdAt = createdAt;
    this.createdBy = createdBy;
    this.name = name;
    this.taskCategory = taskCategory;
    this.priority = priority;
    this.timeline = timeline;
    this.users = users;
  }

  // Mehod to generate the Task's ID
  generateTID(): string {
    const service = new GlobalService(null);
    return service.generateID(8, 'T');
  }
}
