/*
 * Dashboard - Analytics
 */

// Trending line chart data	 
	var trendingLineChart;
	var data = {
        labels: ["Pediatric", "Degenerative", "Deformity", "Infection", "Tumor", "Trama", "Random"],
		datasets: [{
				label: "First dataset",
				fillColor: "rgba(128, 222, 234, 0.6)",
				strokeColor: "#ffffff",
				pointColor: "#00bcd4",
				pointStrokeColor: "#ffffff",
				pointHighlightFill: "#ffffff",
				pointHighlightStroke: "#ffffff",
				data: [100, 50, 20, 40, 80, 50, 80]
			},
			{
				label: "Second dataset",
				fillColor: "rgba(128, 222, 234, 0.3)",
				strokeColor: "#80deea",
				pointColor: "#00bcd4",
				pointStrokeColor: "#80deea",
				pointHighlightFill: "#80deea",
				pointHighlightStroke: "#80deea",
				data: [60, 20, 90, 80, 50, 85, 40]
			}
		]
	};

	setInterval(function() {
		// Get a random index point
		var indexToUpdate = Math.round(Math.random() * (data.labels.length - 1));
		if (typeof trendingLineChart != "undefined") {
			// Update one of the points in the second dataset
			if (trendingLineChart.datasets[0].points[indexToUpdate].value) {
				trendingLineChart.datasets[0].points[indexToUpdate].value = Math.round(Math.random() * 100);
			}
			if (trendingLineChart.datasets[1].points[indexToUpdate].value) {
				trendingLineChart.datasets[1].points[indexToUpdate].value = Math.round(Math.random() * 100);
			}
			trendingLineChart.update();
		}
	}, 2000);

	// Polor chart data
	var doughnutData = [{
		value: 300,
        color: "#001433",
        highlight: "#001433",
        label: "Pediatric"
	}, {
		value: 600,
		color: "#003380",
		highlight: "#003380",
		label: "Degenerative"
	}, {
		value: 210,
		color: "#80b3ff",
		highlight: "#80b3ff",
		label: "Deformity"
	},{
		value: 330,
		color: "#163f56",
		highlight: "#163f56",
		label: "Infection"
	},{
		value: 500,
		color: "#cce0ff",
		highlight: "#cce0ff",
		label: "Tumor"
	},{
		value: 500,
		color: "#e6f0ff",
		highlight: "#e6f0ff",
		label: "Trauma"
	},{
		value: 1000,
		color: "#000a1a",
		highlight: "#000a1a",
		label: "Random"
	}];


	// Trending Bar Chart	
	var dataBarChart = {
		labels: ["Jan", "Feb", "Mar", "Apr", "May", "June", "July", "Aug"],
		datasets: [{
			label: "Bar dataset",
			fillColor: "#46BFBD",
			strokeColor: "#46BFBD",
			highlightFill: "rgba(70, 191, 189, 0.4)",
			highlightStroke: "rgba(70, 191, 189, 0.9)",
			data: [6, 9, 8, 4, 6, 7, 9, 4]
		}]
	};

	var nReloads1 = 0;
	var min1 = 1;
	var max1 = 10;
	var l1 = 0;
	var trendingBarChart;

	function updateBarChart() {
		if (typeof trendingBarChart != "undefined") {
			nReloads1++;
			var x = Math.floor(Math.random() * (max1 - min1 + 1)) + min1;
			trendingBarChart.addData([x], dataBarChart.labels[l1]);
			trendingBarChart.removeData();
			l1++;
			if (l1 == dataBarChart.labels.length) {
				l1 = 0;
			}
		}
	}
	setInterval(updateBarChart, 5000);


	// Trending Bar chart	data
	var radarChartData = {
		labels: ["Pediatric", "Degeneration", "Deformity", "Tumor", "Trauma","Infection","Random"],
		datasets: [{
			label: "First dataset",
			fillColor: "rgba(255,255,255,0.2)",
			strokeColor: "#fff",
			pointColor: "#00796b",
			pointStrokeColor: "#fff",
			pointHighlightFill: "#fff",
			pointHighlightStroke: "#fff",
			data: [5, 6, 7, 8, 6,3,8,10]
		}],
	};


	var nReloads2 = 0;
	var min2 = 1;
	var max2 = 10;
	var l2 = 0;
	var trendingRadarChart;

	function trendingRadarChartupdate() {
		if (typeof trendingRadarChart != "undefined") {
			nReloads2++;
			var x = Math.floor(Math.random() * (max2 - min2 + 1)) + min2;
			trendingRadarChart.addData([x], radarChartData.labels[l2]);
			var y = trendingRadarChart.removeData();
			l2++;
			if (l2 == radarChartData.labels.length) {
				l2 = 0;
			}
		}
	}
	setInterval(trendingRadarChartupdate, 5000);


	//Pie chart data 	
	var pieData = [{
			value: 300,
			color: "#F7464A",
			highlight: "#FF5A5E",
			label: "America"
		},
		{
			value: 50,
			color: "#46BFBD",
			highlight: "#5AD3D1",
			label: "Canada"
		},
		{
			value: 100,
			color: "#FDB45C",
			highlight: "#FFC870",
			label: "UK"
		},
		{
			value: 40,
			color: "#949FB1",
			highlight: "#A8B3C5",
			label: "Europe"
		},
		{
			value: 120,
			color: "#4D5360",
			highlight: "#616774",
			label: "Australia"
		}

	];

	// Line Chart Data	
	var lineChartData = {
		labels: ["USA", "UK", "UAE", "AUS", "IN", "SA"],
		datasets: [{
			label: "My dataset",
			fillColor: "rgba(255,255,255,0)",
			strokeColor: "#fff",
			pointColor: "#00796b ",
			pointStrokeColor: "#fff",
			pointHighlightFill: "#fff",
			pointHighlightStroke: "rgba(220,220,220,1)",
			data: [65, 45, 50, 30, 63, 45]
		}]

	}

	var polarData = [{
			value: 4800,
			color: "#f44336",
			highlight: "#FF5A5E",
			label: "USA"
		},
		{
			value: 6000,
			color: "#9c27b0",
			highlight: "#ce93d8",
			label: "UK"
		},
		{
			value: 1800,
			color: "#3f51b5",
			highlight: "#7986cb",
			label: "Canada"
		},
		{
			value: 4000,
			color: "#2196f3 ",
			highlight: "#90caf9",
			label: "Austrelia"
		},
		{
			value: 5500,
			color: "#ff9800",
			highlight: "#ffb74d",
			label: "India"
		},
		{
			value: 2100,
			color: "#009688",
			highlight: "#80cbc4",
			label: "Brazil"
		},
		{
			value: 3500,
			color: "#4caf50",
			highlight: "#81c784",
			label: "Germany"
		}
	];

