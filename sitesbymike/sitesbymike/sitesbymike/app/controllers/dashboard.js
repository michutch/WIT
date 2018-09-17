'use strict';

const logger = require('../utils/logger');
const accounts = require ('./accounts.js');
const pictureStore = require('../models/picture-store.js');

const dashboard = {
  index(request, response) {
    logger.info('dashboard rendering');
    const loggedInCust = accounts.getPresentCust(request);
    const viewData = {
      title: 'Guide Dashboard',
      cust: loggedInCust,
      album: pictureStore.getAlbum(loggedInCust.id),
    };
    response.render('dashboard', viewData);
  },

  uploadPicture(request, response) {
    const loggedInCust = accounts.getPresentCust(request);
    pictureStore.addPicture(loggedInCust.id, request.body.title, request.files.picture, function () {
      response.redirect('/dashboard');
    });
  },

  deleteAllPictures(request, response) {
    const loggedInCust = accounts.getPresentCust(request);
    pictureStore.deleteAllPictures(loggedInCust.id);
    response.redirect('/dashboard');
  },

  deletePicture(request, response) {
    const loggedInCust = accounts.getPresentCust(request);
    pictureStore.deletePicture(loggedInCust.id, request.query.img);
    response.redirect('/dashboard');
  },
};

    
module.exports = dashboard;