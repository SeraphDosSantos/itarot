
function populateArray(aCrds) {
	for (var j=1;j<=22;j++) {
		aCrds.push("../tm/w300px/A"+j+".jpg");
	}
	for (var i=1;i<=14;i++) {
		aCrds.push("../tm/w300px/S"+i+".jpg");
		aCrds.push("../tm/w300px/C"+i+".jpg");
		aCrds.push("../tm/w300px/W"+i+".jpg");
		aCrds.push("../tm/w300px/D"+i+".jpg");
	}
	return aCrds;
}
