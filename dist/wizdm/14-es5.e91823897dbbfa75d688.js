!function(){function t(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,n){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(t)))return;var e=[],o=!0,a=!1,i=void 0;try{for(var r,c=t[Symbol.iterator]();!(o=(r=c.next()).done)&&(e.push(r.value),!n||e.length!==n);o=!0);}catch(u){a=!0,i=u}finally{try{o||null==c.return||c.return()}finally{if(a)throw i}}return e}(t,e)||function(t,e){if(!t)return;if("string"==typeof t)return n(t,e);var o=Object.prototype.toString.call(t).slice(8,-1);"Object"===o&&t.constructor&&(o=t.constructor.name);if("Map"===o||"Set"===o)return Array.from(t);if("Arguments"===o||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o))return n(t,e)}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function n(t,n){(null==n||n>t.length)&&(n=t.length);for(var e=0,o=new Array(n);e<n;e++)o[e]=t[e];return o}function e(t,n){return(e=Object.setPrototypeOf||function(t,n){return t.__proto__=n,t})(t,n)}function o(t){var n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(t){return!1}}();return function(){var e,o=i(t);if(n){var r=i(this).constructor;e=Reflect.construct(o,arguments,r)}else e=o.apply(this,arguments);return a(this,e)}}function a(t,n){return!n||"object"!=typeof n&&"function"!=typeof n?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):n}function i(t){return(i=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function r(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}function c(t,n){for(var e=0;e<n.length;e++){var o=n[e];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function u(t,n,e){return n&&c(t.prototype,n),e&&c(t,e),t}(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{F1WJ:function(t,n,e){"use strict";e.r(n),e.d(n,"ProfileModule",function(){return N});var o,a=e("SVse"),i=e("g7MM"),c=e("u9T3"),l=e("Tj54"),s=e("Dxy4"),p=e("Entk"),m=e("txmD"),b=e("uaks"),f=e("kNiW"),y=e("DwbE"),g=e("lWmb"),d=e("IzEk"),h=e("lJxs"),x=e("8Y7J"),v=e("iInd"),O=((o=function(){function t(n,e){r(this,t),this.profile=n,this.router=e}return u(t,[{key:"canActivate",value:function(t,n){var e=this;return this.profile.data$.pipe(Object(d.a)(1),Object(h.a)(function(t){if(!t)return!0;var o=n.url.replace(/@me(\/|$)/,function(n,e){return"@"+t.userName+e});return o===n.url||e.router.parseUrl(o)}))}}]),t}()).\u0275fac=function(t){return new(t||o)(x.ac(g.b),x.ac(v.g))},o.\u0275prov=x.Mb({token:o,factory:o.\u0275fac}),o),w=e("eIep"),P=e("Qfjl"),k=e("OxU+"),_=e("VDRc"),C=e("mx0f"),M=e("a/j4"),I=e("ura0"),j=e("h0Qx"),D=e("U3RD");function L(t,n){if(1&t&&x.Rb(0,"wm-icon",17),2&t){var e=x.ic(4).$implicit;x.pc("icon",(null==e.actions||null==e.actions.edit?null:e.actions.edit.icon)||"edit")}}function A(t,n){if(1&t&&x.Ic(0),2&t){var e=x.ic(4).$implicit;x.Jc((null==e.actions||null==e.actions.edit?null:e.actions.edit.caption)||"Edit profile")}}function V(t,n){if(1&t&&(x.Wb(0,"button",14),x.Gc(1,L,1,1,"wm-icon",15),x.Gc(2,A,1,1,"ng-template",null,16,x.Hc),x.Vb()),2&t){var e=x.vc(3),o=x.ic().isMobile,a=x.ic(2).$implicit;x.pc("routerLink",(null==a.actions||null==a.actions.edit?null:a.actions.edit.link)||"/settings"),x.Db(1),x.pc("ngIf",o)("ngIfElse",e)}}function R(t,n){if(1&t&&x.Gc(0,V,4,3,"button",13),2&t){var e=x.ic().ngIf,o=x.ic(2);x.pc("ngIf",e.id===o.me)}}var W=function(t){return{with:t}};function $(t,n){if(1&t&&(x.Wb(0,"button",18),x.Rb(1,"wm-icon",17),x.Wb(2,"span",19),x.Ic(3),x.Vb(),x.Vb()),2&t){var e=x.ic().ngIf,o=x.ic().$implicit;x.pc("queryParams",x.sc(3,W,e.userName)),x.Db(1),x.pc("icon",(null==o.actions||null==o.actions.message?null:o.actions.message.icon)||"chat_bubble_outline"),x.Db(2),x.Jc((null==o.actions||null==o.actions.message?null:o.actions.message.caption)||"Message")}}function J(t,n){if(1&t&&(x.Wb(0,"div",3),x.Gc(1,R,1,1,"ng-template",4),x.Rb(2,"wm-avatar",5),x.Wb(3,"div",6),x.Wb(4,"div",7),x.Wb(5,"h1",8),x.Ic(6),x.Vb(),x.Gc(7,$,4,5,"button",9),x.Vb(),x.Wb(8,"span",10),x.Rb(9,"wm-icon",11),x.Ic(10),x.Vb(),x.Wb(11,"div",12),x.Wb(12,"p"),x.Ic(13),x.Vb(),x.Vb(),x.Vb(),x.Vb()),2&t){var e=n.ngIf,o=x.ic().$implicit,a=x.ic();x.Db(2),x.pc("src",e.photo),x.Db(4),x.Jc(e.fullName||e.name),x.Db(1),x.pc("ngIf",e.id!==a.me),x.Db(2),x.pc("icon",(null==o.location?null:o.location.icon)||"location_on"),x.Db(1),x.Kc(" ",e.location||(null==o.location?null:o.location.placeholder)||"Planet Earth"," "),x.Db(3),x.Jc(e.bio||(null==o.bio?null:o.bio.placeholder)||"Searching for wizdm")}}function E(t,n){if(1&t&&(x.Ub(0,1),x.Gc(1,J,14,6,"div",2),x.jc(2,"async"),x.Tb()),2&t){var e=x.ic();x.Db(1),x.pc("ngIf",x.kc(2,1,e.user$))}}var S,q=((S=function(){function t(n,e){r(this,t),this.user=n,this.user$=e.paramMap.pipe(Object(w.a)(function(t){return n.fromUserName(t.get("userName"))||n.fromUserId(t.get("userId"))}))}return u(t,[{key:"me",get:function(){return this.user.uid}}]),t}()).\u0275fac=function(t){return new(t||S)(x.Qb(g.b),x.Qb(v.a))},S.\u0275cmp=x.Kb({type:S,selectors:[["wm-profile"]],decls:1,vars:1,consts:[["scrollPositionRestoration","top","gtag","profile",4,"wmContent","wmContentSelect"],["scrollPositionRestoration","top","gtag","profile"],["class","banner","fxLayout","row","fxLayoutAlign","start start","fxLayout.lt-sm","column","fxLayoutAlign.lt-sm","start center",4,"ngIf"],["fxLayout","row","fxLayoutAlign","start start","fxLayout.lt-sm","column","fxLayoutAlign.lt-sm","start center",1,"banner"],["wmActionbar",""],["color","primary","shape","squared",1,"photo",3,"src"],["fxLayout","column",1,"text"],["fxLayout","row","fxLayoutAlign","space-between start",1,"title"],["ngClass.gt-xs","mat-display-1"],["mat-flat-button","","type.lt-sm","mini-fab","color","primary","class","edit","routerLink","/chat",3,"queryParams",4,"ngIf"],["fxLayout","row","fxLayoutAlign","start center",1,"location"],["inline","",3,"icon"],[1,"wrapper"],["mat-stroked-button","","type.lt-sm","icon","color","primary","class","edit",3,"routerLink",4,"ngIf"],["mat-stroked-button","","type.lt-sm","icon","color","primary",1,"edit",3,"routerLink"],[3,"icon",4,"ngIf","ngIfElse"],["editProfile",""],[3,"icon"],["mat-flat-button","","type.lt-sm","mini-fab","color","primary","routerLink","/chat",1,"edit",3,"queryParams"],["fxHide.lt-sm",""]],template:function(t,n){1&t&&x.Gc(0,E,3,3,"ng-container",0),2&t&&x.pc("wmContentSelect","profile")},directives:[P.a,k.a,a.m,_.e,_.d,C.a,M.a,I.a,j.a,s.b,D.a,v.h,I.b],pipes:[a.b],styles:["[_nghost-%COMP%]{position:relative;min-height:100%;padding-top:5vw;display:flex;flex-direction:column;align-items:center}[_nghost-%COMP%]   .banner[_ngcontent-%COMP%]{margin:16px}[_nghost-%COMP%]   .banner[_ngcontent-%COMP%]   .photo[_ngcontent-%COMP%]{width:150px;height:150px;-o-object-fit:cover;object-fit:cover;margin:0 24px 24px}[_nghost-%COMP%]   .banner[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%]{position:relative;min-width:320px;max-width:100%}[_nghost-%COMP%]   .banner[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   .edit[_ngcontent-%COMP%]{margin-left:24px}[_nghost-%COMP%]   .banner[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%]   .location[_ngcontent-%COMP%]{padding-bottom:8px;opacity:.5}[_nghost-%COMP%]   .banner[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]{position:relative;width:100%}[_nghost-%COMP%]   .banner[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{position:absolute;text-align:justify}"]}),S);e("J3Me");var Q,U=[{path:"",content:"profile",component:q,canActivate:[O]}],N=((Q=function t(){r(this,t)}).\u0275mod=x.Ob({type:Q}),Q.\u0275inj=x.Nb({factory:function(t){return new(t||Q)},providers:[O],imports:[[a.c,c.a,l.b,s.c,p.a,m.a,b.a,y.b,f.a,i.e.forChild(U)]]}),Q)},U3RD:function(n,a,i){"use strict";i.d(a,"a",function(){return f});var c=i("6920"),l=i("2Vo4"),s=i("itXk"),p=i("8Y7J"),m=i("/q54"),b=i("Dxy4"),f=function(){var n=function(n){!function(t,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(n&&n.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),n&&e(t,n)}(i,n);var a=o(i);function i(n,e,o){var c;return r(this,i),(c=a.call(this,e,o)).queries$=new l.a({}),c.sub=Object(s.a)(c.queries$,n.asObservable()).subscribe(function(n){var e=t(n,2),o=e[0],a=e[1];c.type=a.reduce(function(t,n){return o[n.mqAlias]||t},void 0)}),c}return u(i,[{key:"ngOnChanges",value:function(t){this.queries$.next(Object.keys(t).reduce(function(n,e){var o=t[e].previousValue,a=t[e].currentValue,i=e.split(".")[1];return o&&n[i]&&delete n[i],a&&(n[i]=a),n},Object.assign({},this.queries$.value)))}},{key:"ngOnDestroy",value:function(){this.sub.unsubscribe()}}]),i}(c.a);return n.\u0275fac=function(t){return new(t||n)(p.Qb(m.g),p.Qb(b.b,10),p.Qb(b.a,10))},n.\u0275dir=p.Lb({type:n,selectors:[["","mat-button","","type.xs",""],["","mat-button","","type.sm",""],["","mat-button","","type.md",""],["","mat-button","","type.lg",""],["","mat-button","","type.xl",""],["","mat-button","","type.lt-sm",""],["","mat-button","","type.lt-md",""],["","mat-button","","type.lt-lg",""],["","mat-button","","type.lt-xl",""],["","mat-button","","type.gt-xs",""],["","mat-button","","type.gt-sm",""],["","mat-button","","type.gt-md",""],["","mat-button","","type.gt-lg",""],["","mat-flat-button","","type.xs",""],["","mat-flat-button","","type.sm",""],["","mat-flat-button","","type.md",""],["","mat-flat-button","","type.lg",""],["","mat-flat-button","","type.xl",""],["","mat-flat-button","","type.lt-sm",""],["","mat-flat-button","","type.lt-md",""],["","mat-flat-button","","type.lt-lg",""],["","mat-flat-button","","type.lt-xl",""],["","mat-flat-button","","type.gt-xs",""],["","mat-flat-button","","type.gt-sm",""],["","mat-flat-button","","type.gt-md",""],["","mat-flat-button","","type.gt-lg",""],["","mat-icon-button","","type.xs",""],["","mat-icon-button","","type.sm",""],["","mat-icon-button","","type.md",""],["","mat-icon-button","","type.lg",""],["","mat-icon-button","","type.xl",""],["","mat-icon-button","","type.lt-sm",""],["","mat-icon-button","","type.lt-md",""],["","mat-icon-button","","type.lt-lg",""],["","mat-icon-button","","type.lt-xl",""],["","mat-icon-button","","type.gt-xs",""],["","mat-icon-button","","type.gt-sm",""],["","mat-icon-button","","type.gt-md",""],["","mat-icon-button","","type.gt-lg",""],["","mat-raised-button","","type.xs",""],["","mat-raised-button","","type.sm",""],["","mat-raised-button","","type.md",""],["","mat-raised-button","","type.lg",""],["","mat-raised-button","","type.xl",""],["","mat-raised-button","","type.lt-sm",""],["","mat-raised-button","","type.lt-md",""],["","mat-raised-button","","type.lt-lg",""],["","mat-raised-button","","type.lt-xl",""],["","mat-raised-button","","type.gt-xs",""],["","mat-raised-button","","type.gt-sm",""],["","mat-raised-button","","type.gt-md",""],["","mat-raised-button","","type.gt-lg",""],["","mat-stroked-button","","type.xs",""],["","mat-stroked-button","","type.sm",""],["","mat-stroked-button","","type.md",""],["","mat-stroked-button","","type.lg",""],["","mat-stroked-button","","type.xl",""],["","mat-stroked-button","","type.lt-sm",""],["","mat-stroked-button","","type.lt-md",""],["","mat-stroked-button","","type.lt-lg",""],["","mat-stroked-button","","type.lt-xl",""],["","mat-stroked-button","","type.gt-xs",""],["","mat-stroked-button","","type.gt-sm",""],["","mat-stroked-button","","type.gt-md",""],["","mat-stroked-button","","type.gt-lg",""],["","mat-mini-fab","","type.xs",""],["","mat-mini-fab","","type.sm",""],["","mat-mini-fab","","type.md",""],["","mat-mini-fab","","type.lg",""],["","mat-mini-fab","","type.xl",""],["","mat-mini-fab","","type.lt-sm",""],["","mat-mini-fab","","type.lt-md",""],["","mat-mini-fab","","type.lt-lg",""],["","mat-mini-fab","","type.lt-xl",""],["","mat-mini-fab","","type.gt-xs",""],["","mat-mini-fab","","type.gt-sm",""],["","mat-mini-fab","","type.gt-md",""],["","mat-mini-fab","","type.gt-lg",""],["","mat-fab","","type.xs",""],["","mat-fab","","type.sm",""],["","mat-fab","","type.md",""],["","mat-fab","","type.lg",""],["","mat-fab","","type.xl",""],["","mat-fab","","type.lt-sm",""],["","mat-fab","","type.lt-md",""],["","mat-fab","","type.lt-lg",""],["","mat-fab","","type.lt-xl",""],["","mat-fab","","type.gt-xs",""],["","mat-fab","","type.gt-sm",""],["","mat-fab","","type.gt-md",""],["","mat-fab","","type.gt-lg",""]],inputs:{"type.xs":"type.xs","type.sm":"type.sm","type.md":"type.md","type.lg":"type.lg","type.xl":"type.xl","type.lt-sm":"type.lt-sm","type.lt-md":"type.lt-md","type.lt-lg":"type.lt-lg","type.lt-xl":"type.lt-xl","type.gt-xs":"type.gt-xs","type.gt-sm":"type.gt-sm","type.gt-md":"type.gt-md","type.gt-lg":"type.gt-lg"},features:[p.Ab,p.Bb]}),n}()},kNiW:function(t,n,e){"use strict";e.d(n,"a",function(){return o.a}),e("8LU1"),e("8Y7J"),e("/q54"),e("Dxy4"),e("U3RD"),e("SVse"),e("h0Qx"),e("mx0f");var o=e("Dfl8")},mx0f:function(t,n,e){"use strict";e.d(n,"a",function(){return i});var o=e("EiPp"),a=e("8Y7J"),i=function(){var t=function(){function t(n,e){r(this,t),this.teleport=n,this.template=e}return u(t,[{key:"activate",value:function(t){this.teleport.activate("actionbar",this.template,this.data=t)}},{key:"ngOnInit",value:function(){this.data||this.activate()}},{key:"ngOnChanges",value:function(t){this.activate(t.data.currentValue)}},{key:"ngOnDestroy",value:function(){this.teleport.clear("actionbar",this.template)}}]),t}();return t.\u0275fac=function(n){return new(n||t)(a.Qb(o.b),a.Qb(a.O))},t.\u0275dir=a.Lb({type:t,selectors:[["ng-template","wmActionbar",""]],inputs:{data:"data"},exportAs:["wmActionbar"],features:[a.Bb]}),t}()}}])}();