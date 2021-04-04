import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-createtransaction',
  templateUrl: './createtransaction.component.html',
  styleUrls: ['./createtransaction.component.css']
})
export class CreatetransactionComponent implements OnInit {

  KeyForm:FormGroup;
  transaction:any;
  result:any;
  isBuutonPress:boolean=false;

  constructor(private http:HttpClient) { 

    this.KeyForm = new FormGroup({
      sname:new FormControl(sessionStorage.getItem('publickey'),[Validators.required]),
      rname:new FormControl(null,[Validators.required,]),
      amount:new FormControl(null,[Validators.required, Validators.min(0.00001)]),
      pkey:new FormControl(null,[Validators.required]),
    });

  }

  get sname(){
    return this.KeyForm.get('sname');
  }

  get rname(){
    return this.KeyForm.get('rname');
  }
  get amount(){
    return this.KeyForm.get('amount');
  }
  get pkey(){
    return this.KeyForm.get('pkey');
  }
  ngOnInit(): void {
  }

  isPressed: boolean = false;

  SubmitPass(){
    this.isBuutonPress = true;

    this.transaction={"from":this.KeyForm.value.sname,"to":this.KeyForm.value.rname,"amount":this.KeyForm.value.amount.toString(),"privatekey":this.KeyForm.value.pkey, "timestamp":Date.now()};

    console.log(this.transaction);
    var res = this.http.post("https://afternoon-island-71031.herokuapp.com/createtransaction", this.transaction, {headers:{'Content-Type': 'application/json'}}).toPromise().then(res => {console.log(res);  this.result = JSON.stringify(res['data']).replace('"'," ").replace('"'," ").trim();
  
    this.isPressed = true;
    
    console.log(JSON.stringify(this.result));

    this.isBuutonPress = false;

    //console.log(this.KeyForm.value.address);
  }).catch(err=>{
    console.log(err);
    this.isBuutonPress = false;
  });

  }



}
