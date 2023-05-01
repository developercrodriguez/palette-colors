import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})

export class ColorsService {

  constructor(private http: HttpClient) { 
  }

   loadColors(color: string): Observable<String[]>{
    const params = new HttpParams()
      .set("model", "default");

   return this.http.post<any>('http://colormind.io/api/', {params});
  } 

  
}
