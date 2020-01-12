// Set new default font family and font color to mimic Bootstrap's default styling
Chart.defaults.global.defaultFontFamily = '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
Chart.defaults.global.defaultFontColor = '#292b2c';

// Area Chart Example
var ctx = document.getElementById("myAreaChart");
var myLineChart = new Chart(ctx, {
  type: 'line',
  data: {
    labels: ["01-2010",
"02-2010",
"03-2010",
"04-2010",
"05-2010",
"06-2010",
"07-2010",
"08-2010",
"09-2010",
"10-2010",
"11-2010",
"12-2010",
"01-2011",
"02-2011",
"03-2011",
"04-2011",
"05-2011",
"06-2011",
"07-2011",
"08-2011",
"09-2011",
"10-2011",
"11-2011",
"12-2011",
"01-2012",
"02-2012",
"03-2012",
"04-2012",
"05-2012",
"06-2012",
"07-2012",
"08-2012",
"09-2012",
"10-2012",
"11-2012",
"12-2012"],
    datasets: [{
      label: "Tahmin Edilen Sıcaklık",
      lineTension: 0.3,
      backgroundColor: "rgba(2,117,216,0.0)",
      borderColor: "rgba(2,117,216,1)",
      pointRadius: 5,
      pointBackgroundColor: "rgba(2,117,216,1)",
      pointBorderColor: "rgba(255,255,255,0.8)",
      pointHoverRadius: 5,
      pointHoverBackgroundColor: "rgba(2,117,216,1)",
      pointHitRadius: 50,
      pointBorderWidth: 2,
      data: [ 3.47,  3.39,  5.55, 11.47, 15.88, 19.24, 23.01, 22.23, 18.15,
       13.07,  7.93,  4.78,  1.5 ,  0.92,  5.71, 11.26, 16.92, 22.35,
       24.87, 24.64, 18.31, 11.19,  7.89,  3.65,  1.35,  2.82,  7.34,
        8.63, 18.79, 21.94, 21.99, 21.58, 19.4 , 13.06,  7.07,  1.59],
},{
  label: "Gerçek Sıcaklık",
  lineTension: 0.3,
  backgroundColor: "rgba(240, 19, 74,0.0)",
  borderColor: "rgba(240, 19, 74,1)",
  pointRadius: 5,
  pointBackgroundColor: "rgba(240, 19, 74,1)",
  pointBorderColor: "rgba(255,255,255,0.8)",
  pointHoverRadius: 5,
  pointHoverBackgroundColor: "rgba(240, 19, 74,1)",
  pointHitRadius: 50,
  pointBorderWidth: 2,
  data: [
    3.71,
5.695,
8.171,
11.335,
16.805,
21.36,
25.02,
26.27,
21.75,
13.88,
11.08,
6.29,
1.97,
2.46,
6.13,
9.68,
14.71,
20.00,
24.61,
23.66,
20.20,
12.46,
4.19,
2.86,
0.14,
-0.76,
3.779,
12.90,
16.32,
21.94,
24.93,
24.21,
21.02,
15.98,
10.00,
3.77
],
}

],
  },
  options: {
    scales: {
      xAxes: [{
        time: {
          unit: 'date'
        },
        gridLines: {
          display: false
        },
        ticks: {
          maxTicksLimit: 55
        }
      }],
      yAxes: [{
        ticks: {
          min: -2,
          max: 30,
          maxTicksLimit: 20,
          ticks:20,
        },
        gridLines: {
          color: "rgba(0, 0, 0, .125)",
        }
      }],
    },
    legend: {
      display: true,
      position: "top",
      align:"top"
    }
  }
});
