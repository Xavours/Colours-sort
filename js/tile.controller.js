//  GUI
//  Definition
var controls = new function() {
		this.numberTiles = 5000;
		this.coeff = 10;
		this.width = 10;
		this.height = 10;
		this.GenerateRandom = function() {
			setUpRandom();
			convert(arr);
			cleanWall();
			displayRGB();
		};
		this.GenerateRGB = function() {
			setUpRGB();
			convert(arr);
			cleanWall();
			displayRGB();
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
		this.SortByVSH = function() {
			arr.sort(SortByVSH);
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
		c1.add(controls, 'numberTiles').step(1);
		c1.add(controls, 'width').onChange(function(value) {
			$('.color').css('width', value);
		});
		c1.add(controls, 'height').onChange(function(value) {
			$('.color').css('height', value);
		});
		c1.add(controls, 'GenerateRandom');
		c1.add(controls, 'GenerateRGB');
		var c2 = gui.addFolder('Sort');
		c2.add(controls, 'coeff', 0.5, 200).step(0.5);
		c2.add(controls, 'SortByHSV');
		c2.add(controls, 'SortByHVS');
		c2.add(controls, 'SortByVHS');
		c2.add(controls, 'SortByVSH');
		c2.add(controls, 'SortByYIQ');
		c2.add(controls, 'SortByHSL');
		c2.add(controls, 'Shuffle');
	
		c1.open();
		c2.open();
	
	};
	
	