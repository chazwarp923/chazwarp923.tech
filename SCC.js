function onLoad() {
	var stowRateValue = null;
	var stowFrame = document.getElementById("stowFrame");
	var stowWIPRow = document.getElementById("stowWIPRow");
	if(stowFrame.contentDocument != null) {
		stowRateValue = stowFrame.contentDocument.getElementById("metricValue").textContent;
		stowWIPRow[1].innerHTML = "Upper Limit: " + stowRateValue / 2;
		stowWIPRow[2].innerHTML = "Lower Limit: " + stowRateValue / 4; 
	}
}
