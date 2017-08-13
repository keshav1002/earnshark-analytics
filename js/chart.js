// Load the Visualization API and the corechart package.
google.charts.load('current', { 'packages': ['corechart'] });

// Set a callback to run when the Google Visualization API is loaded.
google.charts.setOnLoadCallback(drawPieChart);
google.charts.setOnLoadCallback(drawColumnChart);
google.charts.setOnLoadCallback(drawLineChart);
google.charts.setOnLoadCallback(drawScatterChart);
google.charts.setOnLoadCallback(drawComboChart);

// Callback that creates and populates a data table,
// instantiates the pie chart, passes in the data and
// draws it.
function drawPieChart() {

    // Create the data table.
    var data = new google.visualization.DataTable();
    data.addColumn('string', 'Licenses');
    data.addColumn('number', 'Number of Customers');
    data.addRows([
        ['Renew licenses', 3],
        ['Upgrade licenses', 2],
        ['Downgrade licenses', 1],
        ['Cancel licenses', 1]
    ]);

    // Set chart options
    var options = {
        title: 'All Customers License Info',
        width: 470,
        height: 370,
        fontSize: 14,
        is3D: true,
        chartArea: { left: 30, top: 50, bottom: 10, right: 30 }
    };

    // Instantiate and draw our chart, passing in some options.
    var chart = new google.visualization.PieChart(document.getElementById('pie_chart'));
    chart.draw(data, options);
}

function drawColumnChart() {

    google.charts.load('current', { 'packages': ['bar'] });
    var data = google.visualization.arrayToDataTable([
        ["License", "Percentage", { role: "style" }],
        ["X License", 0.94, "#3366CC"],
        ["Y License", 0.49, "#DC3912"],
        ["Z License", 0.30, "#FF9900"],
    ]);

    var view = new google.visualization.DataView(data);
    view.setColumns([0, 1, 2]);

    var options = {
        title: "Most Used License Model",
        width: 470,
        height: 370,
        fontSize: 14,
        // bar: { groupWidth: "95%" },
        legend: { position: "none" },
        vAxis: {
            title: 'Percentage of Usage',
            format: 'percent'
        },
        chartArea: { left: 100, top: 50, bottom: 50, right: 30 }
    };
    var chart = new google.visualization.ColumnChart(document.getElementById("column_chart"));
    chart.draw(view, options);

    var chart = new google.visualization.ColumnChart(document.getElementById("chart_div3"));
    chart.draw(view, options);
}

function drawLineChart() {
    var data = new google.visualization.DataTable();
    data.addColumn('number', 'X');
    data.addColumn('number', 'Revenue');

    data.addRows([
        [0, 0], [1, 200], [2, 330], [3, 270], [4, 280], [5, 300],
        [6, 210], [7, 370], [8, 430], [9, 500], [10, 420], [11, 450],
        [12, 400], [13, 500], [14, 520], [15, 570], [16, 540], [17, 580],
        [18, 620], [19, 640], [20, 520], [21, 650], [22, 560], [23, 570],
        [24, 600], [25, 500], [26, 520], [27, 510], [28, 490], [29, 530],
        [30, 550]
    ]);

    var options = {
        title: "Total Revenue (Monthly)",
        hAxis: {
            title: 'Day'
        },
        vAxis: {
            title: 'Revenue',
            format: 'currency'
        },
        width: 620,
        height: 450,
        fontSize: 14,
        legend: { position: "none" },
        chartArea: { left: 90, top: 50, bottom: 50, right: 30 },
        trendlines: {
            0: { type: 'exponential', color: '#DC3912', opacity: 1 }
        }
    };

    var chart = new google.visualization.LineChart(document.getElementById('line_chart'));

    chart.draw(data, options);
}

function drawScatterChart() {
    var data = google.visualization.arrayToDataTable([
        ['Days', 'Users'],
        [0, 1], [1, 2], [2, 5], [3, 6], [4, 7], [5, 8], [6, 7], [7, 5],
        [8, 7], [9, 8], [10, 9], [11, 10], [12, 15], [13, 23], [14, 15], [15, 10],
        [16, 8], [17, 12], [18, 10], [19, 8], [20, 9], [21, 9], [22, 12], [23, 13],
        [24, 8], [25, 12], [26, 10], [27, 8], [28, 9], [29, 9]
    ]);

    var options = {
        title: 'Users coming on board (Monthly)',
        hAxis: { title: 'Days' },
        vAxis: { title: 'Users' },
        legend: 'none',
        width: 470,
        height: 370,
        fontSize: 14,
        is3D: true,
        chartArea: { left: 50, top: 50, bottom: 50, right: 20 }
    };

    var chart = new google.visualization.ScatterChart(document.getElementById('scatter_chart'));

    chart.draw(data, options);
}

function drawComboChart() {
    // Some raw data (not necessarily accurate)
    var data = google.visualization.arrayToDataTable([
        ['Quarters', 'X License', 'Y License', 'Z License', 'Average'],
        ['Q1', 165, 938, 522, 614.6],
        ['Q2', 135, 1120, 599, 682],
        ['Q3', 157, 1167, 587, 623],
        ['Q4', 139, 1110, 615, 609.4]
    ]);

    var options = {
        title: 'Total Project Revenue',
        vAxis: { title: 'Revenue', format: 'currency' },
        hAxis: { title: 'Quarters' },
        seriesType: 'bars',
        series: { 3: { type: 'line' } },
        width: 800,
        height: 450,
        fontSize: 14,
        chartArea: { left: 100, top: 50, bottom: 50, right: 200 },
    };

    var chart = new google.visualization.ComboChart(document.getElementById('combo_chart'));
    chart.draw(data, options);
}