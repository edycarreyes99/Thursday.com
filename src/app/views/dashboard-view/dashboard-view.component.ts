import {Component, OnInit} from '@angular/core';
import {SidenavComponent} from '../../components/sidenav/sidenav.component';
import {ActivatedRoute} from '@angular/router';
import {IUser} from '../../interfaces/user';
import {IProject} from '../../interfaces/project';
import {GlobalService} from '../../services/global/global.service';
import {ITask} from '../../interfaces/task';

@Component({
  selector: 'app-dashboard-view',
  templateUrl: './dashboard-view.component.html',
  styleUrls: ['./dashboard-view.component.scss']
})
export class DashboardViewComponent implements OnInit {

  boardID = '';
  currentUser: IUser;
  currentProject: IProject;
  tasks: ITask[];

  constructor(
    private sideNav: SidenavComponent,
    private route: ActivatedRoute,
    private globalService: GlobalService
  ) {
    console.log('The currentuser is:', localStorage.getItem('currentUser'));
    sideNav.getProjects();
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
  }

  ngOnInit(): void {
    this.sideNav.openSideNav();
    this.sideNav.showBoards();
    this.route.paramMap.subscribe(params => {
      this.boardID = params.get('boardId');
      this.updateView();
    });
  }

  updateView(): void {
    this.globalService.getTasks().subscribe((tasks: ITask[]) => this.tasks = tasks);
    this.globalService.getProject(this.boardID).subscribe((project: IProject) => this.currentProject = project);
  }

}
