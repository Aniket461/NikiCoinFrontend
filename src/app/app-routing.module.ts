import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AlltransactionsComponent } from './alltransactions/alltransactions.component';
import { BlocksComponent } from './blocks/blocks.component';
import { CreatetransactionComponent } from './createtransaction/createtransaction.component';
import { ErrorComponentComponent } from './error-component/error-component.component';
import { GetBalanceComponent } from './get-balance/get-balance.component';
import { HomeComponent } from './home/home.component';
import { KeyGeneratorComponent } from './key-generator/key-generator.component';
import { MinersComponent } from './miners/miners.component';
import { MiningpageComponent } from './miningpage/miningpage.component';
import { PendingtransactionsComponent } from './pendingtransactions/pendingtransactions.component';
import { SingleblockComponent } from './singleblock/singleblock.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:"keygenerator", component:KeyGeneratorComponent},
  {path:"getbalance", component:GetBalanceComponent},
  {path:"createtransaction", component:CreatetransactionComponent},
  {path:"transactions", component:AlltransactionsComponent},
  {path:"blocks", component:BlocksComponent},
  {path:"getblocks/:height",component:SingleblockComponent},
  {path:"miners", component:MinersComponent},
  {path:"miners/pendingtransactions", component:PendingtransactionsComponent},
  {path:"miners/miningpage",component:MiningpageComponent},
  {path:"**",component:ErrorComponentComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
