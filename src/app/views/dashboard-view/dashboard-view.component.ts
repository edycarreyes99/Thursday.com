import {Component, OnInit} from '@angular/core';
import {SidenavComponent} from '../../components/sidenav/sidenav.component';

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
  }

}
