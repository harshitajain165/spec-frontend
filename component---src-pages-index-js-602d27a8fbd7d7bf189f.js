"use strict";(self.webpackChunkspec=self.webpackChunkspec||[]).push([[678],{2889:function(e,t,n){n.r(t),n.d(t,{default:function(){return te}});var r,a,i=n(1721),o=n(7294);function l(){return l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},l.apply(this,arguments)}function s(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}function c(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function u(e,t){var n;if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(n=function(e,t){if(e){if("string"==typeof e)return c(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?c(e,t):void 0}}(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var r=0;return function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}return(n=e[Symbol.iterator]()).next.bind(n)}function m(e,t){if(e in t){for(var n=t[e],r=arguments.length,a=new Array(r>2?r-2:0),i=2;i<r;i++)a[i-2]=arguments[i];return"function"==typeof n?n.apply(void 0,a):n}var o=new Error('Tried to handle "'+e+'" but there is no handler defined. Only defined handlers are: '+Object.keys(t).map((function(e){return'"'+e+'"'})).join(", ")+".");throw Error.captureStackTrace&&Error.captureStackTrace(o,m),o}function d(e){var t=e.props,n=e.slot,i=e.defaultTag,o=e.features,c=e.visible,u=void 0===c||c,d=e.name;if(u)return f(t,n,i,d);var p=null!=o?o:r.None;if(p&r.Static){var v=t.static,g=void 0!==v&&v,h=s(t,["static"]);if(g)return f(h,n,i,d)}if(p&r.RenderStrategy){var x,y=t.unmount,E=void 0===y||y,b=s(t,["unmount"]);return m(E?a.Unmount:a.Hidden,((x={})[a.Unmount]=function(){return null},x[a.Hidden]=function(){return f(l({},b,{hidden:!0,style:{display:"none"}}),n,i,d)},x))}return f(t,n,i,d)}function f(e,t,n,r){var a;void 0===t&&(t={});var i=p(e,["unmount","static"]),l=i.as,c=void 0===l?n:l,m=i.children,d=i.refName,f=void 0===d?"ref":d,v=s(i,["as","children","refName"]),g=void 0!==e.ref?((a={})[f]=e.ref,a):{},h="function"==typeof m?m(t):m;if(v.className&&"function"==typeof v.className&&(v.className=v.className(t)),c===o.Fragment&&Object.keys(v).length>0){if(!(0,o.isValidElement)(h)||Array.isArray(h)&&h.length>1)throw new Error(['Passing props on "Fragment"!',"","The current component <"+r+' /> is rendering a "Fragment".',"However we need to passthrough the following props:",Object.keys(v).map((function(e){return"  - "+e})).join("\n"),"","You can apply a few solutions:",['Add an `as="..."` prop, to ensure that we render an actual element instead of a "Fragment".',"Render a single element as the child so that we can forward the props onto that element."].map((function(e){return"  - "+e})).join("\n")].join("\n"));return(0,o.cloneElement)(h,Object.assign({},function(e,t,n){for(var r,a=Object.assign({},e),i=function(){var n,i=r.value;void 0!==e[i]&&void 0!==t[i]&&Object.assign(a,((n={})[i]=function(n){n.defaultPrevented||e[i](n),n.defaultPrevented||t[i](n)},n))},o=u(n);!(r=o()).done;)i();return a}(function(e){var t=Object.assign({},e);for(var n in t)void 0===t[n]&&delete t[n];return t}(p(v,["ref"])),h.props,["onClick"]),g))}return(0,o.createElement)(c,Object.assign({},p(v,["ref"]),c!==o.Fragment&&g),h)}function p(e,t){void 0===t&&(t=[]);for(var n,r=Object.assign({},e),a=u(t);!(n=a()).done;){var i=n.value;i in r&&delete r[i]}return r}!function(e){e[e.None=0]="None",e[e.RenderStrategy=1]="RenderStrategy",e[e.Static=2]="Static"}(r||(r={})),function(e){e[e.Unmount=0]="Unmount",e[e.Hidden=1]="Hidden"}(a||(a={}));var v="undefined"!=typeof window?o.useLayoutEffect:o.useEffect,g={serverHandoffComplete:!1};function h(){var e=(0,o.useState)(g.serverHandoffComplete),t=e[0],n=e[1];return(0,o.useEffect)((function(){!0!==t&&n(!0)}),[t]),(0,o.useEffect)((function(){!1===g.serverHandoffComplete&&(g.serverHandoffComplete=!0)}),[]),t}var x=0;function y(){return++x}var E,b,w=(0,o.createContext)(null);function N(){return(0,o.useContext)(w)}function C(e){var t=e.value,n=e.children;return o.createElement(w.Provider,{value:t},n)}function k(){var e=(0,o.useRef)(!0);return(0,o.useEffect)((function(){e.current=!1}),[]),e.current}function T(){var e=[],t={requestAnimationFrame:function(e){function t(){return e.apply(this,arguments)}return t.toString=function(){return e.toString()},t}((function(){var e=requestAnimationFrame.apply(void 0,arguments);t.add((function(){return cancelAnimationFrame(e)}))})),nextFrame:function(){for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];t.requestAnimationFrame((function(){t.requestAnimationFrame.apply(t,n)}))},setTimeout:function(e){function t(){return e.apply(this,arguments)}return t.toString=function(){return e.toString()},t}((function(){var e=setTimeout.apply(void 0,arguments);t.add((function(){return clearTimeout(e)}))})),add:function(t){e.push(t)},dispose:function(){for(var t,n=u(e.splice(0));!(t=n()).done;){var r=t.value;r()}}};return t}function j(e){for(var t,n=arguments.length,r=new Array(n>1?n-1:0),a=1;a<n;a++)r[a-1]=arguments[a];e&&r.length>0&&(t=e.classList).add.apply(t,r)}function S(e){for(var t,n=arguments.length,r=new Array(n>1?n-1:0),a=1;a<n;a++)r[a-1]=arguments[a];e&&r.length>0&&(t=e.classList).remove.apply(t,r)}function O(e,t,n,r,a,i){var o=T(),l=void 0!==i?function(e){var t={called:!1};return function(){if(!t.called)return t.called=!0,e.apply(void 0,arguments)}}(i):function(){};return S.apply(void 0,[e].concat(a)),j.apply(void 0,[e].concat(t,n)),o.nextFrame((function(){S.apply(void 0,[e].concat(n)),j.apply(void 0,[e].concat(r)),o.add(function(e,t){var n=T();if(!e)return n.dispose;var r=getComputedStyle(e),a=[r.transitionDuration,r.transitionDelay].map((function(e){var t=e.split(",").filter(Boolean).map((function(e){return e.includes("ms")?parseFloat(e):1e3*parseFloat(e)})).sort((function(e,t){return t-e}))[0];return void 0===t?0:t})),i=a[0],o=a[1];return 0!==i?n.setTimeout((function(){t(b.Finished)}),i+o):t(b.Finished),n.add((function(){return t(b.Cancelled)})),n.dispose}(e,(function(n){return S.apply(void 0,[e].concat(r,t)),j.apply(void 0,[e].concat(a)),l(n)})))})),o.add((function(){return S.apply(void 0,[e].concat(t,n,r,a))})),o.add((function(){return l(b.Cancelled)})),o.dispose}function H(e){return void 0===e&&(e=""),(0,o.useMemo)((function(){return e.split(" ").filter((function(e){return e.trim().length>1}))}),[e])}w.displayName="OpenClosedContext",function(e){e[e.Open=0]="Open",e[e.Closed=1]="Closed"}(E||(E={})),function(e){e.Finished="finished",e.Cancelled="cancelled"}(b||(b={}));var F,A=(0,o.createContext)(null);A.displayName="TransitionContext",function(e){e.Visible="visible",e.Hidden="hidden"}(F||(F={}));var L=(0,o.createContext)(null);function V(e){return"children"in e?V(e.children):e.current.filter((function(e){return e.state===F.Visible})).length>0}function M(e){var t=(0,o.useRef)(e),n=(0,o.useRef)([]),r=function(){var e=(0,o.useRef)(!1);return(0,o.useEffect)((function(){return e.current=!0,function(){e.current=!1}}),[]),e}();(0,o.useEffect)((function(){t.current=e}),[e]);var i=(0,o.useCallback)((function(e,i){var o;void 0===i&&(i=a.Hidden);var l=n.current.findIndex((function(t){return t.id===e}));-1!==l&&(m(i,((o={})[a.Unmount]=function(){n.current.splice(l,1)},o[a.Hidden]=function(){n.current[l].state=F.Hidden},o)),!V(n)&&r.current&&(null==t.current||t.current()))}),[t,r,n]),l=(0,o.useCallback)((function(e){var t=n.current.find((function(t){return t.id===e}));return t?t.state!==F.Visible&&(t.state=F.Visible):n.current.push({id:e,state:F.Visible}),function(){return i(e,a.Unmount)}}),[n,i]);return(0,o.useMemo)((function(){return{children:n,register:l,unregister:i}}),[l,i,n])}function R(){}L.displayName="NestingContext";var q=["beforeEnter","afterEnter","beforeLeave","afterLeave"];function P(e){for(var t,n={},r=u(q);!(t=r()).done;){var a,i=t.value;n[i]=null!=(a=e[i])?a:R}return n}var I=r.RenderStrategy;function z(e){var t,n=e.beforeEnter,r=e.afterEnter,i=e.beforeLeave,c=e.afterLeave,u=e.enter,f=e.enterFrom,p=e.enterTo,g=e.entered,x=e.leave,w=e.leaveFrom,N=e.leaveTo,T=s(e,["beforeEnter","afterEnter","beforeLeave","afterLeave","enter","enterFrom","enterTo","entered","leave","leaveFrom","leaveTo"]),j=(0,o.useRef)(null),S=(0,o.useState)(F.Visible),R=S[0],q=S[1],z=T.unmount?a.Unmount:a.Hidden,D=function(){var e=(0,o.useContext)(A);if(null===e)throw new Error("A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.");return e}(),G=D.show,U=D.appear,W=function(){var e=(0,o.useContext)(L);if(null===e)throw new Error("A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.");return e}(),B=W.register,_=W.unregister,J=k(),X=function(){var e=h(),t=(0,o.useState)(e?y:null),n=t[0],r=t[1];return v((function(){null===n&&r(y())}),[n]),null!=n?""+n:void 0}(),Y=(0,o.useRef)(!1),Z=M((function(){Y.current||(q(F.Hidden),_(X),ae.current.afterLeave())}));v((function(){if(X)return B(X)}),[B,X]),v((function(){var e;z===a.Hidden&&X&&(G&&R!==F.Visible?q(F.Visible):m(R,((e={})[F.Hidden]=function(){return _(X)},e[F.Visible]=function(){return B(X)},e)))}),[R,X,B,_,G,z]);var $=H(u),K=H(f),Q=H(p),ee=H(g),te=H(x),ne=H(w),re=H(N),ae=function(e){var t=(0,o.useRef)(P(e));return(0,o.useEffect)((function(){t.current=P(e)}),[e]),t}({beforeEnter:n,afterEnter:r,beforeLeave:i,afterLeave:c}),ie=h();(0,o.useEffect)((function(){if(ie&&R===F.Visible&&null===j.current)throw new Error("Did you forget to passthrough the `ref` to the actual DOM node?")}),[j,R,ie]);var oe=J&&!U;v((function(){var e=j.current;if(e&&!oe)return Y.current=!0,G&&ae.current.beforeEnter(),G||ae.current.beforeLeave(),G?O(e,$,K,Q,ee,(function(e){Y.current=!1,e===b.Finished&&ae.current.afterEnter()})):O(e,te,ne,re,ee,(function(e){Y.current=!1,e===b.Finished&&(V(Z)||(q(F.Hidden),_(X),ae.current.afterLeave()))}))}),[ae,X,Y,_,Z,j,oe,G,$,K,Q,te,ne,re]);var le={ref:j},se=T;return o.createElement(L.Provider,{value:Z},o.createElement(C,{value:m(R,(t={},t[F.Visible]=E.Open,t[F.Hidden]=E.Closed,t))},d({props:l({},se,le),defaultTag:"div",features:I,visible:R===F.Visible,name:"Transition.Child"})))}function D(e){var t,n=e.show,r=e.appear,a=void 0!==r&&r,i=e.unmount,c=s(e,["show","appear","unmount"]),u=N();void 0===n&&null!==u&&(n=m(u,((t={})[E.Open]=!0,t[E.Closed]=!1,t)));if(![!0,!1].includes(n))throw new Error("A <Transition /> is used but it is missing a `show={true | false}` prop.");var f=(0,o.useState)(n?F.Visible:F.Hidden),p=f[0],v=f[1],g=M((function(){v(F.Hidden)})),h=k(),x=(0,o.useMemo)((function(){return{show:n,appear:a||!h}}),[n,a,h]);(0,o.useEffect)((function(){n?v(F.Visible):V(g)||v(F.Hidden)}),[n,g]);var y={unmount:i};return o.createElement(L.Provider,{value:g},o.createElement(A.Provider,{value:x},d({props:l({},y,{as:o.Fragment,children:o.createElement(z,Object.assign({},y,c))}),defaultTag:o.Fragment,features:I,visible:p===F.Visible,name:"Transition"})))}D.Child=function(e){var t=null!==(0,o.useContext)(A),n=null!==N();return!t&&n?o.createElement(D,Object.assign({},e)):o.createElement(z,Object.assign({},e))},D.Root=D;var G=n(8014),U=n(9519),W=function(){var e=(0,o.useState)(!1),t=e[0],n=e[1];return o.createElement("div",{className:"sticky top-0 z-50"},o.createElement("nav",{className:"bg-gray-800"},o.createElement("div",{className:"max-w-7xl mr-auto px-4 sm:px-6 lg:px-8"},o.createElement("div",{className:"flex items-center justify-between h-16"},o.createElement("div",{className:"-mr-2 flex"},o.createElement("button",{onClick:function(){return n(!t)},type:"button",className:"bg-gray-900 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white","aria-controls":"menu","aria-expanded":"false"},o.createElement("span",{className:"sr-only"},"Open main menu"),t?o.createElement("svg",{className:"block h-6 w-6",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","aria-hidden":"true"},o.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M6 18L18 6M6 6l12 12"})):o.createElement(U.G,{className:"text-2xl",icon:G.z1q}))))),o.createElement(D,{show:t,enter:"transition ease-out duration-100 transform",enterFrom:"opacity-0 scale-95",enterTo:"opacity-100 scale-100",leave:"transition ease-in duration-75 transform",leaveFrom:"opacity-100 scale-100",leaveTo:"opacity-0 scale-95"},(function(e){return o.createElement("div",{id:"menu"},o.createElement("div",{ref:e,className:"px-2 pt-2 pb-3 space-y-1 sm:px-3"},o.createElement("a",{href:"/",className:"hover:bg-gray-700 text-white block px-3 py-2 rounded-md text-base font-medium"},"Dashboard"),o.createElement("a",{href:"/",className:"text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"},"Team"),o.createElement("a",{href:"/",className:"text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"},"Team"),o.createElement("a",{href:"/",className:"text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"},"Team"),o.createElement("a",{href:"/",className:"text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"},"Team"),o.createElement("a",{href:"/",className:"text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"},"Team")))}))))},B=function(){return o.createElement("footer",{className:"px-4 divide-y bg-coolGray-100 text-coolGray-800"},o.createElement("div",{className:"container flex flex-col justify-between py-10 mx-auto space-y-8 lg:flex-row lg:space-y-0"},o.createElement("div",{className:"lg:w-1/3"},o.createElement("a",{href:"/",className:"flex justify-center"},o.createElement("span",{className:"self-center text-2xl font-semibold"},"SPEC NITH"))),o.createElement("div",{className:"grid grid-cols-2 text-sm gap-x-3 gap-y-8 lg:w-2/3 sm:grid-cols-4"},o.createElement("div",{className:"space-y-3 space-x-3"},o.createElement("h3",{className:"tracking-wide mb-6 uppercase text-coolGray-900"},"Product")),o.createElement("div",{className:"space-y-3"},o.createElement("h3",{className:"tracking-wide mb-6 uppercase text-coolGray-900"},"Company")),o.createElement("div",{className:"space-y-3"},o.createElement("h3",{className:"uppercase mb-6 text-coolGray-900"},"Developers")),o.createElement("div",{className:"space-y-3"},o.createElement("div",{className:"uppercase text-coolGray-900"},"Social media"),o.createElement("div",{className:"flex justify-start space-x-3"},o.createElement("a",{href:"/",title:"Facebook",className:"flex items-center p-1"},o.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"currentColor",viewBox:"0 0 32 32",className:"w-5 h-5 fillCurrent"},o.createElement("path",{d:"M32 16c0-8.839-7.167-16-16-16-8.839 0-16 7.161-16 16 0 7.984 5.849 14.604 13.5 15.803v-11.177h-4.063v-4.625h4.063v-3.527c0-4.009 2.385-6.223 6.041-6.223 1.751 0 3.584 0.312 3.584 0.312v3.937h-2.021c-1.984 0-2.604 1.235-2.604 2.5v3h4.437l-0.713 4.625h-3.724v11.177c7.645-1.199 13.5-7.819 13.5-15.803z"}))),o.createElement("a",{href:"/",title:"Twitter",className:"flex items-center p-1"},o.createElement("svg",{viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",className:"w-5 h-5 fillCurrent"},o.createElement("path",{d:"M23.954 4.569a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.691 8.094 4.066 6.13 1.64 3.161a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.061a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.937 4.937 0 004.604 3.417 9.868 9.868 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.054 0 13.999-7.496 13.999-13.986 0-.209 0-.42-.015-.63a9.936 9.936 0 002.46-2.548l-.047-.02z"}))),o.createElement("a",{href:"/",title:"Instagram",className:"flex items-center p-1"},o.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",fill:"currentColor",className:"w-5 h-5 fillCurrent"},o.createElement("path",{d:"M16 0c-4.349 0-4.891 0.021-6.593 0.093-1.709 0.084-2.865 0.349-3.885 0.745-1.052 0.412-1.948 0.959-2.833 1.849-0.891 0.885-1.443 1.781-1.849 2.833-0.396 1.020-0.661 2.176-0.745 3.885-0.077 1.703-0.093 2.244-0.093 6.593s0.021 4.891 0.093 6.593c0.084 1.704 0.349 2.865 0.745 3.885 0.412 1.052 0.959 1.948 1.849 2.833 0.885 0.891 1.781 1.443 2.833 1.849 1.020 0.391 2.181 0.661 3.885 0.745 1.703 0.077 2.244 0.093 6.593 0.093s4.891-0.021 6.593-0.093c1.704-0.084 2.865-0.355 3.885-0.745 1.052-0.412 1.948-0.959 2.833-1.849 0.891-0.885 1.443-1.776 1.849-2.833 0.391-1.020 0.661-2.181 0.745-3.885 0.077-1.703 0.093-2.244 0.093-6.593s-0.021-4.891-0.093-6.593c-0.084-1.704-0.355-2.871-0.745-3.885-0.412-1.052-0.959-1.948-1.849-2.833-0.885-0.891-1.776-1.443-2.833-1.849-1.020-0.396-2.181-0.661-3.885-0.745-1.703-0.077-2.244-0.093-6.593-0.093zM16 2.88c4.271 0 4.781 0.021 6.469 0.093 1.557 0.073 2.405 0.333 2.968 0.553 0.751 0.291 1.276 0.635 1.844 1.197 0.557 0.557 0.901 1.088 1.192 1.839 0.22 0.563 0.48 1.411 0.553 2.968 0.072 1.688 0.093 2.199 0.093 6.469s-0.021 4.781-0.099 6.469c-0.084 1.557-0.344 2.405-0.563 2.968-0.303 0.751-0.641 1.276-1.199 1.844-0.563 0.557-1.099 0.901-1.844 1.192-0.556 0.22-1.416 0.48-2.979 0.553-1.697 0.072-2.197 0.093-6.479 0.093s-4.781-0.021-6.48-0.099c-1.557-0.084-2.416-0.344-2.979-0.563-0.76-0.303-1.281-0.641-1.839-1.199-0.563-0.563-0.921-1.099-1.197-1.844-0.224-0.556-0.48-1.416-0.563-2.979-0.057-1.677-0.084-2.197-0.084-6.459 0-4.26 0.027-4.781 0.084-6.479 0.083-1.563 0.339-2.421 0.563-2.979 0.276-0.761 0.635-1.281 1.197-1.844 0.557-0.557 1.079-0.917 1.839-1.199 0.563-0.219 1.401-0.479 2.964-0.557 1.697-0.061 2.197-0.083 6.473-0.083zM16 7.787c-4.541 0-8.213 3.677-8.213 8.213 0 4.541 3.677 8.213 8.213 8.213 4.541 0 8.213-3.677 8.213-8.213 0-4.541-3.677-8.213-8.213-8.213zM16 21.333c-2.948 0-5.333-2.385-5.333-5.333s2.385-5.333 5.333-5.333c2.948 0 5.333 2.385 5.333 5.333s-2.385 5.333-5.333 5.333zM26.464 7.459c0 1.063-0.865 1.921-1.923 1.921-1.063 0-1.921-0.859-1.921-1.921 0-1.057 0.864-1.917 1.921-1.917s1.923 0.86 1.923 1.917z"}))))))),o.createElement("div",{className:"py-6 text-sm text-center text-coolGray-600"},"© 2021 SPEC NITH. All rights reserved."))},_=n.p+"static/photo1-49b530af5459d69b8168e4d230e1cdf0.jpg",J=function(e){return o.createElement("div",{className:"max-w-sm rounded overflow-hidden shadow-lg text-center"},o.createElement("img",{className:"w-full",src:_,alt:"Project1"}),o.createElement("div",{className:"px-6 py-4"},o.createElement("div",{className:"font-bold text-xl mb-2"},e.title),o.createElement("p",{className:"text-gray-700 text-base"},e.description),o.createElement("div",{className:"pt-12"},o.createElement("button",{className:"bg-green-700 hover:bg-green-900 text-white font-bold py-2 px-4 rounded-full"},"PROJECTS"))))},X=function(e){return o.createElement("div",null,o.createElement("header",{className:"bg-white shadow"},o.createElement("div",{className:"max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8"},o.createElement("h1",{className:"text-3xl font-bold text-gray-900 text-center"},e.title))),e.text?o.createElement("main",null,o.createElement("div",{className:"max-w-7xl mx-auto py-6 sm:px-6 lg:px-8"},o.createElement("div",{className:"px-4 py-6 sm:px-0"},o.createElement("div",{className:"border-4 border-gray-200 rounded-lg text-xl h-auto"},e.text)))):null)},Y=n.p+"static/yagami-d482daecd457d999f8a6f64514119c6d.jpg",Z=n(7190),$=function(e){return o.createElement("div",{className:"max-w-4xl flex items-center h-auto lg:h-auto flex-wrap mx-auto my-20 lg:my-10"},o.createElement("div",{id:"profile",className:"w-full lg:w-3/5 rounded-lg lg:rounded-l-lg lg:rounded-r-none shadow-2xl bg-white opacity-75 mx-6 lg:mx-0"},o.createElement("div",{className:"p-4 md:p-12 text-center lg:text-left"},o.createElement("div",{className:"block lg:hidden rounded-full shadow-xl mx-auto -mt-16 h-48 w-48 bg-cover bg-center",style:{backgroundImage:"url("+Y+")"}}),o.createElement("h1",{className:"text-3xl font-bold pt-8 lg:pt-0"},e.name),o.createElement("div",{className:"mx-auto lg:mx-0 w-4/5 pt-3 border-b-2 border-green-500 opacity-25"}),o.createElement("div",{className:"flex items-center justify-center lg:justify-start"},o.createElement("div",{className:"pt-4"},o.createElement(U.G,{icon:G.HXv})),o.createElement("div",{className:"pt-4 pl-2"},o.createElement("p",{className:"text-base font-bold"},"Position"))),o.createElement("p",{className:"pt-8 text-sm"},e.description),o.createElement("div",{className:"mt-6 pb-16 lg:pb-0 w-4/5 lg:w-full mx-auto text-center space-x-3"},o.createElement("a",{className:"link text-3xl",href:e.github,target:"_blank",rel:"noreferrer noopener"},o.createElement(U.G,{icon:Z.zhw})),o.createElement("a",{className:"link text-3xl",href:e.linkedIn,target:"_blank",rel:"noreferrer noopener"},o.createElement(U.G,{icon:Z.D9H}))))),o.createElement("div",{className:"w-full lg:w-2/5"},o.createElement("img",{src:Y,alt:"pic",className:"rounded-none lg:rounded-lg shadow-2xl hidden lg:block"})))},K=n(6633),Q=n.n(K),ee=function(e){function t(){for(var t,n=arguments.length,r=new Array(n),a=0;a<n;a++)r[a]=arguments[a];return(t=e.call.apply(e,[this].concat(r))||this).state={data:[]},t}(0,i.Z)(t,e);var n=t.prototype;return n.componentDidMount=function(){var e=this;Q().get("https://spec-backend.herokuapp.com/api/team/").then((function(t){console.log(t.data),e.setState({data:t.data})})).catch((function(e){console.log(e)}))},n.render=function(){return o.createElement(o.Fragment,null,o.createElement(W,null),o.createElement("div",{className:"relative"},o.createElement(X,{title:"Dashboard",text:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil."}),o.createElement(X,{title:"WHO WE ARE?",text:"SPEC is being run under the aegis of the Electronics and Communication Department, NIT Hamirpur. We at SPEC, organize various events, workshops, and competitions to pique the scientific temperament of the students. The society is reputed for conducting a national level hackathon: ELECTROTHON, one of the most ingenious and diverse hackathon. ELECTROTHON has been a budding ground to many mind-boggling ideas and inventions, a platform for the upcoming innovators and bold entrepreneurs. The event is majorly manifested by guest-talks, project exhibitions and a 48 hour grinding hackathon. It also conducts its yearly technical fest, SPEC FEST covering advancements and marvels of the tech world, along with a display of year-long projects. Comprising events, workshops and exhibitions that provide diverse opportunities for students to enlighten their inquisitive minds. Students work all year long in building projects, organising workshops and thriving to create a change. SPEC believes in giving a platform to the young, dynamic, eager to learn engineers to convert their theoretical knowledge into useful innovative projects."}),o.createElement(X,{title:"WHAT WE DO?"}),o.createElement("main",null,o.createElement("div",{className:"max-w-7xl mx-auto py-6 sm:px-6 lg:px-8"},o.createElement("div",{className:"px-4 py-6 sm:px-0"},o.createElement("div",{className:"rounded-lg h-auto grid lg:grid-cols-3 gap-x-3 gap-y-8 sm:grid-cols-1 md:grid-cols-2 justify-center"},this.state.data.map((function(e){return o.createElement(J,{title:e.title,description:e.description})})))))),o.createElement(X,{title:"OUR VISION"}),o.createElement("main",null,o.createElement("div",{className:"max-w-7xl mx-auto py-6 sm:px-6 lg:px-8"},o.createElement("div",{className:"px-4 py-6 sm:px-0"},o.createElement("div",{className:"rounded-lg h-auto grid gap-x-3 sm:grid-cols-1 md:grid-cols-2 justify-center"},this.state.data.map((function(e){return o.createElement($,{name:e.name,description:e.description,github:e.github_id,linkedIn:e.linkedin_id})}))))))),o.createElement(B,null))},t}(o.Component),te=ee}}]);
//# sourceMappingURL=component---src-pages-index-js-602d27a8fbd7d7bf189f.js.map