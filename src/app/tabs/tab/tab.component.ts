import {Component, OnInit, Input} from "@angular/core";
import {TabsComponent} from "../tabs/tabs.component";

@Component({
  selector: 'trm-tab',
  templateUrl: './tab.component.html'
})
export class TabComponent implements OnInit {

  @Input() title: string;
  selected: boolean;

  constructor(private tabsComponent: TabsComponent) {
  }

  ngOnInit() {
    this.tabsComponent.addTab(this);
  }
}
