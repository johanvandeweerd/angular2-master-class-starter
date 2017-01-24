import {Component} from "@angular/core";
import {TabComponent} from "../tab/tab.component";

@Component({
  selector: 'trm-tabs',
  templateUrl: './tabs.component.html'
})
export class TabsComponent {

  tabs: Array<TabComponent> = [];

  addTab(tabComponent: TabComponent) {
    tabComponent.selected = this.tabs.length == 0;
    this.tabs.push(tabComponent);
  }

  select(tabComponent: TabComponent) {
    this.tabs.forEach(tab => tab.selected = false);
    tabComponent.selected = true;
  }
}
