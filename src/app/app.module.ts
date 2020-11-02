import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {LoginViewComponent} from './views/login-view/login-view.component';
import {NavbarComponent} from './components/navbar/navbar.component';
import {DashboardViewComponent} from './views/dashboard-view/dashboard-view.component';
import {SidenavComponent} from './components/sidenav/sidenav.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginViewComponent,
    NavbarComponent,
    DashboardViewComponent,
    SidenavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    SidenavComponent
  ],
  bootstrap: [AppComponent]
})

// @ts-ignore
export class AppModule {
}
