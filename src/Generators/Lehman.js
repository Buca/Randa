function isPrime( integer ) {

		if ( integer <= 1 ) return false;
		if ( integer <= 3 ) return true;
		if ( integer % 2 === 0 || integer % 3 === 0 ) return false;

		for ( let i = 5; i * i <= integer; i += 6 ) {  

			if ( integer % i === 0 || integer % (i + 2) === 0 ) return false;

		}

		return true;

}

export class Lehmann {

	#seed;

	constructor( seed, modulus, multiplier ) {

		// Error handling for invalid inputs (optional)
		if ( !isPrime(modulus) || modulus <= 0 || !Number.isInteger(multiplier) || multiplier <= 0 || multiplier >= modulus || !Number.isInteger( seed ) || seed < 0 || seed >= modulus) {
		
			throw new Error("Invalid input parameters.");
		
		}

		this.#seed = seed;

		this.state = seed;
		this.modulus = modulus;
		this.multiplier = multiplier;
		
	};

	get seed() { return this.#seed; };

	set seed( value ) { 

		this.#seed = value; 
		return this.#seed; 

	};

	random() {
		
		this.state = (this.multiplier * this.state) % this.modulus;
		return this.state / (this.modulus - 1); // Normalize to the range [0, 1)
	
	};

}