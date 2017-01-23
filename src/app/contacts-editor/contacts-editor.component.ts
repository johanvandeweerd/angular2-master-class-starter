import {Component, OnInit} from "@angular/core";
import {ContactsService} from "../contacts.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Contact} from "../models/contact";

@Component({
  selector: 'trm-contacts-editor',
  templateUrl: './contacts-editor.component.html',
})
export class ContactsEditorComponent implements OnInit {

  private contact:Contact = <Contact>{address: {}};

  constructor(private contactsService:ContactsService, private route:ActivatedRoute, private router:Router) {
  }

  ngOnInit() {
    this.contactsService.getContact(Number(this.route.snapshot.params['id']))
      .subscribe(contact => this.contact = contact);
  }

  private save(contact:Contact) {
    this.contactsService.updateContact(contact)
      .subscribe(() => this.navigateToDetailsOf(contact));
  }

  private cancel(contact:Contact) {
    this.navigateToDetailsOf(contact);
  }

  private navigateToDetailsOf(contact:Contact) {
    this.router.navigate(['contact', contact.id]);
  }
}
