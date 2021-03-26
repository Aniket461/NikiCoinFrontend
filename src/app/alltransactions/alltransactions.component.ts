import { Component, OnInit } from '@angular/core';
import {HttpClient,HttpParams } from '@angular/common/http';

@Component({
  selector: 'app-alltransactions',
  templateUrl: './alltransactions.component.html',
  styleUrls: ['./alltransactions.component.css']
})
export class AlltransactionsComponent implements OnInit {

  constructor(private http:HttpClient) { }


  transactions:any[];




  ngOnInit(): void {


    this.fetchTransactions();

  }


  fetchTransactions(){
    this.http.get("https://afternoon-island-71031.herokuapp.com/transactions", {headers:{'Content-Type': 'application/json'}}).subscribe((data)=>
    {this.transactions = Array.of(data).reverse(); 
      
    console.log(this.transactions[0][0]);
      console.log(data)
    })
  }


}
