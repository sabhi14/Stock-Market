import { Component, OnInit } from '@angular/core';
import { Company } from 'src/app/model/company_model';
import { CompanyService } from 'src/app/service/company.service';

@Component({
  selector: 'app-view-companies',
  templateUrl: './view-companies.component.html',
  styleUrls: ['./view-companies.component.scss']
})
export class ViewCompaniesComponent implements OnInit {
  companies: Company[] = [
   
    
  ];
  constructor(private companyService: CompanyService) { }

  ngOnInit() {
    this.companyService.getAllCompanyUrl().subscribe((res: Company[]) => {
      this.companies = res;
    })
  }


  

}
