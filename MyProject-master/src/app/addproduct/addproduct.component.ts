import {Component, OnInit, ViewChild} from '@angular/core';
import {GetServiceFromSpring} from '../Services/getServiceFromSpring';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css']
})
export class AddproductComponent implements OnInit {
  @ViewChild('f') signUpForm: NgForm;
  selectedFiles: FileList;
  currentFileUpload: File;
  selectedFileBlob: string;
  jsonData = {
    productId: '',
    productName: '',
    productPrice: '',
    productQuantity: '',
    productSize: '',
    category: '',
    pictureData: ''
  };

  constructor(private sendServiceToSpring: GetServiceFromSpring) { }

  ngOnInit() {
  }
  selectedFile(event) {
    const file = event.target.files.item(0);
    console.log('Lrts see');
    if (file.type.match('image.*')) {
      this.selectedFiles = event.target.files;
    } else {
      alert('invalid format');
    }
    // let fileBlob = null;
    const fileReader = new FileReader();
    const _this = this;
    fileReader.addEventListener('load', function() {
      // _this.selectedFileBlob = fileReader.result.split(',')[1];
      _this.selectedFileBlob = fileReader.result;
      console.log();
      console.log('Hello');
    });
    fileReader.readAsDataURL(file);
  }
  getDetails() {
    console.log(this.signUpForm);
    this.jsonData.productId = this.signUpForm.value.userData.productId;
    this.jsonData.productName = this.signUpForm.value.userData.productName;
    this.jsonData.productPrice = this.signUpForm.value.userData.productPrice;
    this.jsonData.productSize = this.signUpForm.value.userData.productSize;
    this.jsonData.productQuantity = this.signUpForm.value.userData.productQuantity;
    this.jsonData.category = this.signUpForm.value.userData.productCategory;
    console.log(this.jsonData.category);
    this.jsonData.pictureData = this.selectedFileBlob;
    // console.log(this.jsonData.data);

    this.sendServiceToSpring.sendDetailsToSpring(this.jsonData).
      subscribe(
      (response) => console.log(response),
      (error) => console.log(error)
    );
  }

}
