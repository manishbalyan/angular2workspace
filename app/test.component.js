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
    var TestComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            TestComponent = (function () {
                function TestComponent() {
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
                TestComponent.prototype.onSelect = function (contact) {
                    this.selectedContact = contact;
                };
                TestComponent = __decorate([
                    core_1.Component({
                        selector: 'test',
                        templateUrl: '../templates/contact.tpl.html',
                        styleUrls: ['src/css/mycomponent.css']
                    }),
                    __metadata('design:paramtypes', [])
                ], TestComponent);
                return TestComponent;
            }());
            exports_1("TestComponent", TestComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlc3QuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBV0E7Z0JBQUE7b0JBQ2UsYUFBUSxHQUFFO3dCQUNiOzRCQUNBLFNBQVMsRUFBRSxRQUFROzRCQUNuQixRQUFRLEVBQUUsUUFBUTs0QkFDbEIsS0FBSyxFQUFFLDJCQUEyQjs0QkFDbEMsS0FBSyxFQUFFLGdCQUFnQjt5QkFDMUI7d0JBQ0c7NEJBQ0ksU0FBUyxFQUFFLFNBQVM7NEJBQ3BCLFFBQVEsRUFBRSxTQUFTOzRCQUNuQixLQUFLLEVBQUUsNEJBQTRCOzRCQUNuQyxLQUFLLEVBQUUsZ0JBQWdCO3lCQUMxQjt3QkFDRDs0QkFDSSxTQUFTLEVBQUUsU0FBUzs0QkFDcEIsUUFBUSxFQUFFLFNBQVM7NEJBQ25CLEtBQUssRUFBRSw0QkFBNEI7NEJBQ25DLEtBQUssRUFBRSxnQkFBZ0I7eUJBQzFCO3dCQUNEOzRCQUNJLFNBQVMsRUFBRSxTQUFTOzRCQUNwQixRQUFRLEVBQUUsU0FBUzs0QkFDbkIsS0FBSyxFQUFFLDRCQUE0Qjs0QkFDbkMsS0FBSyxFQUFFLGdCQUFnQjt5QkFDMUI7cUJBQ0osQ0FBQztvQkFDTSxvQkFBZSxHQUFHLEVBQUUsQ0FBQztnQkFLckMsQ0FBQztnQkFIRyxnQ0FBUSxHQUFSLFVBQVMsT0FBTztvQkFDWixJQUFJLENBQUMsZUFBZSxHQUFHLE9BQU8sQ0FBQztnQkFDbkMsQ0FBQztnQkFyQ0w7b0JBQUMsZ0JBQVMsQ0FBQzt3QkFDUCxRQUFRLEVBQUUsTUFBTTt3QkFDaEIsV0FBVyxFQUFFLHlCQUF5Qjt3QkFDdEMsU0FBUyxFQUFFLENBQUMseUJBQXlCLENBQUM7cUJBQ3pDLENBQUM7O2lDQUFBO2dCQWtDRixvQkFBQztZQUFELENBaENBLEFBZ0NDLElBQUE7WUFoQ0QseUNBZ0NDLENBQUEiLCJmaWxlIjoidGVzdC5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIENyZWF0ZWQgYnkgY29uc3VsdGFkZCBvbiAyNi83LzE2LlxuICovXG5pbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAndGVzdCcsXG4gICAgdGVtcGxhdGVVcmw6ICd0ZW1wbGF0ZXMvdGVzdC50cGwuaHRtbCcsXG4gICAgc3R5bGVVcmxzOiBbJ3NyYy9jc3MvbXljb21wb25lbnQuY3NzJ11cbn0pXG5cbmV4cG9ydCBjbGFzcyBUZXN0Q29tcG9uZW50e1xuICAgICAgICBwdWJsaWMgY29udGFjdHMgPVtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgIGZpcnN0bmFtZTogJ01hbmlzaCcsXG4gICAgICAgICAgICBsYXN0bmFtZTogJ0JhbHlhbicsXG4gICAgICAgICAgICBlbWFpbDogJ2JhbHlhbjA1Lm1hbmlzaEBnbWFpbC5jb20nLFxuICAgICAgICAgICAgcGhvbmU6ICcrOTEtOTk5OTg3MzUyNCdcbiAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBmaXJzdG5hbWU6ICdNYW5pc2gxJyxcbiAgICAgICAgICAgICAgICBsYXN0bmFtZTogJ0JhbHlhbjEnLFxuICAgICAgICAgICAgICAgIGVtYWlsOiAnYmFseWFuMDUubWFuaXNoMUBnbWFpbC5jb20nLFxuICAgICAgICAgICAgICAgIHBob25lOiAnKzkxLTk5OTk4NzM1MjEnXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGZpcnN0bmFtZTogJ01hbmlzaDInLFxuICAgICAgICAgICAgICAgIGxhc3RuYW1lOiAnQmFseWFuMicsXG4gICAgICAgICAgICAgICAgZW1haWw6ICdiYWx5YW4wNS5tYW5pc2gyQGdtYWlsLmNvbScsXG4gICAgICAgICAgICAgICAgcGhvbmU6ICcrOTEtOTk5OTg3MzUyMidcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgZmlyc3RuYW1lOiAnTWFuaXNoMycsXG4gICAgICAgICAgICAgICAgbGFzdG5hbWU6ICdCYWx5YW4zJyxcbiAgICAgICAgICAgICAgICBlbWFpbDogJ2JhbHlhbjA1Lm1hbmlzaDNAZ21haWwuY29tJyxcbiAgICAgICAgICAgICAgICBwaG9uZTogJys5MS05OTk5ODczNTIzJ1xuICAgICAgICAgICAgfSxcbiAgICAgICAgXTtcbiAgICAgICAgcHVibGljICBzZWxlY3RlZENvbnRhY3QgPSB7fTtcblxuICAgIG9uU2VsZWN0KGNvbnRhY3QpIHtcbiAgICAgICAgdGhpcy5zZWxlY3RlZENvbnRhY3QgPSBjb250YWN0O1xuICAgIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
