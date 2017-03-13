import Ember from 'ember';

// Usar /disc cuando se visite /

export default Ember.Route.extend({
  beforeModel() {
    this.replaceWith('disc');
  }
});
