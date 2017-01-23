import {Injectable, Inject} from "@angular/core";
import {Http} from "@angular/http";
import "rxjs/add/operator/map";
import {Observable} from "rxjs/Rx";
import {Contact} from "./models/contact";
import {API_ENDPOINT} from "./tokens";

@Injectable()
export class ContactsService {

  constructor(private http:Http, @Inject(API_ENDPOINT) private apiEndpoint) {
  }

  getContact(id:number):Observable<Contact> {
    return this.http.get(`${this.apiEndpoint}/contacts/${id}`)
      .map(response => response.json())
      .map(data => data.item);
  }

  getContacts():Observable<Array<Contact>> {
    return this.http.get(`${this.apiEndpoint}/contacts/`)
      .map(response => response.json())
      .map(data => data.items);
  }

  updateContact(contact:Contact) {
    return this.http.put(`${this.apiEndpoint}/contacts/${contact.id}`, contact);
  }
}
