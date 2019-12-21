import { Component, OnInit } from '@angular/core';
import { Company } from 'src/app/model/company_model';
import { CompanyService } from 'src/app/service/company.service';

@Component({
  selector: 'app-list-company',
  templateUrl: './list-company.component.html',
  styleUrls: ['./list-company.component.scss']
})
export class ListCompanyComponent implements OnInit {

 companyId = 0;
 companyName = "grger";
 ceoName = "gregreg";
 turnover = 0;
 boardOfDirectors = "gregerger";
 stockExchange = "gregregergg";
 sector = "gregrege";
 companyStockCode = "gregergre";
 isCompanyBlocked = false;
 companyInfo = "ggregergr";

 companies: Company[] = [
   
    
  ];
  constructor(private companyService: CompanyService) { }

  ngOnInit() {
    this.companyService.getAllCompanyUrl().subscribe((res: Company[]) => {
      this.companies = res;
    })
  }

  toggle($event, company){
  
      this.companyService.toggleCompany(company.companyId).subscribe((res)=>{})
  }

}
