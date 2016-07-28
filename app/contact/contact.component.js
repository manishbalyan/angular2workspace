System.register(['angular2/core', "angular2/router"], function(exports_1, context_1) {
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
    var core_1, router_1;
    var ContactComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            }],
        execute: function() {
            ContactComponent = (function () {
                function ContactComponent(_router) {
                    this._router = _router;
                    this.contact = null;
                }
                ContactComponent.prototype.onCreateNew = function () {
                    this._router.navigate(['NewContact', { lastname: this.contact.lastName }]);
                };
                ContactComponent = __decorate([
                    core_1.Component({
                        selector: 'contact',
                        templateUrl: 'templates/contact.tpl.html',
                        styleUrls: ['src/css/mycomponent.css'],
                        inputs: ["contact"] //this input configuration tell angular or component to receive data that is bound to contact property
                    }), 
                    __metadata('design:paramtypes', [router_1.Router])
                ], ContactComponent);
                return ContactComponent;
            }());
            exports_1("ContactComponent", ContactComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnRhY3QvY29udGFjdC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFjQTtnQkFHUSwwQkFBb0IsT0FBZTtvQkFBZixZQUFPLEdBQVAsT0FBTyxDQUFRO29CQUY1QixZQUFPLEdBQVcsSUFBSSxDQUFDO2dCQUVPLENBQUM7Z0JBQ3RDLHNDQUFXLEdBQVg7b0JBQ0ksSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQyxZQUFZLEVBQUUsRUFBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLEVBQUMsQ0FBQyxDQUFDLENBQUE7Z0JBQzVFLENBQUM7Z0JBYlQ7b0JBQUMsZ0JBQVMsQ0FBQzt3QkFDUCxRQUFRLEVBQUUsU0FBUzt3QkFDbkIsV0FBVyxFQUFFLDRCQUE0Qjt3QkFDekMsU0FBUyxFQUFFLENBQUMseUJBQXlCLENBQUM7d0JBQ3RDLE1BQU0sRUFBRSxDQUFDLFNBQVMsQ0FBQyxDQUFDLHNHQUFzRztxQkFDN0gsQ0FBQzs7b0NBQUE7Z0JBU0YsdUJBQUM7WUFBRCxDQVBBLEFBT0MsSUFBQTtZQVBELCtDQU9DLENBQUEiLCJmaWxlIjoiY29udGFjdC9jb250YWN0LmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQ3JlYXRlZCBieSBjb25zdWx0YWRkIG9uIDI2LzcvMTYuXG4gKi9cbmltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdhbmd1bGFyMi9jb3JlJztcbmltcG9ydCB7Um91dGVyfSBmcm9tIFwiYW5ndWxhcjIvcm91dGVyXCI7XG5pbXBvcnQge0NvbnRhY3R9IGZyb20gXCIuL2NvbnRhY3RcIjtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdjb250YWN0JyxcbiAgICB0ZW1wbGF0ZVVybDogJ3RlbXBsYXRlcy9jb250YWN0LnRwbC5odG1sJyxcbiAgICBzdHlsZVVybHM6IFsnc3JjL2Nzcy9teWNvbXBvbmVudC5jc3MnXSxcbiAgICBpbnB1dHM6IFtcImNvbnRhY3RcIl0gLy90aGlzIGlucHV0IGNvbmZpZ3VyYXRpb24gdGVsbCBhbmd1bGFyIG9yIGNvbXBvbmVudCB0byByZWNlaXZlIGRhdGEgdGhhdCBpcyBib3VuZCB0byBjb250YWN0IHByb3BlcnR5XG59KVxuXG5leHBvcnQgY2xhc3MgQ29udGFjdENvbXBvbmVudHtcbiAgICAgICAgcHVibGljIGNvbnRhY3Q6IENvbnRhY3Q9IG51bGw7XG5cbiAgICAgICAgY29uc3RydWN0b3IocHJpdmF0ZSBfcm91dGVyOiBSb3V0ZXIpe31cbiAgICAgICAgb25DcmVhdGVOZXcoKXtcbiAgICAgICAgICAgIHRoaXMuX3JvdXRlci5uYXZpZ2F0ZShbJ05ld0NvbnRhY3QnLCB7bGFzdG5hbWU6IHRoaXMuY29udGFjdC5sYXN0TmFtZX1dKVxuICAgICAgICB9XG59XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
