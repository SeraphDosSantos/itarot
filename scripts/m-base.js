var aImgs = document.getElementsByTagName("img");
var aRndCrds = new Array();
var iImgs = aImgs.length;
aRndCrds = populateArray(aRndCrds);
aRndCrds = mixCards(aRndCrds);
for (i=0; i<iImgs; i++) {
	oImg =  aImgs[i];
	dragElement(oImg);
	placeElement(iImgs,i,oImg);
}
function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;
  // While there remain elements to shuffle...
  while (0 !== currentIndex) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }
  return array;
}
function mixCards(aCrds) {
		return shuffle(aCrds);
}
function dragElement(elmnt) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  elmnt.ontouchstart = dragTouchDown;
  function dragTouchDown(e) {
    e = e || window.event;
    e.preventDefault();
		if (elmnt.src.includes("1865.jpg"))
			elmnt.src = aRndCrds.shift();
		elmnt.style.width = "133px";
		elmnt.style.zIndex = 100;
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.ontouchend = closeDragElement;
    // call a function whenever the cursor moves:
    document.ontouchmove = elementDrag;
  }
  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // set the element's new position:
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
  }
  function closeDragElement() {
		// stop moving when mouse button is released:
    document.ontouchend = null;
    document.ontouchmove = null;
  }
}
function placeElement(iTot,iNdx,oEnt) {
	var iMrgnStrt = 150;
	var iCrdMrgn = 21;
	oEnt.style.left = (iMrgnStrt+iCrdMrgn*iNdx+"px");
	oEnt.style.top = (iMrgnStrt+"px");
}
