import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

// Importing components for routing
import {LoginViewComponent} from './views/login-view/login-view.component';
import {DashboardViewComponent} from './views/dashboard-view/dashboard-view.component';

const routes: Routes = [
  {path: '', component: LoginViewComponent},
  {path: 'login', component: LoginViewComponent},
  {path: 'dashboard', redirectTo: 'dashboard/boards/'},
  {path: 'dashboard/boards', component: DashboardViewComponent},
  {path: 'dashboard/boards/:boardId', component: DashboardViewComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
