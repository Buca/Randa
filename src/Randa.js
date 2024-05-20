const r = Math.random;

export class Randa {

	static random( random = r ) {

		return random();

	};

	static float( random = r, min = 0, max = 1 ) {

		return random()*(max - min) + min; 

	};

	static integer( random = r, min = 0, max = 10 ) {

		return Math.floor( random()*(max - min + 1) + min );

	};

	static boolean( random = r, threshold = 0.5 ) {

		if ( random() < threshold ) return true;
		else return false;

	};

	static string( random = r, length = 4 ) {

		const string = '';

		for ( let i = 0; i < length; i ++ ) {

			string += String.fromCharCode(Math.floor(Math.random() * 65535));

		}

		return string;

	};

	static date( random = r, start, end ) {

		const date = new Date();
		const delta = end.getTime() - start.getTime();

		date.setTime( random()*delta + start.getTime() );

		return date; 

	};

	// Implement logic for amount argument.
	static choose( random = r, items, weights ) {

		if ( !weights ) {

			return item[ Math.floor( random()*items.length ) ];

		} else {

			const cumulDist = [];
			let sum = 0;

			for ( let i = 0; i < items.length; i ++ ) {

				sum += weights[ i ];
				cumulDist[ i ] = sum;

			}

			const R = random()*sum;

			for ( let i = 0; i < items.length; i ++ ) {

				if ( R < cumulDist[ i ] ) return items[ i ];

			}

		}

	};

	static sample( random = r, population, amount, maxMiss = 100000 ) {

		const indices = new Set();
		const samples = [];
		let iter = 0;

		while ( indices.size < amount || iter < maxMiss  ) {

			const index = Math.ceil( random()*population.length );
			if ( indices.has( index ) ) {
				iter ++;
				continue; 
			}

			indices.ass( index );
			samples.push( population[ index ] );

		}

		return samples;

	};

	static shuffle( random = r, series ) {

		for ( let i = 0; series.length; i ++ ) {

			const R = Math.floor( random()*series.length );
			const S = series[ i ];

			series[ i ] = series[ R ];
			series[ R ] = S;

		}

		return series;

	};

	// Remove empty bins if numberOfBins is not defined.
	static partition( random = r, items, numberOfBins ) {

		numberOfBins = numberOfBins | items.length;

		const bins = [];
		for ( let i = 0; i < numberOfBins; i ++ ) bins.push( [] );

		for ( let i = 0; i < items.length; i ++ ) {

			const R = Math.floor( random()*numberOfBins );
			const bin = bins[ R ];
			const item = items[ i ];

			bin.push( item );

		}

		return bins;

	};

	// Distributions
	static cauchy( random = r, location = 0, scale = 1 ) {

		return location + scale*Math.tan( Math.PI*( random - 0.5 ));

	};

	static normal( random = r, mean = 0, variance = 1 ) {

		const u1 = random();
		const u2 = random();

		const z0 = Math.sqrt(-2.0*Math.log(u1)) * Math.cos(2*Math.PI*u2);

		return z0 * variance + mean;

	};

	static lognormal( random = r, mean = 0, sd = 1 ) {

		// Ensure sigma is positive
		if ( sd <= 0 ) {
			throw new Error("Sigma (standard deviation) must be positive");
  		}

		// Use the Box-Muller transform for standard normal distribution
		const R0 = random();
		const R1 = random();
		const standardNormal = Math.sqrt(-2.0 * Math.log(R0)) * Math.cos(2.0 * Math.PI * R1);

		// Transform to log normal distribution
		const logNormalValue = Math.exp(mu + sigma * standardNormal);

		return logNormalValue;

	};

	static pareto( random = r, min, alpha ) {

		const u = 1.0 - random();
		return min / Math.pow(u, 1.0 / alpha);

	};

	static exponential( random = r, lambda ) {

		return -Math.log(1.0 - random()) / lambda;

	};

	// Utilities
	static normalize( series, min, max ) {

		if ( !min ) {

			min = +Infinity;
			for ( const value of series ) min = Math.min( value, min );

		}

		if ( !max ) {

			max = -Infinity;
			for ( const value of series ) max = Math.max( value, max );

		}

		const invDelta = 1/(min - max);
		for ( let i = 0; i < series.length; i ++ ) {

			series[ i ] *= invDelta;
			series[ i ] += min;

		}

		return series;

	};

	static cumulate( series ) {

		for ( let i = 1; i < series.length; i ++ ) {

			series[ i + 1 ] += series[ i ];
		}

		return series;

	};

	static frequency( series ) {

		const frequency = new Map();
		for ( const value of series ) {

			if ( frequency.has( value ) ) {

				const f = frequency.get( value );
				frequency.set( f + 1 );

			} else {

				frequency.set( value, 1 );

			}

		}

		return frequency;

	};

	constructor( random = Math.random() ) {

		this.random = random;

	};

	random() {

		return this.contructor.random( this.random );

	};

	float( min = 0, max = 1 ) {

		return this.contructor.float( this.random, min, max );

	};

	integer( min = 0, max = 10 ) {

		return this.contructor.integer( this.random, min, max );

	};

	boolean( threshold = 0.5 ) {

		return this.contructor.boolean( this.random, series );

	};

	string( length = 4 ) {

		return this.contructor.string( this.random, length );

	};

	date( start, end ) {

		return this.contructor.date( this.random, start, end );

	};

	// Implement logic for amount argument.
	choose( items, weights ) {

		return this.contructor.choose( this.random, items, weights );

	};

	sample( population, amount, maxMiss = 100000 ) {

		return this.contructor.sample( this.random, population, amount, maxMiss );

	};

	shuffle( series ) {

		return this.contructor.shuffle( this.random, series );

	};

	// Remove empty bins if numberOfBins is not defined.
	partition( items, numberOfBins ) {

		return this.contructor.partition( this.random, items, numberOfBins );

	};

	// Distributions
	cauchy( random, location = 0, scale = 1 ) {

		return this.contructor.cauchy( this.random, location, scale );

	};

	normal( random, mean = 0, variance = 1 ) {

		return this.contructor.normal( this.random, mean, variance );

	};

	lognormal( random, mean = 0, sd = 1 ) {

		return this.contructor.lognormal( this.random, mean, sd );
	};

	pareto( random, min, alpha ) {

		return this.contructor.pareto( this.random, min, alpha );

	};

	exponential( random, lambda ) {

		return this.contructor.exponential( this.random, lambda );

	};

	// Utilities
	normalize( series, min, max ) {

		return this.contructor.normal( series, min, max );

	};

	cumulate( series ) {

		return this.contructor.cumulate( series );

	};

	frequency( series ) {

		return this.contructor.frequency( series );

	};

};
