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

    convertToUppercase(text) {
        const textToJson = {
            "value": text
        }

        return this.http.post(this.ROOT_URL + "uppercase", textToJson);
    }

    convertToLowercase(text) {
        const textToJson = {
            "value": text
        }

        return this.http.post(this.ROOT_URL + "lowercase", textToJson);
    }

    convertToCamelCase(text) {
        const textToJson = {
            "value": text
        }

        return this.http.post(this.ROOT_URL + "camelCase", textToJson);
    }

    convert_to_snake_case(text) {
        const textToJson = {
            "value": text
        }

        return this.http.post(this.ROOT_URL + "snake_case", textToJson);
    }

    convertToalternatingCase(text) {
        const textToJson = {
            "value": text
        }

        return this.http.post(this.ROOT_URL + "alternatingCase", textToJson);
    }

    convertToBinary(text) {
        const textToJson = {
            "value": text
        }

        return this.http.post(this.ROOT_URL + "binaryConverter", textToJson);
    }

}