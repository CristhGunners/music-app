import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr(),
  artist: DS.attr(),
  cover: DS.attr(),
  year: DS.attr()
});
