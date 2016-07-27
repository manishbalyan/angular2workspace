/**
 * Created by consultadd on 27/7/16.
 */
///<reference path="../../node_modules/angular2/typings/browser.d.ts"/>
import {Injectable} from "angular2/core"
import {CONTACTS} from "./mock-contact";
import {Contact} from "./contact";

@Injectable() // tell anguar2 to inject our class into component
export class ContactService{
    getContacts(){
        return Promise.resolve(CONTACTS);
    }
    insertContact(contact: Contact){
        Promise.resolve(CONTACTS).then((contacts: Contact[])=>contacts.push(contact));
    }
}
