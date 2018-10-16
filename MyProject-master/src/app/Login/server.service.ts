import {Injectable} from '@angular/core';
import {Http} from '@angular/http';

@Injectable()
export class ServiceComponent {
  constructor(private http: Http) {}

  storeUsers(values: any) {

   return this.http.post('http://localhost:8080/login/loginUser', values);

  }
}


