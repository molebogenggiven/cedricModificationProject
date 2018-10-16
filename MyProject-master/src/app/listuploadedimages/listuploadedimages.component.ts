import { Component, OnInit } from '@angular/core';
import {GetServiceFromSpring} from '../Services/getServiceFromSpring';
import {Observable} from 'rxjs/Observable';
import {Response} from '@angular/http';

@Component({
  selector: 'app-listuploadedimages',
  templateUrl: './listuploadedimages.component.html',
  styleUrls: ['./listuploadedimages.component.css']
})
export class ListuploadedimagesComponent implements OnInit {

  showFile = false;
  fileUploads: any;
  constructor(private uploadService: GetServiceFromSpring) { }

  ngOnInit() {
  }
  showFiles(enable: boolean) {
    this.showFile = enable;
    if (enable) {
      // this.fileUploads = this.uploadService.getFiles();
    //  this.fileUploads =
        this.uploadService.getImageFromSpring().subscribe(
          (response) => console.log(response),
          (error) => console.log(error)
        );
    }
  }

}
