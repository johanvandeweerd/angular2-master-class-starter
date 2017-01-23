import {Injectable} from "@angular/core";
import {Contact} from "./models/contact";
import {CONTACT_DATA} from "./data/contact-data";

@Injectable()
export class ContactsService {

  contacts:Array<Contact> = CONTACT_DATA;

  getContact(id:number):Contact {
    return this.contacts.find(contact => contact.id === id);
  }

  getContacts():Array<Contact> {
    return this.contacts;
  }
}
