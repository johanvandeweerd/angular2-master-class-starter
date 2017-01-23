import {Component} from "@angular/core";
import {Contact} from "./models/contact";
import {CONTACT_DATA} from "./data/contact-data";

@Component({
  selector: 'trm-contacts-app',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsAppComponent {
  contacts:Contact[] = CONTACT_DATA;

  trackByContactId(index:number, contact:Contact) {
    return contact.id;
  }
}
