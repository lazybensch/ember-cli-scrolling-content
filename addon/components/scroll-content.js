import Ember from 'ember';
import layout from '../templates/components/scroll-content';

export default Ember.Component.extend({
  layout: layout,
  classNames: 'scroll-content',
  attributeBindings: ['width'],

  didInsertElement: function() {
    this.$().css('overflow', 'scroll')

    this.$().mouseover(function() {
      console.log('in');
    });

    this.$().mouseout(function() {
      console.log('out');
    });
  }
});
