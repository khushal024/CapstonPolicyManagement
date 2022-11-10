import { Component, EventEmitter, Input, Output } from "@angular/core";
// import { map } from "rxjs/operators";
export enum AppMenu {
  None,
  Global,
  GlobalHelpAssist,
  Partner,
  Search,
  Site,
}
@Component({
  selector: 'pm-sidebar-content',
  templateUrl: './sidebar-content.component.html',
  styleUrls: ['./sidebar-content.component.scss']
})

export class SidebarContentComponent {
  public constructor(
    // private readonly user: UserService,
    // private readonly ticketCounts: TicketCountsService,
  ) {}

  @Input() public set selectedMenu(value: AppMenu) {
    this._selectedMenu = value;
    if (value !== AppMenu.None) {
      this.previousMenu = value;
    }
  }
  public get selectedMenu(): AppMenu {
    return this._selectedMenu;
  }
  private _selectedMenu!: AppMenu;

  @Output() public readonly menuItemClicked = new EventEmitter<AppMenu>();

  public get isMenuVisible(): boolean {
    return this.selectedMenu !== AppMenu.None;
  }

  public previousMenu!: AppMenu;

  // public readonly Permission = Permission;
  public readonly AppMenu = AppMenu;
  // public readonly globalLinksPermissions = GLOBAL_LINKS_PERMISSIONS;

  // public readonly totalTicketCountChanges = this.ticketCounts.changes.pipe(
  //   map((counts) => counts.totalCount),
  // );

  public changeMenu(index: AppMenu): void {
    this.menuItemClicked.emit(index);
  }

  public logout(): void {
    // this.user.logout();
  }
}
