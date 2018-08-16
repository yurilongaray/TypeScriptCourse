"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Chai = require("chai");
var td = require("testdouble");
var api_1 = require("../../../server/api/api");
var supertest = require('supertest');
var app = api_1.default;
exports.app = app;
var request = supertest;
exports.request = request;
var expect = Chai.expect;
exports.expect = expect;
var testDouble = td;
exports.testDouble = testDouble;
//Este helper atua de facilitador para arquivos de testes
