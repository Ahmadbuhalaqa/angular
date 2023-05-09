import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { country } from '../data/Country';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  constructor(private httpClient:HttpClient) { }


  saveCountry(Country:country):Observable<any>{
  return this.httpClient.post("http://localhost/taskApi/api/Country",Country);
  }

  getAllCountry():Observable<any>{

    return this.httpClient.get("http://localhost/taskApi/api/Country/GetAll")
    
  }

  search(name:string):Observable<any>{
    return this.httpClient.get("http://localhost/taskApi/api/Country/?name="+name)
  }

}
