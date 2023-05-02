import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})

export class ColorsService {



  constructor(private http: HttpClient) { 
  }

   loadColors(color: string): Observable<String[]>{
    const url = "https://www.thecolorapi.com/scheme?hex=" +color+"&mode=monochrome&count=5&format=json";
    return this.http.get<any>(url);
  } 

  
}
