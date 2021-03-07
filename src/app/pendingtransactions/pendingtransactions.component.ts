import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pendingtransactions',
  templateUrl: './pendingtransactions.component.html',
  styleUrls: ['./pendingtransactions.component.css']
})
export class PendingtransactionsComponent implements OnInit {


  constructor(private http:HttpClient) { }


  transactions:any[];




  ngOnInit(): void {


    this.fetchTransactions();

  }


  fetchTransactions(){
    this.http.get("http://localhost:5000/pendingtransactions", {headers:{'Content-Type': 'application/json'}}).subscribe((data)=>
    {this.transactions = Array.of(data); 
      
    console.log(this.transactions[0][0]);
      console.log(data)
    })
  }

}
