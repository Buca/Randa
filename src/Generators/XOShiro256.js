export class Xoshiro256ss {
	
	#state; #seed; #seedGenerator;

	constructor( seed ) {
		
		this.#state = new Uint32Array( 4 ); // Use Uint32Array for efficiency (internally stores 2 x 64-bit values as 4 x 32-bit)
		this.seed = seed;

	};

	set seed( value ) {

		this.#seed = value;
		this.#seedGenerator( seed );

		return seed;

	};

	get seed() { return this.#seed; };

	// Seed the state using low and high 32-bit parts of the seed
	#seedGenerator( seed ) {
	
		seed = seed || Math.floor(Math.random() * 0x7fffffff);
		this.state[0] = seed & 0xffffffff;
		this.state[1] = seed >>> 0; // Capture the higher 32-bit part
	
	};

	// Rotates a 64-bit value left by k bits (simulated using 32-bit operations)
	#rol64( x, k ) {
	
		const low = (x & 0xffffffff) << k;
		const high = (x >>> 0) << k;
		return (low | (high >>> (32 - k))) >>> 0;
	c
	};

	// Generates a 64-bit random number using Xoshiro256ss algorithm
	random() {
	
		const result = this.rol64(this.state[1] * 5, 7) * 9;
		const t = this.state[1] << 17;

		this.state[2] ^= this.state[0]; // Simulate 64-bit operations using lower 32 bits
		this.state[3] ^= this.state[1];
		this.state[1] ^= this.state[2];
		this.state[0] ^= this.state[3];

		this.state[2] ^= t;
		this.state[3] = this.rol64(this.state[3], 45);

		// Combine lower 32-bit parts and convert to float in range [0, 1)
		return ((result & 0xffffffff) | ((this.state[3] & 0xffffffff) << 32)) / Math.pow(2, 64);
	
	};

}
