import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './layoutes/sidebar/sidebar.component';
import { MaterialModule } from '../material/material.module';
import { SearchComponent } from './shared/search/search.component';
import { SidebarOptionsComponent } from './sidebar-options/sidebar-options.component';
import { SidebarContentComponent } from './sidebar-options/sidebar-content/sidebar-content.component';
import { NavbarComponent } from './layoutes/sidebar/navbar/navbar.component';


@NgModule({
  declarations: [
    SidebarComponent,
    SearchComponent,
    SidebarOptionsComponent,
    SidebarContentComponent,
    NavbarComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [
    SidebarComponent,
    SidebarContentComponent,
    SidebarOptionsComponent
  ]
})
export class CoreModule { }
