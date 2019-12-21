import { StockExchange } from '../../model/stock_exchange_model';
import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ExchangeService } from 'src/app/service/exchange.service';



@Component({
  selector: 'app-edit-exchange',
  templateUrl: './add-exchange.component.html',
  styleUrls: ['./add-exchange.component.css']
})
export class AddExchangeComponent implements OnInit {

  
  stockExchangeId = 0;
  stockExchange = "";
  brief = "";
  contactAddress = "";
  remarks = "";
 

  submitted = false;
  addExchangeForm: FormGroup;

  exchange: StockExchange;

  // tslint:disable-next-line: max-line-length
  constructor(private route: ActivatedRoute, private formBuilder: FormBuilder, private router: Router, private exchangeService: ExchangeService) {

    this.addExchangeForm = this.formBuilder.group({
      stockExchange: new FormControl('', [Validators.required]),
      brief: new FormControl('', [Validators.required]),
      contactAddress: new FormControl('', [Validators.required]),
      remarks: new FormControl('', [Validators.required])
    })
  }

  ngOnInit() {

    this.addExchangeForm = this.formBuilder.group(
      {
        stockExchange: new FormControl(this.stockExchange, [
          Validators.required,
          Validators.minLength(4)
        ]),
        brief: new FormControl(this.brief, [
          Validators.required,
          Validators.minLength(4)
        ]),
        remarks: new FormControl(this.remarks, [
          Validators.required,
          Validators.minLength(4)
        ]),
        contactAddress: new FormControl(this.contactAddress, [
          Validators.required,
          Validators.minLength(3)
        ]),
      },
    );
        }
      

    


  
  

  get f() { return this.addExchangeForm.controls; }

  onSubmit() {
    this.submitted = true;
    if (this.addExchangeForm.invalid) {
      return;
    }

    console.log(this.addExchangeForm.value);

    const exchange: StockExchange = { //Random
      stockExchangeName: this.addExchangeForm.value['stockExchange'],
      brief: this.addExchangeForm.value['brief'],
      remarks: this.addExchangeForm.value['remarks'],
      contactAddress: this.addExchangeForm.value['contactAddress'],
    };

    console.log('Exchange :' + exchange);


    this.exchangeService.addExchange(exchange).subscribe(()=>{
    console.log("Exchange Added Successfully");
    this.router.navigateByUrl('admin/manage-exchange');
    }
    )
  }


}

