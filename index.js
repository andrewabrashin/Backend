const getAPI = async () => {
	const res = await fetch('https://jsonplaceholder.typicode.com/todos/1/');

	if (res.ok) {
		const data = await res.json();
		console.log(data);
	}

};

const http = require('http');

const server = http.createServer((request, response) => {
	response.writeHead(200, {'Content-Type': 'text/plain'});
	response.end('Hello World');

});
server.listen(3000, () => {
	console.log('Server running at http://127.0.0.1:3000/');
});
