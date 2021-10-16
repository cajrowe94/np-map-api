const config = require('../config.js');
const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: config.MYSQL_HOST,
  user: config.MYSQL_USERNAME,
  password: config.MYSQL_PASSWORD,
  database: 'onemap',
});

const getNationalPark = async (req, res, next) => {
	let query = req.query;
	let query_keys = Object.keys(query);
	let query_values = Object.values(query);
	let query_string = '';

	// append national_park to each key
	// we need to do this because of the joins happening
	for (let i = 0; i < query_keys.length; i++) {
		query_string += ('national_park.' + query_keys[i] + '=' + query_values[i]);

		if (i !== (query_keys.length - 1)) {
			query_string += ' AND ';
		}
	}

	// select all matched national_park rows
	// we also need to join country/region name onto each result
	connection.query(
	  'SELECT national_park.*, country.name as country_name, region.name as region_name ' +
	  'FROM national_park ' +
	  'JOIN country ON national_park.country_id = country.id ' +
	  'JOIN region ON national_park.region_id = region.id ' +
	  'WHERE ' + query_string,
	  query_values,
	  function(err, results) {
	    res.send(results);
	  }
	);
}

module.exports = {
  getNationalPark
}