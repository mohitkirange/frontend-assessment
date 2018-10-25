import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ContactService } from './contacts/contact.service';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { AppComponent } from './app.component';
import { ListContactsComponent } from './contacts/list-contacts.component';
import { CreateContactComponent } from './contacts/create-contact.component';
import { DisplayContactComponent } from './contacts/display-contact.component';

const appRoutes: Routes = [
  { path: 'list', component: ListContactsComponent },
  { path: 'create', component: CreateContactComponent},
  { path: '', redirectTo: '/list', pathMatch: 'full'}
];

@NgModule({
  declarations: [
    AppComponent,
    ListContactsComponent,
    CreateContactComponent,
    DisplayContactComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AngularFontAwesomeModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [ContactService],
  bootstrap: [AppComponent]
})
export class AppModule { }
