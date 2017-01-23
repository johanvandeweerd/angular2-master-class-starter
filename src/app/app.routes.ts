import {ContactsDetailComponent} from "./contacts-detail/contacts-detail.component";
import {ContactsListComponent} from "./contacts-list/contacts-list.component";
import {Routes} from "@angular/router";
import {ContactsEditorComponent} from "./contacts-editor/contacts-editor.component";

export const APP_ROUTES:Routes = [
  {path: '', component: ContactsListComponent},
  {path: 'contact/:id', component: ContactsDetailComponent},
  {path: 'contact/:id/edit', component: ContactsEditorComponent},
  {path: '**', redirectTo: '', pathMatch: 'full'},
];
