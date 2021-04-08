import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
    providedIn: "root"
})
 
export class ConversionInputService {
    
    send(text) {
        console.log(text.value)
    }
}