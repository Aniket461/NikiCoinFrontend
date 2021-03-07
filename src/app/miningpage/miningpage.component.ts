import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
//import sha256 from '../../../node_modules/crypto-js'
import sha256 from 'crypto-js/sha256';

@Component({
  selector: 'app-miningpage',
  templateUrl: './miningpage.component.html',
  styleUrls: ['./miningpage.component.css']
})
export class MiningpageComponent implements OnInit {

  KeyForm:FormGroup;
  send:any;
  result:any="Done Done!!!";
  isClick:boolean=false;
  hash:String = sha256("Aniket").toString();
  nonce:any=0;
  difficulty:any=5;
  transactions:any;
  index:any;
  prevhash:any;

  constructor(private http:HttpClient) { 

    this.KeyForm = new FormGroup({
      address:new FormControl(null,[Validators.required]),
    });

  }

  get address(){
    return this.KeyForm.get('address');
  }


  ngOnInit(): void {
  }

  isPressed: boolean = false;



  //calculate Hash function

calculateHash()
{
  return sha256(this.index + this.transactions+ this.prevhash + this.nonce).toString();
    //console.log(this.hash);
}

  
SubmitPass()
  {


    this.isClick = true;

  //   //calculate hash with difficulty
  //   while (this.hash.substring(0, this.difficulty) !== Array(this.difficulty + 1).join("0")) {
  //     this.nonce++;
  //     this.hash = this.calculateHash();
  //     // console.log(this.hash+"\n")
  // }
  // console.log("Final hash is:- "+this.hash);
  //   this.send={"address":this.KeyForm.value.address};
  //   console.log(this.send);




  var res = this.http.get("http://localhost:5000/getdata", {headers:{'Content-Type': 'application/json'}}).subscribe((data)=>
  {console.log("Big Data is here:-"+JSON.stringify(data['transactions']))

  this.isClick = true;
  if(JSON.stringify(data['transactions'])== "null"){
    console.log("Null Transaction");
    
    this.isPressed = true;
     this.isClick = false;

     this.result = "No Transactions to be Mined";

  }
  else{

    this.transactions = JSON.stringify(data['transactions']);
    this.index = data['index'];
    this.prevhash = data['prevhash'];
    console.log(this.transactions);
    console.log(this.index);
    console.log(this.prevhash);

    while (this.hash.substring(0, this.difficulty) !== Array(this.difficulty + 1).join("0")) {
           this.nonce++;
           this.hash = this.calculateHash();
    }






    //this.isPressed = true;
    //this.isClick= false;
     console.log("Final Hash:-"+this.hash);

     this.send = {"hash":this.hash, "address":this.KeyForm.value.address,"blockindex":this.index,"nonce":this.nonce};

     var res = this.http.post("http://localhost:5000/mineblock", this.send, {headers:{'Content-Type': 'application/json'}}).toPromise().then(res => {this.result = JSON.stringify(res['data']).replace('"'," ").replace('"'," ").trim().toUpperCase();
  
    
    this.isPressed = true;
     this.isClick = false;
     console.log(JSON.stringify(this.result.data));

     console.log(this.KeyForm.value.address);
   }).catch(err=>{
     console.log(err);
   });
  }
  });



  //   var res = this.http.post("http://localhost:5000/mineblock", this.send, {headers:{'Content-Type': 'application/json'}}).toPromise().then(res => {this.result = JSON.stringify(res['data']).replace('"'," ").replace('"'," ").trim().toUpperCase();
  
    
  //   this.isPressed = true;
  //   this.isClick = false;
  //   console.log(JSON.stringify(this.result.data));

  //   //console.log(this.KeyForm.value.address);
  // }).catch(err=>{
  //   console.log(err);
  // });

  }


}
