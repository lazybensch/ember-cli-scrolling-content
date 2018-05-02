import Controller from '@ember/controller';
import { set } from '@ember/object';

export default Controller.extend({
  value: 'I am too short :(',
  started: null,

  //BEGIN-SNIPPET foo-bar
  foo() {
    window.alert('finished scrolling');
  },
  bar() {
    window.alert('scrolled all the way back');
  },
  //END-SNIPPET
  //BEGIN-SNIPPET toggle-scrolling
  toggleScrolling() {
    this.scrollForward
      ? set(this, 'scrollForward', false)
      : set(this, 'scrollForward', true);
  },
  //END-SNIPPET
  //BEGIN-SNIPPET advanced-actions
  startScrolling() {
    set(this, 'started', true);
  },
  goBack() {
    set(this, 'started', false);
  }
  //END-SNIPPET
});
