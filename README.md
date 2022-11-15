# Simple Callback Server

[![Read the blog entry at c0ntroller.de](https://c0ntroller.de/img/read-blog.svg)](https://c0ntroller.de/blog/project/simple-cb)

A simple server that prints headers and body of a request to the console.

## Usage
```console
$ npm install
```

```console
$ npm run start
```

Then every incoming HTTP request will be logged with the following information:
- HTTP Method
- Called path
- Headers
- (if exists) Query parameter
- (if exists) Body