"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _axios = _interopRequireDefault(require("axios"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var apiClient = _axios["default"].create({
  baseURL: 'http://localhost8000/api',
  timeout: 30000
});

apiClient.interceptors.request.use(function (config) {
  var token = localStorage.getItem('token') || '';
  config.headers['Authorization'] = token ? "Bearer ".concat(token) : '';
  return config;
}, function (error) {
  Promise.reject(error);
});
apiClient.interceptors.response.use(function (response) {
  return response;
}, function (error) {
  if (error.response.status === 401) {
    localStorage.removeItem('token');
    window.location.reload();
  }

  return Promise.reject(error);
});
var _default = apiClient;
exports["default"] = _default;