import {Component, OnInit} from '@angular/core';
import {IProject} from '../../interfaces/project';
import {GlobalService} from '../../services/global/global.service';
import {IUser} from '../../interfaces/user';
import {Router} from '@angular/router';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {

  // DOM manipulations variables
  sidenavElement: HTMLElement;
  boardsElement: HTMLElement;
  boardsBottomElement: HTMLElement;
  mainElement: HTMLElement;
  boardsActive = true;

  // Component variables
  projects: IProject[] = [];

  constructor(
    private globalService: GlobalService
  ) {
  }

  ngOnInit(): void {
    this.sidenavElement = document.getElementById('sidenav');
    this.boardsElement = document.getElementById('boards-container');
    this.boardsBottomElement = document.getElementById('boards-bottom');
    this.mainElement = document.getElementById('main');
  }

  // Method to close the sidenav
  closeSideNav(): void {
    this.sidenavElement.style.width = '0rem';
  }

  // Method to open the sidenav
  openSideNav(): void {
    this.sidenavElement.style.width = '4.12rem';
  }

  // Method to toggle the board's sidenav
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

  // Method to hide the board's sidenav
  hideBoards(): void {
    this.mainElement.classList.remove('margin-active');
    this.mainElement.classList.add('margin-none');
    this.boardsElement.style.display = 'none';
  }

  // Method to show the board's sidenav
  showBoards(): void {
    this.mainElement.classList.remove('margin-none');
    this.mainElement.classList.add('margin-active');
    this.boardsElement.style.display = 'block';
  }

  // Method to get all projects
  getProjects(): void {
    this.projects = [];
    const currentUser: IUser = JSON.parse(localStorage.getItem('currentUser'));
    console.log(currentUser);
    this.globalService.getProjects().subscribe((projects: IProject[]) => {
      projects.forEach(project => {
        project.users.forEach(user => {
          if (user.id === currentUser.id) {
            this.projects.push(project);
          }
        });
      });

      console.log(this.projects);
    });
  }

}
