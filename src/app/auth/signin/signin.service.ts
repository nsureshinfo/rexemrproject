import {Injectable} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable} from 'rxjs';
import {LoginResultModel} from '../LoginResultModel'

import 'whatwg-fetch';

const httpHeaders = { headers: new HttpHeaders().set('Content-Type', 'application/json').append('Cache-Control', 'no-cache') };
const fetchHeaders : any = {
  'user-agent': 'Mozilla/4.0 MDN Example',
  'content-type': 'application/json',
  'pragma' : 'no-cache',
  'cache-control' : 'no-cache'
}


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) {

  }

  onLogin(url, param) {
    let promise = fetch(url, {
      body: JSON.stringify(param),
      credentials: 'include',
      headers: fetchHeaders,
      method: 'POST',
    })
      .then(function (response) {
        return response.json()
      }).then(function (json) {
        return json;
      }).catch(function (error) {
        console.error(error);
      })
    return promise;
  }

  login(email: string, password: string): Observable<LoginResultModel>{
    return this.http.post<LoginResultModel>('https://reqres.in/api/login', {
      email: email,
      password: password
    });
  }
}