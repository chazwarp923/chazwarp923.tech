function onLoad() {
	var stowRateValue = null;
	var stowFrame = document.getElementById("stowFrame");
	var stowWIPMin = document.getElementById("stowWIPMin");
	var stowWIPMax = document.getElementById("stowWIPMax");
	if(stowFrame.contentDocument != null) {
		stowRateValue = stowFrame.contentDocument.getElementById("metricValue").textContent;
		stowWIPMin.innerHTML = "Upper Limit: " + stowRateValue / 2;
		stowWIPMax.innerHTML = "Lower Limit: " + stowRateValue / 4; 
	}
}
