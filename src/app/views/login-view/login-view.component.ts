import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {SidenavComponent} from '../../components/sidenav/sidenav.component';
import {GlobalService} from '../../services/global/global.service';
import {FormControl, Validators} from '@angular/forms';
import {IUser} from '../../interfaces/user';

@Component({
  selector: 'app-login-view',
  templateUrl: './login-view.component.html',
  styleUrls: ['./login-view.component.scss']
})
export class LoginViewComponent implements OnInit {

  email = new FormControl('rootadmin@thursday.com', [
    Validators.required,
    Validators.email
  ]);
  password = new FormControl('R00t@dm!n', [
    Validators.minLength(6)
  ]);

  users: IUser[] = [];

  constructor(
    private router: Router,
    private sidenav: SidenavComponent,
    private globalService: GlobalService
  ) {
    localStorage.removeItem('currentUser');
  }

  ngOnInit(): void {
    this.sidenav.closeSideNav();
    this.sidenav.hideBoards();

    // get all users
    this.getUsers();
  }

  // Funcion para login
  login(event: any): void {
    console.log('Doing login');
    if (this.email.valid && this.password.valid) {
      const user: IUser = this.users.filter((u) => u.email === this.email.value)[0];

      if (user === undefined || user === null) {
        alert('The email is invalid');
      } else if (user.password !== this.password.value) {
        alert('The password is invalid');
      } else {
        localStorage.setItem('currentUser', JSON.stringify(user));
        alert(`Welcome ${user.name}!`);
        this.router.navigate(['/dashboard']).then(r => console.log('Navigated to dashbord')).catch(e => console.error(e));
      }
    } else {
      alert('There are problems with the form login. Please check all and try again.');
    }
  }

  getUsers(): void {
    this.globalService.getUsers().subscribe((users: IUser[]) => this.users = users);
  }
}
