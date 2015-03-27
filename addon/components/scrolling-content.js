import Ember from 'ember';
import layout from '../templates/components/scrolling-content';

export default Ember.Component.extend({
  layout: layout,
  classNames: 'scrolling-content',

  speed: 1,
  dependsOn: null,
  scrollForward: false,
  hover: true,

  scroll: function(forward) {
    var scrollRatio, _this = this;
    this.$().stop();

    if (forward) {
      scrollRatio = (this.get('offset') - this.$().scrollLeft()) / this.get('offset');
    } else {
      scrollRatio = this.$().scrollLeft() / this.get('offset');
    }

    this.$().animate(
      {scrollLeft: forward ? this.get('offset') : 0},
      this.get('duration') * scrollRatio,
      'linear',
      function() {
        if (forward) {
          _this.sendAction('didScrollForward');
        } else {
          _this.sendAction('didScrollBackward');
        }
      }
    );
  },

  changeDirection: function() {
    this.scroll( this.get('scrollForward') );
  }.observes('scrollForward'),

  mouseEnter: function() {
    if (this.get('hover')) {
      this.set('scrollForward', true);
    }
  },

  mouseLeave: function() {
    if (this.get('hover')) {
      this.set('scrollForward', false);
    }
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
