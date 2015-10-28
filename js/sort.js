//  Sort by colors
function SortByHSV(a, b) {
	//  Sort by colors
	var aH = Round(a.h);
	var bH = Round(b.h);
	if (aH === bH) {
		var aS = Round(a.s);
		var bS = Round(b.s);
		if (aS === bS) {
			var aV = Round(a.v);
			var bV = Round(b.v);
			return ((aV < bV) ? -1 : ((aV > bV) ? 1 : 0));
		}
		return ((aS < bS) ? -1 : ((aS > bS) ? 1 : 0));
	}
	return ((aH < bH) ? -1 : ((aH > bH) ? 1 : 0));
}

function SortByHVS(a, b) {
	//  Sort by colors
	var aH = Round(a.h);
	var bH = Round(b.h);
	if (aH === bH) {
		var aL = Round(a.v);
		var bL = Round(b.v);
		if (aL === bL) {
			var aS = Round(a.s);
			var bS = Round(b.s);
			return ((aS < bS) ? -1 : ((aS > bS) ? 1 : 0));
		}
		return ((aL < bL) ? -1 : ((aL > bL) ? 1 : 0));
	}
	return ((aH < bH) ? -1 : ((aH > bH) ? 1 : 0));
}

function SortByVHS(a, b) {
	//  Sort by colors
	var aV = Round(a.v);
	var bV = Round(b.v);
	if (aV === bV) {
		var aH = Round(a.h);
		var bH = Round(b.h);
		if (aH === bH) {
			var aS = Round(a.s);
			var bS = Round(b.s);
			return ((aS < bS) ? -1 : ((aS > bS) ? 1 : 0));
		}
		return ((aH < bH) ? -1 : ((aH > bH) ? 1 : 0));
	}
	return ((aV < bV) ? -1 : ((aV > bV) ? 1 : 0));
}

function SortByVSH(a, b) {
	//  Sort by colors
	var aV = Round(a.v)*Round(a.s);
	var bV = Round(b.v)*Round(b.s);
	if (aV === bV) {
			var aH = aV*Round(a.h);
			var bH = bV*Round(b.h);
			return ((aH < bH) ? -1 : ((aH > bH) ? 1 : 0));
	}
	return ((aV < bV) ? -1 : 1);
}

function SortByYIQ(a, b) {
	//  Sort by colors
	var aY = Round(a.y);
	var bY = Round(b.y);
	if (aY === bY) {
		var aI = Round(a.i);
		var bI = Round(b.i);
		if (aI === bI) {
			var aQ = Round(a.q);
			var bQ = Round(b.q);
			return ((aQ < bQ) ? -1 : ((aQ > bQ) ? 1 : 0));
		}
		return ((aI < bI) ? -1 : ((aI > bI) ? 1 : 0));
	}
	return ((aY < bY) ? -1 : ((aY > bY) ? 1 : 0));
}

function SortByHSL(a, b) {
	//  Sort by colors
	var aHA = Round(a.ha);
	var bHA = Round(b.ha);
	if (aHA === bHA) {
		var aSA = Round(a.sa);
		var bSA = Round(b.sa);
		if (aSA === bSA) {
			var aLA = Round(a.la);
			var bLA = Round(b.la);
			return ((aLA < bLA) ? -1 : ((aLA > bLA) ? 1 : 0));
		}
		return ((aSA < bSA) ? -1 : ((aSA > bSA) ? 1 : 0));
	}
	return ((aHA < bHA) ? -1 : ((aHA > bHA) ? 1 : 0));
}


// Shuffle
//+ Jonas Raoni Soares Silva
//@ http://jsfromhell.com/array/shuffle [v1.0]

function shuffle(o) { //v1.0
	for (var j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
	return o;
};