import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {SidenavComponent} from '../../components/sidenav/sidenav.component';

@Component({
  selector: 'app-login-view',
  templateUrl: './login-view.component.html',
  styleUrls: ['./login-view.component.scss']
})
export class LoginViewComponent implements OnInit {

  constructor(
    private router: Router,
    private sidenav: SidenavComponent
  ) {
  }

  ngOnInit(): void {
    this.login(null);
    this.sidenav.closeSideNav();
  }

  // Funcion para login
  login(event: any): void {
    console.log('Doing login');
    this.router.navigate(['/dashboard']).then(r => console.log('Navigated to dashbord')).catch(e => console.error(e));
  }

}
