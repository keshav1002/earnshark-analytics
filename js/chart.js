// Load the Visualization API and the corechart package.
google.charts.load('current', { 'packages': ['corechart'] });

// Set a callback to run when the Google Visualization API is loaded.
google.charts.setOnLoadCallback(drawLineChart);
google.charts.setOnLoadCallback(drawComboChart);
google.charts.setOnLoadCallback(drawPieChart);
google.charts.setOnLoadCallback(drawScatterChart);
google.charts.setOnLoadCallback(drawColumnChart);

$(window).resize(function () {
    drawLineChart();
    drawComboChart();
    drawPieChart();
    drawScatterChart();
    drawColumnChart();
});

// Callback that creates and populates a data table,
// instantiates the pie chart, passes in the data and
// draws it.
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
        titleTextStyle: {
            fontName: 'Roboto',
            fontSize: 28,
            bold: true
        },
        hAxis: {
            title: 'Day',
            titleTextStyle: {
                fontName: 'Roboto',
                fontSize: 18,
                bold: true
            },
            textStyle: {
                fontName: 'Roboto',
                fontSize: 14,
                bold: true
            }
        },
        vAxis: {
            title: 'Revenue',
            format: 'currency',
            textStyle: {
                fontName: 'Roboto',
                fontSize: 14,
                bold: true
            },
            titleTextStyle: {
                fontName: 'Roboto',
                fontSize: 18,
                bold: true
            }
        },
        // width: 1130,
        // height: 600,
        fontSize: 14,
        legend: { position: "none" },
        chartArea: { left: 100, top: 50, bottom: 60, right: 30 },
        trendlines: {
            0: { type: 'exponential', color: '#DC3912', opacity: 1 }
        },
        animation: {
            startup: true,
            duration: 500,
            easing: 'inAndOut',
        }
    };

    var chart = new google.visualization.LineChart(document.getElementById('line_chart'));

    chart.draw(data, options);
}

function drawComboChart() {
    // Some raw data (not necessarily accurate)

    var rowData1 = [
        ['Quarters', 'X License', 'Y License', 'Z License', 'Average'],
        ['Q1', 165, 938, 522, 541.67],
        ['Q2', 135, 1120, 599, 618],
        ['Q3', 157, 1167, 587, 637],
        ['Q4', 139, 1110, 615, 621.3]
    ];

    var rowData2 = [
        ['Quarters', 'A License', 'B License', 'C License', 'Average'],
        ['Q1', 950, 456, 165, 523.67],
        ['Q2', 600, 825, 1150, 858.3],
        ['Q3', 450, 1167, 1150, 922.3],
        ['Q4', 700, 1000, 800, 833.3]
    ];

    var data = [];
    data[0] = google.visualization.arrayToDataTable(rowData1);
    data[1] = google.visualization.arrayToDataTable(rowData2);

    var options = {
        title: 'Total Project Revenue',
        titleTextStyle: {
            fontName: 'Roboto',
            fontSize: 28,
            bold: true
        },
        vAxis: {
            title: 'Revenue',
            format: 'currency',
            textStyle: {
                fontName: 'Roboto',
                fontSize: 14,
                bold: true
            },
            titleTextStyle: {
                fontName: 'Roboto',
                fontSize: 18,
                bold: true
            }
        },
        hAxis: {
            title: 'Quarters',
            titleTextStyle: {
                fontName: 'Roboto',
                fontSize: 18,
                bold: true
            },
            textStyle: {
                fontName: 'Roboto',
                fontSize: 14,
                bold: true
            }
        },
        seriesType: 'bars',
        series: { 3: { type: 'line' } },
        fontSize: 14,
        chartArea: { left: 100, top: 50, bottom: 50, right: 180 },
        animation: {
            startup: true,
            duration: 500,
            easing: 'inAndOut',
        },
        legend: {
            textStyle: {
                fontName: 'Roboto',
                fontSize: 18,
                bold: true
            }
        }
    };

    var current = 0;
    var chart = new google.visualization.ComboChart(document.getElementById('combo_chart'));
    var button = document.getElementById('comboChartSwitch');
    function drawChart() {
        // Disabling the button while the chart is drawing.
        button.disabled = true;
        google.visualization.events.addListener(chart, 'ready',
            function () {
                button.disabled = false;
                document.getElementById('comboChartDrpDown').innerHTML = ((current ? 'Product DEF' : 'Product ABC') + '&nbsp;&nbsp;<span class="caret"></span>');
                button.innerHTML = 'Switch to ' + (current ? 'Product ABC' : 'Product DEF');
            });
        options['title'] = 'Total Project Revenue of ' + (current ? 'Product DEF' : 'Product ABC');

        chart.draw(data[current], options);
    }
    drawChart();

    button.onclick = function () {
        current = 1 - current;
        drawChart();
    }
}

