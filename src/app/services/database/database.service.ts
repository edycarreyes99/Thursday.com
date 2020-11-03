import {Injectable} from '@angular/core';
import {InMemoryDbService} from 'angular-in-memory-web-api';
import {Observable} from 'rxjs';
import {IUser} from '../../interfaces/user';
import {IProject} from '../../interfaces/project';
import {ITask} from '../../interfaces/task';
import {ITaskCategory} from '../../interfaces/task-category';
import {TaskCategoryModel} from '../../models/task-category/task-category-model';
import {ProjectModel} from '../../models/project/project-model';
import {UserModel} from '../../models/user/user-model';
import {TaskModel} from '../../models/task/task-model';
import * as moment from 'moment';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService implements InMemoryDbService {

  constructor() {
  }

  // Method overrided that creates the Database
  createDb(): {} | Observable<{}> | Promise<{}> {

    /**
     * [TaskCategoryModel] Entity
     */
    const taskCategories: ITaskCategory[] = [
      new TaskCategoryModel('Online Marketing Q1'),
      new TaskCategoryModel('Offline Marketing Q1'),
      new TaskCategoryModel('In Process'),
      new TaskCategoryModel('Irrelevant'),
      new TaskCategoryModel('Finished'),
      new TaskCategoryModel('Inbox'),
      new TaskCategoryModel('Review'),
      new TaskCategoryModel('Testing')
    ];

    /**
     * [UserModel] Entity
     */
    const users: IUser[] = [
      new UserModel('rootadmin@thursday.com', true, 'Root Admin', 'R00t@dm!n'),
      new UserModel('usera@thursday.com', false, 'User A', 'us3rA'),
      new UserModel('userb@thursday.com', false, 'User B', 'us3rB'),
    ];

    /**
     * [Task] Entity
     */
    const tasks: ITask[] = [
      // Project A's tasks
      new TaskModel(
        moment().milliseconds(),
        users[0],
        'PAT1',
        taskCategories[0],
        3,
        {
          start: moment().subtract(4, 'days'),
          end: moment().add(10, 'days')
        },
        [users[0]]
      ),
      new TaskModel(
        moment().milliseconds(),
        users[0],
        'PAT2',
        taskCategories[0],
        4,
        {
          start: moment().subtract(10, 'days'),
          end: moment().add(5, 'days')
        },
        [users[0]]
      ),
      new TaskModel(
        moment().milliseconds(),
        users[0],
        'PAT3',
        taskCategories[0],
        5,
        {
          start: moment(),
          end: moment().add(5, 'days')
        },
        [users[0]]
      ),
      new TaskModel(
        moment().milliseconds(),
        users[0],
        'PAT4',
        taskCategories[1],
        1,
        {
          start: moment().subtract(20, 'days'),
          end: moment().add(10, 'days')
        },
        [users[0]]
      ),
      new TaskModel(
        moment().milliseconds(),
        users[0],
        'PAT5',
        taskCategories[1],
        5,
        {
          start: moment().subtract(2, 'days'),
          end: moment().add(4, 'days')
        },
        [users[0]]
      ),

      // Project B's tasks
      new TaskModel(
        moment().milliseconds(),
        users[0],
        'PBT1',
        taskCategories[2],
        1,
        {
          start: moment().subtract(4, 'days'),
          end: moment().add(10, 'days')
        },
        [users[0]]
      ),
      new TaskModel(
        moment().milliseconds(),
        users[0],
        'PBT2',
        taskCategories[2],
        5,
        {
          start: moment().subtract(10, 'days'),
          end: moment().add(5, 'days')
        },
        [users[0]]
      ),
      new TaskModel(
        moment().milliseconds(),
        users[0],
        'PBT3',
        taskCategories[2],
        5,
        {
          start: moment(),
          end: moment().add(5, 'days')
        },
        [users[0]]
      ),
      new TaskModel(
        moment().milliseconds(),
        users[0],
        'PBT4',
        taskCategories[3],
        2,
        {
          start: moment().subtract(20, 'days'),
          end: moment().add(10, 'days')
        },
        [users[0]]
      ),
      new TaskModel(
        moment().milliseconds(),
        users[0],
        'PBT5',
        taskCategories[3],
        3,
        {
          start: moment().subtract(2, 'days'),
          end: moment().add(4, 'days')
        },
        [users[0], users[1]]
      ),

      // Project C's tasks
      new TaskModel(
        moment().milliseconds(),
        users[0],
        'PCT1',
        taskCategories[4],
        5,
        {
          start: moment().subtract(4, 'days'),
          end: moment().add(10, 'days')
        },
        [users[0], users[2]]
      ),
      new TaskModel(
        moment().milliseconds(),
        users[0],
        'PCT2',
        taskCategories[4],
        4,
        {
          start: moment().subtract(10, 'days'),
          end: moment().add(5, 'days')
        },
        [users[0], users[2]]
      ),
      new TaskModel(
        moment().milliseconds(),
        users[0],
        'PCT3',
        taskCategories[4],
        1,
        {
          start: moment(),
          end: moment().add(5, 'days')
        },
        [users[0], users[2]]
      ),
      new TaskModel(
        moment().milliseconds(),
        users[0],
        'PCT4',
        taskCategories[5],
        3,
        {
          start: moment().subtract(20, 'days'),
          end: moment().add(10, 'days')
        },
        [users[0], users[2]]
      ),
      new TaskModel(
        moment().milliseconds(),
        users[0],
        'PCT5',
        taskCategories[5],
        5,
        {
          start: moment().subtract(2, 'days'),
          end: moment().add(4, 'days')
        },
        [users[0], users[2]]
      ),
    ];

    /**
     * [Project] Entity
     */
    const projects: IProject[] = [
      new ProjectModel(
        'P-z74hhE7q',
        moment().milliseconds(),
        users[0],
        'Project A',
        'PA',
        [taskCategories[0], taskCategories[1]],
        [users[0]]
      ),
      new ProjectModel(
        'P-j2udosmh',
        moment().milliseconds(),
        users[0],
        'Project B',
        'PB',
        [taskCategories[2], taskCategories[3]],
        [users[0], users[1]]
      ),
      new ProjectModel(
        'P-ewq8oiji',
        moment().milliseconds(),
        users[0],
        'Project C',
        'PC',
        [taskCategories[4], taskCategories[5]],
        [users[0], users[2]]
      )
    ];

    return {users, projects, tasks, taskCategories};
  }
}
