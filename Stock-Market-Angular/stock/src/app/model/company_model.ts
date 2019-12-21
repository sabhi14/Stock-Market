import { Sector } from './sector_model';
import { StockExchange } from './stock_exchange_model';

  
  export interface Company {
    companyId: number;
    companyName: string;
    turnover: number;
    ceoName: string;
    boardofDirectors : string;
    listedInStockExchanges: boolean;
    sector: Sector;
    stockCode: string;
    companyBlocked: boolean;
    briefWriteUp: string;
  }
  