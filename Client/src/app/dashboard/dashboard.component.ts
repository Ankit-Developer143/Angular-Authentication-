import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  userDetails:any;
  constructor(private cs:CommonService,private router:Router) {
    if(!localStorage.getItem('token')){
      router.navigate(['/login'])
      
    }
   }

  ngOnInit(): void {
    this.cs.getDetails().subscribe(d =>{
      console.log(d);
      this.userDetails = d;
      
    })
  }

}
