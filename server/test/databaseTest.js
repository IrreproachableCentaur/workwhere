/**
 * @file Test database functionality
 *
*/

var expect = require('chai').expect;
var should = require('chai').should;
var User = require('../database/users/user');
var Users = require('../database/users/users');
// var Card = require('../database/cards/card');
// var Cards = require('../database/cards/cards');
// var Connection = require('../database/connections/connection');
// var Connections = require('../database/connections/connections');

/**
 * @example The test below is an example of the mocha and chai syntax
*/

// describe('Array', function() {
//   describe('#indexOf()', function () {
//     it('should return -1 when the value is not present', function () {
//       var arr = [1, 2, 3];
//       expect(arr.indexOf(4)).to.equal(-1);
//     });
//   });
// });

////////////////////////////////////////////////////////
//                  DATABASE TESTING                  //
////////////////////////////////////////////////////////

describe('User Model and Users Collection', function() {
  it('should add a user model', function() {
    new User({email: 'testing@email.com', password: '1234'})
    .save()
    .then(function(user) {
      expect(user.get('email')).to.equal('testing@email.com');
    });
  });

  xit('should require a first name, last name, email, and password', function() {

  });

  it('should find an added user', function() {
    new User({email: 'testing@email.com'})
    .fetch()
    .then(function(user) {
      expect(user.get('password')).to.equal('1234');
    });
  });

  xit('should remove a user model', function() {

  });

  xit('should store only the hashed password', function() {

  });

  xit('should have all the users in the collection', function() {

  });

  xit('should have a cards method', function() {

  });
});

xdescribe('Card Model and Cards Collection', function() {
  it('should add a card model', function() {

  });

  it('should have a user method and a userID property', function() {

  });

  it('should find an added card', function() {

  });

  it('should remove an added card', function() {

  });

  it('should have all cards in the collection', function() {

  });
});

// connections collection sounds like something 101 Dalmations
// dalmatian sensation-esque
xdescribe('Connection Model and Connections Collection', function() {
  it('should add a connection model', function() {

  });

  it('should have a user method and userID property', function() {

  });

  it('should have a card method and a cardID property', function() {

  });

  it('should be able to find a card based on the userID', function() {
    // find one
    // find all

  });

  it('should remove an added connection', function() {

  });

  it('should have all the connections in the collection', function() {

  });
});
