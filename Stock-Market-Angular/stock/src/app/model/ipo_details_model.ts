import { Company } from './company_model';
import { StockExchange } from './stock_exchange_model';

export interface IpoDetails {
    company: Company;
    stockExchange: StockExchange;
    pricePerShare: number;
    numberofShares: number;
    remark: string; 
  }
  