"use strict"
define("dummy/app",["exports","dummy/resolver","ember-load-initializers","dummy/config/environment"],function(e,n,t,l){Object.defineProperty(e,"__esModule",{value:!0})
var o=Ember.Application.extend({modulePrefix:l.default.modulePrefix,podModulePrefix:l.default.podModulePrefix,Resolver:n.default});(0,t.default)(o,l.default.modulePrefix),e.default=o}),define("dummy/components/code-snippet",["exports","dummy/snippets"],function(e,n){Object.defineProperty(e,"__esModule",{value:!0})
var t=self.require("highlight.js")
e.default=Ember.Component.extend({tagName:"pre",classNameBindings:["language"],unindent:!0,_unindent:function(e){if(!this.get("unindent"))return e
for(var n,t,l=e.split("\n").filter(function(e){return""!==e}),o=0;o<l.length;o++)(n=/^[ \t]*/.exec(l[o]))&&(void 0===t||t>n[0].length)&&(t=n[0].length)
return void 0!==t&&t>0&&(e=e.replace(new RegExp("^[ \t]{"+t+"}","gm"),"")),e},source:Ember.computed("name",function(){var e=this.get("name").split("/").reduce(function(e,n){return e&&e[n]},n.default)
return this._unindent((e||"").replace(/^(\s*\n)*/,"").replace(/\s*$/,""))}),didInsertElement:function(){t.highlightBlock(this.get("element"))},language:Ember.computed("name",function(){var e=/\.(\w+)$/i.exec(this.get("name"))
if(e)switch(e[1].toLowerCase()){case"js":return"javascript"
case"coffee":return"coffeescript"
case"hbs":return"htmlbars"
case"css":return"css"
case"scss":return"scss"
case"less":return"less"
case"emblem":return"emblem"
case"ts":return"typescript"}})})}),define("dummy/components/scrolling-content",["exports","ember-cli-scrolling-content/components/scrolling-content"],function(e,n){Object.defineProperty(e,"__esModule",{value:!0}),e.default=n.default}),define("dummy/controllers/index",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=Ember.Controller.extend({value:"I am too short :(",started:null,foo:function(){window.alert("finished scrolling")},bar:function(){window.alert("scrolled all the way back")},toggleScrolling:function(){this.scrollForward?Ember.set(this,"scrollForward",!1):Ember.set(this,"scrollForward",!0)},startScrolling:function(){Ember.set(this,"started",!0)},goBack:function(){Ember.set(this,"started",!1)}})}),define("dummy/initializers/container-debug-adapter",["exports","ember-resolver/resolvers/classic/container-debug-adapter"],function(e,n){Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"container-debug-adapter",initialize:function(){var e=arguments[1]||arguments[0]
e.register("container-debug-adapter:main",n.default),e.inject("container-debug-adapter:main","namespace","application:main")}}}),define("dummy/initializers/export-application-global",["exports","dummy/config/environment"],function(e,n){function t(){var e=arguments[1]||arguments[0]
if(!1!==n.default.exportApplicationGlobal){var t
if("undefined"!=typeof window)t=window
else if("undefined"!=typeof global)t=global
else{if("undefined"==typeof self)return
t=self}var l,o=n.default.exportApplicationGlobal
l="string"==typeof o?o:Ember.String.classify(n.default.modulePrefix),t[l]||(t[l]=e,e.reopen({willDestroy:function(){this._super.apply(this,arguments),delete t[l]}}))}}Object.defineProperty(e,"__esModule",{value:!0}),e.initialize=t,e.default={name:"export-application-global",initialize:t}}),define("dummy/resolver",["exports","ember-resolver"],function(e,n){Object.defineProperty(e,"__esModule",{value:!0}),e.default=n.default}),define("dummy/router",["exports","dummy/config/environment"],function(e,n){Object.defineProperty(e,"__esModule",{value:!0})
var t=Ember.Router.extend({location:n.default.locationType,rootURL:n.default.rootURL})
t.map(function(){}),e.default=t}),define("dummy/services/ajax",["exports","ember-ajax/services/ajax"],function(e,n){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return n.default}})}),define("dummy/snippets",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default={"absolute-scroll.hbs":"<div class='parent'>\n  {{#scrolling-content duration=2000}}\n    1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16\n    17 18 19 20 21 22 23 24 25 26 27 28 29\n  {{/scrolling-content}}\n\n  {{#scrolling-content duration=2000}}\n    1 2 3 4 5 6 7 8 9 10 11 12 13 14 15\n  {{/scrolling-content}}\n</div>","adjustable-scroll.hbs":"<div class='parent'>\n  {{#scrolling-content speed=2}}\n    1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16\n    17 18 19 20 21 22 23 24 25 26 27 28 29\n  {{/scrolling-content}}\n\n  {{#scrolling-content speed=2}}\n    1 2 3 4 5 6 7 8 9 10 11 12 13 14 15\n  {{/scrolling-content}}\n</div>","advanced-actions.js":"  startScrolling() {\n    set(this, 'started', true);\n  },\n  goBack() {\n    set(this, 'started', false);\n  }","advanced-template.hbs":"<div class='parent'>\n  {{#scrolling-content \n      scrollForward=started\n      onScrollForwardEnd=(action goBack)\n      hover=false\n  }}\n    <nav>\n      <div> one </div>\n      <div> two </div>\n      <div> three </div>\n      <div class='footer'> four </div>\n    </nav>\n  {{/scrolling-content}}\n</div>\n<button onclick={{action startScrolling}}>\n  start scrolling\n</button>","callbacks.hbs":"<div class='parent'>\n  {{#scrolling-content \n      onScrollForwardEnd=(action foo)\n      didScrollBackward=(action bar)\n  }}\n    A B C D E F G H I J K L M\n    N O P Q R S T U V W X Y Z\n  {{/scrolling-content}}\n</div>","complex-dom.hbs":"<div class='parent'>\n  {{#scrolling-content}}\n    <nav>\n      <div> one </div>\n      <div> two </div>\n      <div> three </div>\n      <div class='footer'> four </div>\n    </nav>\n  {{/scrolling-content}}\n</div>","custom-tag.hbs":"<div class='parent'>\n  {{#scrolling-content \n      duration=0 \n      tagName='li'\n      classNames='list-item'\n  }}\n    1 2 3 4 5 6 7 8 9 10 11 12 13 14 15\n  {{/scrolling-content}}\n</div>","foo-bar.js":"  foo() {\n    window.alert('finished scrolling');\n  },\n  bar() {\n    window.alert('scrolled all the way back');\n  },","resize.hbs":"{{input value=value}}\n<div class='parent'>\n  {{#scrolling-content dependsOn=value}}\n    {{value}}\n  {{/scrolling-content}}\n</div>","scrolling-control.hbs":"<div class='parent'>\n  {{#scrolling-content scrollForward=scrollForward}}\n    A B C D E F G H I J K L M\n    N O P Q R S T U V W X Y Z\n  {{/scrolling-content}}\n</div>\n<button onclick={{action toggleScrolling}}>\n  change scrolling direction\n</button>","simple-usage.hbs":"<div class='parent'>\n  {{#scrolling-content}}\n    A B C D E F G H I J K L M\n    N O P Q R S T U V W X Y Z\n  {{/scrolling-content}}\n</div>","toggle-scrolling.js":"  toggleScrolling() {\n    this.scrollForward\n      ? set(this, 'scrollForward', false)\n      : set(this, 'scrollForward', true);\n  },"}}),define("dummy/templates/application",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=Ember.HTMLBars.template({id:"miclDbcq",block:'{"symbols":[],"statements":[[1,[18,"outlet"],false]],"hasEval":false}',meta:{moduleName:"dummy/templates/application.hbs"}})}),define("dummy/templates/components/code-snippet",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=Ember.HTMLBars.template({id:"I3g5LP0b",block:'{"symbols":[],"statements":[[1,[18,"source"],false],[0,"\\n"]],"hasEval":false}',meta:{moduleName:"dummy/templates/components/code-snippet.hbs"}})}),define("dummy/templates/index",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=Ember.HTMLBars.template({id:"T2mSyHQT",block:'{"symbols":[],"statements":[[6,"div"],[9,"class","main"],[7],[0,"\\n\\n  "],[6,"ul"],[7],[0,"\\n    "],[6,"li"],[7],[0,"\\n      install: "],[6,"b"],[7],[0,"ember install ember-cli-scrolling-content"],[8],[0,"\\n    "],[8],[0,"\\n    "],[6,"li"],[7],[0,"\\n      don\'t miss the "],[6,"a"],[9,"href","#advanced"],[7],[0,"advanced section"],[8],[0," below.\\n    "],[8],[0,"\\n    "],[6,"li"],[7],[0,"\\n      fork the project "],[6,"a"],[9,"href","https://github.com/lazybensch/ember-cli-scrolling-content"],[7],[0,"on github"],[8],[0,"\\n    "],[8],[0,"\\n  "],[8],[0,"\\n\\n  "],[6,"h3"],[7],[0," Basics "],[8],[0,"\\n\\n  "],[6,"article"],[7],[0,"\\n    "],[6,"header"],[7],[0," Simple Usage "],[8],[0,"\\n    "],[6,"aside"],[7],[0,"\\n      "],[6,"p"],[7],[0,"\\n        The scrolling content will always fit to its parent element. So if\\n        we provide a parent div with a width of 100px, our content will\\n        scroll - on hover - in this defined space.\\n      "],[8],[0,"\\n    "],[1,[25,"code-snippet",null,[["name"],["simple-usage.hbs"]]],false],[0,"\\n    "],[8],[0,"\\n\\n    "],[6,"section"],[7],[0,"\\n"],[6,"div"],[9,"class","parent"],[7],[0,"\\n"],[4,"scrolling-content",null,null,{"statements":[[0,"    A B C D E F G H I J K L M\\n    N O P Q R S T U V W X Y Z\\n"]],"parameters":[]},null],[8],[0,"\\n"],[0,"    "],[8],[0,"\\n  "],[8],[0,"\\n\\n  "],[6,"article"],[7],[0,"\\n    "],[6,"header"],[7],[0," Complex Dom "],[8],[0,"\\n    "],[6,"aside"],[7],[0,"\\n      "],[6,"p"],[7],[0,"\\n        Scrolling-content can not only handle raw text, but any html you provide.\\n      "],[8],[0,"\\n    "],[1,[25,"code-snippet",null,[["name"],["complex-dom.hbs"]]],false],[0,"\\n    "],[8],[0,"\\n\\n    "],[6,"section"],[7],[0,"\\n"],[6,"div"],[9,"class","parent"],[7],[0,"\\n"],[4,"scrolling-content",null,null,{"statements":[[0,"    "],[6,"nav"],[7],[0,"\\n      "],[6,"div"],[7],[0," one "],[8],[0,"\\n      "],[6,"div"],[7],[0," two "],[8],[0,"\\n      "],[6,"div"],[7],[0," three "],[8],[0,"\\n      "],[6,"div"],[9,"class","footer"],[7],[0," four "],[8],[0,"\\n    "],[8],[0,"\\n"]],"parameters":[]},null],[8],[0,"\\n"],[0,"    "],[8],[0,"\\n  "],[8],[0,"\\n\\n  "],[6,"article"],[7],[0,"\\n    "],[6,"header"],[7],[0," Adjustable scroll speed "],[8],[0,"\\n    "],[6,"aside"],[7],[0,"\\n      "],[6,"p"],[7],[0,"\\n        Scrolling-content will (by default) scroll through its content with reasonable\\n        pixel-per-second speed. You can slow down by providing a speed value between 0 and 1 and\\n        increase scrolling speed by providing a value above 1.\\n      "],[8],[0,"\\n    "],[1,[25,"code-snippet",null,[["name"],["adjustable-scroll.hbs"]]],false],[0,"\\n    "],[8],[0,"\\n\\n    "],[6,"section"],[7],[0,"\\n"],[6,"div"],[9,"class","parent"],[7],[0,"\\n"],[4,"scrolling-content",null,[["speed"],[2]],{"statements":[[0,"    1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16\\n    17 18 19 20 21 22 23 24 25 26 27 28 29\\n"]],"parameters":[]},null],[0,"\\n"],[4,"scrolling-content",null,[["speed"],[2]],{"statements":[[0,"    1 2 3 4 5 6 7 8 9 10 11 12 13 14 15\\n"]],"parameters":[]},null],[8],[0,"\\n"],[0,"    "],[8],[0,"\\n  "],[8],[0,"\\n\\n  "],[6,"article"],[7],[0,"\\n    "],[6,"header"],[7],[0," Absolute scroll duration "],[8],[0,"\\n    "],[6,"aside"],[7],[0,"\\n      "],[6,"p"],[7],[0,"\\n        Sometimes however it would be nice to scroll through the content in a predefined\\n        duration. Maybe you want the scrolling animation to hit the end always after\\n        2 seconds no matter how long the content is. Note how the shorter text now scrolls\\n        slower to take the same absolute scrolling time as the longer one.\\n      "],[8],[0,"\\n    "],[1,[25,"code-snippet",null,[["name"],["absolute-scroll.hbs"]]],false],[0,"\\n    "],[8],[0,"\\n\\n    "],[6,"section"],[7],[0,"\\n"],[6,"div"],[9,"class","parent"],[7],[0,"\\n"],[4,"scrolling-content",null,[["duration"],[2000]],{"statements":[[0,"    1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16\\n    17 18 19 20 21 22 23 24 25 26 27 28 29\\n"]],"parameters":[]},null],[0,"\\n"],[4,"scrolling-content",null,[["duration"],[2000]],{"statements":[[0,"    1 2 3 4 5 6 7 8 9 10 11 12 13 14 15\\n"]],"parameters":[]},null],[8],[0,"\\n"],[0,"    "],[8],[0,"\\n  "],[8],[0,"\\n\\n  "],[6,"article"],[7],[0,"\\n    "],[6,"header"],[7],[0," Customizable tagName and class "],[8],[0,"\\n    "],[6,"aside"],[7],[0,"\\n      "],[6,"p"],[7],[0,"\\n        You can freely customize the components tag name and class. In this example\\n        we\'ve also set the duration to 0, making the component scroll without animation.\\n        However the component element will always be styled as display: block;\\n        by the addon.\\n      "],[8],[0,"\\n    "],[1,[25,"code-snippet",null,[["name"],["custom-tag.hbs"]]],false],[0,"\\n    "],[8],[0,"\\n\\n    "],[6,"section"],[7],[0,"\\n"],[6,"div"],[9,"class","parent"],[7],[0,"\\n"],[4,"scrolling-content",null,[["duration","tagName","classNames"],[0,"li","list-item"]],{"statements":[[0,"    1 2 3 4 5 6 7 8 9 10 11 12 13 14 15\\n"]],"parameters":[]},null],[8],[0,"\\n"],[0,"    "],[8],[0,"\\n  "],[8],[0,"\\n\\n  "],[6,"article"],[7],[0,"\\n    "],[6,"header"],[7],[0," Resizes when content changes "],[8],[0,"\\n    "],[6,"aside"],[7],[0,"\\n      "],[6,"p"],[7],[0,"\\n        In some cases your content can change over time. You can make the scrolling-content\\n        component aware of the property in charge of that change and it will update to\\n        adjust scrolling motion and speed.\\n      "],[8],[0,"\\n    "],[1,[25,"code-snippet",null,[["name"],["resize.hbs"]]],false],[0,"\\n    "],[8],[0,"\\n\\n    "],[6,"section"],[7],[0,"\\n"],[1,[25,"input",null,[["value"],[[20,["value"]]]]],false],[0,"\\n"],[6,"div"],[9,"class","parent"],[7],[0,"\\n"],[4,"scrolling-content",null,[["dependsOn"],[[20,["value"]]]],{"statements":[[0,"    "],[1,[18,"value"],false],[0,"\\n"]],"parameters":[]},null],[8],[0,"\\n"],[0,"    "],[8],[0,"\\n  "],[8],[0,"\\n\\n  "],[6,"h3"],[9,"id","advanced"],[7],[0," Advanced "],[8],[0,"\\n\\n  "],[6,"article"],[7],[0,"\\n    "],[6,"header"],[7],[0," Callbacks "],[8],[0,"\\n    "],[6,"aside"],[7],[0,"\\n      "],[6,"p"],[7],[0,"\\n        ember-cli-scrolling-content exposes two events that indicate when\\n        the content scrolled all the way to the right, or back to the left.\\n      "],[8],[0,"\\n    "],[1,[25,"code-snippet",null,[["name"],["callbacks.hbs"]]],false],[0,"\\n    "],[1,[25,"code-snippet",null,[["name"],["foo-bar.js"]]],false],[0,"\\n    "],[8],[0,"\\n\\n    "],[6,"section"],[7],[0,"\\n"],[6,"div"],[9,"class","parent"],[7],[0,"\\n"],[4,"scrolling-content",null,[["onScrollForwardEnd","didScrollBackward"],[[25,"action",[[19,0,[]],[20,["foo"]]],null],[25,"action",[[19,0,[]],[20,["bar"]]],null]]],{"statements":[[0,"    A B C D E F G H I J K L M\\n    N O P Q R S T U V W X Y Z\\n"]],"parameters":[]},null],[8],[0,"\\n"],[0,"    "],[8],[0,"\\n  "],[8],[0,"\\n\\n  "],[6,"article"],[7],[0,"\\n    "],[6,"header"],[7],[0," Control scrolling "],[8],[0,"\\n    "],[6,"aside"],[7],[0,"\\n      "],[6,"p"],[7],[0,"\\n        You can programmatically set the scroll direction of your content by\\n        setting the scrollForward property to either true or false. If you\\n        combine this functionality with the onScrollForwardEnd/onScrollBackwardEnd events\\n        described above you can produce quite complex behaviour. For example\\n        could you implement a scrolling-content that automatically scrolls\\n        back after is has reached the end.\\n      "],[8],[0,"\\n    "],[1,[25,"code-snippet",null,[["name"],["scrolling-control.hbs"]]],false],[0,"\\n    "],[1,[25,"code-snippet",null,[["name"],["toggle-scrolling.js"]]],false],[0,"\\n    "],[8],[0,"\\n\\n    "],[6,"section"],[9,"class","center"],[7],[0,"\\n"],[6,"div"],[9,"class","parent"],[7],[0,"\\n"],[4,"scrolling-content",null,[["scrollForward"],[[20,["scrollForward"]]]],{"statements":[[0,"    A B C D E F G H I J K L M\\n    N O P Q R S T U V W X Y Z\\n"]],"parameters":[]},null],[8],[0,"\\n"],[6,"button"],[10,"onclick",[25,"action",[[19,0,[]],[20,["toggleScrolling"]]],null],null],[7],[0,"\\n  change scrolling direction\\n"],[8],[0,"\\n"],[0,"    "],[8],[0,"\\n  "],[8],[0,"\\n\\n  "],[6,"article"],[7],[0,"\\n    "],[6,"header"],[7],[0," disable hover "],[8],[0,"\\n    "],[6,"aside"],[7],[0,"\\n      "],[6,"p"],[7],[0,"\\n          This is a more advanced example that is using a few concepts introduced above.\\n          by setting the components "],[6,"b"],[7],[0,"hover"],[8],[0," property to false it will not react to the users\\n          mouse anymore. Instead we control the scrolling with the "],[6,"b"],[7],[0,"scrollForward"],[8],[0," property and\\n          use the "],[6,"b"],[7],[0,"onScrollForwardEnd"],[8],[0," hook to let the component automatically scroll back\\n          once it scrolled all the way to the right.\\n      "],[8],[0,"\\n    "],[1,[25,"code-snippet",null,[["name"],["advanced-template.hbs"]]],false],[0,"\\n    "],[1,[25,"code-snippet",null,[["name"],["advanced-actions.js"]]],false],[0,"\\n    "],[8],[0,"\\n\\n    "],[6,"section"],[9,"class","center"],[7],[0,"\\n"],[6,"div"],[9,"class","parent"],[7],[0,"\\n"],[4,"scrolling-content",null,[["scrollForward","onScrollForwardEnd","hover"],[[20,["started"]],[25,"action",[[19,0,[]],[20,["goBack"]]],null],false]],{"statements":[[0,"    "],[6,"nav"],[7],[0,"\\n      "],[6,"div"],[7],[0," one "],[8],[0,"\\n      "],[6,"div"],[7],[0," two "],[8],[0,"\\n      "],[6,"div"],[7],[0," three "],[8],[0,"\\n      "],[6,"div"],[9,"class","footer"],[7],[0," four "],[8],[0,"\\n    "],[8],[0,"\\n"]],"parameters":[]},null],[8],[0,"\\n"],[6,"button"],[10,"onclick",[25,"action",[[19,0,[]],[20,["startScrolling"]]],null],null],[7],[0,"\\n  start scrolling\\n"],[8],[0,"\\n"],[0,"    "],[8],[0,"\\n  "],[8],[0,"\\n"],[8],[0,"\\n"]],"hasEval":false}',meta:{moduleName:"dummy/templates/index.hbs"}})}),define("dummy/config/environment",[],function(){try{var e="dummy/config/environment",n=document.querySelector('meta[name="'+e+'"]').getAttribute("content"),t={default:JSON.parse(unescape(n))}
return Object.defineProperty(t,"__esModule",{value:!0}),t}catch(n){throw new Error('Could not read config from meta tag with name "'+e+'".')}}),runningTests||require("dummy/app").default.create({})
