"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _axios = _interopRequireDefault(require("axios"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Client = _axios["default"].create({
  baseURL: 'http://localhost:8000/api',
  timeout: 10000
});

Client.interceptors.request.use(function (config) {
  console.log('Request Interceptor', config);
  return config;
});
Client.interceptors.response.use(function (response) {
  console.log('Response Interceptor', response);
  return response;
});
var _default = Client;
exports["default"] = _default;