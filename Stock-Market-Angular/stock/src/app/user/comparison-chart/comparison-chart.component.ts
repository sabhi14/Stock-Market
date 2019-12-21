import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from "@angular/forms";
import { Router } from '@angular/router';
import { StockPrice } from 'src/app/model/stock_price_model';
import { StockService } from 'src/app/service/stock.service';


@Component({
  selector: 'app-comparison-chart',
  templateUrl: './comparison-chart.component.html',
  styleUrls: ['./comparison-chart.component.scss']
})
export class ComparisonChartComponent implements OnInit {

  comparisonChart: FormGroup;
  submitted = false;
  dataSource: Object;

  company1Data: StockPrice[];
  company2Data: StockPrice[];

  constructor(private formBuilder: FormBuilder, private router: Router, private stockService: StockService) {

    this.dataSource = {
      /*  "chart": {
         "theme": "fusion",
         "caption": "Number of visitors last week",
         "subCaption": "Bakersfield Central vs Los Angeles Topanga",
         "xAxisName": "Day"
       },
       "categories": [{
         "category": [{
             "label": "Mon"
           },
           {
             "label": "Tue"
           },
           {
             "label": "Wed"
           },
           {
             "label": "Thu"
           },
           {
             "label": "Fri"
           },
           {
             "label": "Sat"
           },
           {
             "label": "Sun"
           }
         ]
       }],
       "dataset": [{
           "seriesname": "Bakersfield Central",
           "data": [{
               "value": "15123"
             },
             {
               "value": "14233"
             },
             {
               "value": "25507"
             },
             {
               "value": "9110"
             },
             {
               "value": "15529"
             },
             {
               "value": "20803"
             },
             {
               "value": "19202"
             }
           ]
         },
         {
           "seriesname": "Los Angeles Topanga",
           "data": [{
               "value": "13400"
             },
             {
               "value": "12800"
             },
             {
               "value": "22800"
             },
             {
               "value": "12400"
             },
             {
               "value": "15800"
             },
             {
               "value": "19800"
             },
             {
               "value": "21800"
             }
           ]
         }
       ],
       // "trendlines": [{
       //   "line": [{
       //     "startvalue": "17022",
       //     "color": "#62B58F",
       //     "valueOnRight": "1",
       //     "displayvalue": "Average"
       //   }]
       // }]
     } */
    }
  }

  ngOnInit() {
    this.comparisonChart = this.formBuilder.group(
      {
        selectSE1: new FormControl('', [
          Validators.required
        ]),
        selectSE2: new FormControl('', [
          Validators.required
        ]),
        companyName1: new FormControl('', [
          Validators.required
        ]),
        companyName2: new FormControl('', [
          Validators.required
        ]),
        period: new FormControl('', [
          Validators.required
        ]),



      });
  }

  get f() {
    return this.comparisonChart.controls;
  }

  onSubmit() {
    this.submitted = true;
    if (this.comparisonChart.invalid) {
      return;
    }

    // console.log(this.comparisonChart.value);

    const chartObject = {

      selectStoExch1: this.comparisonChart.value["selectSE1"],
      selectStoExch2: this.comparisonChart.value["selectSE2"],
      companyName1: this.comparisonChart.value["companyName1"],
      companyName2: this.comparisonChart.value["companyName2"],
      period: this.comparisonChart.value["period"],
    };

    console.log(chartObject);

    if (chartObject.period == '1') {
      this.stockService.getStockPriceLastWeek(chartObject.companyName1, chartObject.selectStoExch1).subscribe((stock: StockPrice[]) => {
        this.company1Data = stock;
        this.stockService.getStockPriceLastWeek(chartObject.companyName2, chartObject.selectStoExch2).subscribe((stock: StockPrice[]) => {
          this.company2Data = stock;
          console.log(this.company1Data);
          console.log(this.company2Data);


          let category = [];
          let data1 = [];

          let data2 = [];

          this.company1Data.forEach((sp) => {
            category.push({ "label": sp.date.toString().substring(0, 10) });
            data1.push({"value":sp.stockPrice.toString()})
          })

          this.company2Data.forEach((sp) => {
            data2.push({"value":sp.stockPrice.toString()})
          })

          this.generateChart(category,data1,data2);


        })
      })

    }else if(chartObject.period == '2'){
      this.stockService.getStockPriceLastMonth(chartObject.companyName1, chartObject.selectStoExch1).subscribe((stock: StockPrice[]) => {
        this.company1Data = stock;
        this.stockService.getStockPriceLastMonth(chartObject.companyName2, chartObject.selectStoExch2).subscribe((stock: StockPrice[]) => {
          this.company2Data = stock;
          console.log(this.company1Data);
          console.log(this.company2Data);


          let category = [];
          let data1 = [];

          let data2 = [];

          this.company1Data.forEach((sp) => {
            category.push({ "label": sp.date.toString().substring(0, 10) });
            data1.push({"value":sp.stockPrice.toString()})
          })

          this.company2Data.forEach((sp) => {
            data2.push({"value":sp.stockPrice.toString()})
          })

          this.generateChart(category,data1,data2);


        })
      })
    }else{
      this.stockService.getStockPriceLastQuarter(chartObject.companyName1, chartObject.selectStoExch1).subscribe((stock: StockPrice[]) => {
        this.company1Data = stock;
        this.stockService.getStockPriceLastQuarter(chartObject.companyName2, chartObject.selectStoExch2).subscribe((stock: StockPrice[]) => {
          this.company2Data = stock;
          console.log(this.company1Data);
          console.log(this.company2Data);


          let category = [];
          let data1 = [];

          let data2 = [];

          this.company1Data.forEach((sp) => {
            category.push({ "label": sp.date.toString().substring(0, 10) });
            data1.push({"value":sp.stockPrice.toString()})
          })

          this.company2Data.forEach((sp) => {
            data2.push({"value":sp.stockPrice.toString()})
          })

          this.generateChart(category,data1,data2);


        })
      })
    }




  }


  generateChart(category,data1,data2) {
    this.dataSource = {
      "chart": {
        "theme": "fusion",
        "caption": this.comparisonChart.value["companyName1"] + " vs " + this.comparisonChart.value["companyName2"],
        "subCaption": "Last 7 days",
        "xAxisName": "Date"
      },
      "categories": [{
        "category": category
      }],
      "dataset": [{
        "seriesname": this.comparisonChart.value["companyName1"],
        "data": data1
      },
      {
        "seriesname": this.comparisonChart.value["companyName2"],
        "data": data2
      }
      ],

    }
  }
}
