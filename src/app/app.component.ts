import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Nikicoin-Frontend';
 

  constructor(private router: Router){}

  checkuser(){
    console.log(sessionStorage.getItem('email'));
    return sessionStorage.getItem('email');
  }

  logout(){
    sessionStorage.clear();
    this.router.navigateByUrl('/');

  }

  getname(){
    return sessionStorage.getItem('name');
  }

  getkey(){
    return sessionStorage.getItem('publickey');
  }

  getemail(){
    return sessionStorage.getItem('email');
  }

}
