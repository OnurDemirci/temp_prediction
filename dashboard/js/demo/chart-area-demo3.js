// Set new default font family and font color to mimic Bootstrap's default styling
Chart.defaults.global.defaultFontFamily = '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
Chart.defaults.global.defaultFontColor = '#292b2c';

// Area Chart Example
var ctx = document.getElementById("myAreaChart");
var myLineChart = new Chart(ctx, {
  type: 'line',
  data: {
    labels: ['1966', '1967', '1968', '1969', '1970', '1971', '1972', '1973',
        '1974', '1975', '1976', '1977', '1978', '1979', '1980', '1981',
        '1982', '1983', '1984', '1985', '1986', '1987', '1988', '1989',
        '1990', '1991', '1992', '1993', '1994', '1995', '1996', '1997',
        '1998', '1999', '2000', '2001', '2002', '2003', '2004', '2005',
        '2006', '2007', '2008', '2009', '2010', '2011', '2012', '2013',
        '2014', '2015'],
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
      data: [8.46, 8.67, 8.36, 8.73, 8.72, 8.71, 8.62, 8.88, 8.83, 8.93, 8.48,
       8.61, 8.55, 8.76, 8.43, 8.8 , 8.77, 8.76, 8.66, 8.91, 8.85, 8.93,
       8.48, 8.6 , 8.55, 8.76, 8.43, 8.8 , 8.78, 8.77, 8.68, 8.93, 8.88,
       8.97, 8.52, 8.65, 8.6 , 8.81, 8.48, 8.85, 8.82, 8.81, 8.72, 8.97,
       8.91, 9.  , 8.55, 8.67, 8.62, 8.83],
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
    8.599,
8.7,
8.516,
8.595,
8.701,
8.599,
8.5,
8.948,
8.468,
8.745,
8.347,
8.85,
8.693,
8.733,
8.98,
9.166,
8.639,
9.028,
8.692,
8.658,
8.834,
8.994,
9.202,
8.922,
9.234,
9.179,
8.837,
8.867,
9.039,
9.347,
9.039,
9.203,
9.523,
9.285,
9.201,
9.415,
9.57,
9.526,
9.325,
9.701,
9.532,
9.732,
9.432,
9.505,
9.703,
9.516,
9.507,
9.606,
9.571,
9.831
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
          min: 8,
          max: 10,
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
