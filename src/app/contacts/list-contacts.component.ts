import { Component, OnInit } from '@angular/core';
import { Contact } from '../models/contact.model';
import { ContactService } from '../contacts/contact.service';

@Component({
  // selector: 'app-list-contacts',
  templateUrl: './list-contacts.component.html',
  styleUrls: ['./list-contacts.component.css']
})
export class ListContactsComponent implements OnInit {
contacts: Contact[];
  constructor(private _contactService: ContactService) { }

  ngOnInit() {
    this.contacts= this._contactService.getContacts();
  }

}