function drawPieChart() {

    var rowData1 = [
        ['Licenses', 'Number of Customers'],
        ['Renew licenses', 3],
        ['Upgrade licenses', 2],
        ['Downgrade licenses', 1],
        ['Cancel licenses', 1]
    ];

    var rowData2 = [
        ['Licenses', 'Number of Customers'],
        ['Renew licenses', 4],
        ['Upgrade licenses', 3],
        ['Downgrade licenses', 2],
        ['Cancel licenses', 2]
    ];

    var data = [];
    data[0] = google.visualization.arrayToDataTable(rowData1);
    data[1] = google.visualization.arrayToDataTable(rowData2);

    var options = {
        title: 'All Customers License Info',
        titleTextStyle: {
            fontName: 'Roboto',
            fontSize: 28,
            bold: true
        },
        fontSize: 24,
        is3D: true,
        chartArea: { left: 100, top: 50, bottom: 10, right: 30 },
        legend: {
            textStyle: {
                fontName: 'Roboto',
                fontSize: 18,
                bold: true
            }
        }
    };

    var current = 0;
    var chart = new google.visualization.PieChart(document.getElementById('pie_chart'));
    var button = document.getElementById('pieChartSwitch');
    function drawChart() {
        // Disabling the button while the chart is drawing.
        button.disabled = true;
        google.visualization.events.addListener(chart, 'ready',
            function () {
                button.disabled = false;
                document.getElementById('pieChartDrpDown').innerHTML = ((current ? 'Product DEF' : 'Product ABC') + '&nbsp;&nbsp;<span class="caret"></span>');
                button.innerHTML = 'Switch to ' + (current ? 'Product ABC' : 'Product DEF');
            });
        options['title'] = 'License info for all Customers of ' + (current ? 'Product DEF' : 'Product ABC');

        chart.draw(data[current], options);
    }
    drawChart();

    button.onclick = function () {
        current = 1 - current;
        drawChart();
    }
}

