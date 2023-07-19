/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  
}

module.exports = nextConfig

// const http = require("http");
// const url = require("url");
// const StringDecoder = require("string_decoder").StringDecoder;
// const util = require("util");

// var jsdom = require('jsdom');
// const { JSDOM } = jsdom;
// const { window } = new JSDOM();
// const { document } = (new JSDOM('')).window;
// global.document = document;
// var $ = jQuery = require('jquery')(window);
