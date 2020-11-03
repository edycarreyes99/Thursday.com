import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';

// Custom services
import {GlobalService} from './services/global/global.service';

// Custom modules
import {StarRatingModule} from 'angular-star-rating';
import {NgxDaterangepickerMd} from 'ngx-daterangepicker-material';

// Components and Views
import {LoginViewComponent} from './views/login-view/login-view.component';
import {NavbarComponent} from './components/navbar/navbar.component';
import {DashboardViewComponent} from './views/dashboard-view/dashboard-view.component';
import {SidenavComponent} from './components/sidenav/sidenav.component';
import {TasksTableComponent} from './components/tables/tasks-table/tasks-table.component';


@NgModule({
  declarations: [
    AppComponent,

    // Components and Views
    LoginViewComponent,
    NavbarComponent,
    DashboardViewComponent,
    SidenavComponent,
    TasksTableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,

    // Custom Modules
    StarRatingModule.forRoot(),
    NgxDaterangepickerMd.forRoot(),
  ],
  providers: [
    // Custom services
    GlobalService,

    // Custom components
    SidenavComponent,
  ],
  bootstrap: [AppComponent]
})

// @ts-ignore
export class AppModule {
}
