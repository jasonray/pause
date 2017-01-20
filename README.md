h1. Pause [![Build Status](https://travis-ci.org/jasonray/pause.svg?branch=master)](https://travis-ci.org/jasonray/pause)

Purpose
=======

I often need a mock web service to simulate a remote resource that takes an arbitrary amount of time to execute.  This is often used while performance testing to represent a remote web service.  This project provides such a mock.


Install it
==========
Install node:
```
brew install node
```

Install node dependencies
```
npm install 
```

Run it
======
```
node app.js [options]
```

Options
-------
`-p port` specify the port on which to listen
`-d delay` specify the default duration, in milliseconds, for the service to wait before returning
`-c content` specify the default content to use on the response http body
`-s status` specify the default http status to use on the response

Consume it
==========
A simple usage of it would be:
```
> curl -i http://127.0.0.1:8888
HTTP/1.1 202 Accepted
X-Powered-By: Express
Date: Fri, 25 Apr 2014 00:02:48 GMT
Connection: keep-alive
Transfer-Encoding: chunked
```

Query params that you can use on the request:
- `delay` specify the duration, in milliseconds, for the service to wait before returning
- `content` specify the content to use on the response http body
- `status` specify the http status to use on the response
