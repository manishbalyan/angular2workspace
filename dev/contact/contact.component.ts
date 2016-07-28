/**
 * Created by consultadd on 26/7/16.
 */
import {Component} from 'angular2/core';
import {Router} from "angular2/router";
import {Contact} from "./contact";

@Component({
    selector: 'contact',
    templateUrl: 'templates/contact.tpl.html',
    styleUrls: ['src/css/mycomponent.css'],
    inputs: ["contact"] //this input configuration tell angular or component to receive data that is bound to contact property
})

export class ContactComponent{
        public contact: Contact= null;

        constructor(private _router: Router){}
        onCreateNew(){
            this._router.navigate(['NewContact', {lastname: this.contact.lastName}])
        }
}
