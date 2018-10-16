import {Component, ElementRef, ViewChild, ViewContainerRef} from '@angular/core';
import {ServiceComponent} from './server.service';
import {FormGroup, NgForm} from '@angular/forms';
import {Response} from '@angular/http';
import {ActivatedRoute, Router} from '@angular/router';
import {isBoolean} from 'util';
import {DomSanitizer} from '@angular/platform-browser';
import {GetServiceFromSpring} from '../Services/getServiceFromSpring';
import {UserDashboardComponent} from '../user-dashboard/user-dashboard.component';
import {MatDialog, MatDialogConfig} from '@angular/material';
import {ToastaService, ToastaConfig, ToastOptions, ToastData} from 'ngx-toasta';
import {ToasterService} from './ToastService';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  // stylesUrl: [ './login.component.css' ]
})
export class LoginComponent {
   @ViewChild('f') signUpForm: NgForm;
  getResponse: string;
  firstPassword: string;
  messageError: string;
  // selectedFile: string;
  imagePath: string;
  base64textString: string;
  jsonObject: any;
  image: any;
  value: string;
  values =
    {
      username : '',
      password : ''
    };
  constructor(private serviceComponent: ServiceComponent, private router: ActivatedRoute, private route: Router,
              private sanitizer: DomSanitizer, private service: GetServiceFromSpring,
              private dialog: MatDialog, private toastaService: ToastaService, private toastaConfig: ToastaConfig,
              private toasterService: ToasterService) { // this.toastaConfig.position = 'top-right';
              this.toastaConfig.theme = 'default';
  }
  getDetails() {
    // this.toasterService.Success('success button clicked');
  //  console.log();
 //   console.log(btoa('http://www.chirundu.com/wp-content/uploads/2009/08/Chakalaka-Recipe.jpg'));
    console.log(this.signUpForm);
    this.addToast();
    this.values.username = this.signUpForm.value.userData.email;
    this.values.password = this.signUpForm.value.userData.password;
    this.toastaService.success('Push Submit Button');
    // this.values[0].password = 'GuruAlo';
     this.serviceComponent.storeUsers(this.values).
      subscribe(
         (response) => {
           const resSTR = JSON.stringify(response);
           const resJson = JSON.parse(resSTR);
           console.log(resJson._body);
           if (resJson._body === 'success') {
             this.route.navigate(['/app-my-navbar']);
           } else if (resJson._body === 'failed') {
             this.messageError = 'please enter valid credentials';
             // this.route.navigate(['/login']);
           }
         }
     ); // const value = this.getResponse.indexOf('S');
      // console.log(value);
    // this.firstPassword = this.getResponse;
    // console.log(typeof this.firstPassword);
      // if ( ) {
      // }
  }
  selectFile(event) {
    console.log(event);
    const selectedFile = event.target.files[0];
    if (selectedFile) {
      const reader = new FileReader();
      reader.onload = this._handlerReaderLoaded.bind(selectedFile);
      reader.readAsBinaryString(selectedFile);


    }
    // const encoded = btoa(selectedFile);
    // console.log(encoded);
   // this.imagePath = atob(encoded);
    }
    _handlerReaderLoaded(readerEvt) {
    const binaryString = readerEvt.target.result;
    this.base64textString = btoa(binaryString);
    console.log(this.base64textString);
    this.setPicture(this.base64textString);
    this.imagePath = 'http://www.chirundu.com/wp-content/uploads/2009/08/Chakalaka-Recipe.jpg';
    // this.setFile(this.base64textString);
    // console.log(btoa(binaryString));
      // this.image = this.sanitizer.bypassSecurityTrustResourceUrl('data:image/jpg;base64,'
      // + toRet.base64textString) ;
      this.value = 'Hello';
    }
    submitPicture() {
    console.log(this.value);
   //  console.log(this.base64textString);
   // this.image = {
   //   picture: 'ntjhjj'};
   // this.service.submitPictureToDatabase(this.image).subscribe(
   //   (response) => console.log(response),
   //   (error) => console.log(error)
   // );
    }
    // setFile(filename: string) {
    // this.base64textString = filename;
    // }
  getUsername(event: Event) {
   // this.username = (<HTMLInputElement> event.target).value;
  }
  getUserPassword(event: Event) {
    this.firstPassword = (<HTMLInputElement> event.target).value;
  }
  setPicture(shj) {}
  onCreate() {
  }
  addToast() {

    this.toastaService.default('Hi there');
    // Or create the instance of ToastOptions
    const toastOptions: ToastOptions = {
      title: 'My title',
      msg: 'The message',
      showClose: true,
      timeout: 5000,
      theme: 'default',
      onAdd: (toast: ToastData) => {
        console.log('Toast ' + toast.id + ' has been added!');
      },
      onRemove: function(toast: ToastData) {
        console.log('Toast ' + toast.id + ' has been removed!');
      }
    };

    this.toastaService.info(toastOptions);
    this.toastaService.success(toastOptions);
    this.toastaService.wait(toastOptions);
    this.toastaService.error(toastOptions);
    this.toastaService.warning(toastOptions);
}}
