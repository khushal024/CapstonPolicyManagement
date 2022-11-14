import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SidebarComponent } from './layouts/sidebar/sidebar.component';
import { MaterialModule } from '../material/material.module';
import { SearchComponent } from './shared/search/search.component';
import { NavbarComponent } from './layouts/sidebar/navbar/navbar.component';
import { ViewUserComponent } from './layouts/sidebar/view-user/view-user.component';



@NgModule({
  declarations: [
    SidebarComponent,
    SearchComponent,
    NavbarComponent,
    ViewUserComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule
  ],
  exports: [
    SidebarComponent,
  ]
})
export class CoreModule { }
