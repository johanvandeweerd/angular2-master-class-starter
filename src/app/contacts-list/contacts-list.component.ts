import {Component, OnInit} from "@angular/core";
import {ContactsService} from "../contacts.service";
import {Contact} from "../models/contact";

@Component({
  selector: 'trm-contacts-list',
  templateUrl: './contacts-list.component.html'
})
export class ContactsListComponent implements OnInit {

  private contacts:Array<Contact>;

  constructor(private contactService:ContactsService) {
  }

  ngOnInit():void {
    this.contactService.getContacts()
      .subscribe(contacts => this.contacts = contacts);
  }

  trackByContactId(index:number, contact:Contact) {
    return contact.id;
  }
}