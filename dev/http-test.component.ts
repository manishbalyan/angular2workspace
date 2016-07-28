/**
 * Created by consultadd on 28/7/16.
 */
import {Component} from "angular2/core"
import {HTTPTestService} from "./http-test.service";

@Component({
    selector: 'http-test',
    templateUrl: 'templates/http-test.tpl.html',
    providers: [HTTPTestService]
})

export class HTTPTestComponent{
    getData: string;
    postData: string;

    constructor(private _httpService: HTTPTestService){

    }
    onTestGet(){
        this._httpService.getCurrentTime()
            .subscribe(
              data => this.getData = JSON.stringify(data),
                error => alert(error),
                () => console.log("Finished")
            );
    }
    onTestPost(){
        this._httpService.postJSON()
            .subscribe(data => this.postData = JSON.stringify(data),
                error => alert(error),
                () => console.log("Finished"));
    }
}
