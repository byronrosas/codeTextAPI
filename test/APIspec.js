'use strict';

var app = require('../server'),
chai = require('chai'),
request = require('supertest');

var expect = chai.expect;

describe('API app CodeText Test', function () {
	describe('#POST /text',function(done){
		it('It should send a text, respond same text',function(done){
			request(app)
				.post('/text')
				.send({text:'Hola mundo'})
				.set('Accept', 'application/json')
				.expect('Content-Type', /json/)
				.expect(200,{text:'Hola mundo'},done)				
		});
	});
});