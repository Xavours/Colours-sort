//  Convert rgb to hsv
//  Source: http://www.csgnetwork.com/csgcolorsel4.html
function RGBtoHSV(red, green, blue) {
	r = red / 255;
	g = green / 255;
	b = blue / 255; // Scale to unity.
	var minVal = Math.min(r, g, b);
	var maxVal = Math.max(r, g, b);
	var delta = maxVal - minVal;
	value = maxVal;
	if (delta == 0) {
		hue = 0;
		saturation = 0;
	} else {
		saturation = delta / maxVal;
		var del_R = (((maxVal - r) / 6) + (delta / 2)) / delta;
		var del_G = (((maxVal - g) / 6) + (delta / 2)) / delta;
		var del_B = (((maxVal - b) / 6) + (delta / 2)) / delta;
		if (r == maxVal) {
			hue = del_B - del_G;
		} else if (g == maxVal) {
			hue = (1 / 3) + del_R - del_B;
		} else if (b == maxVal) {
			hue = (2 / 3) + del_G - del_R;
		}
		if (hue < 0) {
			hue += 1;
		}
		if (hue > 1) {
			hue -= 1;
		}
	}
	hue *= 360;
	saturation *= 100;
	value *= 100;
	return [hue, saturation, value];
}

/**
 * Converts an RGB color value to HSL. Conversion formula
 * adapted from http://en.wikipedia.org/wiki/HSL_color_space.
 * Assumes r, g, and b are contained in the set [0, 255] and
 * returns h, s, and l in the set [0, 1].
 *
 * @param   Number  r       The red color value
 * @param   Number  g       The green color value
 * @param   Number  b       The blue color value
 * @return  Array           The HSL representation
 */
function RGBtoHSL(r, g, b) {
	r /= 255, g /= 255, b /= 255;
	var max = Math.max(r, g, b),
		min = Math.min(r, g, b);
	var h, s, l = (max + min) / 2;
	if (max == min) {
		h = s = 0; // achromatic
	} else {
		var d = max - min;
		s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
		switch (max) {
		case r:
			h = (g - b) / d + (g < b ? 6 : 0);
			break;
		case g:
			h = (b - r) / d + 2;
			break;
		case b:
			h = (r - g) / d + 4;
			break;
		}
		h /= 6;
	}
	return [h, s, l];
}

//  Test
function display(value) {
	console.log(arr[5].value);
}

//  Create Wall
function displayRGB() {
	for (var i = 0; i < arr.length; i++) {
		$viewport.append('<div class="color" style="background-color:rgba( ' + arr[i].r + ',' + arr[i].g + ',' + arr[i].b + ', 1)"></div>');
	}
}

//  Reset Wall
function cleanWall() {
	$viewport.html('');
}

//  Round
function Round(value) {
	return Math.round(value / controls.coeff) * controls.coeff;
}

//  SET UP		
var arr = new Array();

function setUpRandom() {
	// reset array
	while (arr.length > 0) {
	  arr.shift();
	}
	for (var i = 0; i < controls.numberTiles; i++) {
		arr.push(new Object());
		// Create rgb value
		arr[i].r = Math.floor(Math.random() * 255) + 1;
		arr[i].g = Math.floor(Math.random() * 255) + 1;
		arr[i].b = Math.floor(Math.random() * 255) + 1;
	}
}

function setUpRGB() {
	arr = [];
	var counter = 0;
	for (var i = 0; i < 255; i = i + 15) {
		for (var j = 0; j < 255; j = j + 15) {
			for (var k = 0; k < 255; k = k + 15) {
				arr.push(new Object());
				// Create rgb value
				arr[counter].r = i;
				arr[counter].g = j;
				arr[counter].b = k;
				counter++;
			}
		}
	}
}

function convert(arr) {
	for (var i = 0; i < arr.length; i++) {
		// Create hsv value
		var conversion = RGBtoHSV(arr[i].r, arr[i].g, arr[i].b);
		arr[i].h = conversion[0];
		arr[i].s = conversion[1];
		arr[i].v = conversion[2];
		// Create hsl value
		var conversion = RGBtoHSL(arr[i].r, arr[i].g, arr[i].b);
		arr[i].ha = conversion[0];
		arr[i].sa = conversion[1];
		arr[i].la = conversion[2];
		// Create yiq value
		arr[i].y = 0.299000 * arr[i].r + 0.587000 * arr[i].g + 0.114000 * arr[i].b
		arr[i].i = 0.595716 * arr[i].r - 0.274453 * arr[i].g - 0.321264 * arr[i].b
		arr[i].q = 0.211456 * arr[i].r - 0.522591 * arr[i].g + 0.311350 * arr[i].b
	}
}

//  Behaviour
var $viewport = $('#viewport');