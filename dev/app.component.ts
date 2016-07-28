import {Component} from 'angular2/core';
import {MyComponentComponent} from "./my-component.component";
import {ContactListComponent} from "./contact/contact-list.component";
import {ROUTER_DIRECTIVES, RouteConfig} from "angular2/router";
import {NewContactComponent} from "./contact/new-contact.component";
import {HTTPTestComponent} from "./http-test.component";


@Component({
    selector: 'my-app',
    template: `
           <a href="http://localhost:3000/"><h1 class="head" align="center">My Angular 2 Application </h1></a><br>
          <header>
            <nav>
            <a [routerLink]="['MyComponent']">My Component</a>
            <a [routerLink]="['Contacts']">List of Contacts</a> 
            <a [routerLink]="['NewContact']">Create New Contact</a>
            </nav>
          </header>
            <br><br>
        <div class="row">
          
           <div class="col-md-6">
              <router-outlet></router-outlet> 
              <http-test></http-test>
            </div>
            
        </div>
        
        
    `,
    styleUrls: ['src/css/mycomponent.css'],

    directives: [MyComponentComponent, HTTPTestComponent, ContactListComponent, ROUTER_DIRECTIVES]
})
@RouteConfig([ //this is an array and we will pass javascript object here ie route
    {path: '/contacts', name: 'Contacts', component: ContactListComponent },
    {path: '/newcontact', name: 'NewContact', component: NewContactComponent },
    {path: '/mycomponent', name: 'MyComponent', component: MyComponentComponent }

])
export class AppComponent {


}



