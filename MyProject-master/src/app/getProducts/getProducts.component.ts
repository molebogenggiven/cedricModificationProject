import {Component, OnInit, ViewChild} from '@angular/core';
import {GetServiceFromSpring} from '../Services/getServiceFromSpring';
import {FormGroup, NgForm, FormBuilder, FormControl, Validators} from '@angular/forms';
import {Response} from '@angular/http';
import {log} from 'util';

@Component( {
  selector: 'app-get-all-products',
  templateUrl: './getProducts.component.html',
  //styleUrls: ['./getProducts.components.css']
})
export class GetProductsComponent implements OnInit {
  productsw: any[]=[];
  setupForm:any
  iamhidden:any=true;
  index:any=0;
  bname:any;
  udateClicked:any=false;
  settings = {
    columns: {
      productId: {
        title: 'ProductId'
      },
      productPrice: {
        title: 'ProductPrice'
      }
    ,
    productName: {
      title: 'ProductName'
    },
    productQuantity: {
      title: 'ProductQuantity'
    },
    productSize: {
      title: 'ProductSize'
    }
  },
    delete: {
      deleteButtonContent: '<i class="ion-trash-a">Delete</i>',
      confirmDelete: true
    },
    edit: {
      editButtonContent: '<i class="ion-edit">Edit</i>',
      saveButtonContent: '<i class="ion-checkmark">Save</i>',
      cancelButtonContent: '<i class="ion-close">Cancel</i>',
    }
  };
  constructor(private userService: GetServiceFromSpring,private formBuilder:FormBuilder) {
    this.productsw.push({name:'1',surname:'cedric',email:'fghff'},{name:'1',surname:'cedric',email:'fghff'},{name:'1',surname:'cedric',email:'fghff'});
   }

  ngOnInit() {
    this.buildForm();
    // this.userService.getAllProducts()
    //   .subscribe(
    //     (response: Response) => {
    //       this.products = response.json();
    //       console.log(this.products);
    //       if(this.products.length==0){
    //         this.products.push({'name':'cccc','ddgdgd':'cccc','fgfgfdgfg':'cccc'})
    //       }
    //     },
    //     (error) => console.log(error)
    //   );
   
  }


  onCreateConfirm(event): void {

  }

  onSaveConfirm(event): void {
  }

  onDeleteConfirm(event): void {
    console.log(event.target,'events');
   // const target = event.source.selected._element.nativeElement;
   // console.log(target);
   // const selectE1 = event.target;
   // const  val = selectE1.options[selectE1.selectedIndex].dataset.somedata;
  //  console.log(val);
   console.log() ;

  }
  addRow(){
    this.iamhidden=false;
    this.bname="add"
  }

  buildForm() {
    this.formBuilder = new FormBuilder();
    this.setupForm = this.formBuilder.group({
      name: new FormControl('', {validators:[Validators.required]}),
      surname: new FormControl('', {validators:[Validators.required] }),
      email: new FormControl('', {validators:[Validators.required] }),
    });
  }
  add(value){
    if(this.udateClicked){
      this.updateValues(value);
      return;
    }
    //send a request here 
    else{
      this.productsw.push({name:value.name,surname:value.surname,email:value.email});
      //after the respond came back, clear and the form fields
      this.clearForm();
    }
   
  }
clearForm(){
  for(var name in this.setupForm.controls) {
    this.setupForm.controls[name].setValue('');
    this.setupForm.controls[name].setErrors(null);
    this.iamhidden=true;
    this.index=0;
    this.udateClicked=false;
  }
}
  delete(data,index){
    console.log(data);
    this.productsw.splice(index, 1);
  }

  update(data,index){
    this.index=index;
    this.udateClicked=true;
    this.iamhidden=false;
    this.bname="Update"
    this.setupForm.patchValue(data);
  }
  updateValues(value){
    this.productsw[this.index]=value;
    this.clearForm();
  }
}
