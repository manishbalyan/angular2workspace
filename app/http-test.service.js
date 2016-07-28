System.register(["angular2/core", "angular2/http", 'rxjs/add/operator/map'], function(exports_1, context_1) {
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
    var core_1, http_1;
    var HTTPTestService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (_1) {}],
        execute: function() {
            HTTPTestService = (function () {
                function HTTPTestService(_http) {
                    this._http = _http;
                }
                HTTPTestService.prototype.getCurrentTime = function () {
                    return this._http.get(' http://date.jsontest.com')
                        .map(function (res) { return res.json(); });
                };
                HTTPTestService.prototype.postJSON = function () {
                    var json = JSON.stringify({ var1: 'test', var2: 3 });
                    var params = 'json=' + json;
                    var headers = new http_1.Headers();
                    headers.append('Content-Type', 'application/x-www-form- urlencoded');
                    return this._http.post('http://validate.jsontest.com/?json={%22key%22:%22value%22}', params, { headers: headers })
                        .map(function (res) { return res.json(); });
                };
                HTTPTestService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], HTTPTestService);
                return HTTPTestService;
            }());
            exports_1("HTTPTestService", HTTPTestService);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImh0dHAtdGVzdC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQVFBO2dCQUNJLHlCQUFvQixLQUFXO29CQUFYLFVBQUssR0FBTCxLQUFLLENBQU07Z0JBQUUsQ0FBQztnQkFFbEMsd0NBQWMsR0FBZDtvQkFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsMkJBQTJCLENBQUM7eUJBQzdDLEdBQUcsQ0FBQyxVQUFBLEdBQUcsSUFBSSxPQUFBLEdBQUcsQ0FBQyxJQUFJLEVBQUUsRUFBVixDQUFVLENBQUMsQ0FBQTtnQkFDL0IsQ0FBQztnQkFDRCxrQ0FBUSxHQUFSO29CQUNJLElBQUksSUFBSSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsRUFBQyxJQUFJLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSxDQUFDLEVBQUMsQ0FBQyxDQUFDO29CQUNuRCxJQUFJLE1BQU0sR0FBRyxPQUFPLEdBQUcsSUFBSSxDQUFDO29CQUM1QixJQUFJLE9BQU8sR0FBRyxJQUFJLGNBQU8sRUFBRSxDQUFDO29CQUM1QixPQUFPLENBQUMsTUFBTSxDQUFDLGNBQWMsRUFBRSxvQ0FBb0MsQ0FBQyxDQUFDO29CQUNyRSxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsNERBQTRELEVBQUUsTUFBTSxFQUFFLEVBQUMsT0FBTyxFQUFFLE9BQU8sRUFBQyxDQUFDO3lCQUMzRyxHQUFHLENBQUMsVUFBQSxHQUFHLElBQUksT0FBQSxHQUFHLENBQUMsSUFBSSxFQUFFLEVBQVYsQ0FBVSxDQUFDLENBQUE7Z0JBQy9CLENBQUM7Z0JBZkw7b0JBQUMsaUJBQVUsRUFBRTs7bUNBQUE7Z0JBZ0JiLHNCQUFDO1lBQUQsQ0FmQSxBQWVDLElBQUE7WUFmRCw2Q0FlQyxDQUFBIiwiZmlsZSI6Imh0dHAtdGVzdC5zZXJ2aWNlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBDcmVhdGVkIGJ5IGNvbnN1bHRhZGQgb24gMjgvNy8xNi5cbiAqL1xuaW1wb3J0IHtJbmplY3RhYmxlfSBmcm9tIFwiYW5ndWxhcjIvY29yZVwiXG5pbXBvcnQge0h0dHAsIEhlYWRlcnN9IGZyb20gXCJhbmd1bGFyMi9odHRwXCI7XG5pbXBvcnQgJ3J4anMvYWRkL29wZXJhdG9yL21hcCc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBIVFRQVGVzdFNlcnZpY2V7XG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBfaHR0cDogSHR0cCl7fVxuXG4gICAgZ2V0Q3VycmVudFRpbWUoKXtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2h0dHAuZ2V0KCcgaHR0cDovL2RhdGUuanNvbnRlc3QuY29tJylcbiAgICAgICAgICAgIC5tYXAocmVzID0+IHJlcy5qc29uKCkpXG4gICAgfVxuICAgIHBvc3RKU09OKCl7XG4gICAgICAgIHZhciBqc29uID0gSlNPTi5zdHJpbmdpZnkoe3ZhcjE6ICd0ZXN0JywgdmFyMjogM30pO1xuICAgICAgICB2YXIgcGFyYW1zID0gJ2pzb249JyArIGpzb247XG4gICAgICAgIHZhciBoZWFkZXJzID0gbmV3IEhlYWRlcnMoKTtcbiAgICAgICAgaGVhZGVycy5hcHBlbmQoJ0NvbnRlbnQtVHlwZScsICdhcHBsaWNhdGlvbi94LXd3dy1mb3JtLSB1cmxlbmNvZGVkJyk7XG4gICAgICAgIHJldHVybiB0aGlzLl9odHRwLnBvc3QoJ2h0dHA6Ly92YWxpZGF0ZS5qc29udGVzdC5jb20vP2pzb249eyUyMmtleSUyMjolMjJ2YWx1ZSUyMn0nLCBwYXJhbXMsIHtoZWFkZXJzOiBoZWFkZXJzfSlcbiAgICAgICAgICAgIC5tYXAocmVzID0+IHJlcy5qc29uKCkpXG4gICAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
