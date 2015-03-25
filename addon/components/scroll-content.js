import Ember from 'ember';
import layout from '../templates/components/scroll-content';

export default Ember.Component.extend({
  layout: layout,
  classNames: 'scroll-content',

  didInsertElement: function() {
    this.$().css('white-space', 'nowrap');
    this.$().css('overflow', 'visible');
    this.$().css('float', 'left');
    var innerWidth = this.$().width();
    this.$().css('white-space', 'initial');
    this.$().css('overflow', 'hidden');
    this.$().css('float', 'none');
    var outerWidth = this.$().width();
    var offset = innerWidth - outerWidth;

    var _this = this;
    this.$().mouseover(function() {
      Ember.run.scheduleOnce('afterRender', this, function(){
        _this.$().stop();
        _this.$().animate({scrollLeft: offset}, 3000, 'linear');
      });
    });

    this.$().mouseout(function() {
      Ember.run.scheduleOnce('afterRender', this, function(){
        _this.$().stop();
        _this.$().animate({scrollLeft: 0}, 3000, 'linear');
      });
    });
  }
});
