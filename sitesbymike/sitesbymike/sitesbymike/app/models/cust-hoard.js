'use strict';

const _ = require('lodash');
const JsonStore = require('./json-store');

const custHoard = {

  store: new JsonStore('./models/cust-hoard.json', {customers: []}),
  collection: 'customers',

  getAllCustomers() {
    return this.store.findAll(this.collection);
  },

  addCust(cust) {
    this.store.add(this.collection, cust);
  },

  getCustById(id) {
    return this.store.findOneBy(this.collection, { id: id });
  },

  getCustByEmail(email) {
    return this.store.findOneBy(this.collection, { email: email });
  },
}

module.exports = custHoard;