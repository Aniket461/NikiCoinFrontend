import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  KeyForm:FormGroup;
  transaction:any;
  result:any;
  add:any;
  isLogin:boolean=(sessionStorage.getItem('name') == null)?false:true;
  isError:boolean= false;
  isButtonPress:boolean=false;
  

  constructor(private http:HttpClient) { 

    this.KeyForm = new FormGroup({
      userid:new FormControl(null,[Validators.required]),
      password:new FormControl(null,[Validators.required, Validators.minLength(8)]),
    });

  }

  get userid(){
    return this.KeyForm.get('userid');
  }

  get password(){
    return this.KeyForm.get('password');
  }


  checklogin(){
    return sessionStorage.getItem('email');
  }
  
  ngOnInit(): void {
  }

  isPressed: boolean = false;

  SubmitPass(){

    this.isButtonPress = true;
    let userid = this.KeyForm.value.userid;
    let password = this.KeyForm.value.password;

    console.log(userid +"\n" + "\n" + password);

    
    this.add={"email":userid,"password":password};


    var res = this.http.post("https://afternoon-island-71031.herokuapp.com/login", this.add, {headers:{'Content-Type': 'application/json'}}).toPromise().then(res => {
    
    console.log(JSON.stringify(res['data']));
    this.result = res['data'];
    if(this.result == "User Exist"){
      console.log("hereeeee");
      this.isLogin = true;
      console.log(res['user']);
      sessionStorage.setItem('email',res['user'].email);
      sessionStorage.setItem('name',res['user'].name);
      sessionStorage.setItem('publickey',res['user'].publickey);
      
      console.log(sessionStorage.getItem('name') == null);
      this.isButtonPress = false;
      this.KeyForm.value.userid = "";
      this.KeyForm.value.password = "";
    }
    else{

      this.result = "Invalid Userid and Password Combination";
      console.log("hereeeee");
      this.isError = true;
      this.isButtonPress = false;
    }
    
     

  });



  }

}
