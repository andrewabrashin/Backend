const getAPI = async () => {
	const https = require('https');
	const options = {
		hostname: 'jsonplaceholder.typicode.com',
		path: '/todos/1',
		method: 'GET',
	};
	// создаем запрос

	const request = https.request(options, (res) => {
		console.log(`statusCode: ${res.statusCode}`)
		res.on('data', (d) => {
			// вывод полученных в ответе данных
			process.stdout.write(d)
			const fs = require('fs');
			fs.writeFileSync('test.txt', d);
		})
	});
	request.on('error', (error) => {
		console.error(error)
	});
	request.end();
};

const http = require('http');

const server = http.createServer((request, response) => {
	response.writeHead(200, {'Content-Type': 'text/plain'});
	response.end('Hello World');
	getAPI();
});
server.listen(3000, () => {
	console.log('Server running at http://127.0.0.1:3000/');
});
