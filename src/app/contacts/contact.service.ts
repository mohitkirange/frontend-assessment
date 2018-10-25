import { Injectable } from '@angular/core';
import { Contact } from '../models/contact.model';

@Injectable()
export class ContactService {
  private listContacts: Contact[]=[
    { "id": 1 ,
      "name": "James Butte",
      "phone": "504-845-1421",
      "email": "jbutte@gmail.com"
    },
    { "id": 2 ,

      "name": "Josephine Darakjy",
      "phone": "565-125-1242",
      "email": "josephined@gmail.com"
    },
    { "id": 3 ,
      "name": "John Smith",
      "phone": "204-845-1345",
      "email": "js@test.com"
    },
    { "id": 4 ,
      "name": "Bobby Colspan",
      "phone": "842-426-0915",
      "email": "colspan@hotmail.com"
    },
    { "id": 5 ,
      "name": "Linda Yutapon",
      "phone": "743-842-8933",
      "email": "lindayuta@yahoo.com"
    },
    { "id": 6 ,
      "name": "Hank Halloway",
      "phone": "922-892-3482",
      "email": "halloway@gmail.com"
    },
    { "id": 7 ,
      "name": "Sarah Johnson",
      "phone": "659-229-8027",
      "email": "sjohnson456@gmail.com"
    },
    { "id": 8 ,
      "name": "Larry Gaven",
      "phone": "592-198-3322",
      "email": "larry_gaven@hotmail.com"
    },
    { "id": 9 ,
      "name": "Sarah Johnson",
      "phone": "659-229-8027",
      "email": "sjohnson456@gmail.com"
    },
    { "id": 10 ,
      "name": "Larry Gaven",
      "phone": "592-198-3322",
      "email": "larry_gaven@hotmail.com"
    }
  ];

  getContacts(): Contact[]{
    return this.listContacts;
  }

  save(contact: Contact){
    this.listContacts.push(contact);
  }

  deleteContact(id: number){
    const i = this.listContacts.findIndex(e => e.id === id);
    if(i !== -1){
      this.listContacts.splice(i,1);
    }
  }

}
