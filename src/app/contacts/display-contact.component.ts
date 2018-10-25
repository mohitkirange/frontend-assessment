import { Component, OnInit, Input } from '@angular/core';
import { Contact } from '../models/contact.model';
import { ContactService } from '../contacts/contact.service';
@Component({
  selector: 'app-display-contact',
  templateUrl: './display-contact.component.html',
  styleUrls: ['./display-contact.component.css']
})
export class DisplayContactComponent implements OnInit {
@Input() contact: Contact;
  constructor(private _contactService: ContactService) { }

  ngOnInit() {
  }

  deleteContact(){
    this._contactService.deleteContact(this.contact.id);
  }

}
