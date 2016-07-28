System.register(["angular2/core", "./mock-contact"], function(exports_1, context_1) {
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
    var core_1, mock_contact_1;
    var ContactService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (mock_contact_1_1) {
                mock_contact_1 = mock_contact_1_1;
            }],
        execute: function() {
            ContactService = (function () {
                function ContactService() {
                }
                ContactService.prototype.getContacts = function () {
                    return Promise.resolve(mock_contact_1.CONTACTS);
                };
                ContactService.prototype.insertContact = function (contact) {
                    Promise.resolve(mock_contact_1.CONTACTS).then(function (contacts) { return contacts.push(contact); });
                };
                ContactService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [])
                ], ContactService);
                return ContactService;
            }());
            exports_1("ContactService", ContactService);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnRhY3QvY29udGFjdC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBU0E7Z0JBQUE7Z0JBT0EsQ0FBQztnQkFORyxvQ0FBVyxHQUFYO29CQUNJLE1BQU0sQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLHVCQUFRLENBQUMsQ0FBQztnQkFDckMsQ0FBQztnQkFDRCxzQ0FBYSxHQUFiLFVBQWMsT0FBZ0I7b0JBQzFCLE9BQU8sQ0FBQyxPQUFPLENBQUMsdUJBQVEsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFDLFFBQW1CLElBQUcsT0FBQSxRQUFRLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxFQUF0QixDQUFzQixDQUFDLENBQUM7Z0JBQ2xGLENBQUM7Z0JBUEw7b0JBQUMsaUJBQVUsRUFBRTs7a0NBQUE7Z0JBUWIscUJBQUM7WUFBRCxDQVBBLEFBT0MsSUFBQTtZQVBELDJDQU9DLENBQUEiLCJmaWxlIjoiY29udGFjdC9jb250YWN0LnNlcnZpY2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIENyZWF0ZWQgYnkgY29uc3VsdGFkZCBvbiAyNy83LzE2LlxuICovXG4vLy88cmVmZXJlbmNlIHBhdGg9XCIuLi8uLi9ub2RlX21vZHVsZXMvYW5ndWxhcjIvdHlwaW5ncy9icm93c2VyLmQudHNcIi8+XG5pbXBvcnQge0luamVjdGFibGV9IGZyb20gXCJhbmd1bGFyMi9jb3JlXCJcbmltcG9ydCB7Q09OVEFDVFN9IGZyb20gXCIuL21vY2stY29udGFjdFwiO1xuaW1wb3J0IHtDb250YWN0fSBmcm9tIFwiLi9jb250YWN0XCI7XG5cbkBJbmplY3RhYmxlKCkgLy8gdGVsbCBhbmd1YXIyIHRvIGluamVjdCBvdXIgY2xhc3MgaW50byBjb21wb25lbnRcbmV4cG9ydCBjbGFzcyBDb250YWN0U2VydmljZXtcbiAgICBnZXRDb250YWN0cygpe1xuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKENPTlRBQ1RTKTtcbiAgICB9XG4gICAgaW5zZXJ0Q29udGFjdChjb250YWN0OiBDb250YWN0KXtcbiAgICAgICAgUHJvbWlzZS5yZXNvbHZlKENPTlRBQ1RTKS50aGVuKChjb250YWN0czogQ29udGFjdFtdKT0+Y29udGFjdHMucHVzaChjb250YWN0KSk7XG4gICAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
