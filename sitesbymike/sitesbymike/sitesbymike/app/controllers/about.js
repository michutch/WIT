'use strict';                                                             //DECLARING STRICT MODE, CHANGES BAD SYNTAX INTO ERRORS

//REQUIRE(), USED BY NODE TO LAUNCH MODULES
const logger = require('../utils/logger');      
const messageStore = require('../models/message-store');

const about = {
  index(request, response) {                                              //PROTOCOL BETWEEN CLIENT AND SERVER
    logger.info('about rendering');                                       //USED TO LOG GENERAL INFORMATION
    const viewData = {                                                    //PASSES DATA FROM CONTROLLER TO VIEW
      title: 'About our Learning Guide',
      contact: 'Developed by Metropolitan Associates, WIT, Waterford.',
      messages: messageStore.getAllMessages(),
    };
    response.render('about', viewData);                                   //COMPILES TEMPLATE
  },

  addMessage(request, response) {                                         //PROTOCOL BETWEEN CLIENT AND SERVER
    const message = request.body.message;
    logger.info('message recieved' + message);
    const newMessage = {
      messagetext: message,
    };
    messageStore.addMessage(newMessage);
    response.redirect ('/about');
},
};

module.exports = about;                                                     //OBJECT THATS RETURNED AFTER A 'REQUIRE' CALL
