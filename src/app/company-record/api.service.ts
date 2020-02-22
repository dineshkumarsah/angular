import { Injectable } from '@angular/core';
import {HttpClient,HttpResponse} from '@angular/common/http';
import {Smartphone} from '../smartphone';
import {Observable} from 'rxjs'

const localUrl = 'assets/data/smartphone.json'
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http : HttpClient) { }

  // getSmartphone(){
  //   return this.http.get(localUrl);
  // }

  getSmartphone(): Observable<HttpResponse<Smartphone[]>> {
    return this.http.get<Smartphone[]>(localUrl, { observe: 'response' });
  }
}
