import {Component, OnInit} from "@angular/core";
import {ContactsService} from "../contacts.service";
import {ActivatedRoute} from "@angular/router";
import {Contact} from "../models/contact";

@Component({
  selector: 'trm-contacts-detail',
  templateUrl: './contacts-detail.component.html'
})
export class ContactsDetailComponent implements OnInit {

  contact:Contact;

  constructor(private contactsService:ContactsService, private route:ActivatedRoute) {
  }

  ngOnInit() {
    this.contact = this.contactsService.getContact(Number(this.route.snapshot.params['id']));
  }
}
