import {Component} from 'angular2/core';
import {MyComponentComponent} from "./my-component.component";
import {ContactListComponent} from "./contact/contact-list.component";

@Component({
    selector: 'my-app',
    template: `
            <h1>My Angular 2 Application </h1>
        <div class="row">
          
            <div class="col-md-6">
              <my-component></my-component>
            </div>
            <div class="col-md-6">
                
                <contact-list></contact-list>
            </div>
        </div>
        
        
    `,
    directives: [MyComponentComponent, ContactListComponent]
})
export class AppComponent {


}



