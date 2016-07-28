System.register(["angular2/core", "./http-test.service"], function(exports_1, context_1) {
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
    var core_1, http_test_service_1;
    var HTTPTestComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_test_service_1_1) {
                http_test_service_1 = http_test_service_1_1;
            }],
        execute: function() {
            HTTPTestComponent = (function () {
                function HTTPTestComponent(_httpService) {
                    this._httpService = _httpService;
                }
                HTTPTestComponent.prototype.onTestGet = function () {
                    var _this = this;
                    this._httpService.getCurrentTime()
                        .subscribe(function (data) { return _this.getData = JSON.stringify(data); }, function (error) { return alert(error); }, function () { return console.log("Finished"); });
                };
                HTTPTestComponent.prototype.onTestPost = function () {
                    var _this = this;
                    this._httpService.postJSON()
                        .subscribe(function (data) { return _this.postData = JSON.stringify(data); }, function (error) { return alert(error); }, function () { return console.log("Finished"); });
                };
                HTTPTestComponent = __decorate([
                    core_1.Component({
                        selector: 'http-test',
                        templateUrl: 'templates/http-test.tpl.html',
                        providers: [http_test_service_1.HTTPTestService]
                    }), 
                    __metadata('design:paramtypes', [http_test_service_1.HTTPTestService])
                ], HTTPTestComponent);
                return HTTPTestComponent;
            }());
            exports_1("HTTPTestComponent", HTTPTestComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImh0dHAtdGVzdC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFZQTtnQkFJSSwyQkFBb0IsWUFBNkI7b0JBQTdCLGlCQUFZLEdBQVosWUFBWSxDQUFpQjtnQkFFakQsQ0FBQztnQkFDRCxxQ0FBUyxHQUFUO29CQUFBLGlCQU9DO29CQU5HLElBQUksQ0FBQyxZQUFZLENBQUMsY0FBYyxFQUFFO3lCQUM3QixTQUFTLENBQ1IsVUFBQSxJQUFJLElBQUksT0FBQSxLQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLEVBQW5DLENBQW1DLEVBQ3pDLFVBQUEsS0FBSyxJQUFJLE9BQUEsS0FBSyxDQUFDLEtBQUssQ0FBQyxFQUFaLENBQVksRUFDckIsY0FBTSxPQUFBLE9BQU8sQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLEVBQXZCLENBQXVCLENBQ2hDLENBQUM7Z0JBQ1YsQ0FBQztnQkFDRCxzQ0FBVSxHQUFWO29CQUFBLGlCQUtDO29CQUpHLElBQUksQ0FBQyxZQUFZLENBQUMsUUFBUSxFQUFFO3lCQUN2QixTQUFTLENBQUMsVUFBQSxJQUFJLElBQUksT0FBQSxLQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLEVBQXBDLENBQW9DLEVBQ25ELFVBQUEsS0FBSyxJQUFJLE9BQUEsS0FBSyxDQUFDLEtBQUssQ0FBQyxFQUFaLENBQVksRUFDckIsY0FBTSxPQUFBLE9BQU8sQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLEVBQXZCLENBQXVCLENBQUMsQ0FBQztnQkFDM0MsQ0FBQztnQkExQkw7b0JBQUMsZ0JBQVMsQ0FBQzt3QkFDUCxRQUFRLEVBQUUsV0FBVzt3QkFDckIsV0FBVyxFQUFFLDhCQUE4Qjt3QkFDM0MsU0FBUyxFQUFFLENBQUMsbUNBQWUsQ0FBQztxQkFDL0IsQ0FBQzs7cUNBQUE7Z0JBdUJGLHdCQUFDO1lBQUQsQ0FyQkEsQUFxQkMsSUFBQTtZQXJCRCxpREFxQkMsQ0FBQSIsImZpbGUiOiJodHRwLXRlc3QuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBDcmVhdGVkIGJ5IGNvbnN1bHRhZGQgb24gMjgvNy8xNi5cbiAqL1xuaW1wb3J0IHtDb21wb25lbnR9IGZyb20gXCJhbmd1bGFyMi9jb3JlXCJcbmltcG9ydCB7SFRUUFRlc3RTZXJ2aWNlfSBmcm9tIFwiLi9odHRwLXRlc3Quc2VydmljZVwiO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ2h0dHAtdGVzdCcsXG4gICAgdGVtcGxhdGVVcmw6ICd0ZW1wbGF0ZXMvaHR0cC10ZXN0LnRwbC5odG1sJyxcbiAgICBwcm92aWRlcnM6IFtIVFRQVGVzdFNlcnZpY2VdXG59KVxuXG5leHBvcnQgY2xhc3MgSFRUUFRlc3RDb21wb25lbnR7XG4gICAgZ2V0RGF0YTogc3RyaW5nO1xuICAgIHBvc3REYXRhOiBzdHJpbmc7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9odHRwU2VydmljZTogSFRUUFRlc3RTZXJ2aWNlKXtcblxuICAgIH1cbiAgICBvblRlc3RHZXQoKXtcbiAgICAgICAgdGhpcy5faHR0cFNlcnZpY2UuZ2V0Q3VycmVudFRpbWUoKVxuICAgICAgICAgICAgLnN1YnNjcmliZShcbiAgICAgICAgICAgICAgZGF0YSA9PiB0aGlzLmdldERhdGEgPSBKU09OLnN0cmluZ2lmeShkYXRhKSxcbiAgICAgICAgICAgICAgICBlcnJvciA9PiBhbGVydChlcnJvciksXG4gICAgICAgICAgICAgICAgKCkgPT4gY29uc29sZS5sb2coXCJGaW5pc2hlZFwiKVxuICAgICAgICAgICAgKTtcbiAgICB9XG4gICAgb25UZXN0UG9zdCgpe1xuICAgICAgICB0aGlzLl9odHRwU2VydmljZS5wb3N0SlNPTigpXG4gICAgICAgICAgICAuc3Vic2NyaWJlKGRhdGEgPT4gdGhpcy5wb3N0RGF0YSA9IEpTT04uc3RyaW5naWZ5KGRhdGEpLFxuICAgICAgICAgICAgICAgIGVycm9yID0+IGFsZXJ0KGVycm9yKSxcbiAgICAgICAgICAgICAgICAoKSA9PiBjb25zb2xlLmxvZyhcIkZpbmlzaGVkXCIpKTtcbiAgICB9XG59XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
