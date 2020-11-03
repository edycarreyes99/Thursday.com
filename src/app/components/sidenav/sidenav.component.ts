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
  mainElement: HTMLElement;
  boardsActive = true;

  constructor() {
  }

  ngOnInit(): void {
    this.sidenavElement = document.getElementById('sidenav');
    this.boardsElement = document.getElementById('boards-container');
    this.boardsBottomElement = document.getElementById('boards-bottom');
    this.mainElement = document.getElementById('main');
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
      this.boardsActive = true;
      this.mainElement.style.marginLeft = '23.2rem !important';
      this.mainElement.style.marginLeft = null;
      this.mainElement.classList.remove('margin-deactivate');
      this.mainElement.classList.add('margin-active');
    } else {
      this.boardsElement.style.width = '0rem';
      this.boardsBottomElement.style.display = 'none';
      this.boardsActive = false;
      this.mainElement.classList.remove('margin-active');
      this.mainElement.classList.add('margin-deactivate');
    }
  }

  hideBoards(): void {
    this.mainElement.classList.remove('margin-active');
    this.mainElement.classList.add('margin-none');
    this.boardsElement.style.display = 'none';
  }

  showBoards(): void {
    this.mainElement.classList.remove('margin-none');
    this.mainElement.classList.add('margin-active');
    this.boardsElement.style.display = 'block';
  }

}
