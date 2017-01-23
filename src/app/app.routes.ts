import {ContactsDetailComponent} from "./contacts-detail/contacts-detail.component";
import {ContactsListComponent} from "./contacts-list/contacts-list.component";
import {Routes} from "@angular/router";

export const APP_ROUTES:Routes = [
  {path: '', component: ContactsListComponent},
  {path: 'contact/:id', component: ContactsDetailComponent},
  {path: '**', redirectTo: '', pathMatch: 'full'},
];
