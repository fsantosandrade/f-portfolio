import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private jsonUrl:string = 'https://raw.githubusercontent.com/fsantosandrade/f-portfolio/main/src/assets/data/portfolio.json'

  constructor(private http: HttpClient) { }

  getData():Observable<any> {
    return this.http.get<any>(this.jsonUrl)
  }
}
