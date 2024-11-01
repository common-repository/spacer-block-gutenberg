!function(e){function t(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var n={};t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=6)}([function(e,t){function n(){throw new Error("setTimeout has not been defined")}function r(){throw new Error("clearTimeout has not been defined")}function o(e){if(l===setTimeout)return setTimeout(e,0);if((l===n||!l)&&setTimeout)return l=setTimeout,setTimeout(e,0);try{return l(e,0)}catch(t){try{return l.call(null,e,0)}catch(t){return l.call(this,e,0)}}}function i(e){if(f===clearTimeout)return clearTimeout(e);if((f===r||!f)&&clearTimeout)return f=clearTimeout,clearTimeout(e);try{return f(e)}catch(t){try{return f.call(null,e)}catch(t){return f.call(this,e)}}}function s(){y&&h&&(y=!1,h.length?d=h.concat(d):v=-1,d.length&&a())}function a(){if(!y){var e=o(s);y=!0;for(var t=d.length;t;){for(h=d,d=[];++v<t;)h&&h[v].run();v=-1,t=d.length}h=null,y=!1,i(e)}}function u(e,t){this.fun=e,this.array=t}function c(){}var l,f,p=e.exports={};!function(){try{l="function"===typeof setTimeout?setTimeout:n}catch(e){l=n}try{f="function"===typeof clearTimeout?clearTimeout:r}catch(e){f=r}}();var h,d=[],y=!1,v=-1;p.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];d.push(new u(e,t)),1!==d.length||y||o(a)},u.prototype.run=function(){this.fun.apply(null,this.array)},p.title="browser",p.browser=!0,p.env={},p.argv=[],p.version="",p.versions={},p.on=c,p.addListener=c,p.once=c,p.off=c,p.removeListener=c,p.removeAllListeners=c,p.emit=c,p.prependListener=c,p.prependOnceListener=c,p.listeners=function(e){return[]},p.binding=function(e){throw new Error("process.binding is not supported")},p.cwd=function(){return"/"},p.chdir=function(e){throw new Error("process.chdir is not supported")},p.umask=function(){return 0}},function(e,t,n){"use strict";function r(e){return function(){return e}}var o=function(){};o.thatReturns=r,o.thatReturnsFalse=r(!1),o.thatReturnsTrue=r(!0),o.thatReturnsNull=r(null),o.thatReturnsThis=function(){return this},o.thatReturnsArgument=function(e){return e},e.exports=o},function(e,t,n){"use strict";function r(e){if(null===e||void 0===e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}var o=Object.getOwnPropertySymbols,i=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable;e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(t).map(function(e){return t[e]}).join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach(function(e){r[e]=e}),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(e){return!1}}()?Object.assign:function(e,t){for(var n,a,u=r(e),c=1;c<arguments.length;c++){n=Object(arguments[c]);for(var l in n)i.call(n,l)&&(u[l]=n[l]);if(o){a=o(n);for(var f=0;f<a.length;f++)s.call(n,a[f])&&(u[a[f]]=n[a[f]])}}return u}},function(e,t,n){"use strict";(function(t){var n={};"production"!==t.env.NODE_ENV&&Object.freeze(n),e.exports=n}).call(t,n(0))},function(e,t,n){"use strict";(function(t){function n(e,t,n,o,i,s,a,u){if(r(t),!e){var c;if(void 0===t)c=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var l=[n,o,i,s,a,u],f=0;c=new Error(t.replace(/%s/g,function(){return l[f++]})),c.name="Invariant Violation"}throw c.framesToPop=1,c}}var r=function(e){};"production"!==t.env.NODE_ENV&&(r=function(e){if(void 0===e)throw new Error("invariant requires an error message argument")}),e.exports=n}).call(t,n(0))},function(e,t,n){"use strict";(function(t){var r=n(1),o=r;if("production"!==t.env.NODE_ENV){var i=function(e){for(var t=arguments.length,n=Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var o=0,i="Warning: "+e.replace(/%s/g,function(){return n[o++]});"undefined"!==typeof console&&console.error(i);try{throw new Error(i)}catch(e){}};o=function(e,t){if(void 0===t)throw new Error("`warning(condition, format, ...args)` requires a warning message argument");if(0!==t.indexOf("Failed Composite propType: ")&&!e){for(var n=arguments.length,r=Array(n>2?n-2:0),o=2;o<n;o++)r[o-2]=arguments[o];i.apply(void 0,[t].concat(r))}}}e.exports=o}).call(t,n(0))},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});n(7)},function(e,t,n){"use strict";var r=n(8),o=(n.n(r),n(9)),i=(n.n(o),n(10)),s=n(19),a=wp.i18n.__,u=wp.blocks,c=u.registerBlockType,l=u.createBlock;c("coblocks/spacer",{title:a("Spacer"),description:a("Add space between other blocks."),icon:s.a.spacer,category:"layout",keywords:[a("hr"),a("separator"),a("coblocks")],supports:{html:!1},attributes:{height:{type:"number",default:50}},transforms:{from:[{type:"block",blocks:["coblocks/dynamic-separator"],transform:function(e){var t=e.height;return l("coblocks/dynamic-separator",{height:t})}},{type:"block",blocks:["core/separator"],transform:function(){return l("coblocks/spacer")}}],to:[{type:"block",blocks:["coblocks/dynamic-separator"],transform:function(e){var t=e.height;return l("coblocks/dynamic-separator",{height:t})}}]},edit:i.a,save:function(e){var t=e.attributes,n=e.className,r=t.height;return wp.element.createElement("hr",{className:n,style:{height:r?r+"px":void 0}})}})},function(e,t){},function(e,t){},function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function i(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var s=n(11),a=n.n(s),u=n(12),c=n(18),l=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),f=(wp.i18n.__,wp.element.Component),p=function(e){function t(){return r(this,t),o(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return i(t,e),l(t,[{key:"render",value:function(){var e=this.props,t=e.attributes,n=e.className,r=e.isSelected,o=e.setAttributes,i=e.toggleSelection,s=t.height;return[r&&wp.element.createElement(c.a,this.props),wp.element.createElement(u.a,{className:a()(n,"coblocks-spacer-control"),size:{width:"100%",height:s},minWidth:"100%",maxWidth:"100%",minHeight:"100%",handleClasses:{bottomLeft:"coblocks-block-spacer-control__resize-handle"},enable:{top:!1,right:!1,bottom:!0,left:!1,topRight:!1,bottomRight:!1,bottomLeft:!0,topLeft:!1},onResizeStart:function(){i(!1)},onResizeStop:function(e,t,n,r){o({height:parseInt(s+r.height,10)}),i(!0)}})]}}]),t}(f);t.a=p},function(e,t,n){var r,o;!function(){"use strict";function n(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var o=typeof r;if("string"===o||"number"===o)e.push(r);else if(Array.isArray(r))e.push(n.apply(null,r));else if("object"===o)for(var s in r)i.call(r,s)&&r[s]&&e.push(s)}}return e.join(" ")}var i={}.hasOwnProperty;"undefined"!==typeof e&&e.exports?e.exports=n:(r=[],void 0!==(o=function(){return n}.apply(t,r))&&(e.exports=o))}()},function(e,t,n){"use strict";var r=n(13),o=(n.n(r),function(){function e(e){this.value=e}function t(t){function n(e,t){return new Promise(function(n,o){var a={key:e,arg:t,resolve:n,reject:o,next:null};s?s=s.next=a:(i=s=a,r(e,t))})}function r(n,i){try{var s=t[n](i),a=s.value;a instanceof e?Promise.resolve(a.value).then(function(e){r("next",e)},function(e){r("throw",e)}):o(s.done?"return":"normal",s.value)}catch(e){o("throw",e)}}function o(e,t){switch(e){case"return":i.resolve({value:t,done:!0});break;case"throw":i.reject(t);break;default:i.resolve({value:t,done:!1})}i=i.next,i?r(i.key,i.arg):s=null}var i,s;this._invoke=n,"function"!==typeof t.return&&(this.return=void 0)}"function"===typeof Symbol&&Symbol.asyncIterator&&(t.prototype[Symbol.asyncIterator]=function(){return this}),t.prototype.next=function(e){return this._invoke("next",e)},t.prototype.throw=function(e){return this._invoke("throw",e)},t.prototype.return=function(e){return this._invoke("return",e)}}(),function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}),i=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a=function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)},u=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t},c={base:{position:"absolute"},top:{width:"100%",height:"10px",top:"-5px",left:"0px",cursor:"row-resize"},right:{width:"10px",height:"100%",top:"0px",right:"-5px",cursor:"col-resize"},bottom:{width:"100%",height:"10px",bottom:"-5px",left:"0px",cursor:"row-resize"},left:{width:"10px",height:"100%",top:"0px",left:"-5px",cursor:"col-resize"},topRight:{width:"20px",height:"20px",position:"absolute",right:"-10px",top:"-10px",cursor:"ne-resize"},bottomRight:{width:"20px",height:"20px",position:"absolute",right:"-10px",bottom:"-10px",cursor:"se-resize"},bottomLeft:{width:"20px",height:"20px",position:"absolute",left:"-10px",bottom:"-10px",cursor:"sw-resize"},topLeft:{width:"20px",height:"20px",position:"absolute",left:"-10px",top:"-10px",cursor:"nw-resize"}},l=function(e){return Object(r.createElement)("div",{className:e.className,style:s({},c.base,c[e.direction],e.replaceStyles||{}),onMouseDown:function(t){e.onResizeStart(t,e.direction)},onTouchStart:function(t){e.onResizeStart(t,e.direction)}})},f={userSelect:"none",MozUserSelect:"none",WebkitUserSelect:"none",MsUserSelect:"none"},p={userSelect:"auto",MozUserSelect:"auto",WebkitUserSelect:"auto",MsUserSelect:"auto"},h=function(e,t,n){return Math.max(Math.min(e,n),t)},d=function(e,t){return Math.round(e/t)*t},y=function(e,t){return e.substr(e.length-t.length,t.length)===t},v=function(e){return y(e.toString(),"px")?e.toString():y(e.toString(),"%")?e.toString():e+"px"},m=0,g=["style","className","grid","bounds","size","defaultSize","minWidth","minHeight","maxWidth","maxHeight","lockAspectRatio","enable","handleStyles","handleClasses","handleWrapperStyle","handleWrapperClass","children","onResizeStart","onResize","onResizeStop"],b=function(e){function t(e){o(this,t);var n=u(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={isResizing:!1,width:"undefined"===typeof(n.propsSize&&n.propsSize.width)?"auto":n.propsSize&&n.propsSize.width,height:"undefined"===typeof(n.propsSize&&n.propsSize.height)?"auto":n.propsSize&&n.propsSize.height,direction:"right",original:{x:0,y:0,width:0,height:0}},n.updateExtendsProps(e),n.onResizeStart=n.onResizeStart.bind(n),n.onMouseMove=n.onMouseMove.bind(n),n.onMouseUp=n.onMouseUp.bind(n),n.baseSizeId="__resizable"+m,m+=1,"undefined"!==typeof window&&(window.addEventListener("mouseup",n.onMouseUp),window.addEventListener("mousemove",n.onMouseMove),window.addEventListener("touchmove",n.onMouseMove),window.addEventListener("touchend",n.onMouseUp)),n}return a(t,e),i(t,[{key:"updateExtendsProps",value:function(e){this.extendsProps=Object.keys(e).reduce(function(t,n){return-1!==g.indexOf(n)?t:(t[n]=e[n],t)},{})}},{key:"getParentSize",value:function(){var e=document.getElementById(this.baseSizeId);return e?{width:e.offsetWidth,height:e.offsetHeight}:{width:window.innerWidth,height:window.innerHeight}}},{key:"componentDidMount",value:function(){var e=this.size;this.setState({width:this.state.width||e.width,height:this.state.height||e.height});var t=document.createElement("div");t.id=this.baseSizeId,t.style.width="100%",t.style.height="100%",t.style.position="relative",t.style.transform="scale(0, 0)",t.style.left="-2147483647px";var n=this.parentNode;n instanceof HTMLElement&&n.appendChild(t)}},{key:"componentWillReceiveProps",value:function(e){this.updateExtendsProps(e)}},{key:"componentWillUnmount",value:function(){if("undefined"!==typeof window){window.removeEventListener("mouseup",this.onMouseUp),window.removeEventListener("mousemove",this.onMouseMove),window.removeEventListener("touchmove",this.onMouseMove),window.removeEventListener("touchend",this.onMouseUp);var e=this.parentNode,t=document.getElementById(this.baseSizeId);if(!t)return;if(!(e instanceof HTMLElement)||!(t instanceof Node))return;e.removeChild(t)}}},{key:"onResizeStart",value:function(e,t){var n=0,r=0;if(e.nativeEvent instanceof MouseEvent){if(n=e.nativeEvent.clientX,r=e.nativeEvent.clientY,3===e.nativeEvent.which)return}else e.nativeEvent instanceof TouchEvent&&(n=e.nativeEvent.touches[0].clientX,r=e.nativeEvent.touches[0].clientY);this.props.onResizeStart&&this.props.onResizeStart(e,t,this.resizable),this.setState({original:{x:n,y:r,width:this.size.width,height:this.size.height},isResizing:!0,direction:t})}},{key:"onMouseMove",value:function(e){if(this.state.isResizing){var t=e instanceof MouseEvent?e.clientX:e.touches[0].clientX,n=e instanceof MouseEvent?e.clientY:e.touches[0].clientY,r=this.state,o=r.direction,i=r.original,s=r.width,a=r.height,u=this.props.lockAspectRatio,c=this.props,l=c.maxWidth,f=c.maxHeight,p=c.minWidth,v=c.minHeight,m=this.getParentSize();if(l&&"string"===typeof l&&y(l,"%")){var g=Number(l.replace("%",""))/100;l=m.width*g}if(f&&"string"===typeof f&&y(f,"%")){var b=Number(f.replace("%",""))/100;f=m.height*b}if(p&&"string"===typeof p&&y(p,"%")){var w=Number(p.replace("%",""))/100;p=m.width*w}if(v&&"string"===typeof v&&y(v,"%")){var S=Number(v.replace("%",""))/100;v=m.height*S}l="undefined"===typeof l?void 0:Number(l),f="undefined"===typeof f?void 0:Number(f),p="undefined"===typeof p?void 0:Number(p),v="undefined"===typeof v?void 0:Number(v);var k=i.height/i.width,_=i.width,x=i.height;if(/right/i.test(o)&&(_=i.width+(t-i.x),u&&(x=_*k)),/left/i.test(o)&&(_=i.width-(t-i.x),u&&(x=_*k)),/bottom/i.test(o)&&(x=i.height+(n-i.y),u&&(_=x/k)),/top/i.test(o)&&(x=i.height-(n-i.y),u&&(_=x/k)),"parent"===this.props.bounds){var O=this.parentNode;if(O instanceof HTMLElement){var E=O.getBoundingClientRect(),R=E.left,z=E.top,j=this.resizable.getBoundingClientRect(),P=j.left,N=j.top,C=O.offsetWidth+(R-P),T=O.offsetHeight+(z-N);l=l&&l<C?l:C,f=f&&f<T?f:T}}else if("window"===this.props.bounds){if("undefined"!==typeof window){var A=this.resizable.getBoundingClientRect(),M=A.left,L=A.top,U=window.innerWidth-M,W=window.innerHeight-L;l=l&&l<U?l:U,f=f&&f<W?f:W}}else if(this.props.bounds instanceof HTMLElement){var I=this.props.bounds.getBoundingClientRect(),H=I.left,$=I.top,D=this.resizable.getBoundingClientRect(),F=D.left,q=D.top;if(!(this.props.bounds instanceof HTMLElement))return;var B=this.props.bounds.offsetWidth+(H-F),V=this.props.bounds.offsetHeight+($-q);l=l&&l<B?l:B,f=f&&f<V?f:V}var Y="undefined"===typeof p||p<10?10:p,X="undefined"===typeof l||l<0?_:l,Z="undefined"===typeof v||v<10?10:v,J="undefined"===typeof f||f<0?x:f;if(u){var G=Y>Z/k?Y:Z/k,K=X<J/k?X:J/k,Q=Z>Y*k?Z:Y*k,ee=J<X*k?J:X*k;_=h(_,G,K),x=h(x,Q,ee)}else _=h(_,Y,X),x=h(x,Z,J);this.props.grid&&(_=d(_,this.props.grid[0])),this.props.grid&&(x=d(x,this.props.grid[1]));var te={width:_-i.width,height:x-i.height};if(s&&"string"===typeof s&&y(s,"%")){_=_/m.width*100+"%"}if(a&&"string"===typeof a&&y(a,"%")){x=x/m.height*100+"%"}this.setState({width:"auto"!==s||"undefined"===typeof this.props.width?_:"auto",height:"auto"!==a||"undefined"===typeof this.props.height?x:"auto"}),this.props.onResize&&this.props.onResize(e,o,this.resizable,te)}}},{key:"onMouseUp",value:function(e){var t=this.state,n=t.isResizing,r=t.direction,o=t.original;if(n){var i={width:this.size.width-o.width,height:this.size.height-o.height};this.props.onResizeStop&&this.props.onResizeStop(e,r,this.resizable,i),this.props.size&&this.setState(this.props.size),this.setState({isResizing:!1})}}},{key:"updateSize",value:function(e){this.setState({width:e.width,height:e.height})}},{key:"renderResizer",value:function(){var e=this,t=this.props,n=t.enable,o=t.handleStyles,i=t.handleClasses,s=t.handleWrapperStyle,a=t.handleWrapperClass;if(!n)return null;var u=Object.keys(n).map(function(t){return!1!==n[t]?Object(r.createElement)(l,{key:t,direction:t,onResizeStart:e.onResizeStart,replaceStyles:o&&o[t],className:i&&i[t]}):null});return Object(r.createElement)("span",{className:a,style:s},u)}},{key:"render",value:function(){var e=this,t=this.state.isResizing?f:p;return Object(r.createElement)("div",s({ref:function(t){e.resizable=t},style:s({position:"relative"},t,this.props.style,this.sizeStyle,{maxWidth:this.props.maxWidth,maxHeight:this.props.maxHeight,minWidth:this.props.minWidth,minHeight:this.props.minHeight,boxSizing:"border-box"}),className:this.props.className},this.extendsProps),this.props.children,this.renderResizer())}},{key:"parentNode",get:function(){return this.resizable.parentNode}},{key:"propsSize",get:function(){return this.props.size||this.props.defaultSize}},{key:"size",get:function(){var e=0,t=0;return"undefined"!==typeof window&&(e=this.resizable.offsetWidth,t=this.resizable.offsetHeight),{width:e,height:t}}},{key:"sizeStyle",get:function(){var e=this,t=this.props.size,n=function(t){if("undefined"===typeof e.state[t]||"auto"===e.state[t])return"auto";if(e.propsSize&&e.propsSize[t]&&y(e.propsSize[t].toString(),"%")){if(y(e.state[t].toString(),"%"))return e.state[t].toString();var n=e.getParentSize();return Number(e.state[t].toString().replace("px",""))/n[t]*100+"%"}return v(e.state[t])};return{width:t&&t.width&&!this.state.isResizing?v(t.width):n("width"),height:t&&t.height&&!this.state.isResizing?v(t.height):n("height")}}}]),t}(r.Component);b.defaultProps={onResizeStart:function(){},onResize:function(){},onResizeStop:function(){},enable:{top:!0,right:!0,bottom:!0,left:!0,topRight:!0,bottomRight:!0,bottomLeft:!0,topLeft:!0},style:{},grid:[1,1],lockAspectRatio:!1},t.a=b},function(e,t,n){"use strict";(function(t){"production"===t.env.NODE_ENV?e.exports=n(14):e.exports=n(15)}).call(t,n(0))},function(e,t,n){"use strict";function r(e){for(var t=arguments.length-1,n="Minified React error #"+e+"; visit http://facebook.github.io/react/docs/error-decoder.html?invariant="+e,r=0;r<t;r++)n+="&args[]="+encodeURIComponent(arguments[r+1]);throw t=Error(n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."),t.name="Invariant Violation",t.framesToPop=1,t}function o(e,t,n){this.props=e,this.context=t,this.refs=b,this.updater=n||z}function i(e,t,n){this.props=e,this.context=t,this.refs=b,this.updater=n||z}function s(){}function a(e,t,n){this.props=e,this.context=t,this.refs=b,this.updater=n||z}function u(e,t,n){var r,o={},i=null,s=null;if(null!=t)for(r in void 0!==t.ref&&(s=t.ref),void 0!==t.key&&(i=""+t.key),t)C.call(t,r)&&!T.hasOwnProperty(r)&&(o[r]=t[r]);var a=arguments.length-2;if(1===a)o.children=n;else if(1<a){for(var u=Array(a),c=0;c<a;c++)u[c]=arguments[c+2];o.children=u}if(e&&e.defaultProps)for(r in a=e.defaultProps)void 0===o[r]&&(o[r]=a[r]);return{$$typeof:k,type:e,key:i,ref:s,props:o,_owner:N.current}}function c(e){return"object"===typeof e&&null!==e&&e.$$typeof===k}function l(e){var t={"=":"=0",":":"=2"};return"$"+(""+e).replace(/[=:]/g,function(e){return t[e]})}function f(e,t,n,r){if(M.length){var o=M.pop();return o.result=e,o.keyPrefix=t,o.func=n,o.context=r,o.count=0,o}return{result:e,keyPrefix:t,func:n,context:r,count:0}}function p(e){e.result=null,e.keyPrefix=null,e.func=null,e.context=null,e.count=0,10>M.length&&M.push(e)}function h(e,t,n,o){var i=typeof e;"undefined"!==i&&"boolean"!==i||(e=null);var s=!1;if(null===e)s=!0;else switch(i){case"string":case"number":s=!0;break;case"object":switch(e.$$typeof){case k:case _:case x:case O:s=!0}}if(s)return n(o,e,""===t?"."+d(e,0):t),1;if(s=0,t=""===t?".":t+":",Array.isArray(e))for(var a=0;a<e.length;a++){i=e[a];var u=t+d(i,a);s+=h(i,u,n,o)}else if(null===e||"undefined"===typeof e?u=null:(u=R&&e[R]||e["@@iterator"],u="function"===typeof u?u:null),"function"===typeof u)for(e=u.call(e),a=0;!(i=e.next()).done;)i=i.value,u=t+d(i,a++),s+=h(i,u,n,o);else"object"===i&&(n=""+e,r("31","[object Object]"===n?"object with keys {"+Object.keys(e).join(", ")+"}":n,""));return s}function d(e,t){return"object"===typeof e&&null!==e&&null!=e.key?l(e.key):t.toString(36)}function y(e,t){e.func.call(e.context,t,e.count++)}function v(e,t,n){var r=e.result,o=e.keyPrefix;e=e.func.call(e.context,t,e.count++),Array.isArray(e)?m(e,r,n,w.thatReturnsArgument):null!=e&&(c(e)&&(t=o+(!e.key||t&&t.key===e.key?"":(""+e.key).replace(A,"$&/")+"/")+n,e={$$typeof:k,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}),r.push(e))}function m(e,t,n,r,o){var i="";null!=n&&(i=(""+n).replace(A,"$&/")+"/"),t=f(t,i,r,o),null==e||h(e,"",v,t),p(t)}var g=n(2),b=n(3),w=n(1),S="function"===typeof Symbol&&Symbol.for,k=S?Symbol.for("react.element"):60103,_=S?Symbol.for("react.call"):60104,x=S?Symbol.for("react.return"):60105,O=S?Symbol.for("react.portal"):60106,E=S?Symbol.for("react.fragment"):60107,R="function"===typeof Symbol&&Symbol.iterator,z={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}};o.prototype.isReactComponent={},o.prototype.setState=function(e,t){"object"!==typeof e&&"function"!==typeof e&&null!=e&&r("85"),this.updater.enqueueSetState(this,e,t,"setState")},o.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},s.prototype=o.prototype;var j=i.prototype=new s;j.constructor=i,g(j,o.prototype),j.isPureReactComponent=!0;var P=a.prototype=new s;P.constructor=a,g(P,o.prototype),P.unstable_isAsyncReactComponent=!0,P.render=function(){return this.props.children};var N={current:null},C=Object.prototype.hasOwnProperty,T={key:!0,ref:!0,__self:!0,__source:!0},A=/\/+/g,M=[],L={Children:{map:function(e,t,n){if(null==e)return e;var r=[];return m(e,r,null,t,n),r},forEach:function(e,t,n){if(null==e)return e;t=f(null,null,t,n),null==e||h(e,"",y,t),p(t)},count:function(e){return null==e?0:h(e,"",w.thatReturnsNull,null)},toArray:function(e){var t=[];return m(e,t,null,w.thatReturnsArgument),t},only:function(e){return c(e)||r("143"),e}},Component:o,PureComponent:i,unstable_AsyncComponent:a,Fragment:E,createElement:u,cloneElement:function(e,t,n){var r=g({},e.props),o=e.key,i=e.ref,s=e._owner;if(null!=t){if(void 0!==t.ref&&(i=t.ref,s=N.current),void 0!==t.key&&(o=""+t.key),e.type&&e.type.defaultProps)var a=e.type.defaultProps;for(u in t)C.call(t,u)&&!T.hasOwnProperty(u)&&(r[u]=void 0===t[u]&&void 0!==a?a[u]:t[u])}var u=arguments.length-2;if(1===u)r.children=n;else if(1<u){a=Array(u);for(var c=0;c<u;c++)a[c]=arguments[c+2];r.children=a}return{$$typeof:k,type:e.type,key:o,ref:i,props:r,_owner:s}},createFactory:function(e){var t=u.bind(null,e);return t.type=e,t},isValidElement:c,version:"16.2.0",__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:{ReactCurrentOwner:N,assign:g}},U=Object.freeze({default:L}),W=U&&L||U;e.exports=W.default?W.default:W},function(e,t,n){"use strict";(function(t){"production"!==t.env.NODE_ENV&&function(){function t(e){if(null===e||"undefined"===typeof e)return null;var t=ee&&e[ee]||e[te];return"function"===typeof t?t:null}function r(e,t){var n=e.constructor,r=n&&(n.displayName||n.name)||"ReactClass",o=r+"."+t;ie[o]||(B(!1,"%s(...): Can only update a mounted or mounting component. This usually means you called %s() on an unmounted component. This is a no-op.\n\nPlease check the code for the %s component.",t,t,r),ie[o]=!0)}function o(e,t,n){this.props=e,this.context=t,this.refs=F,this.updater=n||se}function i(e,t,n){this.props=e,this.context=t,this.refs=F,this.updater=n||se}function s(){}function a(e,t,n){this.props=e,this.context=t,this.refs=F,this.updater=n||se}function u(e){if(de.call(e,"ref")){var t=Object.getOwnPropertyDescriptor(e,"ref").get;if(t&&t.isReactWarning)return!1}return void 0!==e.ref}function c(e){if(de.call(e,"key")){var t=Object.getOwnPropertyDescriptor(e,"key").get;if(t&&t.isReactWarning)return!1}return void 0!==e.key}function l(e,t){var n=function(){fe||(fe=!0,B(!1,"%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://fb.me/react-special-props)",t))};n.isReactWarning=!0,Object.defineProperty(e,"key",{get:n,configurable:!0})}function f(e,t){var n=function(){pe||(pe=!0,B(!1,"%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://fb.me/react-special-props)",t))};n.isReactWarning=!0,Object.defineProperty(e,"ref",{get:n,configurable:!0})}function p(e,t,n){var r,o={},i=null,s=null,a=null,p=null;if(null!=t){u(t)&&(s=t.ref),c(t)&&(i=""+t.key),a=void 0===t.__self?null:t.__self,p=void 0===t.__source?null:t.__source;for(r in t)de.call(t,r)&&!ye.hasOwnProperty(r)&&(o[r]=t[r])}var h=arguments.length-2;if(1===h)o.children=n;else if(h>1){for(var d=Array(h),y=0;y<h;y++)d[y]=arguments[y+2];Object.freeze&&Object.freeze(d),o.children=d}if(e&&e.defaultProps){var v=e.defaultProps;for(r in v)void 0===o[r]&&(o[r]=v[r])}if((i||s)&&("undefined"===typeof o.$$typeof||o.$$typeof!==Z)){var m="function"===typeof e?e.displayName||e.name||"Unknown":e;i&&l(o,m),s&&f(o,m)}return ve(e,i,s,a,p,he.current,o)}function h(e,t){return ve(e.type,t,e.ref,e._self,e._source,e._owner,e.props)}function d(e,t,n){var r,o=D({},e.props),i=e.key,s=e.ref,a=e._self,l=e._source,f=e._owner;if(null!=t){u(t)&&(s=t.ref,f=he.current),c(t)&&(i=""+t.key);var p;e.type&&e.type.defaultProps&&(p=e.type.defaultProps);for(r in t)de.call(t,r)&&!ye.hasOwnProperty(r)&&(void 0===t[r]&&void 0!==p?o[r]=p[r]:o[r]=t[r])}var h=arguments.length-2;if(1===h)o.children=n;else if(h>1){for(var d=Array(h),y=0;y<h;y++)d[y]=arguments[y+2];o.children=d}return ve(e.type,i,s,a,l,f,o)}function y(e){return"object"===typeof e&&null!==e&&e.$$typeof===Z}function v(e){var t={"=":"=0",":":"=2"};return"$"+(""+e).replace(/[=:]/g,function(e){return t[e]})}function m(e){return(""+e).replace(Se,"$&/")}function g(e,t,n,r){if(_e.length){var o=_e.pop();return o.result=e,o.keyPrefix=t,o.func=n,o.context=r,o.count=0,o}return{result:e,keyPrefix:t,func:n,context:r,count:0}}function b(e){e.result=null,e.keyPrefix=null,e.func=null,e.context=null,e.count=0,_e.length<ke&&_e.push(e)}function w(e,n,r,o){var i=typeof e;"undefined"!==i&&"boolean"!==i||(e=null);var s=!1;if(null===e)s=!0;else switch(i){case"string":case"number":s=!0;break;case"object":switch(e.$$typeof){case Z:case J:case G:case K:s=!0}}if(s)return r(o,e,""===n?ge+k(e,0):n),1;var a,u,c=0,l=""===n?ge:n+be;if(Array.isArray(e))for(var f=0;f<e.length;f++)a=e[f],u=l+k(a,f),c+=w(a,u,r,o);else{var p=t(e);if("function"===typeof p){p===e.entries&&(B(we,"Using Maps as children is unsupported and will likely yield unexpected results. Convert it to a sequence/iterable of keyed ReactElements instead.%s",me.getStackAddendum()),we=!0);for(var h,d=p.call(e),y=0;!(h=d.next()).done;)a=h.value,u=l+k(a,y++),c+=w(a,u,r,o)}else if("object"===i){var v="";v=" If you meant to render a collection of children, use an array instead."+me.getStackAddendum();var m=""+e;q(!1,"Objects are not valid as a React child (found: %s).%s","[object Object]"===m?"object with keys {"+Object.keys(e).join(", ")+"}":m,v)}}return c}function S(e,t,n){return null==e?0:w(e,"",t,n)}function k(e,t){return"object"===typeof e&&null!==e&&null!=e.key?v(e.key):t.toString(36)}function _(e,t,n){var r=e.func,o=e.context;r.call(o,t,e.count++)}function x(e,t,n){if(null==e)return e;var r=g(null,null,t,n);S(e,_,r),b(r)}function O(e,t,n){var r=e.result,o=e.keyPrefix,i=e.func,s=e.context,a=i.call(s,t,e.count++);Array.isArray(a)?E(a,r,n,V.thatReturnsArgument):null!=a&&(y(a)&&(a=h(a,o+(!a.key||t&&t.key===a.key?"":m(a.key)+"/")+n)),r.push(a))}function E(e,t,n,r,o){var i="";null!=n&&(i=m(n)+"/");var s=g(t,i,r,o);S(e,O,s),b(s)}function R(e,t,n){if(null==e)return e;var r=[];return E(e,r,null,t,n),r}function z(e,t){return S(e,V.thatReturnsNull,null)}function j(e){var t=[];return E(e,t,null,V.thatReturnsArgument),t}function P(e){return y(e)||q(!1,"React.Children.only expected to receive a single React element child."),e}function N(e){var t=e.type;return"string"===typeof t?t:"function"===typeof t?t.displayName||t.name:null}function C(){if(he.current){var e=N(he.current);if(e)return"\n\nCheck the render method of `"+e+"`."}return""}function T(e){if(null!==e&&void 0!==e&&void 0!==e.__source){var t=e.__source;return"\n\nCheck your code at "+t.fileName.replace(/^.*[\\\/]/,"")+":"+t.lineNumber+"."}return""}function A(e){var t=C();if(!t){var n="string"===typeof e?e:e.displayName||e.name;n&&(t="\n\nCheck the top-level render call using <"+n+">.")}return t}function M(e,t){if(e._store&&!e._store.validated&&null==e.key){e._store.validated=!0;var n=A(t);if(!Pe[n]){Pe[n]=!0;var r="";e&&e._owner&&e._owner!==he.current&&(r=" It was passed a child from "+N(e._owner)+"."),Oe=e,B(!1,'Each child in an array or iterator should have a unique "key" prop.%s%s See https://fb.me/react-warning-keys for more information.%s',n,r,ze()),Oe=null}}}function L(e,n){if("object"===typeof e)if(Array.isArray(e))for(var r=0;r<e.length;r++){var o=e[r];y(o)&&M(o,n)}else if(y(e))e._store&&(e._store.validated=!0);else if(e){var i=t(e);if("function"===typeof i&&i!==e.entries)for(var s,a=i.call(e);!(s=a.next()).done;)y(s.value)&&M(s.value,n)}}function U(e){var t=e.type;if("function"===typeof t){var n=t.displayName||t.name,r=t.propTypes;r?(Oe=e,Y(r,e.props,"prop",n,ze),Oe=null):void 0===t.PropTypes||Ee||(Ee=!0,B(!1,"Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?",n||"Unknown")),"function"===typeof t.getDefaultProps&&B(t.getDefaultProps.isReactClassApproved,"getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.")}}function W(e){Oe=e;var t=!0,n=!1,r=void 0;try{for(var o,i=Object.keys(e.props)[Symbol.iterator]();!(t=(o=i.next()).done);t=!0){var s=o.value;if(!je.has(s)){B(!1,"Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.%s",s,ze());break}}}catch(e){n=!0,r=e}finally{try{!t&&i.return&&i.return()}finally{if(n)throw r}}null!==e.ref&&B(!1,"Invalid attribute `ref` supplied to `React.Fragment`.%s",ze()),Oe=null}function I(e,t,n){var r="string"===typeof e||"function"===typeof e||"symbol"===typeof e||"number"===typeof e;if(!r){var o="";(void 0===e||"object"===typeof e&&null!==e&&0===Object.keys(e).length)&&(o+=" You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");var i=T(t);o+=i||C(),o+=ze()||"",B(!1,"React.createElement: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s",null==e?e:typeof e,o)}var s=p.apply(this,arguments);if(null==s)return s;if(r)for(var a=2;a<arguments.length;a++)L(arguments[a],e);return"symbol"===typeof e&&e===Q?W(s):U(s),s}function H(e){var t=I.bind(null,e);return t.type=e,Object.defineProperty(t,"type",{enumerable:!1,get:function(){return oe(!1,"Factory.type is deprecated. Access the class directly before passing it to createFactory."),Object.defineProperty(this,"type",{value:e}),e}}),t}function $(e,t,n){for(var r=d.apply(this,arguments),o=2;o<arguments.length;o++)L(arguments[o],r.type);return U(r),r}var D=n(2),F=n(3),q=n(4),B=n(5),V=n(1),Y=n(16),X="function"===typeof Symbol&&Symbol.for,Z=X?Symbol.for("react.element"):60103,J=X?Symbol.for("react.call"):60104,G=X?Symbol.for("react.return"):60105,K=X?Symbol.for("react.portal"):60106,Q=X?Symbol.for("react.fragment"):60107,ee="function"===typeof Symbol&&Symbol.iterator,te="@@iterator",ne=function(){},re=function(e){for(var t=arguments.length,n=Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var o=0,i="Warning: "+e.replace(/%s/g,function(){return n[o++]});"undefined"!==typeof console&&console.warn(i);try{throw new Error(i)}catch(e){}};ne=function(e,t){if(void 0===t)throw new Error("`warning(condition, format, ...args)` requires a warning message argument");if(!e){for(var n=arguments.length,r=Array(n>2?n-2:0),o=2;o<n;o++)r[o-2]=arguments[o];re.apply(void 0,[t].concat(r))}};var oe=ne,ie={},se={isMounted:function(e){return!1},enqueueForceUpdate:function(e,t,n){r(e,"forceUpdate")},enqueueReplaceState:function(e,t,n,o){r(e,"replaceState")},enqueueSetState:function(e,t,n,o){r(e,"setState")}};o.prototype.isReactComponent={},o.prototype.setState=function(e,t){"object"!==typeof e&&"function"!==typeof e&&null!=e&&q(!1,"setState(...): takes an object of state variables to update or a function which returns an object of state variables."),this.updater.enqueueSetState(this,e,t,"setState")},o.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};var ae={isMounted:["isMounted","Instead, make sure to clean up subscriptions and pending requests in componentWillUnmount to prevent memory leaks."],replaceState:["replaceState","Refactor your code to use setState instead (see https://github.com/facebook/react/issues/3236)."]};for(var ue in ae)ae.hasOwnProperty(ue)&&function(e,t){Object.defineProperty(o.prototype,e,{get:function(){oe(!1,"%s(...) is deprecated in plain JavaScript React classes. %s",t[0],t[1])}})}(ue,ae[ue]);s.prototype=o.prototype;var ce=i.prototype=new s;ce.constructor=i,D(ce,o.prototype),ce.isPureReactComponent=!0;var le=a.prototype=new s;le.constructor=a,D(le,o.prototype),le.unstable_isAsyncReactComponent=!0,le.render=function(){return this.props.children};var fe,pe,he={current:null},de=Object.prototype.hasOwnProperty,ye={key:!0,ref:!0,__self:!0,__source:!0},ve=function(e,t,n,r,o,i,s){var a={$$typeof:Z,type:e,key:t,ref:n,props:s,_owner:i};return a._store={},Object.defineProperty(a._store,"validated",{configurable:!1,enumerable:!1,writable:!0,value:!1}),Object.defineProperty(a,"_self",{configurable:!1,enumerable:!1,writable:!1,value:r}),Object.defineProperty(a,"_source",{configurable:!1,enumerable:!1,writable:!1,value:o}),Object.freeze&&(Object.freeze(a.props),Object.freeze(a)),a},me={};me.getCurrentStack=null,me.getStackAddendum=function(){var e=me.getCurrentStack;return e?e():null};var ge=".",be=":",we=!1,Se=/\/+/g,ke=10,_e=[],xe=function(e,t,n){return"\n    in "+(e||"Unknown")+(t?" (at "+t.fileName.replace(/^.*[\\\/]/,"")+":"+t.lineNumber+")":n?" (created by "+n+")":"")},Oe=null,Ee=!1,Re=function(e){return null==e?"#empty":"string"===typeof e||"number"===typeof e?"#text":"string"===typeof e.type?e.type:e.type===Q?"React.Fragment":e.type.displayName||e.type.name||"Unknown"},ze=function(){var e="";if(Oe){var t=Re(Oe),n=Oe._owner;e+=xe(t,Oe._source,n&&N(n))}return e+=me.getStackAddendum()||""},je=new Map([["children",!0],["key",!0]]),Pe={},Ne={Children:{map:R,forEach:x,count:z,toArray:j,only:P},Component:o,PureComponent:i,unstable_AsyncComponent:a,Fragment:Q,createElement:I,cloneElement:$,createFactory:H,isValidElement:y,version:"16.2.0",__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:{ReactCurrentOwner:he,assign:D}};D(Ne.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,{ReactDebugCurrentFrame:me,ReactComponentTreeHook:{}});var Ce=Object.freeze({default:Ne}),Te=Ce&&Ne||Ce,Ae=Te.default?Te.default:Te;e.exports=Ae}()}).call(t,n(0))},function(e,t,n){"use strict";(function(t){function r(e,n,r,u,c){if("production"!==t.env.NODE_ENV)for(var l in e)if(e.hasOwnProperty(l)){var f;try{o("function"===typeof e[l],"%s: %s type `%s` is invalid; it must be a function, usually from the `prop-types` package, but received `%s`.",u||"React class",r,l,typeof e[l]),f=e[l](n,l,u,r,null,s)}catch(e){f=e}if(i(!f||f instanceof Error,"%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).",u||"React class",r,l,typeof f),f instanceof Error&&!(f.message in a)){a[f.message]=!0;var p=c?c():"";i(!1,"Failed %s type: %s%s",r,f.message,null!=p?p:"")}}}if("production"!==t.env.NODE_ENV)var o=n(4),i=n(5),s=n(17),a={};e.exports=r}).call(t,n(0))},function(e,t,n){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function i(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var s=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),a=wp.i18n.__,u=wp.element.Component,c=wp.blocks.InspectorControls,l=wp.components,f=l.PanelBody,p=l.RangeControl,h=function(e){function t(e){r(this,t);var n=o(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments));return n.updateHeight=n.updateHeight.bind(n),n}return i(t,e),s(t,[{key:"updateHeight",value:function(e){this.props.setAttributes({height:e})}},{key:"render",value:function(){var e=this.props,t=e.attributes,n=(e.setAttributes,t.height);return wp.element.createElement(c,{key:"inspector"},wp.element.createElement(f,{title:a("Settings")},wp.element.createElement(p,{label:a("Height"),value:n||"",onChange:this.updateHeight,min:30,max:800})))}}]),t}(u);t.a=h},function(e,t,n){"use strict";var r={};r.spacer=wp.element.createElement("svg",{"aria-hidden":!0,role:"img",focusable:"false",className:"dashicon",xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 20 20"},wp.element.createElement("path",{d:"M0,3 L20,3 L20,17 L0,17 L0,3 Z M2,5.03271484 L2,15.0327148 L18.001709,15.0327148 L18.001709,5.03271484 L2,5.03271484 Z"})),t.a=r}]);