sCB = "000.jpg";
sCS = "133px";
iCrdTop = 50;
iCrdMrgn = 77;
iMrgnStrt = 20;
aRndCrdsC = populateArray(12,aRndCrdsC,"Astroracle-C");
aRndCrdsP = populateArray(10,aRndCrdsP,"Astroracle-P");
aRndCrdsC = shuffle(aRndCrdsC);
aRndCrdsP = shuffle(aRndCrdsP);

for (i=0; i<iImgsC; i++) {
	oImg =  aImgsC[i];
	dragElement(oImg);
	placeElement(iImgsC,i,oImg);
}


for (i=0; i<iImgsP; i++) {
	oImg =  aImgsP[i];
	dragElement(oImg);
	placeElement(iImgsP,i,oImg);
}