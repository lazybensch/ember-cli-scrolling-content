import Ember from 'ember';
import layout from '../templates/components/scroll-content';

export default Ember.Component.extend({
  layout: layout,
  classNames: 'scroll-content',

  duration: null,
  offset: null,

  mouseEnter: function(){
    this.$().stop();
    var scrollRatio = (this.get('offset') - this.$().scrollLeft()) / this.get('offset');
    this.$().animate({scrollLeft: this.get('offset')}, this.get('duration') * scrollRatio, 'linear');
  },

  mouseLeave: function(){
    this.$().stop();
    var scrollRatio = this.$().scrollLeft() / this.get('offset');
    this.$().animate({scrollLeft: 0}, this.get('duration') * scrollRatio, 'linear');
  },

  didInsertElement: function() {

    this.$().css('display', 'block');
    this.$().css('white-space', 'nowrap');
    this.$().css('overflow', 'visible');
    this.$().css('float', 'left');
    var innerWidth = this.$().width();
    this.$().css('overflow', 'hidden');
    this.$().css('float', 'none');
    var outerWidth = this.$().width();

    if (Ember.typeOf(this.get('offset')) === 'null') {
      this.set('offset', innerWidth - outerWidth);
    }
    if (Ember.typeOf(this.get('duration')) === 'null') {
      this.set('duration', this.get('offset') * 10 );
    }

  }
});
