import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-key-generator',
  templateUrl: './key-generator.component.html',
  styleUrls: ['./key-generator.component.css']
})
export class KeyGeneratorComponent implements OnInit {


  KeyForm:FormGroup;
  namek:String;
  namedata:any
  keys:any;
  publicKey:any;
  privateKey:any;
  constructor(private http:HttpClient) { 

    this.KeyForm = new FormGroup({
      name:new FormControl(null,[Validators.required]),
    });

  }

  get name(){
    return this.KeyForm.get('name');
  }

  ngOnInit(): void {
  }

  isPressed: boolean = false;

  SubmitPass(){


    this.namek = this.KeyForm.value.name;
    this.namedata={"name":this.KeyForm.value.name}


    var res = this.http.post("http://localhost:5000/keygenerator", this.namedata, {headers:{'Content-Type': 'application/json'}}).toPromise().then(res => {this.keys = res;
  
    this.isPressed = true;
    this.publicKey = JSON.stringify(this.keys.publickey).replace('"'," ").replace('"'," ").trim();
    this.privateKey = JSON.stringify(this.keys.privatekey).replace('"'," ").replace('"'," ").trim();
    console.log("Hereee",JSON.stringify(this.keys.publickey).replace('"'," ").replace('"'," ").trim());
      //console.log(this.KeyForm.value.address);
  });
  }

}
