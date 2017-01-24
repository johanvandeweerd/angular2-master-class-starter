import {Component, OnInit} from "@angular/core";
import {Contact} from "../models/contact";
import {ActivatedRoute, Router} from "@angular/router";
import {ContactsService} from "../contacts.service";

@Component({
  selector: 'trm-contacts-detail-view',
  templateUrl: './contacts-detail-view.component.html'
})
export class ContactsDetailViewComponent implements OnInit {

  private contact: Contact;

  constructor(private router: Router,
              private route: ActivatedRoute,
              private contactsService: ContactsService) {
  }

  ngOnInit() {
    this.contactsService.getContact(Number(this.route.snapshot.params['id']))
      .subscribe(contact => this.contact = contact);
  }

  private navigateToEditor() {
    this.router.navigate(['edit'], {relativeTo: this.route});
  }

  private navigateToList() {
    this.router.navigate(['/']);
  }
}
