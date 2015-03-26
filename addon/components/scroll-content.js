import Ember from 'ember';
import layout from '../templates/components/scroll-content';

export default Ember.Component.extend({
  layout: layout,
  classNames: 'scroll-content',

  duration: null,
  offset: null,
  speed: null,

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
  }.property(),

  outerWidth: function() {
    return this.$().width();
  }.property(),

  didInsertElement: function() {
    this.$().css({
      'display': 'block',
      'white-space': 'nowrap',
      'overflow': 'hidden',
      'float': 'none',
    });

    if (Ember.typeOf(this.get('offset')) === 'null') {
      this.set('offset', this.get('innerWidth') - this.get('outerWidth'));
    }
    if (Ember.typeOf(this.get('duration')) === 'null') {
      this.set('duration', this.get('offset') * 10 );
    }
    if (Ember.typeOf(this.get('speed')) != 'null') {
      this.set('duration', this.get('duration') / this.get('speed') );
    }

  }
});
