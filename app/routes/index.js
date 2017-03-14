import Ember from 'ember';

// Usar /discs cuando se visite /

export default Ember.Route.extend({
  beforeModel() {
    this.replaceWith('discs');
  }
});
