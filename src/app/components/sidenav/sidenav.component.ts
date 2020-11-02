import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {

  sidenavElement: HTMLElement;
  boardsElement: HTMLElement;
  boardsBottomElement: HTMLElement;
  toggleIconElement: HTMLElement;

  constructor() {
  }

  ngOnInit(): void {
    this.sidenavElement = document.getElementById('sidenav');
    this.boardsElement = document.getElementById('boards-container');
    this.boardsBottomElement = document.getElementById('boards-bottom');
    this.toggleIconElement = document.getElementById('toggleIcon');
  }

  closeSideNav(): void {
    this.sidenavElement.style.width = '0rem';
  }

  openSideNav(): void {
    this.sidenavElement.style.width = '4.12rem';
  }

  toggleBoards(): void {
    if (this.boardsElement.style.width === '0rem') {
      this.boardsElement.style.width = '16rem';
      this.boardsBottomElement.style.display = 'flex';
      this.toggleIconElement.style.transform = 'rotate(180deg)';
    } else {
      this.boardsElement.style.width = '0rem';
      this.boardsBottomElement.style.display = 'none';
      this.toggleIconElement.style.transform = 'rotate(-180deg)';
    }
  }

}
