const movies = ['Iron Man', 'Dr. Strange', 'Spider Man: No Way Home', 'Avengers'];
const webSeries = ['Wanda Vision', 'Loki', 'What if', 'She Hulk'];
// add these two arrays
//old way
const moviesWebSeries = movies.concat('Black Panther').concat(webSeries);

//E6 way: three dots
const marvel = [...movies, 'Black Panther', ...webSeries];

const maximum = [30, 40, 22, 190, 55, 15];
const result = Math.max(...maximum);

console.log(result);