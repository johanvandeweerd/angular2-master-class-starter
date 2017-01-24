import {Component, OnInit} from "@angular/core";
import {EventBusService, EventType} from "./event-bus.service";

@Component({
  selector: 'trm-contacts-app',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsAppComponent implements OnInit {
  private title: string = "Contacts";

  constructor(private eventBusService: EventBusService) {
  }

  ngOnInit(): void {
    this.eventBusService.observe(EventType.NavigatedToContactList).subscribe(data => this.title = "Contacts");
    this.eventBusService.observe(EventType.NavigatedToContact).subscribe(data => this.title = data.name);
    this.eventBusService.observe(EventType.EditingContact).subscribe(data => this.title = `Editing ${data.name}`);
  }
}
