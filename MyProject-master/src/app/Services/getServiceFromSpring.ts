import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import {HttpClient, HttpEvent, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';


@Injectable()
export class GetServiceFromSpring {
  private productId: number;
  private jsonMessage: any;
  private picture: string;
  private email: string;
  constructor(private http: Http, private httpClient: HttpClient)  {
    }
    registerCustomerToDataBase(customerDetails: any) {
    return this.http.post('http://localhost:8080/customer/registerCustomer', customerDetails);
    }
    getAllProducts() {
      // const hesaders = new Headers({'': ''});
   return this.http.get('http://localhost:8080/api/getAllProducts');
  }
  sendDetailsToSpring(jsonData: any) {
    return this.http.post('http://localhost:8080/api/product', jsonData);
  }
  getUsers() {
    return this.http.get('http://localhost:8080/customer/getCustomer');
  }
  getProductById(id: number) {
    return this.http.get('http://localhost:8080/api/singleProduct/' + id);
  }
  deleteProduct(id: number) {
    return this.http.delete('http://localhost:8080/api/deleteProduct/' + id);
  }
  submitPictureToDatabase(json: any) {
    return this.http.post('http://localhost:8080/picture/savePicture', json);
  }
  getPictureFromDatabase() {
    return this.http.get('http://localhost:8080/picture/getPicture');
  }
  updateProduct(values: any) {
    return this.http.put('' , values);
  }
  setProductDetails(jsonMessage: any) {
    this.jsonMessage = jsonMessage;
  }
  getProductDetails() {
    return this.jsonMessage;
  }
  setPicture(picture: string) {
    this.picture = picture;
  }
  getPicture() {
    return this.picture;
  }
  pushFileToStorage(file: File): Observable<HttpEvent<{}>> {
    const formdata: FormData = new FormData();
    formdata.append('file', file);
    const reguest = new HttpRequest('POST', '/picture/uploadFile', formdata,
      {
        reportProgress: true,
        responseType: 'text'
      }
      );
    return this.httpClient.request(reguest);
  }
  pushFileToSpringStorage(jsonData: any) {
    // const formdata: FormData = new FormData();
    // formdata.append('file', file);
    // Replaced with uploadFile
    return this.httpClient.post('http://localhost:8080/picture/savePictureToDatabase', jsonData);
  }
  getImageFromSpring() {
    return this.httpClient.get('http://localhost:8080/picture/getAllPictures');
  }
   getFiles(): any {
    return this.httpClient.get('/picture/getallfiles');
   }
   setEmail(email: string) {
    this.email = email;
   }
   getEmail() {
    return this.email;
   }
   submitVerificationDetails(jsonData: any) {
    return this.httpClient.post('http://localhost:080/customer/submitVerificationCode', jsonData);
   }
}
