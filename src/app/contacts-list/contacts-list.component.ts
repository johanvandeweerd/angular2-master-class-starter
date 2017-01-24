import {Component, OnInit} from "@angular/core";
import {ContactsService} from "../contacts.service";
import {Contact} from "../models/contact";
import {Observable, Subject} from "rxjs/Rx";
import "rxjs/add/operator/debounceTime";
import "rxjs/add/operator/distinctUntilChanged";
import "rxjs/add/operator/switchMap";
import "rxjs/add/operator/merge";

@Component({
  selector: 'trm-contacts-list',
  templateUrl: './contacts-list.component.html'
})
export class ContactsListComponent implements OnInit {

  private contacts: Observable<Array<Contact>>;
  private terms$ = new Subject<string>();

  constructor(private contactService: ContactsService) {
  }

  ngOnInit(): void {
    this.contacts = this.contactService.search(this.terms$)
      .merge(this.contactService.getContacts());
  }

  trackByContactId(index: number, contact: Contact) {
    return contact.id;
  }
}
