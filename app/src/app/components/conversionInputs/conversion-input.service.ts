import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
    providedIn: "root"
})
 
export class ConversionInputService {
    
    readonly ROOT_URL = "http://localhost:3000/";
    
    responseData = new Array();
    convertedText = new Array();

    constructor(private http: HttpClient) {}

    getRequest(){
        this.http.get(this.ROOT_URL).toPromise().then(data => {          
            this.responseData.push(data);
        });
        console.log(this.responseData, "rota get")
        return this.responseData;
    }

    postRequest(text){
        const textToJson = {
            "value": text
        }


        this.http.post(this.ROOT_URL, textToJson).toPromise().then(data => {
            this.convertedText.push(data);
        })

          return this.convertedText;
    }
}