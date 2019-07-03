// var request = require('supertest');
// var app = require('../index.js');
// describe('GET /', function() {
//  it('respond with hello world', function(done) {
//  //navigate to root and check the the response is "hello world"
//  request(app).get('/').expect('hello world', done);
//  });
// });


var expect  = require('chai').expect;
var request = require('request');

it('Main page content', function(done) {
    request('http://localhost:3000' , function(error, response, body) {
        expect(body).to.equal('Hello World');
        done();
    });
});