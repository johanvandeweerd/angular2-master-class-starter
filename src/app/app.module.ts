import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";
import {MaterialModule} from "@angular/material";
import {FlexLayoutModule} from "@angular/flex-layout";
import {ContactsAppComponent} from "./contacts.component";
import {ContactsService} from "./contacts.service";
import {ContactsListComponent} from "./contacts-list/contacts-list.component";
import {APP_ROUTES} from "./app.routes";
import {RouterModule} from "@angular/router";
import {ContactsDetailComponent} from "./contacts-detail/contacts-detail.component";
import {HttpModule} from "@angular/http";
import {API_ENDPOINT} from "./tokens";
import {FormsModule} from "@angular/forms";
import {ContactsEditorComponent} from "./contacts-editor/contacts-editor.component";
import {ContactsDetailViewComponent} from "./contacts-detail-view/contacts-detail-view.component";
import {TabsComponent} from "./tabs/tabs/tabs.component";
import {TabComponent} from "./tabs/tab/tab.component";

@NgModule({
  declarations: [ContactsAppComponent, ContactsListComponent, ContactsDetailComponent, ContactsEditorComponent, ContactsDetailViewComponent, TabsComponent, TabComponent],
  imports: [
    BrowserModule,
    HttpModule,
    MaterialModule.forRoot(),
    FlexLayoutModule.forRoot(),
    RouterModule.forRoot(APP_ROUTES),
    FormsModule
  ],
  providers: [
    ContactsService,
    {provide: API_ENDPOINT, useValue: "http://localhost:4201/api"},
  ],
  bootstrap: [ContactsAppComponent]
})
export class ContactsModule {
}
