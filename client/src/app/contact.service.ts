import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class ContactService {

  constructor(private http: HttpClient) {
   }
   //retrieving Contacts
   getContacts(){
     return this.http.get('http://localhost:4200/api/contacts');
   }
   //add Contact
   addContact(newContact){
      var headers= new HttpHeaders;
      headers.append('Conent-Type','application/json');
      return this.http.post('http://localhost:4200/api/contact',newContact,{headers:headers});
   }
   //delete Contact
   deleteContact(id){
    return this.http.delete('http://localhost:4200/api/contact/'+id);
  }

}
