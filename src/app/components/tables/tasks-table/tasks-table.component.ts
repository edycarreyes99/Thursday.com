import {Component, OnInit} from '@angular/core';
import {Moment} from 'moment';

@Component({
  selector: 'app-tasks-table',
  templateUrl: './tasks-table.component.html',
  styleUrls: ['./tasks-table.component.scss']
})
export class TasksTableComponent implements OnInit {
  selected: {start: Moment, end: Moment};
  constructor() {
  }

  ngOnInit(): void {
  }

  onRate(event: any): void {
    console.log(event);
  }

}
