# Randa Library

Randa is a lightweight JavaScript library for generating random data and working with various probability distributions. It includes utilities for random number generation, string creation, date manipulation, sampling, shuffling, and more.

## Installation

You can install Randa via npm:

```bash
npm install randa
```

Or include it directly in your HTML:

```html
<script src="path/to/randa.js"></script>
```

## Usage

### Importing the Library

```javascript
import { Randa } from 'randa';
```

### Basic Random Generators

#### Random Number

Generates a random number between 0 and 1.

```javascript
const rand = Randa.random();
```

#### Random Float

Generates a random float between `min` and `max`.

```javascript
const randFloat = Randa.float(Math.random, 0, 10);
```

#### Random Integer

Generates a random integer between `min` and `max`.

```javascript
const randInt = Randa.integer(Math.random, 1, 100);
```

#### Random Boolean

Generates a random boolean value based on the given `threshold`.

```javascript
const randBool = Randa.boolean(Math.random, 0.5);
```

#### Random String

Generates a random string of the given `length`.

```javascript
const randString = Randa.string(Math.random, 8);
```

#### Random Date

Generates a random date between `start` and `end`.

```javascript
const startDate = new Date('2020-01-01');
const endDate = new Date('2023-12-31');
const randDate = Randa.date(Math.random, startDate, endDate);
```

### Sampling and Choosing

#### Choose

Selects a random item from the provided `items` array. If `weights` are provided, the selection is weighted.

```javascript
const items = ['apple', 'banana', 'cherry'];
const randItem = Randa.choose(Math.random, items);
```

#### Sample

Randomly samples `amount` items from the `population`.

```javascript
const population = ['a', 'b', 'c', 'd', 'e'];
const samples = Randa.sample(Math.random, population, 3);
```

#### Shuffle

Shuffles an array in place.

```javascript
const array = [1, 2, 3, 4, 5];
const shuffledArray = Randa.shuffle(Math.random, array);
```

#### Partition

Partitions `items` into `numberOfBins` bins.

```javascript
const items = [1, 2, 3, 4, 5];
const bins = Randa.partition(Math.random, items, 2);
```

### Probability Distributions

#### Cauchy Distribution

Generates a random number following a Cauchy distribution.

```javascript
const cauchyRandom = Randa.cauchy(Math.random, 0, 1);
```

#### Normal Distribution

Generates a random number following a normal distribution.

```javascript
const normalRandom = Randa.normal(Math.random, 0, 1);
```

#### Lognormal Distribution

Generates a random number following a lognormal distribution.

```javascript
const lognormalRandom = Randa.lognormal(Math.random, 0, 1);
```

#### Pareto Distribution

Generates a random number following a Pareto distribution.

```javascript
const paretoRandom = Randa.pareto(Math.random, 1, 1.5);
```

#### Exponential Distribution

Generates a random number following an exponential distribution.

```javascript
const exponentialRandom = Randa.exponential(Math.random, 1);
```

### Utilities

#### Normalize

Normalizes a series to the range `[min, max]`.

```javascript
const series = [10, 20, 30];
const normalizedSeries = Randa.normalize(series, 0, 1);
```

#### Cumulate

Returns the cumulative sum of the series.

```javascript
const series = [1, 2, 3];
const cumulatedSeries = Randa.cumulate(series);
```

#### Frequency

Returns the frequency distribution of values in the series.

```javascript
const series = [1, 2, 2, 3, 3, 3];
const frequency = Randa.frequency(series);
```

## Contributing

Contributions are welcome! Please open an issue or submit a pull request on GitHub.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

Enjoy using Randa for all your random generation needs! If you have any questions or need further assistance, feel free to reach out.