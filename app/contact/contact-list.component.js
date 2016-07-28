System.register(['angular2/core', "./contact.component", "./contact.service"], function(exports_1, context_1) {
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
    var core_1, contact_component_1, contact_service_1;
    var ContactListComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (contact_component_1_1) {
                contact_component_1 = contact_component_1_1;
            },
            function (contact_service_1_1) {
                contact_service_1 = contact_service_1_1;
            }],
        execute: function() {
            ContactListComponent = (function () {
                function ContactListComponent(_contactService) {
                    this._contactService = _contactService;
                    this.selectedContact = null;
                }
                ContactListComponent.prototype.onSelect = function (contact) {
                    this.selectedContact = contact;
                };
                ContactListComponent.prototype.getContacts = function () {
                    var _this = this;
                    this._contactService.getContacts().then(function (contacts) { return _this.contacts = contacts; });
                };
                ContactListComponent.prototype.ngOnInit = function () {
                    this.getContacts();
                };
                ContactListComponent = __decorate([
                    core_1.Component({
                        selector: 'contact-list',
                        templateUrl: 'templates/contact-list.tpl.html',
                        styleUrls: ['src/css/mycomponent.css'],
                        directives: [contact_component_1.ContactComponent],
                        providers: [contact_service_1.ContactService]
                    }), 
                    __metadata('design:paramtypes', [contact_service_1.ContactService])
                ], ContactListComponent);
                return ContactListComponent;
            }());
            exports_1("ContactListComponent", ContactListComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnRhY3QvY29udGFjdC1saXN0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQWtCQTtnQkFLSSw4QkFBb0IsZUFBK0I7b0JBQS9CLG9CQUFlLEdBQWYsZUFBZSxDQUFnQjtvQkFGM0Msb0JBQWUsR0FBRyxJQUFJLENBQUM7Z0JBRXNCLENBQUM7Z0JBRXRELHVDQUFRLEdBQVIsVUFBUyxPQUFPO29CQUNaLElBQUksQ0FBQyxlQUFlLEdBQUcsT0FBTyxDQUFDO2dCQUNuQyxDQUFDO2dCQUVELDBDQUFXLEdBQVg7b0JBQUEsaUJBRUM7b0JBREcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxJQUFJLENBQUMsVUFBQyxRQUFtQixJQUFJLE9BQUEsS0FBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLEVBQXhCLENBQXdCLENBQUMsQ0FBQztnQkFDOUYsQ0FBQztnQkFDRCx1Q0FBUSxHQUFSO29CQUNJLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztnQkFDdkIsQ0FBQztnQkF6Qkw7b0JBQUMsZ0JBQVMsQ0FBQzt3QkFDUCxRQUFRLEVBQUUsY0FBYzt3QkFDeEIsV0FBVyxFQUFFLGlDQUFpQzt3QkFDOUMsU0FBUyxFQUFFLENBQUMseUJBQXlCLENBQUM7d0JBQ3RDLFVBQVUsRUFBRSxDQUFDLG9DQUFnQixDQUFDO3dCQUM5QixTQUFTLEVBQUUsQ0FBQyxnQ0FBYyxDQUFDO3FCQUU5QixDQUFDOzt3Q0FBQTtnQkFtQkYsMkJBQUM7WUFBRCxDQWpCQSxBQWlCQyxJQUFBO1lBakJELHVEQWlCQyxDQUFBIiwiZmlsZSI6ImNvbnRhY3QvY29udGFjdC1saXN0LmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQ3JlYXRlZCBieSBjb25zdWx0YWRkIG9uIDI2LzcvMTYuXG4gKi9cbi8vLzxyZWZlcmVuY2UgcGF0aD1cIi4uLy4uL25vZGVfbW9kdWxlcy9hbmd1bGFyMi90eXBpbmdzL2Jyb3dzZXIuZC50c1wiLz5cbmltcG9ydCB7Q29tcG9uZW50LCBPbkluaXR9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xuaW1wb3J0IHtDb250YWN0Q29tcG9uZW50fSBmcm9tIFwiLi9jb250YWN0LmNvbXBvbmVudFwiO1xuaW1wb3J0IHtDb250YWN0U2VydmljZX0gZnJvbSBcIi4vY29udGFjdC5zZXJ2aWNlXCI7XG5pbXBvcnQge0NvbnRhY3R9IGZyb20gXCIuL2NvbnRhY3RcIjtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdjb250YWN0LWxpc3QnLFxuICAgIHRlbXBsYXRlVXJsOiAndGVtcGxhdGVzL2NvbnRhY3QtbGlzdC50cGwuaHRtbCcsXG4gICAgc3R5bGVVcmxzOiBbJ3NyYy9jc3MvbXljb21wb25lbnQuY3NzJ10sXG4gICAgZGlyZWN0aXZlczogW0NvbnRhY3RDb21wb25lbnRdLFxuICAgIHByb3ZpZGVyczogW0NvbnRhY3RTZXJ2aWNlXVxuXG59KVxuXG5leHBvcnQgY2xhc3MgQ29udGFjdExpc3RDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXR7XG4gICAgcHVibGljIGNvbnRhY3RzOiBDb250YWN0W107XG5cbiAgICBwdWJsaWMgIHNlbGVjdGVkQ29udGFjdCA9IG51bGw7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9jb250YWN0U2VydmljZTogQ29udGFjdFNlcnZpY2Upe31cblxuICAgIG9uU2VsZWN0KGNvbnRhY3QpIHtcbiAgICAgICAgdGhpcy5zZWxlY3RlZENvbnRhY3QgPSBjb250YWN0O1xuICAgIH1cblxuICAgIGdldENvbnRhY3RzKCl7XG4gICAgICAgIHRoaXMuX2NvbnRhY3RTZXJ2aWNlLmdldENvbnRhY3RzKCkudGhlbigoY29udGFjdHM6IENvbnRhY3RbXSk9PiB0aGlzLmNvbnRhY3RzID0gY29udGFjdHMpO1xuICAgIH1cbiAgICBuZ09uSW5pdCgpOmFueXtcbiAgICAgICAgdGhpcy5nZXRDb250YWN0cygpO1xuICAgIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
