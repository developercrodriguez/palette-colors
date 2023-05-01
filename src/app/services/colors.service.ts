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
    const httpOptions = {
      headers: new HttpHeaders({ 
        'Access-Control-Allow-Origin':'*'
      })
    };

   return this.http.get<any>(`https://palett.es/API/v1/palette/from/${color}`,httpOptions );
  } 

  
}
