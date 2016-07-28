System.register(["angular2/core"], function(exports_1, context_1) {
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
    var MyComponentComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            MyComponentComponent = (function () {
                function MyComponentComponent() {
                }
                MyComponentComponent.prototype.ngOnInit = function () {
                    this.name = 'Manish';
                };
                MyComponentComponent = __decorate([
                    core_1.Component({
                        selector: 'my-component',
                        template: "\n      Hi I'm <span [style.color]=\"inputElement.value==='yes' ? 'blue': ''\">{{name}}</span> and this is my first angular2 component! and <br>\n      <span [class.is-awesome]=\"inputElement.value==='yes'\">this is so awesome!</span>\n     \n      <br><br>\n      Is it Awesome?\n      <input type=\"text\" #inputElement (keyup)=\"0\"/> \n      <br><br>\n      <button [disabled]=\"inputElement.value!=='yes'\">enabled if 'yes' is entered</button>\n      \n  ",
                        //we use event to trigger the event wghen vale is enetered in input tag
                        // in span tag we use class buidin directive to attach css class property to the text if the variable value is yes
                        styleUrls: ['src/css/mycomponent.css'] //this will attach css to angular document
                    }), 
                    __metadata('design:paramtypes', [])
                ], MyComponentComponent);
                return MyComponentComponent;
            }());
            exports_1("MyComponentComponent", MyComponentComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm15LWNvbXBvbmVudC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUF5QkE7Z0JBQUE7Z0JBTUEsQ0FBQztnQkFKRyx1Q0FBUSxHQUFSO29CQUNJLElBQUksQ0FBQyxJQUFJLEdBQUcsUUFBUSxDQUFDO2dCQUN6QixDQUFDO2dCQXZCTDtvQkFBQyxnQkFBUyxDQUFDO3dCQUNULFFBQVEsRUFBRSxjQUFjO3dCQUN4QixRQUFRLEVBQUUsOGNBVVQ7d0JBQ0MsdUVBQXVFO3dCQUN2RSxrSEFBa0g7d0JBQ3BILFNBQVMsRUFBRSxDQUFDLHlCQUF5QixDQUFDLENBQUEsMENBQTBDO3FCQUVqRixDQUFDOzt3Q0FBQTtnQkFRRiwyQkFBQztZQUFELENBTkEsQUFNQyxJQUFBO1lBTkQsdURBTUMsQ0FBQSIsImZpbGUiOiJteS1jb21wb25lbnQuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBDcmVhdGVkIGJ5IGNvbnN1bHRhZGQgb24gMjYvNy8xNi5cbiAqL1xuaW1wb3J0IHtDb21wb25lbnQsIE9uSW5pdH0gZnJvbSBcImFuZ3VsYXIyL2NvcmVcIjtcblxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdteS1jb21wb25lbnQnLFxuICB0ZW1wbGF0ZTogYFxuICAgICAgSGkgSSdtIDxzcGFuIFtzdHlsZS5jb2xvcl09XCJpbnB1dEVsZW1lbnQudmFsdWU9PT0neWVzJyA/ICdibHVlJzogJydcIj57e25hbWV9fTwvc3Bhbj4gYW5kIHRoaXMgaXMgbXkgZmlyc3QgYW5ndWxhcjIgY29tcG9uZW50ISBhbmQgPGJyPlxuICAgICAgPHNwYW4gW2NsYXNzLmlzLWF3ZXNvbWVdPVwiaW5wdXRFbGVtZW50LnZhbHVlPT09J3llcydcIj50aGlzIGlzIHNvIGF3ZXNvbWUhPC9zcGFuPlxuICAgICBcbiAgICAgIDxicj48YnI+XG4gICAgICBJcyBpdCBBd2Vzb21lP1xuICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgI2lucHV0RWxlbWVudCAoa2V5dXApPVwiMFwiLz4gXG4gICAgICA8YnI+PGJyPlxuICAgICAgPGJ1dHRvbiBbZGlzYWJsZWRdPVwiaW5wdXRFbGVtZW50LnZhbHVlIT09J3llcydcIj5lbmFibGVkIGlmICd5ZXMnIGlzIGVudGVyZWQ8L2J1dHRvbj5cbiAgICAgIFxuICBgLCAvLyBoZXJlIGluIGlucHV0IHRhZyB3ZSB1c2UgIyB0YWcgdG8gY3JlYXRlIGEgbG9jYWwgaW5wdXQgZWxlbWVudCB2YXJpYWJsZVxuICAgIC8vd2UgdXNlIGV2ZW50IHRvIHRyaWdnZXIgdGhlIGV2ZW50IHdnaGVuIHZhbGUgaXMgZW5ldGVyZWQgaW4gaW5wdXQgdGFnXG4gICAgLy8gaW4gc3BhbiB0YWcgd2UgdXNlIGNsYXNzIGJ1aWRpbiBkaXJlY3RpdmUgdG8gYXR0YWNoIGNzcyBjbGFzcyBwcm9wZXJ0eSB0byB0aGUgdGV4dCBpZiB0aGUgdmFyaWFibGUgdmFsdWUgaXMgeWVzXG4gIHN0eWxlVXJsczogWydzcmMvY3NzL215Y29tcG9uZW50LmNzcyddLy90aGlzIHdpbGwgYXR0YWNoIGNzcyB0byBhbmd1bGFyIGRvY3VtZW50XG5cbn0pXG5cbmV4cG9ydCBjbGFzcyBNeUNvbXBvbmVudENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdHtcbiAgICBuYW1lOiBzdHJpbmc7XG4gICAgbmdPbkluaXQoKTogYW55IHtcbiAgICAgICAgdGhpcy5uYW1lID0gJ01hbmlzaCc7XG4gICAgfVxuXG59XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
