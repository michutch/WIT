'use strict';

const logger = require('../utils/logger');
const guide_hoard = require('../models/guide_hoard');

const start = {
  index(request, response) {
    logger.info('start rendering');

    const placeHoard = guide_hoard.getAllPlaces();
    let completeSites = 0;
    for (let i = 0; i < placeHoard.length; i++) {
      completeSites = completeSites + placeHoard[i].places.length;
    }
    const viewData = {
      name: 'Welcome to Guide 1',
      description: 'This app allows you to manage your websites and photos. You can arrange them into groups and share them with your friends and colleagues.',
      entireAmountOfGroups: placeHoard.length,
      completeSites: completeSites,
    };
    response.render('start', viewData);
  },
};

module.exports = start;