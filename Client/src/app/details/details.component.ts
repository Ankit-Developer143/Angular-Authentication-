import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  userDetails:any;
  constructor(private route:ActivatedRoute,private cs:CommonService,private router:Router) { 
  }

  ngOnInit() {
    const id =this.route.snapshot.paramMap.get('id')
    console.log(id);
    this.cs.getById(id).subscribe(d =>{
          this.userDetails = d;
          console.log(d);
          if(!localStorage.getItem('token')){
            this.router.navigate(['/login'])
            
          }
        })
  }
  addNew(){
    this.router.navigate(['/admission'])
  }

}