function drawScatterChart() {

    var rowData1 = [
        ['Days', 'Users'],
        [0, 1], [1, 2], [2, 5], [3, 6], [4, 7], [5, 8], [6, 7], [7, 5],
        [8, 7], [9, 8], [10, 9], [11, 10], [12, 15], [13, 23], [14, 15], [15, 10],
        [16, 8], [17, 12], [18, 10], [19, 8], [20, 9], [21, 9], [22, 12], [23, 13],
        [24, 8], [25, 12], [26, 10], [27, 8], [28, 9], [29, 9]
    ];

    var rowData2 = [
        ['Days', 'Users'],
        [0, 1], [1, 4], [2, 3], [3, 5], [4, 9], [5, 6], [6, 8], [7, 6],
        [8, 8], [9, 10], [10, 9], [11, 10], [12, 10], [13, 16], [14, 14], [15, 12],
        [16, 12], [17, 17], [18, 20], [19, 23], [20, 22], [21, 21], [22, 14], [23, 12],
        [24, 8], [25, 15], [26, 11], [27, 9], [28, 8], [29, 14]
    ];

    var data = [];
    data[0] = google.visualization.arrayToDataTable(rowData1);
    data[1] = google.visualization.arrayToDataTable(rowData2);


    var options = {
        title: 'Users coming on board (Monthly)',
        titleTextStyle: {
            fontName: 'Roboto',
            fontSize: 28,
            bold: true
        },
        hAxis: {
            title: 'Days',
            titleTextStyle: {
                fontName: 'Roboto',
                fontSize: 18,
                bold: true
            },
            textStyle: {
                fontName: 'Roboto',
                fontSize: 14,
                bold: true
            }
        },
        vAxis: {
            title: 'Users',
            titleTextStyle: {
                fontName: 'Roboto',
                fontSize: 18,
                bold: true
            },
            textStyle: {
                fontName: 'Roboto',
                fontSize: 14,
                bold: true
            }
        },
        animation: {
            startup: true,
            duration: 500,
            easing: 'inAndOut',
        },
        pointSize: 16,
        legend: 'none',
        fontSize: 14,
        is3D: true,
        chartArea: { left: 50, top: 50, bottom: 50, right: 20 }
    };

    var current = 0;
    var chart = new google.visualization.ScatterChart(document.getElementById('scatter_chart'));
    var button = document.getElementById('scatterChartSwitch');
    function drawChart() {
        // Disabling the button while the chart is drawing.
        button.disabled = true;
        google.visualization.events.addListener(chart, 'ready',
            function () {
                button.disabled = false;
                document.getElementById('scatterChartDrpDown').innerHTML = ((current ? 'Product DEF' : 'Product ABC') + '&nbsp;&nbsp;<span class="caret"></span>');
                button.innerHTML = 'Switch to ' + (current ? 'Product ABC' : 'Product DEF');
            });
        options['title'] = 'Users coming on board (Monthly) for ' + (current ? 'Product DEF' : 'Product ABC');

        chart.draw(data[current], options);
    }
    drawChart();

    button.onclick = function () {
        current = 1 - current;
        drawChart();
    }

}

function drawColumnChart() {

    var rowData1 = [
        ["License", "Percentage", { role: "style" }],
        ["X License", 0.94, "#3366CC"],
        ["Y License", 0.49, "#DC3912"],
        ["Z License", 0.30, "#FF9900"],
    ];

    var rowData2 = [
        ["License", "Percentage", { role: "style" }],
        ["X License", 0.75, "#3366CC"],
        ["Y License", 0.95, "#DC3912"],
        ["Z License", 0.86, "#FF9900"],
    ];

    var data = [];
    data[0] = google.visualization.arrayToDataTable(rowData1);
    data[1] = google.visualization.arrayToDataTable(rowData2);



    var options = {
        title: "Most Used License Model",
        titleTextStyle: {
            fontName: 'Roboto',
            fontSize: 28,
            bold: true
        },
        fontSize: 14,
        // bar: { groupWidth: "95%" },
        legend: { position: "none" },
        hAxis: {
            textStyle: {
                fontName: 'Roboto',
                fontSize: 18,
                bold: true
            }
        },
        vAxis: {
            title: 'Percentage of Usage',
            format: 'percent',
            title: 'Users',
            titleTextStyle: {
                fontName: 'Roboto',
                fontSize: 18,
                bold: true
            },
            textStyle: {
                fontName: 'Roboto',
                fontSize: 14,
                bold: true
            }
        },
        animation: {
            startup: true,
            duration: 500,
            easing: 'inAndOut',
        },
        chartArea: { left: 100, top: 50, bottom: 50, right: 30 }
    };

    var current = 0;

    var chart = new google.visualization.ColumnChart(document.getElementById("column_chart"));
    var button = document.getElementById('columnChartSwitch');
    function drawChart() {
        button.disabled = true;
        google.visualization.events.addListener(chart, 'ready',
            function () {
                button.disabled = false;
                document.getElementById('columnChartDrpDown').innerHTML = ((current ? 'Product DEF' : 'Product ABC') + '&nbsp;&nbsp;<span class="caret"></span>');
                button.innerHTML = 'Switch to ' + (current ? 'Product ABC' : 'Product DEF');
            });
        options['title'] = 'Users coming on board (Monthly) for ' + (current ? 'Product DEF' : 'Product ABC');
        var view = new google.visualization.DataView(data[current]);
        view.setColumns([0, 1, 2]);
        chart.draw(data[current], options);
    }
    drawChart();

    button.onclick = function () {
        current = 1 - current;
        drawChart();
    }
}