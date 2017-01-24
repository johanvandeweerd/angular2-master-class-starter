import {Component, ContentChildren, QueryList, AfterContentInit} from "@angular/core";
import {TabComponent} from "../tab/tab.component";

@Component({
  selector: 'trm-tabs',
  templateUrl: './tabs.component.html'
})
export class TabsComponent implements AfterContentInit {

  @ContentChildren(TabComponent)
  tabs: QueryList<TabComponent>;

  ngAfterContentInit(): void {
    this.select(this.tabs.first);
  }

  select(tabComponent: TabComponent) {
    this.tabs.forEach(tab => tab.selected = false);
    tabComponent.selected = true;
  }
}
