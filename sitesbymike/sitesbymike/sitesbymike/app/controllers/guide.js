'use strict';

const uuid = require('uuid');
const logger = require('../utils/logger');
const placeHoard = require('../models/guide_hoard');

const place = {
  index(request, response) {
    const placeId = request.params.id;
    logger.debug('Place Id = ', placeId);
    const viewData = {
      title: 'Place',
      place: placeHoard.getPlace(placeId),
    };
    response.render('place', viewData);
  },

  

  deleteTitle(request, response) {
    const placeId = request.params.id;
    const titleId = request.params.titleid;
    logger.debug(`Deleting Title ${titleId} from Place ${placeId}`);
    placeHoard.removeTitle(placeId, titleId);
    response.redirect('/place/' + placeId);
  },
  
   addTitle(request, response) {
    const placeId = request.params.id;
    const place = guideHoard.getPlace(placeId);
    const newTitle = {
      id: uuid(),
      name: request.body.name,
      language: request.body.language,
      place: request.body.place,
      value: request.body.value,
    };
    guideHoard.addTitle(placeId, newTitle);
    response.redirect('/place/' + placeId);
  },
  
};

module.exports = place;