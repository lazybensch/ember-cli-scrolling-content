import Ember from 'ember';

export default Ember.Controller.extend({
  value: 'I am too short :(',

  //BEGIN-SNIPPET actions
  actions: {
    foo: function() {
      window.alert('finished scrolling');
    },
    bar: function() {
      window.alert('scrolled all the way back');
    }
  }
  //END-SNIPPET
});
