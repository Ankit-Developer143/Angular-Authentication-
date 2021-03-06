import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Client';
  constructor(private router:Router){
    if(!localStorage.getItem('token')){
      router.navigate(['/login'])
      
    }
  }
  logout(){
    console.log("logout call");
    const token  =localStorage.clear();
    this.router.navigate(['/login'])
    console.log(token);
  }
  register(){
    this.router.navigate(['/register'])
  }
}
