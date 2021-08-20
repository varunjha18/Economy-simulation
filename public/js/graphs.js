google.charts.load('current', { 'packages': ['corechart'] });
google.charts.setOnLoadCallback(drawChart);
Cinit = 100000000000
Yinit = 100000000000000
exp_arrC = [['year', 'Consumption (Billions)'], [1, 6]];
exp_arrI = [['year', 'Investment (Billions)'], [1, 2]];
exp_arrG = [['year', 'Government Expenditure(Billions)'], [1, 2]];
exp_arrY = [['year', 'GDP (Trillions)'], [1, 1]];
exp_arrF = [['year', 'Fiscal deficit (Billions)'], [1, 40]];
exp_arrg = [['year', 'Growth Rate (%)'], [0, 4.5], [1, 5]];
year = 1
function app_arr() {
    ++year
    exp_arrC.push([year, (newvalue.C) / Cinit])
    exp_arrI.push([year, newvalue.I / Cinit])
    exp_arrG.push([year, newvalue.G / Cinit])
    exp_arrY.push([year, newvalue.Y / Yinit])
    exp_arrF.push([year, newvalue.F_def / Cinit])
    exp_arrg.push([year, newvalue.g])
    if (year < 10) {
        drawChart();
        drawChart2();
    }
}
function drawChart() {
    var dataC = google.visualization.arrayToDataTable(exp_arrC);
    var dataI = google.visualization.arrayToDataTable(exp_arrI);
    var dataG = google.visualization.arrayToDataTable(exp_arrG);
    var dataY = google.visualization.arrayToDataTable(exp_arrY);
    var dataF = google.visualization.arrayToDataTable(exp_arrF);
    var datag = google.visualization.arrayToDataTable(exp_arrg);

    var optionsC = {
        title: 'Consumption',
        curveType: 'function',
        legend: { position: 'bottom' },
    };
    var optionsI = {
        title: 'Investment',
        curveType: 'function',
        legend: { position: 'bottom' },
    };
    var optionsG = {
        title: 'Government Expenditure',
        curveType: 'function',
        legend: { position: 'bottom' },
    };
    var optionsY = {
        title: 'Gross Domestic Product(GDP)',
        curveType: 'function',
        legend: { position: 'bottom' },
    };
    var optionsF = {
        title: 'Fiscal deficit',
        curveType: 'function',
        legend: { position: 'bottom' },
    };
    var optionsg = {
        title: 'Growth rate',
        curveType: 'function',
        legend: { position: 'bottom' },
    };

    var chartC = new google.visualization.LineChart(document.getElementById('curve_chart'));
    var chartI = new google.visualization.LineChart(document.getElementById('curve_chart2'));
    var chartG = new google.visualization.LineChart(document.getElementById('curve_chart3'));
    var chartY = new google.visualization.LineChart(document.getElementById('curve_chart4'));
    var chartF = new google.visualization.LineChart(document.getElementById('curve_chart5'));
    var chartg = new google.visualization.LineChart(document.getElementById('curve_chart6'));

    chartC.draw(dataC, optionsC);
    chartI.draw(dataI, optionsI);
    chartG.draw(dataG, optionsG);
    chartY.draw(dataY, optionsY);
    chartF.draw(dataF, optionsF);
    chartg.draw(datag, optionsg);
}

function drawChart2() {
    var datan = google.visualization.arrayToDataTable(exp_arrC);
    var optionsn = {
        title: 'Consumptionnnnn',
        curveType: 'function',
        legend: { position: 'bottom' },
    };

    var chartn = new google.visualization.LineChart(document.getElementById('curve_chart7'));
    chartC.draw(datan, optionsn);



}









var ctx = document.getElementById('myChart').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});