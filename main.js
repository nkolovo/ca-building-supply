const http = require("http");
const url = require("url");
const StringDecoder = require("string_decoder").StringDecoder;
const util = require("util");
const formidable = require("formidable");

var jsdom = require('jsdom');
const { JSDOM } = jsdom;

const server = http.createServer(function(req, res) {

});

server.listen(1234, function() {
    console.log("Listening on port 1234");
});