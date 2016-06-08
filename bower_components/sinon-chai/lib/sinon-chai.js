!function(e){"use strict";"function"==typeof require&&"object"==typeof exports&&"object"==typeof module?module.exports=e:"function"==typeof define&&define.amd?define(function(){return e}):chai.use(e)}(function(e,t){"use strict";function n(e){return"function"==typeof e&&"function"==typeof e.getCall&&"function"==typeof e.calledWithExactly}function a(e){return 1===e?"once":2===e?"twice":3===e?"thrice":(e||0)+" times"}function i(e){return e&&n(e.proxy)}function c(e){if(!n(e._obj)&&!i(e._obj))throw new TypeError(t.inspect(e._obj)+" is not a spy or a call to a spy!")}function o(e,t,a,i,c){function o(t){return e.printf.apply(e,t)}var l=i?"always have ":"have ";return a=a||"",n(e.proxy)&&(e=e.proxy),{affirmative:function(){return o(["expected %n to "+l+t+a].concat(c))},negative:function(){return o(["expected %n to not "+l+t].concat(c))}}}function l(n,a,i){t.addProperty(e.Assertion.prototype,n,function(){c(this);var e=o(this._obj,a,i,!1);this.assert(this._obj[n],e.affirmative,e.negative)})}function r(n,i,l){t.addMethod(e.Assertion.prototype,n,function(e){c(this);var t=o(this._obj,i,l,!1,[a(e)]);this.assert(this._obj[n]===e,t.affirmative,t.negative)})}function s(e,n,a){return function(){c(this);var i="always"+e[0].toUpperCase()+e.substring(1),l=t.flag(this,"always")&&"function"==typeof this._obj[i],r=l?i:e,s=o(this._obj,n,a,l,h.call(arguments));this.assert(this._obj[r].apply(this._obj,arguments),s.affirmative,s.negative)}}function u(n,a,i){var c=s(n,a,i);t.addProperty(e.Assertion.prototype,n,c)}function f(n,a,i,c){var o=s(a,i,c);t.addMethod(e.Assertion.prototype,n,o)}function d(e,t,n){f(e,e,t,n)}var h=Array.prototype.slice;t.addProperty(e.Assertion.prototype,"always",function(){t.flag(this,"always",!0)}),l("called","been called"," at least once, but it was never called"),r("callCount","been called exactly %1",", but it was called %c%C"),l("calledOnce","been called exactly once",", but it was called %c%C"),l("calledTwice","been called exactly twice",", but it was called %c%C"),l("calledThrice","been called exactly thrice",", but it was called %c%C"),u("calledWithNew","been called with new"),d("calledBefore","been called before %1"),d("calledAfter","been called after %1"),d("calledOn","been called with %1 as this",", but it was called with %t instead"),d("calledWith","been called with arguments %*","%C"),d("calledWithExactly","been called with exact arguments %*","%C"),d("calledWithMatch","been called with arguments matching %*","%C"),d("returned","returned %1"),f("thrown","threw","thrown %1")});