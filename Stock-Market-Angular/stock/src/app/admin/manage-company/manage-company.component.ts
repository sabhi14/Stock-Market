
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import {
  FormGroup,
  FormBuilder,
  FormControl,
  Validators,
} from "@angular/forms";
import { Company } from 'src/app/model/company_model';
import { CompanyService } from 'src/app/service/company.service';
import { SectorService } from 'src/app/service/sector.service';
import { Sector } from 'src/app/model/sector_model';
@Component({
  selector: 'app-manage-company',
  templateUrl: './manage-company.component.html',
  styleUrls: ['./manage-company.component.scss']
})
export class ManageCompanyComponent implements OnInit {

  companyId = 0;
  companyName = "";
  ceoName = "";
  turnover = 0;
  boardOfDirectors = "";
  stockExchange = false;
  sector = "";
  companyStockCode = "";
  isCompanyBlocked = false;
  companyInfo = "";

  submitted = false;
  manageCompanyForm: FormGroup;

  companyID: string;
  company: Company;

  // tslint:disable-next-line: max-line-length
  constructor(private route: ActivatedRoute, private formBuilder: FormBuilder, private router: Router, private companyService: CompanyService, private sectorService: SectorService) {

    this.manageCompanyForm = this.formBuilder.group({
      companyName:new FormControl('', [Validators.required]),
      ceoName:new FormControl('', [Validators.required]),
      turnover:new FormControl('', [Validators.required]),
      boardOfDirectors:new FormControl('', [Validators.required]),
      stockExchange: new FormControl('', [Validators.required]),
      sector: new FormControl('', [Validators.required]),
      companyStockCode: new FormControl('', [Validators.required]),
      status: new FormControl('', [Validators.required]), //TODO remove this if crashed
      companyInfo: new FormControl('', [Validators.required]) 
    })
  }

  ngOnInit() {


    this.route.paramMap.subscribe((params) => { //Get optional parameter
      this.companyID = params.get('companyID');
      console.log(params.get('companyID'))
      if(this.companyID != 'add'){

        this.companyService.getCompany(+this.companyID).subscribe((company) =>{ //get ipo data from database 
          this.company = company as Company;
          console.log(company)
          this.manageCompanyForm = this.formBuilder.group(
            {
              companyName: new FormControl(this.company.companyName, [
                Validators.required,
              ]),
              ceoName: new FormControl(this.company.ceoName, [
                Validators.required,
              ]),
              turnover: new FormControl(this.company.turnover, [
                Validators.required,
              ]),
              boardOfDirectors: new FormControl(this.company.boardofDirectors, [
                Validators.required,
              ]),
              stockExchange: new FormControl(String(this.company.listedInStockExchanges), [
                Validators.required
              ]),
              sector: new FormControl(this.company.sector.sectorId, [
                Validators.required
              ]),
              companyStockCode: new FormControl(this.company.stockCode, [
                Validators.required,
              ]),
              status: new FormControl(
                String(this.company.companyBlocked),
                [Validators.required]
              ),
              companyInfo: new FormControl(this.company.briefWriteUp, [
                Validators.required,
              ]),
            },
          );
        });
  
  
       }
       else{
  
        this.manageCompanyForm = this.formBuilder.group(
          {
            companyName: new FormControl(this.companyName, [
              Validators.required,
            ]),
            ceoName: new FormControl(this.ceoName, [
              Validators.required,
            ]),
            turnover: new FormControl(this.turnover, [
              Validators.required,
            ]),
            boardOfDirectors: new FormControl(this.boardOfDirectors, [
              Validators.required,
            ]),
            stockExchange: new FormControl(this.stockExchange, [
              Validators.required
            ]),
            sector: new FormControl(this.sector, [
              Validators.required
            ]),
            companyStockCode: new FormControl(this.companyStockCode, [
              Validators.required,
            ]),
            status: new FormControl(
              this.isCompanyBlocked,
              [Validators.required]
            ),
            companyInfo: new FormControl(this.companyInfo, [
              Validators.required,
            ]),
          },
        );
  
       }
     });

   


  
  }

  get f() { return this.manageCompanyForm.controls; }

  onSubmit() {
    this.submitted = true;
    if (this.manageCompanyForm.invalid) {
      return;
    }

    console.log(this.manageCompanyForm.value);

    this.sectorService.getSector(this.manageCompanyForm.value['sector']).subscribe((sector: Sector)=>{
      const company = {
        companyName: this.manageCompanyForm.value['companyName'],
        turnover: this.manageCompanyForm.value['turnover'],
        ceoName: this.manageCompanyForm.value['ceoName'],
        boardofDirectors: this.manageCompanyForm.value['boardOfDirectors'],
        listedInStockExchanges: this.manageCompanyForm.value['stockExchange'],
        sector: sector,
        stockCode: this.manageCompanyForm.value['companyStockCode'],
        companyBlocked: this.manageCompanyForm.value['status'],
        briefWriteUp: this.manageCompanyForm.value['companyInfo'],
  
       
      };
  
      console.log('Company :' + company);
  
  if(this.companyID === 'add'){
    this.companyService.addCompany(company).subscribe(()=>{
    alert("Company Added Successfully")
    this.router.navigateByUrl('/admin/list-company');
    }
    )
  
  }else{
    const companyUpdate: Company = {
      companyId: +this.companyID,
      companyName: this.manageCompanyForm.value['companyName'],
      turnover: this.manageCompanyForm.value['turnover'],
      ceoName: this.manageCompanyForm.value['ceoName'],
      boardofDirectors: this.manageCompanyForm.value['boardOfDirectors'],
      listedInStockExchanges: this.manageCompanyForm.value['stockExchange'],
      sector: sector,
      stockCode: this.manageCompanyForm.value['companyStockCode'],
      companyBlocked: this.manageCompanyForm.value['status'],
      briefWriteUp: this.manageCompanyForm.value['companyInfo'],

     
    };
    this.companyService.updateCompany(companyUpdate).subscribe(()=>{
    alert("Company Updated Successfully")
    this.router.navigateByUrl('/admin/list-company');
    }
    )
  }
}) 

    
  }


  mustMatch(controlName: string, matchingControlName: string) {
    return (formGroup: FormGroup) => {
      const control = formGroup.controls[controlName];
      const matchingControl = formGroup.controls[matchingControlName];

      if (matchingControl.errors && !matchingControl.errors.mustMatch) {
        // return if another validator has already found an error on the matchingControl
        return;
      }

      // set error on matchingControl if validation fails
      if (control.value !== matchingControl.value) {
        matchingControl.setErrors({ mustMatch: true });
      } else {
        matchingControl.setErrors(null);
      }
    };
  }

}
