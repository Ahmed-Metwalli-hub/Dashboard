$('.drop-down-menu').click(function(){
    $('.drop-down-menu').not(this).next().slideUp()
    $(this).next().slideToggle()
})

$('.fa-solid').click(function(){
    $(this).next().slideToggle()
})
$('.fa-moon').click(function(){
    $(this).hide()
    $('.fa-sun').show()
    $('body').addClass('da-rk')
    
})
$('.fa-sun').click(function(){
    $(this).hide()
    $('.fa-moon').show()
    $('body').removeClass('da-rk')
    
})
const xValues = ["Italy", "France", "Spain", "USA", "Argentina"];
const yValues = [55, 49, 44, 24, 15];
const barColors = ["red", "green","blue","orange","brown"];

new Chart("myChart", {
  type: "bar",
  data: {
    labels: xValues,
    datasets: [{
      backgroundColor: barColors,
      data: yValues
    }]
  },
  options: {
    legend: {display: false},
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero: true
        }
      }]
    },

    title: {
      display: true,
      text: "Hello Bootstrap"
    }
  }
});

const xValues_2 = ["Italy", "France", "Spain", "USA", "Argentina"];
const yValues_2 = [55, 49, 44, 24, 15];
const barColors_2 = [
  "#b91d47",
  "#00aba9",
  "#2b5797",
  "#e8c3b9",
  "#1e7145"
];

new Chart("myChart_2", {
  type: "doughnut",
  data: {
    labels: xValues_2,
    datasets: [{
      backgroundColor: barColors_2,
      data: yValues_2
    }]
  },
  options: {
    title: {
      display: true,
      text: "Hello Bootstrap"
    }
  }
});