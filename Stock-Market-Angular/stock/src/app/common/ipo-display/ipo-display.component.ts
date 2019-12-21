import { Component, OnInit } from '@angular/core';
import { Sector } from 'src/app/model/sector_model';
import { StockExchange } from 'src/app/model/stock_exchange_model';
import { Company } from '../../model/company_model';
import { IpoDetails } from 'src/app/model/ipo_details_model';
import { IpoService } from 'src/app/service/ipo.service';
import { LoginService } from 'src/app/service/login.service';



@Component({
  selector: 'app-ipo-display',
  templateUrl: './ipo-display.component.html',
  styleUrls: ['./ipo-display.component.scss']
})
export class IpoDisplayComponent implements OnInit {

 
  ipos: IpoDetails[] = [];
/*  ipos: IpoDetails[] = [
    {ipoId:1, company:this.company, stockExchange:this.stockExchange, pricePerShare:12345, numberOfShares:12, openDateTime:'Aaj Open hoil',remarks:'Good'},
    {ipoId:2, company:this.company, stockExchange:this.stockExchange, pricePerShare:12345, numberOfShares:12, openDateTime:'Udya Open hoil',remarks:'Very bad'}
  ];*/
  constructor(private ipoService: IpoService, private loginService: LoginService) { }

  ngOnInit() {
    this.ipoService.getAllIPO().subscribe((res) => {
      this.ipos = res;
      console.log(res);
    });
  }

}
