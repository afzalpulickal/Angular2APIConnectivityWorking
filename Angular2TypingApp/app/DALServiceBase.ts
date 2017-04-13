import { Injectable } from '@angular/core';
import { Http, HTTP_PROVIDERS, Response } from '@angular/http';
import 'rxjs/Rx';
@Injectable()

export class DALServiceBase {
    constructor(private http: Http) {

    }
    ExecutePost<TParam, TResult>(url: string, param: IHttpOptions<TParam>, completed: Action<IServiceResult<any>>) {
        return this.http.post(url, param.Data, { headers: param.params }).map((res: Response) => res.json()).subscribe(
            data => this.ExecuteCallBack(completed, {
                IsSuccess: true,
                Data: data
            }, url, param),
            err => this.ExecuteCallBack(completed, {
                IsSuccess: false
            }, url, param),
            () => console.log('Random Quote Complete')
        );
    }

    ExecuteGet<T>(url: string, param: any, completed: Action<IServiceResult<any>>) {
        return this.http.get(url, { headers: param }).map((res: Response) => res.json()).subscribe(
            data => this.ExecuteCallBack(completed, {
                IsSuccess: true,
                Data: data
            }, url, param),
            err => this.ExecuteCallBack(completed, {
                IsSuccess: false
            }, url, param),
            () => console.log('Random Quote Complete')
        );
    }

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

    private ExecuteCallBack(callback: Action<IServiceResult<any>>, data, url: string, param: any) {
        try {
            callback(data);
        } catch (ex) {
            throw ex;
        }
    }



}


export interface IHttpOptions<T> {
    Data: T;
    params?: any;
}

export interface IServiceResult<T> {
    IsSuccess: boolean;
    Data?: T;
}

interface Action<T> {
    (item: T): void;
}