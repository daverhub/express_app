var expect = require('chai').expect;
var request = require('supertest');
var app = require('../app');
var agent = request.agent(app);

describe('GET /', function() {
  it('returns home page', function(){
    agent
      .get('/')
      .expect(200)
      .expect('Content-Type', /text/)
      .end(function(err, rest){
        if (err) return done(err);
        res.body.should.have.text('Welcome to Express');
        done();
      });
  });
  
});
