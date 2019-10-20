import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html'
 
})
export class ChartComponent implements OnInit {
  title = 'Bar Chart  for total sales in 2017 and 2018';
  constructor() { }

  ngOnInit() {
  }

  chartOptions = {
    responsive: true    // THIS WILL MAKE THE CHART RESPONSIVE (VISIBLE IN ANY DEVICE).
  }
  labels =  ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];
  pieChartLabels =  ['SHIRT', 'PANT', 'SKIRT', 'JEANS', 'TOP'];

  chartData = [
    {
      label: 'sales in 2017',
      data: [21, 56, 4, 31, 45, 15, 57, 61, 9, 17, 24, 59] 
    },
    { 
      label: 'sales in 2018',
      data: [47, 9, 28, 54, 77, 51, 24]
    }
  ];
   // CHART COLOR.
   colors = [
    { // 1st Year.
      backgroundColor: 'rgba(77,83,96,0.2)'
    },
    { // 2nd Year.
      backgroundColor: 'rgba(30, 169, 224, 0.8)'
    }
  ]
  
  // CHART CLICK EVENT.
  onChartClick(event) {
    console.log(event);
  }


  // pie chart configurations
   // CHART COLOR.
   pieChartColor:any = [
    {
        backgroundColor: ['rgba(30, 169, 224, 0.8)',
        'rgba(255,165,0,0.9)',
        'rgba(139, 136, 136, 0.9)',
        'rgba(255, 161, 181, 0.9)',
        'rgba(255, 102, 0, 0.9)'
        ]
    }
 ]
 pieChartData:any = [
  { 
      data: [47, 9, 28, 54, 77] 
  }
];

  

}


