import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { KeyGeneratorComponent } from './key-generator/key-generator.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GetBalanceComponent } from './get-balance/get-balance.component';
import { CreatetransactionComponent } from './createtransaction/createtransaction.component';
import { ErrorComponentComponent } from './error-component/error-component.component';
import { AlltransactionsComponent } from './alltransactions/alltransactions.component';
import { HttpClientModule } from '@angular/common/http';
import { BlocksComponent } from './blocks/blocks.component';
import { SingleblockComponent } from './singleblock/singleblock.component';
import { MinersComponent } from './miners/miners.component';
import { PendingtransactionsComponent } from './pendingtransactions/pendingtransactions.component';
import { MiningpageComponent } from './miningpage/miningpage.component';
import { HomeComponent } from './home/home.component';
import { RegistrationComponent } from './registration/registration.component';
import { TestService } from 'src/services/test';
import { AuthGuard } from 'src/services/routeguard';

@NgModule({
  declarations: [
    AppComponent,
    KeyGeneratorComponent,
    GetBalanceComponent,
    CreatetransactionComponent,
    ErrorComponentComponent,
    AlltransactionsComponent,
    BlocksComponent,
    SingleblockComponent,
    MinersComponent,
    PendingtransactionsComponent,
    MiningpageComponent,
    HomeComponent,
    RegistrationComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [TestService,AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
