import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {updateSourceFile} from '@angular/compiler-cli/src/transformers/node_emitter';

@Component({
  selector: 'app-upoladfile',
  templateUrl: './upoladfile.component.html',
  styleUrls: ['./upoladfile.component.css']
})
export class UpoladfileComponent implements OnInit {
  base64text: string;
  name1: string;
  formGroup = this.fb.group(
    { file: [null, Validators.requiredTrue]}
  );

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
  }
  onFileChange(event) {
    const files = event.target.files[0];
    // const file = files[0];
    if (files) {
      const reader = new FileReader();
      reader.onload = this.getFile.bind(files);
      console.log('what is happening actualy');
      reader.readAsBinaryString(files);
      console.log(this.name1);

      }
    }
    getFile(anotherEvent) {
      const binaryString = anotherEvent.target.result;
      this.base64text = 'Spring boot';
       console.log(btoa(binaryString));
      console.log('come on my guy');
      console.log(this.base64text);
      console.log('hello world');
      this.name1 = 'Given';
      this.setFile('name');
      }
      setFile(name: string) {
    console.log(name);
      }
    onSubmit() {
    console.log(this.name1);
  }

}
