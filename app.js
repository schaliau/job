var app = angular.module('surijanApp', ['nvd3']);

app.controller('MainCtrl', function ($scope) {

    $scope.pieChart = function () {
        $scope.isPieChart = true;
        $scope.options = {
            chart: {
                type: 'pieChart',
                height: 500,
                donut: true,
                donutRatio: 0.45,
                margin: {
                    top: 15,
                    right: 20,
                    bottom: 0,
                    left: 20
                },
                x: function (d) { return d.key; },
                y: function (d) { return d.y; },
                valueFormat: (d3.format(".0f")),
                labelType: 'value',
                legend: {
                    updateState: false
                },
                showLabels: true,
                transitionDuration: 500,
                labelThreshold: 0.01,
                keyThreshold: 0.05, //Configure the minimum slice size for keys to show up
                keyType: 'key', //Configure what type of data to show in the key. Can be 'key', 'value' or 'percent'
                labelsOutside: true, // put lables outside the pie chart
                showLegend: true, // hides the upper legend bar
                legendPosition: "right"
            }
        };

        $scope.data = [
            {
                key: "Banking & Finance",
                y: 16219
            },
            {
                key: "Biotech & Pharmaceuticals",
                y: 484
            },
            {
                key: "Electronics & Semiconductor",
                y: 2842
            },
            {
                key: "Energy & Chemicals",
                y: 1303
            },
            {
                key: "Government",
                y: 2297
            },
            {
                key: "Healthcare",
                y: 3456
            },
            {
                key: "InfoComm Technologies",
                y: 9113
            },
            {
                key: "Logistics",
                y: 2126
            },
            {
                key: "Marine",
                y: 353
            }
        ]
    };

    $scope.multiBarHorizontalChart = function () {
        $scope.isMultiBarHorizontalChart = true;
        $scope.options = {
            chart: {
                type: 'multiBarHorizontalChart',
                height: 450,
                margin: ({ left: 200 }),
                x: function (d) { return d.label; },
                y: function (d) { return d.value; },
                labelType: ("percent"),
                showControls: false,
                showValues: true,
                valueFormat: (d3.format(',f')),
                showLegend: true,
                legendPosition: 'bottom',
                duration: 500,
                xAxis: {
                    showMaxMin: false
                },
                yAxis: {
                    axisLabel: 'Values (%)',
                    tickFormat: function (d) {
                        return d3.format(',.0f')(d);
                    }
                }
            }
        };

        $scope.data = [
            {
                "key": "% of Technology Jobs",
                "color": "#d62728",
                "values": [
                    {
                        "label": "Banking & Finance",
                        "value": 42
                    },
                    {
                        "label": "Biotech & Pharmaceuticals",
                        "value": 1
                    },
                    {
                        "label": "Electronics & Semiconductor",
                        "value": 7
                    },
                    {
                        "label": "Energy & Chemicals",
                        "value": 3
                    },
                    {
                        "label": "Government",
                        "value": 6
                    },
                    {
                        "label": "Healthcare",
                        "value": 9
                    },
                    {
                        "label": "InfoComm Technologies",
                        "value": 24
                    },
                    {
                        "label": "Logistics",
                        "value": 6
                    },
                    {
                        "label": "Marine",
                        "value": 1
                    }
                ]
            }
        ]

    };
});