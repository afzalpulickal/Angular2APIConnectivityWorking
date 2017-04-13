import { Injectable } from '@angular/core'
import { DALServiceBase } from './DAL/DALServiceBase';
//import { UUID } from 'angular2-uuid';

@Injectable()
export class SampleService  {
    constructor(private service: DALServiceBase) {
        this.service.ExecuteGet("https://jsonplaceholder.typicode.com/posts/1", {}, (data) => {
            var k = 5;
        })
    }
    completed(data) {
        var k = data;
        //var uuid = UUID.UUID();
    }
    getName(): string {
        return "afzal from sample service";
    }
}