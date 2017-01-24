import {Component, Input} from "@angular/core";

@Component({
  selector: 'trm-tab',
  templateUrl: './tab.component.html'
})
export class TabComponent {

  @Input() title: string;
  selected: boolean;
}
