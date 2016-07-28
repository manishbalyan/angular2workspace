System.register(['angular2/core'], function(exports_1, context_1) {
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
    var core_1;
    var ContactComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            ContactComponent = (function () {
                function ContactComponent() {
                    this.contact = {};
                }
                ContactComponent = __decorate([
                    core_1.Component({
                        selector: 'contact',
                        templateUrl: 'templates/contact.tpl.html',
                        styleUrls: ['src/css/mycomponent.css'],
                        inputs: ["contact"] //this input configuration tell angular or component to receive data that is bound to contact property
                    }), 
                    __metadata('design:paramtypes', [])
                ], ContactComponent);
                return ContactComponent;
            }());
            exports_1("ContactComponent", ContactComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnRhY3QuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBWUE7Z0JBQUE7b0JBQ2UsWUFBTyxHQUFHLEVBQUUsQ0FBQztnQkFDNUIsQ0FBQztnQkFURDtvQkFBQyxnQkFBUyxDQUFDO3dCQUNQLFFBQVEsRUFBRSxTQUFTO3dCQUNuQixXQUFXLEVBQUUsNEJBQTRCO3dCQUN6QyxTQUFTLEVBQUUsQ0FBQyx5QkFBeUIsQ0FBQzt3QkFDdEMsTUFBTSxFQUFFLENBQUMsU0FBUyxDQUFDLENBQUMsc0dBQXNHO3FCQUM3SCxDQUFDOztvQ0FBQTtnQkFJRix1QkFBQztZQUFELENBRkEsQUFFQyxJQUFBO1lBRkQsK0NBRUMsQ0FBQSIsImZpbGUiOiJjb250YWN0LmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQ3JlYXRlZCBieSBjb25zdWx0YWRkIG9uIDI2LzcvMTYuXG4gKi9cbmltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdhbmd1bGFyMi9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdjb250YWN0JyxcbiAgICB0ZW1wbGF0ZVVybDogJ3RlbXBsYXRlcy9jb250YWN0LnRwbC5odG1sJyxcbiAgICBzdHlsZVVybHM6IFsnc3JjL2Nzcy9teWNvbXBvbmVudC5jc3MnXSxcbiAgICBpbnB1dHM6IFtcImNvbnRhY3RcIl0gLy90aGlzIGlucHV0IGNvbmZpZ3VyYXRpb24gdGVsbCBhbmd1bGFyIG9yIGNvbXBvbmVudCB0byByZWNlaXZlIGRhdGEgdGhhdCBpcyBib3VuZCB0byBjb250YWN0IHByb3BlcnR5XG59KVxuXG5leHBvcnQgY2xhc3MgQ29udGFjdENvbXBvbmVudHtcbiAgICAgICAgcHVibGljIGNvbnRhY3QgPSB7fTtcbn1cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
