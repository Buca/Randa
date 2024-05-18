const m = Math.pow( 2, 31 );

export class LCG {

	constructor( seed, a = 1103515245, c = 12345 ) {

		this.seed = seed || Math.floor(Math.random() * 0x7fffffff);
		this.a = a;
		this.c = c;
	
	}

	random() {
	
		this.seed = (this.a * this.seed + this.c) % m;
		// Conversion to float in range [0, 1)
		return this.seed / m;
	
	}

}