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

	for (let i = 0; i < query_keys.length; i++) {
		query_string += (query_keys[i] + '=' + query_values[i]);

		if (i !== (query_keys.length - 1)) {
			query_string += ' AND ';
		}
	}

	connection.query(
	  'SELECT * FROM `national_park` WHERE ' + query_string,
	  query_values,
	  function(err, results) {
	  	console.log(results);
	    res.send(results);
	  }
	);
}

module.exports = {
  getNationalPark
}