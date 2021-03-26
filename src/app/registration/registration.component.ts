import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {


  KeyForm:FormGroup;
  transaction:any;
  result:any;
  add:any;
  isButtonPress:boolean=false;


  

  constructor(private http:HttpClient) { 

    this.KeyForm = new FormGroup({
      name:new FormControl(null,[Validators.required]),
      email:new FormControl(null,[Validators.required, Validators.email]),
      pkey:new FormControl(null,[Validators.required]),
      password:new FormControl(null,[Validators.required, Validators.minLength(8)]),
    });

  }

  get name(){
    return this.KeyForm.get('name');
  }

  get email(){
    return this.KeyForm.get('email');
  }
  get pkey(){
    return this.KeyForm.get('pkey');
  }
  get password(){
    return this.KeyForm.get('password');
  }
  ngOnInit(): void {
  }

  isPressed: boolean = false;

  SubmitPass(){

    this.isButtonPress = true;

    let name = this.KeyForm.value.name;
    let email = this.KeyForm.value.email;
    let password = this.KeyForm.value.password;
    let publickey = this.KeyForm.value.pkey;

    console.log(name +"\n" + email + "\n" + password + "\n" + publickey);



    this.add={"name":name,"email":email,"password":password,"publickey":publickey};


    var res = this.http.post("https://afternoon-island-71031.herokuapp.com/register", this.add, {headers:{'Content-Type': 'application/json'}}).toPromise().then(res => {
    
    console.log(JSON.stringify(res['data']));
    this.result = res['data'];
    
    this.isPressed = true;

    this.isButtonPress = false;
     

  });


  }

}
