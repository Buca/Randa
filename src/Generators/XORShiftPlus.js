export class XORShiftPlus {
	
	constructor( seed ) {
	
		this.seed = seed || Math.floor( Math.random() * 0x7fffffff );
	
	};

	random() {
	
		this.seed ^= this.seed << 15;
		this.seed ^= this.seed >>> 18;
		// Multiplier as suggested by Marsaglia
		this.seed ^= this.seed << 2 + ( this.seed & 0x00000001 );
		// Conversion to float in range [0, 1)
		return ( this.seed >>> 0 ) / Math.pow( 2, 32 );
	
	};

}