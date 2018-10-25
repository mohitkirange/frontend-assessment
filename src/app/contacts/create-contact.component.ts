import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Contact } from '../models/contact.model';
import { ContactService } from './contact.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-contact',
  templateUrl: './create-contact.component.html',
  styleUrls: ['./create-contact.component.css']
})
export class CreateContactComponent implements OnInit {
contact: Contact ={
  id: null,
  name: null,
  phone: null,
  email: ''
};
  constructor(private _contactService: ContactService,
  private _router: Router) { }

  ngOnInit() {
  }

  saveContact(): void{
    this._contactService.save(this.contact);
    this._router.navigate(['list']);
  }


}
