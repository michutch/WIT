'use strict';

const _ = require('lodash');
const JsonStore = require('./json-store');

const guideHoard = {

  store: new JsonStore('./models/guide_hoard.json', { guideAssembly: [] }),
  collection: 'guideAssembly',

  addGuide(guide) {
    this.store.add(this.collection, guide);
  },

  getAllPlaces() {
    return this.store.findAll(this.collection);
  },

  getCustPlaces(userid) {
    return this.store.findBy(this.collection, { userid: userid });
  },

  getPlace(id) {
    return this.store.findOneBy(this.collection, { id: id });
  },

  addPlace(guide) {
    this.store.add(this.collection, guide);
  },

  removePlace(id) {
    const guide = this.getGuide(id);
    this.store.remove(this.collection, guide);
  },

  removeAllPlaces() {
    this.store.removeAll(this.collection);
  },

  addTitle(id, title) {
    const place = this.getPlace(id);
    place.titles.push(title);
  },

  removeSong(id, songId) {
    const place = this.getPlace(id);
    const titles = place.titles;
    _.remove(titles, { id: titleId});
  },

  getCompleteAmountOfTitles() {
    const collection = this.getGuideAssembly();
    let total = 0;
    for (let i=0; i<collection.length; i++) {
      total = total + collection[i].titles.length;
    }
    return total;
  },

  getCustTitles(custid) {
    return this.store.findBy(this.collection, { custid: custid });
  },
};


module.exports = guideHoard;