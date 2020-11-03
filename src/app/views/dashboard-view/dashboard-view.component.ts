import {Component, OnInit} from '@angular/core';
import {SidenavComponent} from '../../components/sidenav/sidenav.component';
import {GlobalService} from '../../services/global/global.service';

@Component({
  selector: 'app-dashboard-view',
  templateUrl: './dashboard-view.component.html',
  styleUrls: ['./dashboard-view.component.scss']
})
export class DashboardViewComponent implements OnInit {

  constructor(
    private sideNav: SidenavComponent
  ) {
  }

  ngOnInit(): void {
    this.sideNav.openSideNav();
    this.sideNav.showBoards();
  }

}
