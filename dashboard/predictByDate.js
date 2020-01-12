$(document).ready(function () {
  var default_year = 2011;
  var default_month = 10;
  $('#get-data').click(function () {
    var showData = $('#show-data');
    month = $('#month').val();
    year = parseInt($("#year").val());
    index_selector = (year-default_year)*12-(default_month-month)-1
    if (index_selector<0) {
      alert("Girilen tarih başlangıç tarihinden önce olamaz!")
    }
    else{
    $.getJSON('json/long_results.json', function (data) {
      console.log(index_selector);
      $("#show-data").text("Seçilen tarihteki sıcaklık : "+data[index_selector].predicted_value+"°C. Yani sanırım.")
    });}
  });

});
