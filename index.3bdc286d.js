var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n={},r=e.parcelRequired7c6;null==r&&((r=function(e){if(e in t)return t[e].exports;if(e in n){var r=n[e];delete n[e];var i={id:e,exports:{}};return t[e]=i,r.call(i.exports,i,i.exports),i.exports}var o=new Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(e,t){n[e]=t},e.parcelRequired7c6=r),r("OBL1B");class i{getRefs(e){const t={};return t.backdrop=document.querySelector(e),t.spinner=t.backdrop.querySelector(".spinner-grow"),t}enable(){this.refs.backdrop.classList.add("is-hidden")}disable(){this.refs.backdrop.classList.remove("is-hidden")}constructor({selector:e}){this.refs=this.getRefs(e)}}var o=r("bhaiH"),s=r("a3vHV"),a=r("3iCpR"),c=r("iQIUW"),u=r("hPewW"),l=(s=r("a3vHV"),r("9SnYn")),d=r("7g6iB"),f=r("krGWQ");const h=new(0,a.QueryHandler),p=new i({selector:'[data-action="load-spinner"]'});f.refs.searchForm.addEventListener("submit",(async function(e){e.preventDefault();const{elements:{searchQuery:t}}=e.target,n=t.value.trim().toLowerCase();if(!n)return void c.Notify.failure("Enter the name of the movie!");p.disable(),h.query=n;try{const{results:e,total_results:t,page:r,total_pages:i}=await h.fetchQueryResultsForMovieSearch();if(!e.length)return h.query=l.default.load(d.LAST_REQUEST),c.Notify.failure("Search result not successful. Enter the correct movie name.");if(l.default.save(d.LAST_REQUEST,n),s.pagination.removeMarkup(),i>1&&(s.pagination.totalPages=i,s.pagination.page=r,s.pagination.fetch=e=>h.fetchQueryResultsForMovieSearch(e),s.pagination.renderMarkup()),!e.length)return c.Notify.failure("Search result not successful. Enter the correct movie name."),void p.enable();c.Notify.success(`Hooray! We found ${t} movie!`),l.default.remove(d.FILMS),l.default.save(d.FILMS,e);const o=e.map(u.createCardMarkup).join("");f.refs.filmListRef.innerHTML=o}catch(e){console.log(e)}finally{p.enable()}})),c.Notify.init({timeout:1500,position:"center-top",backOverlay:!1,borderRadius:"25px"});c=r("iQIUW"),f=r("krGWQ"),u=r("hPewW"),l=r("9SnYn"),d=r("7g6iB"),a=r("3iCpR"),s=r("a3vHV");const v=new(0,a.QueryHandler),m=window.SpeechRecognition||window.webkitSpeechRecognition;if(m){console.log("Your Browser supports speech Recognition");const e=new m;e.continuous=!0,e.lang="en-US";const t=document.querySelector(".search-btn__mic"),n=t.firstElementChild;t.addEventListener("click",(function(){console.log("yes"),n.classList.contains("mic-stop")?e.start():e.stop()})),e.addEventListener("start",(function(){n.classList.remove("mic-stop"),n.classList.add("mic-rec"),f.refs.info.classList.add("search-form__info--hover"),f.refs.searchFormInput.focus(),console.log("Voice activated, SPEAK")})),e.addEventListener("end",(function(){n.classList.remove("mic-rec"),n.classList.add("mic-stop"),f.refs.info.classList.remove("search-form__info--hover"),f.refs.searchFormInput.focus(),console.log("Speech recognition service disconnected")})),e.addEventListener("result",(function(t){const{searchFormInput:n}=f.refs,r=t.resultIndex,i=t.results[r][0].transcript;n.value?"search"===i.toLowerCase().trim()?(!async function(){const e=f.refs.searchFormInput.value.trim().toLowerCase();v.query=e;try{const{results:t,total_results:n,page:r,total_pages:i}=await v.fetchQueryResultsForMovieSearch();if(!t.length)return v.query=l.default.load(d.LAST_REQUEST),c.Notify.failure("Search result not successful. Enter the correct movie name.");if(l.default.save(d.LAST_REQUEST,e),s.pagination.removeMarkup(),i>1&&(s.pagination.totalPages=i,s.pagination.page=r,s.pagination.fetch=e=>v.fetchQueryResultsForMovieSearch(e),s.pagination.renderMarkup()),!t.length)return void c.Notify.failure("Search result not successful. Enter the correct movie name.");c.Notify.success(`Hooray! We found ${n} movie!`),l.default.remove(d.FILMS),l.default.save(d.FILMS,t);const o=t.map(u.createCardMarkup).join("");f.refs.filmListRef.innerHTML=o}catch(e){console.log(e)}}(),e.stop()):"reset"===i.toLowerCase().trim()?n.value="":n.value=i:n.value=i})),f.refs.info.textContent='Voice Commands: "reset", "search"'}else console.log("Your Browser does not support speech Recognition"),f.refs.info.textContent="Your Browser does not support Speech Recognition";
/*!
 * Glide.js v3.6.0
 * (c) 2013-2022 Jędrzej Chałubek (https://github.com/jedrzejchalubek/)
 * Released under the MIT License.
 */
function g(e){return(g="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function y(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function b(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function w(e,t,n){return t&&b(e.prototype,t),n&&b(e,n),e}function k(e){return(k=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function S(e,t){return(S=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function _(e,t){if(t&&("object"==typeof t||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function L(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=k(e);if(t){var i=k(this).constructor;n=Reflect.construct(r,arguments,i)}else n=r.apply(this,arguments);return _(this,n)}}function T(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=k(e)););return e}function H(){return H="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=T(e,t);if(r){var i=Object.getOwnPropertyDescriptor(r,t);return i.get?i.get.call(arguments.length<3?e:n):i.value}},H.apply(this,arguments)}r("a3DhO"),r("fQE3M"),r("kDD30"),r("kDD30"),r("7bYU0");var R={type:"slider",startAt:0,perView:1,focusAt:0,gap:10,autoplay:!1,hoverpause:!0,keyboard:!0,bound:!1,swipeThreshold:80,dragThreshold:120,perSwipe:"",touchRatio:.5,touchAngle:45,animationDuration:400,rewind:!0,rewindDuration:800,animationTimingFunc:"cubic-bezier(.165, .840, .440, 1)",waitForTransition:!0,throttle:10,direction:"ltr",peek:0,cloningRatio:1,breakpoints:{},classes:{swipeable:"glide--swipeable",dragging:"glide--dragging",direction:{ltr:"glide--ltr",rtl:"glide--rtl"},type:{slider:"glide--slider",carousel:"glide--carousel"},slide:{clone:"glide__slide--clone",active:"glide__slide--active"},arrow:{disabled:"glide__arrow--disabled"},nav:{active:"glide__bullet--active"}}};function M(e){console.error("[Glide warn]: ".concat(e))}function x(e){return parseInt(e)}function E(e){return"string"==typeof e}function O(e){var t=g(e);return"function"===t||"object"===t&&!!e}function q(e){return"function"==typeof e}function C(e){return void 0===e}function A(e){return e.constructor===Array}function P(e,t,n){var r={};for(var i in t)q(t[i])?r[i]=t[i](e,r,n):M("Extension must be a function");for(var o in r)q(r[o].mount)&&r[o].mount();return r}function j(e,t,n){Object.defineProperty(e,t,n)}function I(e,t){var n=Object.assign({},e,t);return t.hasOwnProperty("classes")&&(n.classes=Object.assign({},e.classes,t.classes),t.classes.hasOwnProperty("direction")&&(n.classes.direction=Object.assign({},e.classes.direction,t.classes.direction)),t.classes.hasOwnProperty("type")&&(n.classes.type=Object.assign({},e.classes.type,t.classes.type)),t.classes.hasOwnProperty("slide")&&(n.classes.slide=Object.assign({},e.classes.slide,t.classes.slide)),t.classes.hasOwnProperty("arrow")&&(n.classes.arrow=Object.assign({},e.classes.arrow,t.classes.arrow)),t.classes.hasOwnProperty("nav")&&(n.classes.nav=Object.assign({},e.classes.nav,t.classes.nav))),t.hasOwnProperty("breakpoints")&&(n.breakpoints=Object.assign({},e.breakpoints,t.breakpoints)),n}var D=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};y(this,e),this.events=t,this.hop=t.hasOwnProperty}return w(e,[{key:"on",value:function(e,t){if(!A(e)){this.hop.call(this.events,e)||(this.events[e]=[]);var n=this.events[e].push(t)-1;return{remove:function(){delete this.events[e][n]}}}for(var r=0;r<e.length;r++)this.on(e[r],t)}},{key:"emit",value:function(e,t){if(A(e))for(var n=0;n<e.length;n++)this.emit(e[n],t);else this.hop.call(this.events,e)&&this.events[e].forEach((function(e){e(t||{})}))}}]),e}(),F=function(){function e(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};y(this,e),this._c={},this._t=[],this._e=new D,this.disabled=!1,this.selector=t,this.settings=I(R,n),this.index=this.settings.startAt}return w(e,[{key:"mount",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return this._e.emit("mount.before"),O(e)?this._c=P(this,e,this._e):M("You need to provide a object on `mount()`"),this._e.emit("mount.after"),this}},{key:"mutate",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return A(e)?this._t=e:M("You need to provide a array on `mutate()`"),this}},{key:"update",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return this.settings=I(this.settings,e),e.hasOwnProperty("startAt")&&(this.index=e.startAt),this._e.emit("update"),this}},{key:"go",value:function(e){return this._c.Run.make(e),this}},{key:"move",value:function(e){return this._c.Transition.disable(),this._c.Move.make(e),this}},{key:"destroy",value:function(){return this._e.emit("destroy"),this}},{key:"play",value:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];return e&&(this.settings.autoplay=e),this._e.emit("play"),this}},{key:"pause",value:function(){return this._e.emit("pause"),this}},{key:"disable",value:function(){return this.disabled=!0,this}},{key:"enable",value:function(){return this.disabled=!1,this}},{key:"on",value:function(e,t){return this._e.on(e,t),this}},{key:"isType",value:function(e){return this.settings.type===e}},{key:"settings",get:function(){return this._o},set:function(e){O(e)?this._o=e:M("Options must be an `object` instance.")}},{key:"index",get:function(){return this._i},set:function(e){this._i=x(e)}},{key:"type",get:function(){return this.settings.type}},{key:"disabled",get:function(){return this._d},set:function(e){this._d=!!e}}]),e}();function W(){return(new Date).getTime()}function z(e,t,n){var r,i,o,s,a=0;n||(n={});var c=function(){a=!1===n.leading?0:W(),r=null,s=e.apply(i,o),r||(i=o=null)},u=function(){var u=W();a||!1!==n.leading||(a=u);var l=t-(u-a);return i=this,o=arguments,l<=0||l>t?(r&&(clearTimeout(r),r=null),a=u,s=e.apply(i,o),r||(i=o=null)):r||!1===n.trailing||(r=setTimeout(c,l)),s};return u.cancel=function(){clearTimeout(r),a=0,r=i=o=null},u}var B={ltr:["marginLeft","marginRight"],rtl:["marginRight","marginLeft"]};function N(e){if(e&&e.parentNode){for(var t=e.parentNode.firstChild,n=[];t;t=t.nextSibling)1===t.nodeType&&t!==e&&n.push(t);return n}return[]}function Q(e){return!!(e&&e instanceof window.HTMLElement)}function $(e){return Array.prototype.slice.call(e)}var V=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};y(this,e),this.listeners=t}return w(e,[{key:"on",value:function(e,t,n){var r=arguments.length>3&&void 0!==arguments[3]&&arguments[3];E(e)&&(e=[e]);for(var i=0;i<e.length;i++)this.listeners[e[i]]=n,t.addEventListener(e[i],this.listeners[e[i]],r)}},{key:"off",value:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];E(e)&&(e=[e]);for(var r=0;r<e.length;r++)t.removeEventListener(e[r],this.listeners[e[r]],n)}},{key:"destroy",value:function(){delete this.listeners}}]),e}();var G=["ltr","rtl"],Y={">":"<","<":">","=":"="};function U(e,t){return{modify:function(e){return t.Direction.is("rtl")?-e:e}}}function K(e,t){return{modify:function(e){var n=Math.floor(e/t.Sizes.slideWidth);return e+t.Gaps.value*n}}}function X(e,t){return{modify:function(e){return e+t.Clones.grow/2}}}function J(e,t){return{modify:function(n){if(e.settings.focusAt>=0){var r=t.Peek.value;return O(r)?n-r.before:n-r}return n}}}function Z(e,t){return{modify:function(n){var r=t.Gaps.value,i=t.Sizes.width,o=e.settings.focusAt,s=t.Sizes.slideWidth;return"center"===o?n-(i/2-s/2):n-s*o-r*o}}}var ee=!1;try{var te=Object.defineProperty({},"passive",{get:function(){ee=!0}});window.addEventListener("testPassive",null,te),window.removeEventListener("testPassive",null,te)}catch(e){}var ne=ee,re=["touchstart","mousedown"],ie=["touchmove","mousemove"],oe=["touchend","touchcancel","mouseup","mouseleave"],se=["mousedown","mousemove","mouseup","mouseleave"];var ae="".concat('[data-glide-el^="controls"]',' [data-glide-dir*="<"]'),ce="".concat('[data-glide-el^="controls"]',' [data-glide-dir*=">"]');function ue(e){return O(e)?(t=e,Object.keys(t).sort().reduce((function(e,n){return e[n]=t[n],e[n],e}),{})):(M("Breakpoints option must be an object"),{});var t}var le={Html:function(e,t,n){var r={mount:function(){this.root=e.selector,this.track=this.root.querySelector('[data-glide-el="track"]'),this.collectSlides()},collectSlides:function(){this.slides=$(this.wrapper.children).filter((function(t){return!t.classList.contains(e.settings.classes.slide.clone)}))}};return j(r,"root",{get:function(){return r._r},set:function(e){E(e)&&(e=document.querySelector(e)),Q(e)?r._r=e:M("Root element must be a existing Html node")}}),j(r,"track",{get:function(){return r._t},set:function(e){Q(e)?r._t=e:M("Could not find track element. Please use ".concat('[data-glide-el="track"]'," attribute."))}}),j(r,"wrapper",{get:function(){return r.track.children[0]}}),n.on("update",(function(){r.collectSlides()})),r},Translate:function(e,t,n){var r={set:function(n){var r=function(e,t,n){var r=[K,X,J,Z].concat(e._t,[U]);return{mutate:function(i){for(var o=0;o<r.length;o++){var s=r[o];q(s)&&q(s().modify)?i=s(e,t,n).modify(i):M("Transformer should be a function that returns an object with `modify()` method")}return i}}}(e,t).mutate(n),i="translate3d(".concat(-1*r,"px, 0px, 0px)");t.Html.wrapper.style.mozTransform=i,t.Html.wrapper.style.webkitTransform=i,t.Html.wrapper.style.transform=i},remove:function(){t.Html.wrapper.style.transform=""},getStartIndex:function(){var n=t.Sizes.length,r=e.index,i=e.settings.perView;return t.Run.isOffset(">")||t.Run.isOffset("|>")?n+(r-i):(r+i)%n},getTravelDistance:function(){var n=t.Sizes.slideWidth*e.settings.perView;return t.Run.isOffset(">")||t.Run.isOffset("|>")?-1*n:n}};return n.on("move",(function(i){if(!e.isType("carousel")||!t.Run.isOffset())return r.set(i.movement);t.Transition.after((function(){n.emit("translate.jump"),r.set(t.Sizes.slideWidth*e.index)}));var o=t.Sizes.slideWidth*t.Translate.getStartIndex();return r.set(o-t.Translate.getTravelDistance())})),n.on("destroy",(function(){r.remove()})),r},Transition:function(e,t,n){var r=!1,i={compose:function(t){var n=e.settings;return r?"".concat(t," 0ms ").concat(n.animationTimingFunc):"".concat(t," ").concat(this.duration,"ms ").concat(n.animationTimingFunc)},set:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"transform";t.Html.wrapper.style.transition=this.compose(e)},remove:function(){t.Html.wrapper.style.transition=""},after:function(e){setTimeout((function(){e()}),this.duration)},enable:function(){r=!1,this.set()},disable:function(){r=!0,this.set()}};return j(i,"duration",{get:function(){var n=e.settings;return e.isType("slider")&&t.Run.offset?n.rewindDuration:n.animationDuration}}),n.on("move",(function(){i.set()})),n.on(["build.before","resize","translate.jump"],(function(){i.disable()})),n.on("run",(function(){i.enable()})),n.on("destroy",(function(){i.remove()})),i},Direction:function(e,t,n){var r={mount:function(){this.value=e.settings.direction},resolve:function(e){var t=e.slice(0,1);return this.is("rtl")?e.split(t).join(Y[t]):e},is:function(e){return this.value===e},addClass:function(){t.Html.root.classList.add(e.settings.classes.direction[this.value])},removeClass:function(){t.Html.root.classList.remove(e.settings.classes.direction[this.value])}};return j(r,"value",{get:function(){return r._v},set:function(e){G.indexOf(e)>-1?r._v=e:M("Direction value must be `ltr` or `rtl`")}}),n.on(["destroy","update"],(function(){r.removeClass()})),n.on("update",(function(){r.mount()})),n.on(["build.before","update"],(function(){r.addClass()})),r},Peek:function(e,t,n){var r={mount:function(){this.value=e.settings.peek}};return j(r,"value",{get:function(){return r._v},set:function(e){O(e)?(e.before=x(e.before),e.after=x(e.after)):e=x(e),r._v=e}}),j(r,"reductor",{get:function(){var t=r.value,n=e.settings.perView;return O(t)?t.before/n+t.after/n:2*t/n}}),n.on(["resize","update"],(function(){r.mount()})),r},Sizes:function(e,t,n){var r={setupSlides:function(){for(var e="".concat(this.slideWidth,"px"),n=t.Html.slides,r=0;r<n.length;r++)n[r].style.width=e},setupWrapper:function(){t.Html.wrapper.style.width="".concat(this.wrapperSize,"px")},remove:function(){for(var e=t.Html.slides,n=0;n<e.length;n++)e[n].style.width="";t.Html.wrapper.style.width=""}};return j(r,"length",{get:function(){return t.Html.slides.length}}),j(r,"width",{get:function(){return t.Html.track.offsetWidth}}),j(r,"wrapperSize",{get:function(){return r.slideWidth*r.length+t.Gaps.grow+t.Clones.grow}}),j(r,"slideWidth",{get:function(){return r.width/e.settings.perView-t.Peek.reductor-t.Gaps.reductor}}),n.on(["build.before","resize","update"],(function(){r.setupSlides(),r.setupWrapper()})),n.on("destroy",(function(){r.remove()})),r},Gaps:function(e,t,n){var r={apply:function(e){for(var n=0,r=e.length;n<r;n++){var i=e[n].style,o=t.Direction.value;i[B[o][0]]=0!==n?"".concat(this.value/2,"px"):"",n!==e.length-1?i[B[o][1]]="".concat(this.value/2,"px"):i[B[o][1]]=""}},remove:function(e){for(var t=0,n=e.length;t<n;t++){var r=e[t].style;r.marginLeft="",r.marginRight=""}}};return j(r,"value",{get:function(){return x(e.settings.gap)}}),j(r,"grow",{get:function(){return r.value*t.Sizes.length}}),j(r,"reductor",{get:function(){var t=e.settings.perView;return r.value*(t-1)/t}}),n.on(["build.after","update"],z((function(){r.apply(t.Html.wrapper.children)}),30)),n.on("destroy",(function(){r.remove(t.Html.wrapper.children)})),r},Move:function(e,t,n){var r={mount:function(){this._o=0},make:function(){var e=this,r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;this.offset=r,n.emit("move",{movement:this.value}),t.Transition.after((function(){n.emit("move.after",{movement:e.value})}))}};return j(r,"offset",{get:function(){return r._o},set:function(e){r._o=C(e)?0:x(e)}}),j(r,"translate",{get:function(){return t.Sizes.slideWidth*e.index}}),j(r,"value",{get:function(){var e=this.offset,n=this.translate;return t.Direction.is("rtl")?n+e:n-e}}),n.on(["build.before","run"],(function(){r.make()})),r},Clones:function(e,t,n){var r={mount:function(){this.items=[],e.isType("carousel")&&(this.items=this.collect())},collect:function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],r=t.Html.slides,i=e.settings,o=i.perView,s=i.classes,a=i.cloningRatio;if(0!==r.length)for(var c=+!!e.settings.peek,u=o+c+Math.round(o/2),l=r.slice(0,u).reverse(),d=r.slice(-1*u),f=0;f<Math.max(a,Math.floor(o/r.length));f++){for(var h=0;h<l.length;h++){var p=l[h].cloneNode(!0);p.classList.add(s.slide.clone),n.push(p)}for(var v=0;v<d.length;v++){var m=d[v].cloneNode(!0);m.classList.add(s.slide.clone),n.unshift(m)}}return n},append:function(){for(var e=this.items,n=t.Html,r=n.wrapper,i=n.slides,o=Math.floor(e.length/2),s=e.slice(0,o).reverse(),a=e.slice(-1*o).reverse(),c="".concat(t.Sizes.slideWidth,"px"),u=0;u<a.length;u++)r.appendChild(a[u]);for(var l=0;l<s.length;l++)r.insertBefore(s[l],i[0]);for(var d=0;d<e.length;d++)e[d].style.width=c},remove:function(){for(var e=this.items,n=0;n<e.length;n++)t.Html.wrapper.removeChild(e[n])}};return j(r,"grow",{get:function(){return(t.Sizes.slideWidth+t.Gaps.value)*r.items.length}}),n.on("update",(function(){r.remove(),r.mount(),r.append()})),n.on("build.before",(function(){e.isType("carousel")&&r.append()})),n.on("destroy",(function(){r.remove()})),r},Resize:function(e,t,n){var r=new V,i={mount:function(){this.bind()},bind:function(){r.on("resize",window,z((function(){n.emit("resize")}),e.settings.throttle))},unbind:function(){r.off("resize",window)}};return n.on("destroy",(function(){i.unbind(),r.destroy()})),i},Build:function(e,t,n){var r={mount:function(){n.emit("build.before"),this.typeClass(),this.activeClass(),n.emit("build.after")},typeClass:function(){t.Html.root.classList.add(e.settings.classes.type[e.settings.type])},activeClass:function(){var n=e.settings.classes,r=t.Html.slides[e.index];r&&(r.classList.add(n.slide.active),N(r).forEach((function(e){e.classList.remove(n.slide.active)})))},removeClasses:function(){var n=e.settings.classes,r=n.type,i=n.slide;t.Html.root.classList.remove(r[e.settings.type]),t.Html.slides.forEach((function(e){e.classList.remove(i.active)}))}};return n.on(["destroy","update"],(function(){r.removeClasses()})),n.on(["resize","update"],(function(){r.mount()})),n.on("move.after",(function(){r.activeClass()})),r},Run:function(e,t,n){var r={mount:function(){this._o=!1},make:function(r){var i=this;e.disabled||(!e.settings.waitForTransition||e.disable(),this.move=r,n.emit("run.before",this.move),this.calculate(),n.emit("run",this.move),t.Transition.after((function(){i.isStart()&&n.emit("run.start",i.move),i.isEnd()&&n.emit("run.end",i.move),i.isOffset()&&(i._o=!1,n.emit("run.offset",i.move)),n.emit("run.after",i.move),e.enable()})))},calculate:function(){var t=this.move,n=this.length,i=t.steps,o=t.direction,s=1;if("="===o)return e.settings.bound&&x(i)>n?void(e.index=n):void(e.index=i);if(">"!==o||">"!==i)if("<"!==o||"<"!==i){if("|"===o&&(s=e.settings.perView||1),">"===o||"|"===o&&">"===i){var a=function(t){var n=e.index;return e.isType("carousel")?n+t:n+(t-n%t)}(s);return a>n&&(this._o=!0),void(e.index=function(t,n){var i=r.length;if(t<=i)return t;if(e.isType("carousel"))return t-(i+1);if(e.settings.rewind)return r.isBound()&&!r.isEnd()?i:0;return r.isBound()?i:Math.floor(i/n)*n}(a,s))}if("<"===o||"|"===o&&"<"===i){var c=function(t){var n=e.index;return e.isType("carousel")?n-t:(Math.ceil(n/t)-1)*t}(s);return c<0&&(this._o=!0),void(e.index=function(t,n){var i=r.length;if(t>=0)return t;if(e.isType("carousel"))return t+(i+1);if(e.settings.rewind)return r.isBound()&&r.isStart()?i:Math.floor(i/n)*n;return 0}(c,s))}M("Invalid direction pattern [".concat(o).concat(i,"] has been used"))}else e.index=0;else e.index=n},isStart:function(){return e.index<=0},isEnd:function(){return e.index>=this.length},isOffset:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:void 0;return e?!!this._o&&("|>"===e?"|"===this.move.direction&&">"===this.move.steps:"|<"===e?"|"===this.move.direction&&"<"===this.move.steps:this.move.direction===e):this._o},isBound:function(){return e.isType("slider")&&"center"!==e.settings.focusAt&&e.settings.bound}};return j(r,"move",{get:function(){return this._m},set:function(e){var t=e.substr(1);this._m={direction:e.substr(0,1),steps:t?x(t)?x(t):t:0}}}),j(r,"length",{get:function(){var n=e.settings,r=t.Html.slides.length;return this.isBound()?r-1-(x(n.perView)-1)+x(n.focusAt):r-1}}),j(r,"offset",{get:function(){return this._o}}),r},Swipe:function(e,t,n){var r=new V,i=0,o=0,s=0,a=!1,c=!!ne&&{passive:!0},u={mount:function(){this.bindSwipeStart()},start:function(t){if(!a&&!e.disabled){this.disable();var r=this.touches(t);i=null,o=x(r.pageX),s=x(r.pageY),this.bindSwipeMove(),this.bindSwipeEnd(),n.emit("swipe.start")}},move:function(r){if(!e.disabled){var a=e.settings,c=a.touchAngle,u=a.touchRatio,l=a.classes,d=this.touches(r),f=x(d.pageX)-o,h=x(d.pageY)-s,p=Math.abs(f<<2),v=Math.abs(h<<2),m=Math.sqrt(p+v),g=Math.sqrt(v);if(!(180*(i=Math.asin(g/m))/Math.PI<c))return!1;r.stopPropagation(),t.Move.make(f*parseFloat(u)),t.Html.root.classList.add(l.dragging),n.emit("swipe.move")}},end:function(r){if(!e.disabled){var s=e.settings,a=s.perSwipe,c=s.touchAngle,u=s.classes,l=this.touches(r),d=this.threshold(r),f=l.pageX-o,h=180*i/Math.PI;this.enable(),f>d&&h<c?t.Run.make(t.Direction.resolve("".concat(a,"<"))):f<-d&&h<c?t.Run.make(t.Direction.resolve("".concat(a,">"))):t.Move.make(),t.Html.root.classList.remove(u.dragging),this.unbindSwipeMove(),this.unbindSwipeEnd(),n.emit("swipe.end")}},bindSwipeStart:function(){var n=this,i=e.settings,o=i.swipeThreshold,s=i.dragThreshold;o&&r.on(re[0],t.Html.wrapper,(function(e){n.start(e)}),c),s&&r.on(re[1],t.Html.wrapper,(function(e){n.start(e)}),c)},unbindSwipeStart:function(){r.off(re[0],t.Html.wrapper,c),r.off(re[1],t.Html.wrapper,c)},bindSwipeMove:function(){var n=this;r.on(ie,t.Html.wrapper,z((function(e){n.move(e)}),e.settings.throttle),c)},unbindSwipeMove:function(){r.off(ie,t.Html.wrapper,c)},bindSwipeEnd:function(){var e=this;r.on(oe,t.Html.wrapper,(function(t){e.end(t)}))},unbindSwipeEnd:function(){r.off(oe,t.Html.wrapper)},touches:function(e){return se.indexOf(e.type)>-1?e:e.touches[0]||e.changedTouches[0]},threshold:function(t){var n=e.settings;return se.indexOf(t.type)>-1?n.dragThreshold:n.swipeThreshold},enable:function(){return a=!1,t.Transition.enable(),this},disable:function(){return a=!0,t.Transition.disable(),this}};return n.on("build.after",(function(){t.Html.root.classList.add(e.settings.classes.swipeable)})),n.on("destroy",(function(){u.unbindSwipeStart(),u.unbindSwipeMove(),u.unbindSwipeEnd(),r.destroy()})),u},Images:function(e,t,n){var r=new V,i={mount:function(){this.bind()},bind:function(){r.on("dragstart",t.Html.wrapper,this.dragstart)},unbind:function(){r.off("dragstart",t.Html.wrapper)},dragstart:function(e){e.preventDefault()}};return n.on("destroy",(function(){i.unbind(),r.destroy()})),i},Anchors:function(e,t,n){var r=new V,i=!1,o=!1,s={mount:function(){this._a=t.Html.wrapper.querySelectorAll("a"),this.bind()},bind:function(){r.on("click",t.Html.wrapper,this.click)},unbind:function(){r.off("click",t.Html.wrapper)},click:function(e){o&&(e.stopPropagation(),e.preventDefault())},detach:function(){if(o=!0,!i){for(var e=0;e<this.items.length;e++)this.items[e].draggable=!1;i=!0}return this},attach:function(){if(o=!1,i){for(var e=0;e<this.items.length;e++)this.items[e].draggable=!0;i=!1}return this}};return j(s,"items",{get:function(){return s._a}}),n.on("swipe.move",(function(){s.detach()})),n.on("swipe.end",(function(){t.Transition.after((function(){s.attach()}))})),n.on("destroy",(function(){s.attach(),s.unbind(),r.destroy()})),s},Controls:function(e,t,n){var r=new V,i=!!ne&&{passive:!0},o={mount:function(){this._n=t.Html.root.querySelectorAll('[data-glide-el="controls[nav]"]'),this._c=t.Html.root.querySelectorAll('[data-glide-el^="controls"]'),this._arrowControls={previous:t.Html.root.querySelectorAll(ae),next:t.Html.root.querySelectorAll(ce)},this.addBindings()},setActive:function(){for(var e=0;e<this._n.length;e++)this.addClass(this._n[e].children)},removeActive:function(){for(var e=0;e<this._n.length;e++)this.removeClass(this._n[e].children)},addClass:function(t){var n=e.settings,r=t[e.index];r&&r&&(r.classList.add(n.classes.nav.active),N(r).forEach((function(e){e.classList.remove(n.classes.nav.active)})))},removeClass:function(t){var n=t[e.index];n&&n.classList.remove(e.settings.classes.nav.active)},setArrowState:function(){if(!e.settings.rewind){var n=o._arrowControls.next,r=o._arrowControls.previous;this.resetArrowState(n,r),0===e.index&&this.disableArrow(r),e.index===t.Run.length&&this.disableArrow(n)}},resetArrowState:function(){for(var t=e.settings,n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];r.forEach((function(e){$(e).forEach((function(e){e.classList.remove(t.classes.arrow.disabled)}))}))},disableArrow:function(){for(var t=e.settings,n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];r.forEach((function(e){$(e).forEach((function(e){e.classList.add(t.classes.arrow.disabled)}))}))},addBindings:function(){for(var e=0;e<this._c.length;e++)this.bind(this._c[e].children)},removeBindings:function(){for(var e=0;e<this._c.length;e++)this.unbind(this._c[e].children)},bind:function(e){for(var t=0;t<e.length;t++)r.on("click",e[t],this.click),r.on("touchstart",e[t],this.click,i)},unbind:function(e){for(var t=0;t<e.length;t++)r.off(["click","touchstart"],e[t])},click:function(e){ne||"touchstart"!==e.type||e.preventDefault();var n=e.currentTarget.getAttribute("data-glide-dir");t.Run.make(t.Direction.resolve(n))}};return j(o,"items",{get:function(){return o._c}}),n.on(["mount.after","move.after"],(function(){o.setActive()})),n.on(["mount.after","run"],(function(){o.setArrowState()})),n.on("destroy",(function(){o.removeBindings(),o.removeActive(),r.destroy()})),o},Keyboard:function(e,t,n){var r=new V,i={mount:function(){e.settings.keyboard&&this.bind()},bind:function(){r.on("keyup",document,this.press)},unbind:function(){r.off("keyup",document)},press:function(n){var r=e.settings.perSwipe;"ArrowRight"===n.code&&t.Run.make(t.Direction.resolve("".concat(r,">"))),"ArrowLeft"===n.code&&t.Run.make(t.Direction.resolve("".concat(r,"<")))}};return n.on(["destroy","update"],(function(){i.unbind()})),n.on("update",(function(){i.mount()})),n.on("destroy",(function(){r.destroy()})),i},Autoplay:function(e,t,n){var r=new V,i={mount:function(){this.enable(),this.start(),e.settings.hoverpause&&this.bind()},enable:function(){this._e=!0},disable:function(){this._e=!1},start:function(){var r=this;this._e&&(this.enable(),e.settings.autoplay&&C(this._i)&&(this._i=setInterval((function(){r.stop(),t.Run.make(">"),r.start(),n.emit("autoplay")}),this.time)))},stop:function(){this._i=clearInterval(this._i)},bind:function(){var e=this;r.on("mouseover",t.Html.root,(function(){e._e&&e.stop()})),r.on("mouseout",t.Html.root,(function(){e._e&&e.start()}))},unbind:function(){r.off(["mouseover","mouseout"],t.Html.root)}};return j(i,"time",{get:function(){var n=t.Html.slides[e.index].getAttribute("data-glide-autoplay");return x(n||e.settings.autoplay)}}),n.on(["destroy","update"],(function(){i.unbind()})),n.on(["run.before","swipe.start","update"],(function(){i.stop()})),n.on(["pause","destroy"],(function(){i.disable(),i.stop()})),n.on(["run.after","swipe.end"],(function(){i.start()})),n.on(["play"],(function(){i.enable(),i.start()})),n.on("update",(function(){i.mount()})),n.on("destroy",(function(){r.destroy()})),i},Breakpoints:function(e,t,n){var r=new V,i=e.settings,o=ue(i.breakpoints),s=Object.assign({},i),a={match:function(e){if(void 0!==window.matchMedia)for(var t in e)if(e.hasOwnProperty(t)&&window.matchMedia("(max-width: ".concat(t,"px)")).matches)return e[t];return s}};return Object.assign(i,a.match(o)),r.on("resize",window,z((function(){e.settings=I(i,a.match(o))}),e.settings.throttle)),n.on("update",(function(){o=ue(o),s=Object.assign({},i)})),n.on("destroy",(function(){r.off("resize",window)})),a}},de=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&S(e,t)}(n,F);var t=L(n);function n(){return y(this,n),t.apply(this,arguments)}return w(n,[{key:"mount",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return H(k(n.prototype),"mount",this).call(this,Object.assign({},le,e))}}]),n}(),fe=(a=r("3iCpR"),f=r("krGWQ"),r("kDD30"));const he=new de(".glide",{type:"slider",startAt:0,perView:8,autoplay:2e3,hoverpause:!0,bound:!0}),pe=new(0,a.QueryHandler);function ve(){try{"dark"===localStorage.getItem("theme")?(document.querySelector("body").classList.add("dark"),document.querySelector(".hero").classList.add("dark"),document.querySelector(".themetoggle").classList.add("dark"),document.querySelector(".material-icons").classList.add("dark"),document.querySelector("header").classList.add("dark"),document.querySelector(".modal-dark").classList.add("dark"),document.querySelector(".day-nigth-btn-box").classList.add("dark"),document.querySelector(".container-footer").classList.add("dark"),document.querySelector(".card__container").classList.add("dark"),document.querySelector(".modal-film ").classList.add("dark"),document.querySelector(".card-list").classList.add("dark"),document.querySelector(".pagination__list").classList.add("dark")):(document.querySelector("body").classList.remove("dark"),document.querySelector(".hero").classList.remove("dark"),document.querySelector(".themetoggle").classList.remove("dark"),document.querySelector(".material-icons").classList.remove("dark"),document.querySelector("header").classList.remove("dark"),document.querySelector(".modal-dark").classList.remove("dark"),document.querySelector(".day-nigth-btn-box").classList.remove("dark"),document.querySelector(".container-footer").classList.remove("dark"),document.querySelector(".card__container").classList.remove("dark"),document.querySelector(".modal-film ").classList.remove("dark"),document.querySelector(".card-list").classList.remove("dark"),document.querySelector(".pagination__list").classList.remove("dark"))}catch(e){}}document.querySelector(".themetoggle").addEventListener("click",(e=>{e.preventDefault(),"dark"===localStorage.getItem("theme")?localStorage.removeItem("theme"):localStorage.setItem("theme","dark"),ve()})),ve();var me=r("2shzp");a=r("3iCpR"),l=r("9SnYn"),d=r("7g6iB"),u=r("hPewW"),f=r("krGWQ"),f=r("krGWQ"),s=r("a3vHV"),c=r("iQIUW");r("fQE3M");f.filterItem.genreForm.addEventListener("input",(async function(e){e.preventDefault(),console.log(e),e.target.value===ge.genre&&ge.genre||s.pagination.resetPage();e&&(ge.genre=e.target.value,await ye(ge.genre,ge.year,s.pagination.page).then((e=>{if(0!==e.results.length){f.refs.filmListRef.innerHTML="";const t=e.results.map(u.createCardMarkup).join("");f.refs.filmListRef.innerHTML=t}else c.Notify.failure("Nothing was found for your request")})).catch((e=>console.log(e))))})),f.filterItem.yearForm.addEventListener("input",(async function(e){e.preventDefault(),e.target.value===ge.year&&ge.year||s.pagination.resetPage();e&&(ge.year=Number(e.target.value),await ye(ge.genre,ge.year,s.pagination.page).then((e=>{if(0!==e.results.length){f.refs.filmListRef.innerHTML="";const t=e.results.map(u.createCardMarkup).join("");f.refs.filmListRef.innerHTML=t}else c.Notify.failure("Nothing was found for your request")})).catch((e=>console.log(e))))})),f.filterItem.resetButton.addEventListener("click",(function(e){e.preventDefault(),s.pagination.resetPage(),f.filterItem.genreForm.options.selectedIndex=0,f.filterItem.yearForm.options.selectedIndex=0,ge.genre="",ge.year="",ge.page=1,f.refs.filmListRef.innerHTML="",(0,s.renderMarkupTrending)()})),f.refs.pagination.removeEventListener("click",s.onChangePageClick),f.refs.pagination.addEventListener("click",(function(e){if("UL"===e.target.nodeName)return;"btn__next"===e.target.className&&s.pagination.incrementPage();"btn__prev"===e.target.className&&s.pagination.decrementPage();if("dots"===e.target.className)return;"num"===e.target.className&&(s.pagination.page=Number(e.target.textContent));s.pagination.fetch(s.pagination.page).then((({results:e})=>{const t=e.map(u.createCardMarkup).join("");l.default.save(d.FILMS,e),f.refs.filmListRef.innerHTML=t})).catch((e=>console.log(e))),s.pagination.renderMarkup()}));let ge={year:"",genre:"",query:"",discover:"trending",page:""};async function ye(e="",t="",n="",r=""){ge.year="start"!==f.filterItem.yearForm.value||""!==t?`&primary_release_year=${f.filterItem.yearForm.value}`:"",ge.genre=""!==e&&"start"!==f.filterItem.genreForm.value?`&with_genres=${f.filterItem.genreForm.value}`:"",ge.query=`&query=${r}`,""===r&&(ge.queryFetch=""),""!==r&&""===e&&(ge.discover="search"),""===r&&""!==e&&(ge.discover="discover"),""===r&&""!==t&&(ge.discover="discover");const i=`https://api.themoviedb.org/3/${ge.discover}/movie?api_key=${a.MOVIEDB_KEY}&sort_by=popularity.desc${ge.genre}${ge.year}&include_adult=false&page=${n}`,o=await me.default.get(i),{total_pages:c,page:u,results:d}=o.data;return l.default.save("films",d),l.default.save("totalItems",c),l.default.save("itemsPerPage",d.length),c>1&&(s.pagination.totalPages=c,s.pagination.page=u,s.pagination.fetch=e=>ye(ge.genre,ge.year,e),s.pagination.renderMarkup()),o.data}!function(){let e=[];for(let t=(new Date).getFullYear();t>=1950;t-=1)e.push(`<option class = 'filter__form-years' value="${t}">${t}</option>`);const t=e.join("");f.filterItem.yearForm.insertAdjacentHTML("beforeend",t)}(),(0,o.saveGenres)().then((()=>(0,s.renderMarkupTrending)())).catch((e=>console.log(e))),async function(){try{const{results:e}=await pe.fetchQueryResultsForTrending();!function(e){const t=e.map((({title:e,poster_path:t,id:n})=>`\n    <li class="film-slider__item">\n   \n      <img\n        class="film-slider__img"\n        src="${`https://image.tmdb.org/t/p/w500/${t}`}"\n        alt="${e}"\n        data-id="${n}"\n\t\t  width="143.25"\n\t\t  height ="214.8"\n      />\n   \n        <button data-id="${n}" class="trailer-btn-slider" type="button">\n        <p data-id="${n}">Watch trailer</p>\n</button>\n    </li>\n\n  `)).join("");f.refs.slider.innerHTML=t,he.mount(),(0,fe.openSliderTrailer)(document.querySelectorAll(".trailer-btn-slider"))}(e)}catch(e){console.log(e)}}();new i({selector:'[data-action="load-spinner"]'}).enable();
//# sourceMappingURL=index.3bdc286d.js.map