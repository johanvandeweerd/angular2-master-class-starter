import {Injectable, Inject} from "@angular/core";
import {Http} from "@angular/http";
import "rxjs/add/operator/map";
import {Observable} from "rxjs/Rx";
import {Contact} from "./models/contact";
import {API_ENDPOINT} from "./tokens";
import "rxjs/add/operator/debounceTime";
import "rxjs/add/operator/distinctUntilChanged";
import "rxjs/add/operator/switchMap";
import "rxjs/add/operator/merge";

@Injectable()
export class ContactsService {

  constructor(private http: Http, @Inject(API_ENDPOINT) private apiEndpoint) {
  }

  updateContact(contact: Contact) {
    return this.http.put(`${this.apiEndpoint}/contacts/${contact.id}`, contact);
  }

  getContact(id: number): Observable<Contact> {
    return this.http.get(`${this.apiEndpoint}/contacts/${id}`)
      .map(response => response.json())
      .map(data => data.item);
  }

  getContacts(): Observable<Array<Contact>> {
    return this.http.get(`${this.apiEndpoint}/contacts/`)
      .map(response => response.json())
      .map(data => data.items);
  }

  rawSearch(value: string): Observable<Array<Contact>> {
    return this.http.get(`${this.apiEndpoint}/search/?text=${value}`)
      .map(response => response.json())
      .map(data => data.items);
  }

  search(termsObservable: Observable<string>): Observable<Array<Contact>> {
    return termsObservable
      .debounceTime(500)
      .distinctUntilChanged()
      .map(terms => this.rawSearch(terms))
      .switch();
  }
}
