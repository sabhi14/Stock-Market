import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { FormBuilder, ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms'
import { IpoDetails } from 'src/app/model/ipo_details_model';
import { IpoService } from 'src/app/service/ipo.service';
import { CompanyService } from 'src/app/service/company.service';
import { ExchangeService } from 'src/app/service/exchange.service';
import { Company } from 'src/app/model/company_model';
import { StockExchange } from 'src/app/model/stock_exchange_model';


@Component({
  selector: 'app-edit-ipo',
  templateUrl: './edit-ipo.component.html',
  styleUrls: ['./edit-ipo.component.scss']
})
export class EditIpoComponent implements OnInit {

  ipoId: string;
  form: FormGroup;
  ipoDetails: IpoDetails ;

  company: Company;
  se: StockExchange;

  constructor(private route: ActivatedRoute, private ipoService: IpoService, private formbuilder: FormBuilder, private router: Router, private companyService: CompanyService, private stockService: ExchangeService) {

    this.form = this.formbuilder.group({
      companyName: new FormControl('', [Validators.required]),
      stockExchangeName: new FormControl('', [Validators.required]),
      pricePerShare: new FormControl('', [Validators.required]),
      numberofShares: new FormControl('', [Validators.required]),
      remark: new FormControl('', [Validators.required])
    });
  }

  ngOnInit() {

  }

  get companyName() { return this.form.get('companyName'); }

  get stockExchangeName() { return this.form.get('stockExchangeName'); }

  get pricePerShare() { return this.form.get('pricePerShare'); }

  get numberofShares() { return this.form.get('numberofShares'); }

  get remark() { return this.form.get('remark'); }

  onSubmit() {

    this.companyService.getCompanyByStockCode(this.form.value.companyName).subscribe((res: Company) => {
      this.company = res;
      console.log(res);
      this.stockService.getExchangeByName(this.form.value.stockExchangeName).subscribe((res: StockExchange) => {
        console.log(res);

        this.se = res;

        this.ipoDetails = {
          company: this.company,
          stockExchange: this.se,
          pricePerShare:this.form.value.pricePerShare,
          numberofShares:  this.form.value.numberofShares,
          remark:  this.form.value.remark
        };

    
        this.ipoService.addIPODetails(this.ipoDetails);
        this.router.navigate(['/admin/ipo-display'])
      })
    })




  }

}
