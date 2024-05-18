export class MersenneTwister {

	#N; #M; #state; #index; #mask;
	#upperMask; #lowerMask; #magConst;
	#seedGenerator; #seed;

	constructor( seed ) {
		
		this.#N = 624;
		this.#M = 397;

		this.#state = new Uint32Array( this.N ); // Use Uint32Array for efficiency
		this.#index = this.N;
		this.#mask = 0x80000000;
		this.#upperMask = 0x7fffffff;
		this.#lowerMask = 0x00000000;
		this.#magConst = 0x9908b0df;
		this.#seed = 0;

		this.seed = seed;
	
	}

	set seed( value ) {

		this.#seed = value;
		this.#seedGenerator( value );

		return value;

	};

	get seed() {

		return this.#seed;

	};

	#seedGenerator( seed ) {

		const s = this.#state;
		const N = this.#N;

		s[ 0 ] = seed & 0xffffffff;
		
		for ( let i = 1; i < N; i ++ ) {

			s[i] = (s[i - 1] ^ (s[i - 1] >>> 11)) & 0xffffffff;
			s[i] = (s[i] ^ (s[i] << 7) & 0xffffffff) & 0xffffffff;
			s[i] = (s[i] ^ (s[i] << 15) & 0xffffffff) & 0xffffffff;
			s[i] = (s[i] ^ (s[i] >>> 18)) & 0xffffffff;
			s[i] = (s[i] ^ s[i - 1] & 0x6d6e705f) & 0xffffffff;
		
		}
		
		this.#index = N;

	};

	#twist() {

		const s = this.#state;
		const N = this.#N;
		const M = this.#M;
		const um = this.#upperMask;
		const lm = this.#lowerMask;

		for ( let i = 0; i < N - M; i ++ ) {

			let x = (s[i] & s) + (s[i + 1] & lm);
			s[i] = s[i + this.M] ^ (x >>> 1) & s;
			s[i] ^= (x & lm) << 1;
			s[i] ^= (x & 0x00000001) * this.#magConst;

		}

		for ( let i = N - M; i < N - 1; i ++ ) {

			let x = (s[i] & um) + (s[i + 1] & lm);
			s[i] = s[i - N + M] ^ (x >>> 1) & um;
			s[i] ^= (x & lm) << 1;

		}

		let x = (s[N - 1] & um) + (s[0] & lm);
		s[N - 1] = s[M - 1] ^ (x >>> 1) & um;
		s[N - 1] ^= (x & lm) << 1;

		this.index = 0;

	};

	random() {

		const index = this.#index;
		const s = this.#state;
		const N = this.#N;

		if ( index === N ) this.#twist();

		let y = s[ index ];
		y ^= y >>> 11;
		y ^= y << 7 & 0x9d7157d7;
		y ^= y << 15 & 0xefc60000;
		y ^= y >>> 18;

		this.#index ++;

		// More concise conversion to float in range [0, 1)
		return ((y >>> 0) + 0.5) / Math.pow(2, 32); 

	};

}