import { Component, OnInit } from '@angular/core';
import {GetServiceFromSpring} from '../Services/getServiceFromSpring';
import {HttpEventType, HttpResponse} from '@angular/common/http';

@Component({
  selector: 'app-uploadfiletospring',
  templateUrl: './uploadfiletospring.component.html',
  styleUrls: ['./uploadfiletospring.component.css']
})
export class UploadfiletospringComponent implements OnInit {
  selectedFiles: FileList;
  currentFileUpload: File;
  selectedFileBlob: string;
  progress: { percentage: number } = { percentage: 0};
  imageData = {
    fileName: 'Picture',
    fileType: 'Image',
    data: ''
  };

  constructor(private uploadService: GetServiceFromSpring) { }

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
  upload() {
   //  console.log(this.selectedFileBlob);
    // console.log(btoa(this.selectedFileBlob));
    // this.progress.percentage = 0;
    // this.currentFileUpload = this.selectedFiles.item(0);
    this.imageData.data = this.selectedFileBlob;
    this.uploadService.pushFileToSpringStorage(this.imageData).subscribe(
      // event => {
      //   if (event.type === HttpEventType.UploadProgress) {
      //     this.progress.percentage = Math.round(100 * event.loaded / event.total);
      //   } else if (event instanceof HttpResponse) {
      //     console.log('File is completely upload');
      //   }
     // }
      (response) => {
        console.log(response);
        },
      (error) => console.log(error)
    );
    this.selectedFiles = undefined;
    }

}
