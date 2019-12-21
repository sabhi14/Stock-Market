
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StockExchange } from '../../model/stock_exchange_model';
import { ExchangeService } from 'src/app/service/exchange.service';

@Component({
  selector: 'app-manage-exchange',
  templateUrl: './manage-exchange.component.html',
  styleUrls: ['./manage-exchange.component.css']
})
export class ManageExchangeComponent implements OnInit {

  stockExchangeId = 0;
  stockExchange = '';
  brief = '';
  contactAddress = '';
  remark = '';
  exchange: StockExchange[] = [
   
     
   ];
   constructor(private exchangeService: ExchangeService) { }
 
   ngOnInit() {
   this.exchangeService.getAllExchangeUrl().subscribe((res: StockExchange[]) => {
       this.exchange = res;
     })
   }

}
