import { Component, EventEmitter, Input, Output } from "@angular/core";
import { Router } from "@angular/router";
// import { Partner } from "src/app/partner/global/partner.model";
// import { PartnersService } from "src/app/partner/global/partners.service";
// import { environment } from "src/environments"; 
import { AppMenu } from "./sidebar-content/sidebar-content.component";
// import { Search } from "./site-search.component";

@Component({
  selector: 'pm-sidebar-options',
  templateUrl: './sidebar-options.component.html',
  styleUrls: ['./sidebar-options.component.scss']
})
export class SidebarOptionsComponent  {
   constructor(
  private readonly router: Router,
  // private readonly partners: PartnersService,
) {}

@Input()  selectedMenu!: AppMenu;
// @Input()  search?: Search;
@Output()  readonly menuSelected = new EventEmitter<AppMenu>();
// @Output()  readonly searchChange = new EventEmitter<Search>();
@Output()
 readonly isSiteInfoUnsavedChange = new EventEmitter<boolean>();

//  readonly isSandbox = environment.type === "sandbox";
 readonly AppMenu = AppMenu;

//  readonly selectedPartnerChanges = this.partners.selectedChanges;

//  async onPartnerListNavItemClicked(partner: Partner): Promise<void> {
//   this.setVisibleMenu(AppMenu.Site);
//   await this.router.navigateByUrl(partner.replaceRouted(this.router.url));
// }

 showPartnerNav(): void {
  this.setVisibleMenu(AppMenu.Partner);
}

 setVisibleMenu(index: AppMenu): void {
  this.menuSelected.emit(index);
}

//  updateSearch(value: Search): void {
//   this.searchChange.emit(value);
// }
} 