$(window).on('load', function() {	

	/*
	 * Reventu card
	 */
	// Trending Line chart  - use var = data  
	var trendingLineChart = document.getElementById("trending-line-chart").getContext("2d");
	window.trendingLineChart = new Chart(trendingLineChart).Line(data, {
		scaleShowGridLines: true,
		scaleGridLineColor: "rgba(255,255,255,0.4)",
		scaleGridLineWidth: 1,
		scaleShowHorizontalLines: true,
		scaleShowVerticalLines: false,
		bezierCurve: true,
		bezierCurveTension: 0.4,
		pointDot: true,
		pointDotRadius: 5,
		pointDotStrokeWidth: 2,
		pointHitDetectionRadius: 20,
		datasetStroke: true,
		datasetStrokeWidth: 3,
		datasetFill: true,
		animationSteps: 15,
		animationEasing: "easeOutQuart",
		tooltipTitleFontFamily: "'Roboto','Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
		scaleFontSize: 12,
		scaleFontStyle: "normal",
		scaleFontColor: "#fff",
		tooltipEvents: ["mousemove", "touchstart", "touchmove"],
		tooltipFillColor: "rgba(255,255,255,0.8)",
		tooltipTitleFontFamily: "'Roboto','Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
		tooltipFontSize: 12,
		tooltipFontColor: "#000",
		tooltipTitleFontFamily: "'Roboto','Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
		tooltipTitleFontSize: 14,
		tooltipTitleFontStyle: "bold",
		tooltipTitleFontColor: "#000",
		tooltipYPadding: 8,
		tooltipXPadding: 16,
		tooltipCaretSize: 10,
		tooltipCornerRadius: 6,
		tooltipXOffset: 10,
		responsive: true
	});
	// Doughnut Chart - use data var = doughnutData  
	var doughnutChart = document.getElementById("doughnut-chart").getContext("2d");
	window.myDoughnut = new Chart(doughnutChart).Doughnut(doughnutData, {
		segmentStrokeColor: "#fff",
		tooltipTitleFontFamily: "'Roboto','Helvetica Neue', 'Helvetica', 'Arial', sans-serif", // String - Tooltip title font declaration for the scale label		
		percentageInnerCutout: 50,
		animationSteps: 15,
		segmentStrokeWidth: 4,
		animateScale: true,
		percentageInnerCutout: 60,
		responsive: true
	});
	// Trending Bar chart  - use data var = dataBarChart
	var trendingBarChart = document.getElementById("trending-bar-chart").getContext("2d");
	window.trendingBarChart = new Chart(trendingBarChart).Bar(dataBarChart, {
		scaleShowGridLines: false, ///Boolean - Whether grid lines are shown across the chart
		showScale: true,
		animationSteps: 15,
		tooltipTitleFontFamily: "'Roboto','Helvetica Neue', 'Helvetica', 'Arial', sans-serif", // String - Tooltip title font declaration for the scale label		
		responsive: true
	});

	/*
	 * Browser stats & revenue by country card
	 */
	// Trending Radar
	window.trendingRadarChart = new Chart(document.getElementById("trending-radar-chart").getContext("2d")).Radar(radarChartData, {
		angleLineColor: "rgba(255,255,255,0.5)", //String - Colour of the angle line		    
		pointLabelFontFamily: "'Roboto','Helvetica Neue', 'Helvetica', 'Arial', sans-serif", // String - Tooltip title font declaration for the scale label	
		pointLabelFontColor: "#fff", //String - Point label font colour
		pointDotRadius: 4,
		animationSteps: 15,
		pointDotStrokeWidth: 2,
		pointLabelFontSize: 12,
		responsive: true
	});
	// Line Chart = use data var lineChartData
	var lineChart = document.getElementById("line-chart").getContext("2d");
	window.lineChart = new Chart(lineChart).Line(lineChartData, {
		scaleShowGridLines: false,
		bezierCurve: false,
		scaleFontSize: 12,
		scaleFontStyle: "normal",
		scaleFontColor: "#fff",
		responsive: true,
	});

	/*
	 * Sales by Country
	 */
	// Polar Chart = use data var polarData
	var polarChartCountry = document.getElementById("polar-chart-country").getContext("2d");
	window.polarChartCountry = new Chart(polarChartCountry).PolarArea(polarData, {
		segmentStrokeWidth: 1,
		responsive: true
	});

	//Tost notification
	setTimeout(function() {
		Materialize.toast('<span>Hiya! I am a toast.</span>', 1500);
	}, 1500);
	setTimeout(function() {
		Materialize.toast('<span>You can swipe me too!</span>', 3000);
	}, 5000);
	setTimeout(function() {
		Materialize.toast('<span>You have new order.</span><a class="btn-flat yellow-text" href="#">Read<a>', 3000);
	}, 15000);
});

