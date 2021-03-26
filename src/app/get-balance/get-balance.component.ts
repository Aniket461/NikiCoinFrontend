import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-get-balance',
  templateUrl: './get-balance.component.html',
  styleUrls: ['./get-balance.component.css']
})
export class GetBalanceComponent implements OnInit {


  KeyForm:FormGroup;
  balance:any;

  constructor(private http:HttpClient) { 

    this.KeyForm = new FormGroup({
      address:new FormControl(null,[Validators.required]),
    });

  }

  add:any;
  addr:any;

  get address(){
    return this.KeyForm.get('address');
  }

  ngOnInit(): void {
  }

  isPressed: boolean = false;
  isButtonPress:boolean = false;


  SubmitPass(){

    this.isButtonPress = true;
    this.addr = this.KeyForm.value.address;
    this.add={"address":this.KeyForm.value.address}


    var res = this.http.post("https://afternoon-island-71031.herokuapp.com/getbalance", this.add, {headers:{'Content-Type': 'application/json'}}).toPromise().then(res => {this.balance = res.toString();
  
    this.isPressed = true;
      console.log("Hereee",this.balance);
      console.log(this.KeyForm.value.address);
     this.isButtonPress = false;

  });
}


}
