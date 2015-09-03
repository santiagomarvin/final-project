import Ember from 'ember';

export default Ember.Route.extend({

  model: function(params) {
    return this.store.findById('event', params.id);
  },
  actions: {
    delete: function(event) {
      if (window.confirm('Are you sure you want to delete?')) {
        event.destroyRecord();
      }
        this.transitionTo('events');
    }
  }
});
