import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-singleblock',
  templateUrl: './singleblock.component.html',
  styleUrls: ['./singleblock.component.css']
})
export class SingleblockComponent implements OnInit {

  constructor(private route:ActivatedRoute,private http:HttpClient) { }


  number:any;
  block:any;
  hash:any;

  ngOnInit(): void {
    this.number = this.route.snapshot.paramMap.get('height');
    this.fetchSingleBlocks();
  }

  fetchSingleBlocks(){
    this.http.get("http://localhost:5000/getblocks/"+this.number, {headers:{'Content-Type': 'application/json'}}).subscribe((data)=>
    {this.block = data;
      //this.blocks.reverse(); 
      
    console.log(this.block['hash']);
    this.hash = this.block['hash'];
      console.log(data)
    })
  }

}
