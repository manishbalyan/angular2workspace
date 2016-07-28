System.register(["angular2/core", "./contact.service", "angular2/router"], function(exports_1, context_1) {
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
    var core_1, contact_service_1, router_1;
    var NewContactComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (contact_service_1_1) {
                contact_service_1 = contact_service_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            }],
        execute: function() {
            NewContactComponent = (function () {
                function NewContactComponent(_contactService, _router, _routeParams) {
                    // constructor
                    this._contactService = _contactService;
                    this._router = _router;
                    this._routeParams = _routeParams;
                }
                NewContactComponent.prototype.onSubmit = function () {
                    this._contactService.insertContact(this.newContact); //access contact service and insert contact
                    this._router.navigate(['Contacts']); // use navigation method to navigate to Contacts route after onSubmit trigger
                };
                NewContactComponent.prototype.ngOnInit = function () {
                    this.newContact = { firstName: '', lastName: this._routeParams.get("lastName"), email: "", phone: "" };
                };
                NewContactComponent = __decorate([
                    core_1.Component({
                        templateUrl: 'templates/new-contact.tpl.html',
                        styleUrls: ['src/css/mycomponent.css'],
                        providers: [contact_service_1.ContactService]
                    }), 
                    __metadata('design:paramtypes', [contact_service_1.ContactService, router_1.Router, router_1.RouteParams])
                ], NewContactComponent);
                return NewContactComponent;
            }());
            exports_1("NewContactComponent", NewContactComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnRhY3QvbmV3LWNvbnRhY3QuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBZUE7Z0JBR0ksNkJBQW9CLGVBQStCLEVBQVUsT0FBZSxFQUFVLFlBQXlCO29CQUNuQyxjQUFjO29CQUR0RSxvQkFBZSxHQUFmLGVBQWUsQ0FBZ0I7b0JBQVUsWUFBTyxHQUFQLE9BQU8sQ0FBUTtvQkFBVSxpQkFBWSxHQUFaLFlBQVksQ0FBYTtnQkFHL0csQ0FBQztnQkFFRCxzQ0FBUSxHQUFSO29CQUNJLElBQUksQ0FBQyxlQUFlLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLDJDQUEyQztvQkFDaEcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUEsNkVBQTZFO2dCQUNqSCxDQUFDO2dCQUlMLHNDQUFRLEdBQVI7b0JBQ0ksSUFBSSxDQUFDLFVBQVUsR0FBRyxFQUFDLFNBQVMsRUFBRSxFQUFFLEVBQUUsUUFBUSxFQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxFQUFFLEtBQUssRUFBRSxFQUFFLEVBQUUsS0FBSyxFQUFFLEVBQUUsRUFBQyxDQUFDO2dCQUN4RyxDQUFDO2dCQXZCTDtvQkFBQyxnQkFBUyxDQUFDO3dCQUNQLFdBQVcsRUFBRSxnQ0FBZ0M7d0JBQzdDLFNBQVMsRUFBRSxDQUFDLHlCQUF5QixDQUFDO3dCQUN0QyxTQUFTLEVBQUUsQ0FBQyxnQ0FBYyxDQUFDO3FCQUM5QixDQUFDOzt1Q0FBQTtnQkFvQkYsMEJBQUM7WUFBRCxDQWxCQSxBQWtCQyxJQUFBO1lBbEJELHFEQWtCQyxDQUFBIiwiZmlsZSI6ImNvbnRhY3QvbmV3LWNvbnRhY3QuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBDcmVhdGVkIGJ5IGNvbnN1bHRhZGQgb24gMjcvNy8xNi5cbiAqL1xuaW1wb3J0IHtDb21wb25lbnQsIE9uSW5pdH0gZnJvbSBcImFuZ3VsYXIyL2NvcmVcIlxuaW1wb3J0IHtDb250YWN0U2VydmljZX0gZnJvbSBcIi4vY29udGFjdC5zZXJ2aWNlXCI7XG5pbXBvcnQge0NvbnRhY3R9IGZyb20gXCIuL2NvbnRhY3RcIjtcbmltcG9ydCB7Um91dGVyLCBSb3V0ZVBhcmFtc30gZnJvbSBcImFuZ3VsYXIyL3JvdXRlclwiO1xuaW1wb3J0IHtSb3V0ZU1hdGNofSBmcm9tIFwiYW5ndWxhcjIvc3JjL3JvdXRlci9ydWxlcy9ydWxlc1wiO1xuXG5AQ29tcG9uZW50KHtcbiAgICB0ZW1wbGF0ZVVybDogJ3RlbXBsYXRlcy9uZXctY29udGFjdC50cGwuaHRtbCcsXG4gICAgc3R5bGVVcmxzOiBbJ3NyYy9jc3MvbXljb21wb25lbnQuY3NzJ10sXG4gICAgcHJvdmlkZXJzOiBbQ29udGFjdFNlcnZpY2VdXG59KVxuXG5leHBvcnQgY2xhc3MgTmV3Q29udGFjdENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdHtcbiAgICAvLyBjcmVhdGUgY29uc3RydWN0b3IgdG8gaW5qZWN0IG91ciBzZXJ2aWNlIGluIGNvbXBvbmVudHNcbiAgICBuZXdDb250YWN0OiBDb250YWN0O1xuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgX2NvbnRhY3RTZXJ2aWNlOiBDb250YWN0U2VydmljZSwgcHJpdmF0ZSBfcm91dGVyOiBSb3V0ZXIsIHByaXZhdGUgX3JvdXRlUGFyYW1zOiBSb3V0ZVBhcmFtcyl7IC8vaW4gb3JkZXIgdG8gbmF2aWdhdGUgbmplY3Qgcm91dGVyIHRvIHlvdXIgY2xhc3NcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gY29uc3RydWN0b3JcblxuICAgIH1cblxuICAgIG9uU3VibWl0KCl7XG4gICAgICAgIHRoaXMuX2NvbnRhY3RTZXJ2aWNlLmluc2VydENvbnRhY3QodGhpcy5uZXdDb250YWN0KTsgLy9hY2Nlc3MgY29udGFjdCBzZXJ2aWNlIGFuZCBpbnNlcnQgY29udGFjdFxuICAgICAgICB0aGlzLl9yb3V0ZXIubmF2aWdhdGUoWydDb250YWN0cyddKTsvLyB1c2UgbmF2aWdhdGlvbiBtZXRob2QgdG8gbmF2aWdhdGUgdG8gQ29udGFjdHMgcm91dGUgYWZ0ZXIgb25TdWJtaXQgdHJpZ2dlclxuICAgICAgICB9XG5cblxuXG4gICAgbmdPbkluaXQoKTogYW55e1xuICAgICAgICB0aGlzLm5ld0NvbnRhY3QgPSB7Zmlyc3ROYW1lOiAnJywgbGFzdE5hbWU6dGhpcy5fcm91dGVQYXJhbXMuZ2V0KFwibGFzdE5hbWVcIiksIGVtYWlsOiBcIlwiLCBwaG9uZTogXCJcIn07XG4gICAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
