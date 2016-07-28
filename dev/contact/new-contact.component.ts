/**
 * Created by consultadd on 27/7/16.
 */
import {Component, OnInit} from "angular2/core"
import {ContactService} from "./contact.service";
import {Contact} from "./contact";
import {Router, RouteParams} from "angular2/router";
import {RouteMatch} from "angular2/src/router/rules/rules";

@Component({
    templateUrl: 'templates/new-contact.tpl.html',
    styleUrls: ['src/css/mycomponent.css'],
    providers: [ContactService]
})

export class NewContactComponent implements OnInit{
    // create constructor to inject our service in components
    newContact: Contact;
    constructor(private _contactService: ContactService, private _router: Router, private _routeParams: RouteParams){ //in order to navigate nject router to your class
                                                                                // constructor

    }

    onSubmit(){
        this._contactService.insertContact(this.newContact); //access contact service and insert contact
        this._router.navigate(['Contacts']);// use navigation method to navigate to Contacts route after onSubmit trigger
        }



    ngOnInit(): any{
        this.newContact = {firstName: '', lastName:this._routeParams.get("lastName"), email: "", phone: ""};
    }
}
