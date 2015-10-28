//  GUI
//  Definition
var controls = new function() {
		this.Display = function() {
			displayPictures(arr);
		};
		this.SortByHSV = function() {
			arr.sort(SortByHSV);
			cleanWall();
			displayRGB();
		};
		this.SortByHVS = function() {
			arr.sort(SortByHVS);
			cleanWall();
			displayRGB();
		};
		this.SortByVHS = function() {
			arr.sort(SortByVHS);
			cleanWall();
			displayRGB();
		};
		this.SortByYIQ = function() {
			arr.sort(SortByYIQ);
			cleanWall();
			displayRGB();
		};
		this.SortByHSL = function() {
			arr.sort(SortByHSL);
			cleanWall();
			displayRGB();
		};
		this.Shuffle = function() {
			shuffle(arr);
			cleanWall();
			displayRGB();
		};
	}
	//  Interface
	window.onload = function() {
		var gui = new dat.GUI();
		var c1 = gui.addFolder('Set up!');
		c1.add(controls, 'Display');
		c1.add(controls, 'GenerateRGB');
		var c2 = gui.addFolder('Sort');
		c2.add(controls, 'coeff', 0.5, 200).step(0.5);
		c2.add(controls, 'SortByHSV');
		c2.add(controls, 'SortByHVS');
		c2.add(controls, 'SortByVHS');
		c2.add(controls, 'SortByYIQ');
		c2.add(controls, 'SortByHSL');
		c2.add(controls, 'Shuffle');
	
		c1.open();
		c2.open();
	
	};
	
	