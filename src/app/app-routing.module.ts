import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

// Importing components for routing
import {LoginViewComponent} from './views/login-view/login-view.component';

const routes: Routes = [
  {path: '', component: LoginViewComponent},
  {path: 'login', component: LoginViewComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