$(function() {
	/*
	 * STATS CARDS
	 */
	// Bar chart ( New Clients)
	$("#clients-bar").sparkline([70, 80, 65, 78, 58, 80, 78, 80, 70, 50, 75, 65, 80, 70, 65, 90, 65, 80, 70, 65, 90], {
		type: 'bar',
		height: '25',
		barWidth: 7,
		barSpacing: 4,
		barColor: '#b2ebf2',
		negBarColor: '#81d4fa',
		zeroColor: '#81d4fa',
	});
	// Total Sales - Bar
	$('#sales-compositebar').sparkline([4, 6, 7, 7, 4, 3, 2, 3, 1, 4, 6, 5, 9, 4, 6, 7, 7, 4, 6, 5, 9], {
		type: 'bar',
		barColor: '#F6CAFD',
		height: '25',
		width: '100%',
		barWidth: '7',
		barSpacing: 4
	});
	//Total Sales - Line
	$('#sales-compositebar').sparkline([4, 1, 5, 7, 9, 9, 8, 8, 4, 2, 5, 6, 7], {
		composite: true,
		type: 'line',
		width: '100%',
		lineWidth: 2,
		lineColor: '#fff3e0',
		fillColor: 'rgba(255, 82, 82, 0.25)',
		highlightSpotColor: '#fff3e0',
		highlightLineColor: '#fff3e0',
		minSpotColor: '#00bcd4',
		maxSpotColor: '#00e676',
		spotColor: '#fff3e0',
		spotRadius: 4
	});
	// Tristate chart (Today Profit)
	$("#profit-tristate").sparkline([2, 3, 0, 4, -5, -6, 7, -2, 3, 0, 2, 3, -1, 0, 2, 3, 3, -1, 0, 2, 3], {
		type: 'tristate',
		width: '100%',
		height: '25',
		posBarColor: '#B9DBEC',
		negBarColor: '#C7EBFC',
		barWidth: 7,
		barSpacing: 4,
		zeroAxis: false
	});
	// Line chart ( New Invoice)
	$("#invoice-line").sparkline([5, 6, 7, 9, 9, 5, 3, 2, 2, 4, 6, 7, 5, 6, 7, 9, 9, 5], {
		type: 'line',
		width: '100%',
		height: '25',
		lineWidth: 2,
		lineColor: '#E1D0FF',
		fillColor: 'rgba(255, 255, 255, 0.2)',
		highlightSpotColor: '#E1D0FF',
		highlightLineColor: '#E1D0FF',
		minSpotColor: '#00bcd4',
		maxSpotColor: '#4caf50',
		spotColor: '#E1D0FF',
		spotRadius: 4
	});

	/*
	 * Project Line chart ( Project Box )
	 */
	$("#project-line-1").sparkline([5, 6, 7, 9, 9, 5, 3, 2, 2, 4, 6, 7, 5, 6, 7, 9, 9, 5, 3, 2, 2, 4, 6, 7], {
		type: 'line',
		width: '100%',
		height: '30',
		lineWidth: 2,
		lineColor: '#00bcd4',
		fillColor: 'rgba(0, 188, 212, 0.2)',
	});
	$("#project-line-2").sparkline([6, 7, 5, 6, 7, 9, 9, 5, 3, 2, 2, 4, 6, 7, 5, 6, 7, 9, 9, 5, 3, 2, 2, 4], {
		type: 'line',
		width: '100%',
		height: '30',
		lineWidth: 2,
		lineColor: '#00bcd4',
		fillColor: 'rgba(0, 188, 212, 0.2)'
	});
	$("#project-line-3").sparkline([2, 4, 6, 7, 5, 6, 7, 9, 5, 6, 7, 9, 9, 5, 3, 2, 9, 5, 3, 2, 2, 4, 6, 7], {
		type: 'line',
		width: '100%',
		height: '30',
		lineWidth: 2,
		lineColor: '#00bcd4',
		fillColor: 'rgba(0, 188, 212, 0.2)'
	});
	$("#project-line-4").sparkline([9, 5, 3, 2, 2, 4, 6, 7, 5, 6, 7, 9, 5, 6, 7, 9, 9, 5, 3, 2, 2, 4, 6, 7], {
		type: 'line',
		width: '100%',
		height: '30',
		lineWidth: 2,
		lineColor: '#00bcd4',
		fillColor: 'rgba(0, 188, 212, 0.2)'
	});

});


