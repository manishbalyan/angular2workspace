/**
 * Created by consultadd on 27/7/16.
 */
///<reference path="../../node_modules/angular2/typings/browser.d.ts"/>
import {Injectable} from "angular2/core"
import {CONTACTS} from "./mock-contact";

@Injectable()
export class ContactService{
    getContacts(){
        return Promise.resolve(CONTACTS);
    }
}
