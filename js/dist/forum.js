module.exports=function(t){var o={};function e(n){if(o[n])return o[n].exports;var r=o[n]={i:n,l:!1,exports:{}};return t[n].call(r.exports,r,r.exports,e),r.l=!0,r.exports}return e.m=t,e.c=o,e.d=function(t,o,n){e.o(t,o)||Object.defineProperty(t,o,{enumerable:!0,get:n})},e.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},e.t=function(t,o){if(1&o&&(t=e(t)),8&o)return t;if(4&o&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(e.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&o&&"string"!=typeof t)for(var r in t)e.d(n,r,function(o){return t[o]}.bind(null,r));return n},e.n=function(t){var o=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(o,"a",o),o},e.o=function(t,o){return Object.prototype.hasOwnProperty.call(t,o)},e.p="",e(e.s=6)}([function(t,o){t.exports=flarum.core.compat.app},function(t,o){t.exports=flarum.core.compat["components/Page"]},function(t,o){t.exports=flarum.core.compat["components/LogInModal"]},function(t,o){t.exports=flarum.core.compat["components/SignUpModal"]},function(t,o){t.exports=flarum.core.compat["components/DiscussionComposer"]},function(t,o){t.exports=flarum.core.compat.extend},function(t,o,e){"use strict";e.r(o);e(5);var n=e(0),r=e.n(n);function i(t,o){t.prototype=Object.create(o.prototype),t.prototype.constructor=t,t.__proto__=o}var u=e(1),a=e.n(u),c=function(t){function o(){return t.apply(this,arguments)||this}i(o,t);var e=o.prototype;return e.oninit=function(o){var e=this;t.prototype.oninit.call(this,o),m.route.set("/"),setTimeout((function(){return r.a.modal.show(e.createModal())}),100)},e.createModal=function(){return null},e.view=function(){return m("div")},o}(a.a),p=e(2),s=e.n(p),f=function(t){function o(){return t.apply(this,arguments)||this}return i(o,t),o.prototype.createModal=function(){return s.a},o}(c),l=e(3),d=e.n(l),y=function(t){function o(){return t.apply(this,arguments)||this}return i(o,t),o.prototype.createModal=function(){return d.a},o}(c),g=e(4),v=e.n(g),h=function(t){function o(){return t.apply(this,arguments)||this}i(o,t);var e=o.prototype;return e.oninit=function(o){if(t.prototype.oninit.call(this,o),r.a.session.user){var e=m.route.param();m.route.set("/"),setTimeout((function(){var t={user:r.a.session.user};if(e.content&&(t.originalContent=e.content),r.a.composer.load(v.a,t),r.a.composer.show(),e.title&&r.a.composer.fields.title(e.title),console.debug(e),e.primary_tag){var o=r.a.store.getBy("tags","slug",e.primary_tag);if(o){var n=o.parent();r.a.composer.fields.tags=n?[n,o]:[o]}}}),0)}else setTimeout((function(){return r.a.modal.show(s.a)}),100)},e.view=function(){return m("div")},o}(a.a);r.a.initializers.add("flagrow-direct-links",(function(){r.a.routes.flagrowDirectLinksLogin={path:"/login",component:f},r.a.routes.flagrowDirectLinksSignup={path:"/signup",component:y},r.a.routes.flagrowDirectLinksComposer={path:"/composer",component:h}}))}]);
//# sourceMappingURL=forum.js.map