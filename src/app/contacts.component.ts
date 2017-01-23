import {Component, OnInit} from "@angular/core";
import {Contact} from "./models/contact";
import {CONTACT_DATA} from "./data/contact-data";
import {ContactsService} from "./contacts.service";

@Component({
  selector: 'trm-contacts-app',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsAppComponent implements OnInit {

  contacts:Contact[] = CONTACT_DATA;

  constructor(private contactService:ContactsService) {
  }

  ngOnInit():void {
    this.contacts = this.contactService.getContacts();
  }

  trackByContactId(index:number, contact:Contact) {
    return contact.id;
  }
}
