System.register(['angular2/core', "./my-component.component", "./contact/contact-list.component", "angular2/router", "./contact/new-contact.component", "./http-test.component"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, my_component_component_1, contact_list_component_1, router_1, new_contact_component_1, http_test_component_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (my_component_component_1_1) {
                my_component_component_1 = my_component_component_1_1;
            },
            function (contact_list_component_1_1) {
                contact_list_component_1 = contact_list_component_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (new_contact_component_1_1) {
                new_contact_component_1 = new_contact_component_1_1;
            },
            function (http_test_component_1_1) {
                http_test_component_1 = http_test_component_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                }
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        template: "\n           <a href=\"http://localhost:3000/\"><h1 class=\"head\" align=\"center\">My Angular 2 Application </h1></a><br>\n          <header>\n            <nav>\n            <a [routerLink]=\"['MyComponent']\">My Component</a>\n            <a [routerLink]=\"['Contacts']\">List of Contacts</a> \n            <a [routerLink]=\"['NewContact']\">Create New Contact</a>\n            </nav>\n          </header>\n            <br><br>\n        <div class=\"row\">\n          \n           <div class=\"col-md-6\">\n              <router-outlet></router-outlet> \n              <http-test></http-test>\n            </div>\n            \n        </div>\n        \n        \n    ",
                        styleUrls: ['src/css/mycomponent.css'],
                        directives: [my_component_component_1.MyComponentComponent, http_test_component_1.HTTPTestComponent, contact_list_component_1.ContactListComponent, router_1.ROUTER_DIRECTIVES]
                    }),
                    router_1.RouteConfig([
                        { path: '/contacts', name: 'Contacts', component: contact_list_component_1.ContactListComponent },
                        { path: '/newcontact', name: 'NewContact', component: new_contact_component_1.NewContactComponent },
                        { path: '/mycomponent', name: 'MyComponent', component: my_component_component_1.MyComponentComponent }
                    ]), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUF5Q0E7Z0JBQUE7Z0JBR0EsQ0FBQztnQkFwQ0Q7b0JBQUMsZ0JBQVMsQ0FBQzt3QkFDUCxRQUFRLEVBQUUsUUFBUTt3QkFDbEIsUUFBUSxFQUFFLGdxQkFvQlQ7d0JBQ0QsU0FBUyxFQUFFLENBQUMseUJBQXlCLENBQUM7d0JBRXRDLFVBQVUsRUFBRSxDQUFDLDZDQUFvQixFQUFFLHVDQUFpQixFQUFFLDZDQUFvQixFQUFFLDBCQUFpQixDQUFDO3FCQUNqRyxDQUFDO29CQUNELG9CQUFXLENBQUM7d0JBQ1QsRUFBQyxJQUFJLEVBQUUsV0FBVyxFQUFFLElBQUksRUFBRSxVQUFVLEVBQUUsU0FBUyxFQUFFLDZDQUFvQixFQUFFO3dCQUN2RSxFQUFDLElBQUksRUFBRSxhQUFhLEVBQUUsSUFBSSxFQUFFLFlBQVksRUFBRSxTQUFTLEVBQUUsMkNBQW1CLEVBQUU7d0JBQzFFLEVBQUMsSUFBSSxFQUFFLGNBQWMsRUFBRSxJQUFJLEVBQUUsYUFBYSxFQUFFLFNBQVMsRUFBRSw2Q0FBb0IsRUFBRTtxQkFFaEYsQ0FBQzs7Z0NBQUE7Z0JBSUYsbUJBQUM7WUFBRCxDQUhBLEFBR0MsSUFBQTtZQUhELHVDQUdDLENBQUEiLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdhbmd1bGFyMi9jb3JlJztcbmltcG9ydCB7TXlDb21wb25lbnRDb21wb25lbnR9IGZyb20gXCIuL215LWNvbXBvbmVudC5jb21wb25lbnRcIjtcbmltcG9ydCB7Q29udGFjdExpc3RDb21wb25lbnR9IGZyb20gXCIuL2NvbnRhY3QvY29udGFjdC1saXN0LmNvbXBvbmVudFwiO1xuaW1wb3J0IHtST1VURVJfRElSRUNUSVZFUywgUm91dGVDb25maWd9IGZyb20gXCJhbmd1bGFyMi9yb3V0ZXJcIjtcbmltcG9ydCB7TmV3Q29udGFjdENvbXBvbmVudH0gZnJvbSBcIi4vY29udGFjdC9uZXctY29udGFjdC5jb21wb25lbnRcIjtcbmltcG9ydCB7SFRUUFRlc3RDb21wb25lbnR9IGZyb20gXCIuL2h0dHAtdGVzdC5jb21wb25lbnRcIjtcblxuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ215LWFwcCcsXG4gICAgdGVtcGxhdGU6IGBcbiAgICAgICAgICAgPGEgaHJlZj1cImh0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9cIj48aDEgY2xhc3M9XCJoZWFkXCIgYWxpZ249XCJjZW50ZXJcIj5NeSBBbmd1bGFyIDIgQXBwbGljYXRpb24gPC9oMT48L2E+PGJyPlxuICAgICAgICAgIDxoZWFkZXI+XG4gICAgICAgICAgICA8bmF2PlxuICAgICAgICAgICAgPGEgW3JvdXRlckxpbmtdPVwiWydNeUNvbXBvbmVudCddXCI+TXkgQ29tcG9uZW50PC9hPlxuICAgICAgICAgICAgPGEgW3JvdXRlckxpbmtdPVwiWydDb250YWN0cyddXCI+TGlzdCBvZiBDb250YWN0czwvYT4gXG4gICAgICAgICAgICA8YSBbcm91dGVyTGlua109XCJbJ05ld0NvbnRhY3QnXVwiPkNyZWF0ZSBOZXcgQ29udGFjdDwvYT5cbiAgICAgICAgICAgIDwvbmF2PlxuICAgICAgICAgIDwvaGVhZGVyPlxuICAgICAgICAgICAgPGJyPjxicj5cbiAgICAgICAgPGRpdiBjbGFzcz1cInJvd1wiPlxuICAgICAgICAgIFxuICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLW1kLTZcIj5cbiAgICAgICAgICAgICAgPHJvdXRlci1vdXRsZXQ+PC9yb3V0ZXItb3V0bGV0PiBcbiAgICAgICAgICAgICAgPGh0dHAtdGVzdD48L2h0dHAtdGVzdD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgXG4gICAgICAgIDwvZGl2PlxuICAgICAgICBcbiAgICAgICAgXG4gICAgYCxcbiAgICBzdHlsZVVybHM6IFsnc3JjL2Nzcy9teWNvbXBvbmVudC5jc3MnXSxcblxuICAgIGRpcmVjdGl2ZXM6IFtNeUNvbXBvbmVudENvbXBvbmVudCwgSFRUUFRlc3RDb21wb25lbnQsIENvbnRhY3RMaXN0Q29tcG9uZW50LCBST1VURVJfRElSRUNUSVZFU11cbn0pXG5AUm91dGVDb25maWcoWyAvL3RoaXMgaXMgYW4gYXJyYXkgYW5kIHdlIHdpbGwgcGFzcyBqYXZhc2NyaXB0IG9iamVjdCBoZXJlIGllIHJvdXRlXG4gICAge3BhdGg6ICcvY29udGFjdHMnLCBuYW1lOiAnQ29udGFjdHMnLCBjb21wb25lbnQ6IENvbnRhY3RMaXN0Q29tcG9uZW50IH0sXG4gICAge3BhdGg6ICcvbmV3Y29udGFjdCcsIG5hbWU6ICdOZXdDb250YWN0JywgY29tcG9uZW50OiBOZXdDb250YWN0Q29tcG9uZW50IH0sXG4gICAge3BhdGg6ICcvbXljb21wb25lbnQnLCBuYW1lOiAnTXlDb21wb25lbnQnLCBjb21wb25lbnQ6IE15Q29tcG9uZW50Q29tcG9uZW50IH1cblxuXSlcbmV4cG9ydCBjbGFzcyBBcHBDb21wb25lbnQge1xuXG5cbn1cblxuXG5cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
