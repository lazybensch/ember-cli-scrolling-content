import Component from '@ember/component';
import { computed, get, observer } from '@ember/object';
import $ from 'jquery';
import layout from '../templates/components/scrolling-content';

export default Component.extend({
  layout,
  classNames: ['scrolling-content'],

  speed: 1,
  dependsOn: null,
  hover: true,
  scrollForward: true,

  innerWidth: computed('dependsOn', {
    get() {
      // Expressions order is important here
      $(this.element).css({ overflow: 'visible', float: 'left' });
      const innerWidth = $(this.element).width();
      $(this.element).css({ overflow: 'hidden', float: 'none' });

      return innerWidth;
    }
  }),

  outerWidth: computed('dependsOn', {
    get() {
      return $(this.element).width();
    }
  }),

  offset: computed('innerWidth', 'outerWidth', {
    get() {
      return get(this, 'innerWidth') - get(this, 'outerWidth');
    }
  }),

  duration: computed('offset', 'speed', {
    get() {
      return get(this, 'offset') * 10 / get(this, 'speed');
    }
  }),

  directionObserver: observer('scrollForward', function() {
    this.scroll(this.scrollForward);
  }),

  didInsertElement() {
    this._super(...arguments);

    $(this.element).css({
      display: 'block',
      'white-space': 'nowrap',
      overflow: 'hidden',
      float: 'none'
    });
  },

  scroll(forward) {
    const offset = get(this, 'offset');
    const duration = get(this, 'duration');
    const scrollLeft = $(this.element).scrollLeft();
    const scrollRatio = forward
      ? (offset - scrollLeft) / offset
      : scrollLeft / offset;

    $(this.element).stop();

    $(this.element).animate(
      { scrollLeft: forward ? offset : 0 },
      duration * scrollRatio,
      'linear',
      () => {
        if (forward) {
          this.onScrollForwardEnd();
        } else {
          this.onScrollBackwardEnd();
        }
      }
    );
  },

  onScrollForwardEnd() {},
  onScrollBackwardEnd() {},

  mouseEnter() {
    this.hover && this.scroll(true);
  },

  mouseLeave() {
    this.hover && this.scroll(false);
  }
});
