var http = require('http');

server=http.createServer(function(request,response) 
{
    response.writeHead(200, {'Content-Type': 'text/html'});
    response.write('<h1>Welcome To Node JS </h1>');
    return response.end();
});

server.listen(8000);
