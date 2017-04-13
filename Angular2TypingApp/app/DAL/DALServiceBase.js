System.register(["@angular/core", "@angular/http", "rxjs/Rx"], function (exports_1, context_1) {
    "use strict";
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var __moduleName = context_1 && context_1.id;
    var core_1, http_1, DALServiceBase;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (_1) {
            }
        ],
        execute: function () {
            DALServiceBase = (function () {
                function DALServiceBase(http) {
                    this.http = http;
                }
                DALServiceBase.prototype.ExecutePost = function (url, param, completed) {
                    var _this = this;
                    return this.http.post(url, param.Data, { headers: param.params }).map(function (res) { return res.json(); }).subscribe(function (data) { return _this.ExecuteCallBack(completed, {
                        IsSuccess: true,
                        Data: data
                    }, url, param); }, function (err) { return _this.ExecuteCallBack(completed, {
                        IsSuccess: false
                    }, url, param); }, function () { return console.log('Random Quote Complete'); });
                };
                DALServiceBase.prototype.ExecuteGet = function (url, param, completed) {
                    var _this = this;
                    return this.http.get(url, { headers: param }).map(function (res) { return res.json(); }).subscribe(function (data) { return _this.ExecuteCallBack(completed, {
                        IsSuccess: true,
                        Data: data
                    }, url, param); }, function (err) { return _this.ExecuteCallBack(completed, {
                        IsSuccess: false
                    }, url, param); }, function () { return console.log('Random Quote Complete'); });
                };
                //FormatUrl(url: string) {
                //    if (this.BaseUrl) {
                //        return this.CreateUrl(this.BaseUrl.BaseUrl, url);
                //    }
                //    return url;
                //}
                //CreateUrl(baseUrl: IBaseAjaxUrl, url: string) {
                //    return ConfigurationManager.DesignerServiceUrl + this.GetUrlBase(baseUrl) + url;
                //}
                //private GetUrlBase(ajaxUrlBase: IBaseAjaxUrl): string {
                //    if (ConfigurationManager.Enviroment == Enviroment.Enterprise) {
                //        return ajaxUrlBase.Enterprise.Base;
                //    }
                //    else {                                          //need to check sharepoint 2013,2010 and O365
                //        return ajaxUrlBase.Sharepoint.Base;
                //    }
                //}
                DALServiceBase.prototype.ExecuteCallBack = function (callback, data, url, param) {
                    try {
                        callback(data);
                    }
                    catch (ex) {
                        throw ex;
                    }
                };
                return DALServiceBase;
            }());
            DALServiceBase = __decorate([
                core_1.Injectable(),
                __metadata("design:paramtypes", [http_1.Http])
            ], DALServiceBase);
            exports_1("DALServiceBase", DALServiceBase);
        }
    };
});
//# sourceMappingURL=DALServiceBase.js.map