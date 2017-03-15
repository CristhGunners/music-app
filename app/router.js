import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('discs', function() {
    this.route('show', { path: '/:disc_id' });
  });
});

export default Router;
