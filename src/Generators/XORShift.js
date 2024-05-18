export class XORShift {
	
	constructor( seed ) {
		
		this.seed = seed || Math.floor( Math.random() * 0x7fffffff );
	
	};

	random() {
	
		this.seed ^= this.seed << 13;
		this.seed ^= this.seed >>> 17;
		this.seed ^= this.seed << 5;
		// Conversion to float in range [0, 1)
		return ( this.seed >>> 0 ) / Math.pow( 2, 32 );
	
	};
	
}
