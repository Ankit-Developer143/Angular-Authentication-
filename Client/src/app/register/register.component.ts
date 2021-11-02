import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CommonService } from '../common.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  data = {}
  constructor(private cs:CommonService,private _snackBar: MatSnackBar,private router:Router) { }

  ngOnInit(): void {
  }
  myForm = new FormGroup({
    name:new FormControl('',[Validators.required]),
    password:new FormControl('',[Validators.required])
  })
  submit(){
    this.cs.registerUser(this.myForm.value).subscribe(d =>{
      this.data = d;
      console.log(d);
      if(d){
        this._snackBar.open("Save Succefully", '', {
          duration: 3000
        });
      }
      
      
      
    })
    
    
  }
  login(){
    this.router.navigate(['/login'])
  }

}
