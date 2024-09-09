const http = require('http');
const hostname = 'localhost';
const port = 3000;
const server = http.createServer((req, res) => {
    const {url} = req;
    // res.end('node index will start server');

    if(url === '/pets'){
        res.end("We are in the pets url")
    }
});

server.listen(port, hostname, () => {
    console.log(`Server running at ${hostname} on port ${port}`);
});