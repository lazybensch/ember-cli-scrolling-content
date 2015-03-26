import Ember from 'ember';
import layout from '../templates/components/scroll-content';

export default Ember.Component.extend({
  layout: layout,
  classNames: 'scroll-content',

  speed: 1,
  dependsOn: null,

  mouseEnter: function() {
    this.$().stop();
    var scrollRatio = (this.get('offset') - this.$().scrollLeft()) / this.get('offset');
    this.$().animate({scrollLeft: this.get('offset')}, this.get('duration') * scrollRatio, 'linear');
  },

  mouseLeave: function() {
    this.$().stop();
    var scrollRatio = this.$().scrollLeft() / this.get('offset');
    this.$().animate({scrollLeft: 0}, this.get('duration') * scrollRatio, 'linear');
  },

  innerWidth: function() {
    this.$().css({ 'overflow': 'visible', 'float': 'left', });
    var innerWidth = this.$().width();
    this.$().css({'overflow': 'hidden', 'float': 'none'});
    return innerWidth;
  }.property('dependsOn'),

  outerWidth: function() {
    return this.$().width();
  }.property('dependsOn'),

  offset: function() {
    return this.get('innerWidth') - this.get('outerWidth');
  }.property('innerWidth', 'outerWidth'),

  duration: function() {
    return this.get('offset') * 10 / this.get('speed');
  }.property('offset', 'speed'),

  didInsertElement: function() {
    this.$().css({
      'display': 'block',
      'white-space': 'nowrap',
      'overflow': 'hidden',
      'float': 'none',
    });
  }
});
