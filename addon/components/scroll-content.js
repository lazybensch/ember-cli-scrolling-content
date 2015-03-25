import Ember from 'ember';
import layout from '../templates/components/scroll-content';

export default Ember.Component.extend({
  layout: layout,
  classNames: 'scroll-content',

  duration: null,
  offset: null,

  didInsertElement: function() {
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
      this.set('duration', this.get('offset') * 10 )
    }

    var _this = this;
    this.$().mouseover(function() {
      Ember.run.scheduleOnce('afterRender', this, function(){
        _this.$().stop();
        _this.$().animate({scrollLeft: _this.get('offset')}, _this.get('duration'), 'linear');
      });
    });

    this.$().mouseout(function() {
      Ember.run.scheduleOnce('afterRender', this, function(){
        _this.$().stop();
        _this.$().animate({scrollLeft: 0}, _this.get('duration'), 'linear');
      });
    });
  }
});
