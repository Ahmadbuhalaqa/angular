import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CountryService } from '../Services/country.service';
import { country } from '../data/Country';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {
  liCountry!:country[]
  @ViewChild('txtsearchName') txtsearchName!:ElementRef;
  constructor(private formBuilder:FormBuilder,private countryService:CountryService)
  {}
  forms!:FormGroup
  ngOnInit(): void {
    this.bulit()
    this.onOpen()
  }

  bulit(){
    this.forms=this.formBuilder.group({
      name:['',Validators.required],
      code:['','']
     })
  }

  onOpen(){
    this.countryService.getAllCountry().subscribe({
      next:data=>{
       this.liCountry=data
      },
      error:err=>{
        console.log(err)
      }
    })
    }


  OnSave(){
    debugger
    if(this.forms.valid){
      var obj=new country();
        obj.name=this.forms.value["name"];
        obj.code=this.forms.value["code"]
        this.countryService.saveCountry(obj).subscribe({
          next:data=>{
            alert("ok")
          },
          error:err=>{
            alert("error")
          }
        })
  }
}


OnSearch(){
  debugger
  this.countryService.search(this.txtsearchName.nativeElement.value).subscribe({
    next:data=>{
  this.liCountry=data
    },
    error:err=>{
      alert("error")
    }
  })
}



OnSaveCity(){
  
}
}
