System.register(['angular2/core', "./contact.component"], function(exports_1, context_1) {
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
    var core_1, contact_component_1;
    var ContactListComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (contact_component_1_1) {
                contact_component_1 = contact_component_1_1;
            }],
        execute: function() {
            ContactListComponent = (function () {
                function ContactListComponent() {
                    this.contacts = [
                        {
                            firstname: 'Manish',
                            lastname: 'Balyan',
                            email: 'balyan05.manish@gmail.com',
                            phone: '+91-9999873524'
                        },
                        {
                            firstname: 'Manish1',
                            lastname: 'Balyan1',
                            email: 'balyan05.manish1@gmail.com',
                            phone: '+91-9999873521'
                        },
                        {
                            firstname: 'Manish2',
                            lastname: 'Balyan2',
                            email: 'balyan05.manish2@gmail.com',
                            phone: '+91-9999873522'
                        },
                        {
                            firstname: 'Manish3',
                            lastname: 'Balyan3',
                            email: 'balyan05.manish3@gmail.com',
                            phone: '+91-9999873523'
                        },
                    ];
                    this.selectedContact = {};
                }
                ContactListComponent.prototype.onSelect = function (contact) {
                    this.selectedContact = contact;
                };
                ContactListComponent = __decorate([
                    core_1.Component({
                        selector: 'contact-list',
                        templateUrl: 'templates/contact-list.tpl.html',
                        styleUrls: ['src/css/mycomponent.css'],
                        directives: [contact_component_1.ContactComponent],
                    }), 
                    __metadata('design:paramtypes', [])
                ], ContactListComponent);
                return ContactListComponent;
            }());
            exports_1("ContactListComponent", ContactListComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnRhY3QtbGlzdC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFjQTtnQkFBQTtvQkFDVyxhQUFRLEdBQUU7d0JBQ2I7NEJBQ0ksU0FBUyxFQUFFLFFBQVE7NEJBQ25CLFFBQVEsRUFBRSxRQUFROzRCQUNsQixLQUFLLEVBQUUsMkJBQTJCOzRCQUNsQyxLQUFLLEVBQUUsZ0JBQWdCO3lCQUMxQjt3QkFDRDs0QkFDSSxTQUFTLEVBQUUsU0FBUzs0QkFDcEIsUUFBUSxFQUFFLFNBQVM7NEJBQ25CLEtBQUssRUFBRSw0QkFBNEI7NEJBQ25DLEtBQUssRUFBRSxnQkFBZ0I7eUJBQzFCO3dCQUNEOzRCQUNJLFNBQVMsRUFBRSxTQUFTOzRCQUNwQixRQUFRLEVBQUUsU0FBUzs0QkFDbkIsS0FBSyxFQUFFLDRCQUE0Qjs0QkFDbkMsS0FBSyxFQUFFLGdCQUFnQjt5QkFDMUI7d0JBQ0Q7NEJBQ0ksU0FBUyxFQUFFLFNBQVM7NEJBQ3BCLFFBQVEsRUFBRSxTQUFTOzRCQUNuQixLQUFLLEVBQUUsNEJBQTRCOzRCQUNuQyxLQUFLLEVBQUUsZ0JBQWdCO3lCQUMxQjtxQkFDSixDQUFDO29CQUNNLG9CQUFlLEdBQUcsRUFBRSxDQUFDO2dCQUtqQyxDQUFDO2dCQUhHLHVDQUFRLEdBQVIsVUFBUyxPQUFPO29CQUNaLElBQUksQ0FBQyxlQUFlLEdBQUcsT0FBTyxDQUFDO2dCQUNuQyxDQUFDO2dCQXZDTDtvQkFBQyxnQkFBUyxDQUFDO3dCQUNQLFFBQVEsRUFBRSxjQUFjO3dCQUN4QixXQUFXLEVBQUUsaUNBQWlDO3dCQUM5QyxTQUFTLEVBQUUsQ0FBQyx5QkFBeUIsQ0FBQzt3QkFDdEMsVUFBVSxFQUFFLENBQUMsb0NBQWdCLENBQUM7cUJBRWpDLENBQUM7O3dDQUFBO2dCQWtDRiwyQkFBQztZQUFELENBaENBLEFBZ0NDLElBQUE7WUFoQ0QsdURBZ0NDLENBQUEiLCJmaWxlIjoiY29udGFjdC1saXN0LmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQ3JlYXRlZCBieSBjb25zdWx0YWRkIG9uIDI2LzcvMTYuXG4gKi9cbmltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdhbmd1bGFyMi9jb3JlJztcbmltcG9ydCB7Q29udGFjdENvbXBvbmVudH0gZnJvbSBcIi4vY29udGFjdC5jb21wb25lbnRcIjtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdjb250YWN0LWxpc3QnLFxuICAgIHRlbXBsYXRlVXJsOiAndGVtcGxhdGVzL2NvbnRhY3QtbGlzdC50cGwuaHRtbCcsXG4gICAgc3R5bGVVcmxzOiBbJ3NyYy9jc3MvbXljb21wb25lbnQuY3NzJ10sXG4gICAgZGlyZWN0aXZlczogW0NvbnRhY3RDb21wb25lbnRdLFxuXG59KVxuXG5leHBvcnQgY2xhc3MgQ29udGFjdExpc3RDb21wb25lbnR7XG4gICAgcHVibGljIGNvbnRhY3RzID1bXG4gICAgICAgIHtcbiAgICAgICAgICAgIGZpcnN0bmFtZTogJ01hbmlzaCcsXG4gICAgICAgICAgICBsYXN0bmFtZTogJ0JhbHlhbicsXG4gICAgICAgICAgICBlbWFpbDogJ2JhbHlhbjA1Lm1hbmlzaEBnbWFpbC5jb20nLFxuICAgICAgICAgICAgcGhvbmU6ICcrOTEtOTk5OTg3MzUyNCdcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgZmlyc3RuYW1lOiAnTWFuaXNoMScsXG4gICAgICAgICAgICBsYXN0bmFtZTogJ0JhbHlhbjEnLFxuICAgICAgICAgICAgZW1haWw6ICdiYWx5YW4wNS5tYW5pc2gxQGdtYWlsLmNvbScsXG4gICAgICAgICAgICBwaG9uZTogJys5MS05OTk5ODczNTIxJ1xuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBmaXJzdG5hbWU6ICdNYW5pc2gyJyxcbiAgICAgICAgICAgIGxhc3RuYW1lOiAnQmFseWFuMicsXG4gICAgICAgICAgICBlbWFpbDogJ2JhbHlhbjA1Lm1hbmlzaDJAZ21haWwuY29tJyxcbiAgICAgICAgICAgIHBob25lOiAnKzkxLTk5OTk4NzM1MjInXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIGZpcnN0bmFtZTogJ01hbmlzaDMnLFxuICAgICAgICAgICAgbGFzdG5hbWU6ICdCYWx5YW4zJyxcbiAgICAgICAgICAgIGVtYWlsOiAnYmFseWFuMDUubWFuaXNoM0BnbWFpbC5jb20nLFxuICAgICAgICAgICAgcGhvbmU6ICcrOTEtOTk5OTg3MzUyMydcbiAgICAgICAgfSxcbiAgICBdO1xuICAgIHB1YmxpYyAgc2VsZWN0ZWRDb250YWN0ID0ge307XG5cbiAgICBvblNlbGVjdChjb250YWN0KSB7XG4gICAgICAgIHRoaXMuc2VsZWN0ZWRDb250YWN0ID0gY29udGFjdDtcbiAgICB9XG59XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
