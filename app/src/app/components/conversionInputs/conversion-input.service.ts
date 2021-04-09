import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
    providedIn: "root"
})
 
export class ConversionInputService {
    
    readonly ROOT_URL = "http://localhost:3000/";

    responseData = [];

    constructor(private http: HttpClient) {}

    getRequest(){
        this.http.get(this.ROOT_URL).toPromise().then(data => {          
            this.responseData.push(data);
        });

        return this.responseData;
    }

    postRequest(text){
        const textToJson = {
            "value": text
        }
        this.http.post(this.ROOT_URL, textToJson).toPromise().then(data => {
            console.log(data);
        })
    }
}