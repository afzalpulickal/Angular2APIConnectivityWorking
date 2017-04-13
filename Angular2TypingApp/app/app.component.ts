import { Component } from '@angular/core';
import { SampleService } from './sample.service';


@Component({
    selector: 'my-app',
    templateUrl: 'View/home.html',
    providers: [SampleService]
})
export class AppComponent {
    constructor(sampleService: SampleService) {
        this.name = sampleService.getName();
    }
    name: string;
}