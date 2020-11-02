import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {

  sidenavElement: HTMLElement;

  constructor() {
  }

  ngOnInit(): void {
    this.sidenavElement = document.getElementById('sidenav');
  }

  closeSideNav(): void {
    this.sidenavElement.style.width = '0rem';
  }

  openSideNav(): void {
    this.sidenavElement.style.width = '4.12rem';
  }

}
