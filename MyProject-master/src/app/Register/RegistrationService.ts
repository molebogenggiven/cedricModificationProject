import {Http} from '@angular/http';
import {Injectable} from '@angular/core';

@Injectable()
export class RegistrationService {
  constructor(private http: Http) {}
  registerUser(userValues: any) {
    return this.http.post('http://localhost:8080/registrations/registration', userValues);
  }
}
