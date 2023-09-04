const ctx = document.getElementById('myChart');

// testData = [
//   {
//    label: 'Prof Another Test',
//    data: [28, 48, 40, 19, 96, 27, 100, 0, 78],
//    fill: true,
//    backgroundColor: 'rgba(54, 162, 235, 0.2)',
//    borderColor: 'rgb(54, 162, 235)',
//    pointBackgroundColor: 'rgb(54, 162, 235)',
//    pointBorderColor: '#fff',
//    pointHoverBackgroundColor: '#fff',
//    pointHoverBorderColor: 'rgb(54, 162, 235)'
//  },{
//   label: 'Dr A Test',
//   data: [65, 59, 90, 81, 56, 55, 40, 34, 21],
//   fill: true,
//   backgroundColor: 'rgba(255, 99, 132, 0.2)',
//   borderColor: 'rgb(255, 99, 132)',
//   pointBackgroundColor: 'rgb(255, 99, 132)',
//   pointBorderColor: '#fff',
//   pointHoverBackgroundColor: '#fff',
//   pointHoverBorderColor: 'rgb(255, 99, 132)'
//
// }];

const myChart = new Chart(ctx, {
    type: 'radar',
    data: {
      labels: [
        'Computer Science',
        'Ethics',
        'Human Computer Interaction',
        'Mathematics',
        'Neuroscience',
        'Philosophy',
        'Psychology',
        'Science and Technology Studies',
        'Statistics'
      ],
      datasets: []
    },
    options: {
        plugins: {
            legend: {
                display: false
            }
        },
        scales: {
            r: {
                angleLines: {
                    display: false
                },
                suggestedMin: 0,
                suggestedMax: 100
            }
        }

    }
});
