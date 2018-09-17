'use strict';

const _ = require('lodash');
const JsonStore = require('./json-store');

const messageStore = {

  store: new JsonStore('./models/message-store.json', {messages: []}),
  collection: 'messages',

  getAllMessages() {
    return this.store.findAll(this.collection);
  },

   getCustPlaces(userid) {
    return this.store.findBy(this.collection, { userid: userid });
  },

  addMessage(message) {
    this.store.add(this.collection, message);
  }
}

module.exports = messageStore;