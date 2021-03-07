import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blocks',
  templateUrl: './blocks.component.html',
  styleUrls: ['./blocks.component.css']
})
export class BlocksComponent implements OnInit {

  constructor(private http:HttpClient) { }


  blocks:any[];




  ngOnInit(): void {


    this.fetchBlocks();

  }


  fetchBlocks(){
    this.http.get("http://localhost:5000/getblocks", {headers:{'Content-Type': 'application/json'}}).subscribe((data)=>
    {this.blocks = Array.of(data);
      //this.blocks.reverse(); 
      
    console.log(this.blocks);
      console.log(data)
    })
  }


}
