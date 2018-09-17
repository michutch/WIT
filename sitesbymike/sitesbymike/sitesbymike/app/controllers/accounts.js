'use strict';     


const custhoard = require('../models/cust-hoard');
const logger = require('../utils/logger');
const uuid = require('uuid');

const accounts = {

  index(request, response) {      
    const viewData = {      
      title: 'Login or Signup',
    };
    response.render('start', viewData);     
  },

  login(request, response) {
    const viewData = {
      title: 'Login to CodeNPic with Mick',
    };
    response.render('login', viewData);
  },

  logout(request, response) {

    response.cookie('spacebook', '');
    response.redirect('/');
  },

  signup(request, response) {
    const viewData = {
      title: 'Sign-up to CodeNPic with Mick',
    };
    response.render('signup', viewData);
  },

  register(request, response) {
    const cust = request.body;
    cust.id = uuid();
    custhoard.addCust(cust);
    logger.info(`registering ${cust.email}`);
    response.redirect('/');
  },

  authenticate(request, response) {
    const cust = custhoard.getCustByEmail(request.body.email);
    if (cust && cust.password === request.body.password) {
      response.cookie('place', cust.email);
      logger.info(`logging in ${cust.email}`);
      response.redirect('/dashboard');
    } else {
      response.redirect('/login');
    }
  },

  getPresentCust (request) {
    const custEmail = request.cookies.place;
    return custhoard.getCustByEmail(custEmail);
  }
}

module.exports = accounts;