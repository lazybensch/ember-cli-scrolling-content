import Ember from 'ember';

export default Ember.Controller.extend({
  value: 'I am too short :(',

  actions: {
    //BEGIN-SNIPPET foo-bar
    foo: function() {
      window.alert('finished scrolling');
    },
    bar: function() {
      window.alert('scrolled all the way back');
    },
    //END-SNIPPET
    //BEGIN-SNIPPET toggle-scrolling
    toggleScrolling: function() {
      this.toggleProperty('scrollForward');
    },
    //END-SNIPPET
    //BEGIN-SNIPPET advanced-actions
    startScrolling: function() {
      this.set('started', true);
    },
    goBack: function() {
      this.set('started', false);
    },
    //END-SNIPPET
  }
});
