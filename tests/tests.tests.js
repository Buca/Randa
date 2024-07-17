import { expect, test } from 'vitest';
import { Randa, LCG, Lehman, MersenneTwister, XORShift, XORShiftPlus, XORShift256 } from '../src';

test('LCG random float is in between [0, 1).', () => {
	
	for ( let i = 0; i < 1000; i ++ ) {

		const r = LCG.random();

		expect( 0 <= r && r < 1 ).toBeTruthy()
	
	}

});

test('Lehman random float is in between [0, 1).', () => {
	
	for ( let i = 0; i < 1000; i ++ ) {

		const r = Lehman.random();

		expect( 0 <= r && r < 1 ).toBeTruthy()
	
	}

});

test('Mersenne Twister random float is in between [0, 1).', () => {
	
	for ( let i = 0; i < 1000; i ++ ) {

		const r = MersenneTwister.random();

		expect( 0 <= r && r < 1 ).toBeTruthy()
	
	}

});

test('XORShift random float is in between [0, 1).', () => {
	
	for ( let i = 0; i < 1000; i ++ ) {

		const r = XORShift.random();

		expect( 0 <= r && r < 1 ).toBeTruthy()
	
	}

});

test('XORShiftPlus random float is in between [0, 1).', () => {
	
	for ( let i = 0; i < 1000; i ++ ) {

		const r = XORShiftPlus.random();

		expect( 0 <= r && r < 1 ).toBeTruthy()
	
	}

});

test('XORShift256 random float is in between [0, 1).', () => {
	
	for ( let i = 0; i < 1000; i ++ ) {

		const r = XORShift256.random();

		expect( 0 <= r && r < 1 ).toBeTruthy()
	
	}

});
