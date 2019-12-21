import { Component, OnInit } from '@angular/core';
import * as XLSX from 'xlsx';
import { CompanyService } from 'src/app/service/company.service';
import { StockService } from 'src/app/service/stock.service';
import { Router } from '@angular/router';
import { Company } from 'src/app/model/company_model';
import { StockPrice } from 'src/app/model/stock_price_model';
import { Time } from '@angular/common';

const { read, write, utils } = XLSX;

type AOA = any[][];


@Component({
  selector: 'app-importdata',
  templateUrl: './importdata.component.html',
  styleUrls: ['./importdata.component.scss']
})
export class ImportdataComponent implements OnInit {

  constructor(private router: Router, private companyService: CompanyService, private stockService: StockService) { }

  ngOnInit() {
  }

  data: AOA;
  company_name: string;
  stock_exchange: string;
  no_of_records: number;
  from_date: string;
  to_date: string;

  wopts: XLSX.WritingOptions = { bookType: 'xlsx', type: 'array' };
  fileName: string = 'SheetJS.xlsx';

  onFileChange(evt: any) {
    /* wire up file reader */
    const target: DataTransfer = <DataTransfer>(evt.target);
    if (target.files.length !== 1) throw new Error('Cannot use multiple files');
    const reader: FileReader = new FileReader();
    reader.onload = (e: any) => {
      /* read workbook */
      const bstr: string = e.target.result;
      const wb: XLSX.WorkBook = XLSX.read(bstr, { type: 'binary' });

      /* grab first sheet */
      const wsname: string = wb.SheetNames[0];
      const ws: XLSX.WorkSheet = wb.Sheets[wsname];

      /* save data */
      this.data = <AOA>(XLSX.utils.sheet_to_json(ws, { header: 1 }));
      this.companyService.getCompany(this.data[1][0]).subscribe((company: Company) => {
        this.company_name = company.companyName;
        this.stock_exchange = this.data[1][1];
        this.no_of_records = this.data.length - 1;
        this.from_date = this.data[1][3];
        this.to_date = this.data[this.data.length - 1][3];
        this.data = this.buildData(this.data);
      })


      // console.log(this.data[1][0]);
      // console.log(this.data[1][1]);
      // console.log(this.data.length-1);
      // console.log(this.data[1][3]);
      // console.log(this.data[this.data.length-1][3]);
    };
    reader.readAsBinaryString(target.files[0]);
  }


  buildData(data): any {
    var allData = [];
    var titles = data[0];
    var obj = {};
    let listStock: StockPrice[] = [];

    for (let i = 1; i < data.length; i++) {
      for (let j = 0; j < 4; j++) {
        obj[titles[j].toString()] = data[i][j];
      
      }
      let stock: StockPrice = {
        company: obj['company'],
        stockExchange: obj['stockExchange'],
        stockPrice: +obj['stockPrice'],
        date: new Date(obj['date']),
      }
      console.log(stock)


      listStock.push(stock);
    //  console.log(obj)
      allData.push(obj);
    }
  //  console.log(allData);


   
    console.log(listStock);

     this.stockService.addStockPrices(listStock).subscribe((res) => {
      alert("Data Added Successfully")
    }, (e) => { alert(e.message) }) 


  }




}


