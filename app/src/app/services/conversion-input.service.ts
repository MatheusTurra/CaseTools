import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
    providedIn: "root"
})
 
export class ConversionInputService {
    
    readonly ROOT_URL = "http://localhost:3000/";
    
    responseData = new Array();
    convertedText;

    constructor(private http: HttpClient) {}

    getRequest(){
        this.http.get(this.ROOT_URL).toPromise().then(data => {          
            this.responseData.push(data);
        });
        console.log(this.responseData, "rota get")
        return this.responseData;
    }

    convertToUppercase(text){
        const textToJson = {
            "value": text
        }

        return this.http.post(this.ROOT_URL + "uppercase", textToJson);
          
    }
}