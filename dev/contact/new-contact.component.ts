/**
 * Created by consultadd on 27/7/16.
 */
import {Component} from "angular2/core"
import {ContactService} from "./contact.service";
import {Contact} from "./contact";

@Component({
    templateUrl: 'templates/new-contact.tpl.html',
    styleUrls: ['src/css/mycomponent.css'],
    providers: [ContactService]
})

export class NewContactComponent{
    // create constructor to inject our service in components
    constructor(private _contactService: ContactService){

    }

    onAddContact(firstName, lastName, email,phone){
        let contact: Contact = {firstName: firstName, lastName: lastName, email: email, phone: phone};
        this._contactService.insertContact(contact); //access contact service and insert contact
        }
}
