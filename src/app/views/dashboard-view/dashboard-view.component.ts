import {Component, OnInit} from '@angular/core';
import {SidenavComponent} from '../../components/sidenav/sidenav.component';
import {GlobalService} from '../../services/global/global.service';
import {IProject} from '../../interfaces/project';

@Component({
  selector: 'app-dashboard-view',
  templateUrl: './dashboard-view.component.html',
  styleUrls: ['./dashboard-view.component.scss']
})
export class DashboardViewComponent implements OnInit {

  constructor(
    private sideNav: SidenavComponent,
    private globalService: GlobalService
  ) {
  }

  ngOnInit(): void {
    this.sideNav.openSideNav();
    this.sideNav.showBoards();
    this.globalService.getProjects().subscribe((projects: IProject) => {
      console.log(projects);
    });

    this.globalService.getProject('P-j2udosmh').subscribe((project: IProject) => {
      console.log(project);
    });
  }

}
