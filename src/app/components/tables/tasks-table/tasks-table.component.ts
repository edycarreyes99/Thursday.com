import {Component, Input, OnInit} from '@angular/core';
import {Moment} from 'moment';
import {ITaskCategory} from '../../../interfaces/task-category';
import {GlobalService} from '../../../services/global/global.service';
import {ITask} from '../../../interfaces/task';
import {IUser} from '../../../interfaces/user';

@Component({
  selector: 'app-tasks-table',
  templateUrl: './tasks-table.component.html',
  styleUrls: ['./tasks-table.component.scss']
})
export class TasksTableComponent implements OnInit {
  @Input() taskCategory: ITaskCategory;
  @Input() allTasks: ITask[];

  tasks: ITask[] = [];

  selected: { start: Moment, end: Moment };

  currentUser: IUser;

  constructor(
    private globalService: GlobalService
  ) {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
  }

  ngOnInit(): void {
    this.allTasks.forEach(task => {
      if (task.taskCategory.id === this.taskCategory.id) {
        console.log('the category: ', task.taskCategory.name, 'Includes the task:', task.name);
        if (task.users.map(u => u.id).includes(this.currentUser.id)) {
          console.log('the task:', task.name, 'has the user in:', this.currentUser.name);
          this.tasks.push(task);
        }
      }
    });
  }

  onRate(event: any): void {
    // console.log(event);
  }

  // Method to generate the priority prom
  generatePriorityProm(): string {
    let sum = 0;

    this.tasks.forEach(task => sum += task.priority);


    // tslint:disable-next-line:max-line-length
    return parseFloat((sum / this.tasks.length).toString()).toFixed(1) === 'NaN' ? '0' : parseFloat((sum / this.tasks.length).toString()).toFixed(1);
  }

}
