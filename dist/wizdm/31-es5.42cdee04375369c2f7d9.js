!function(){function t(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}function n(t,e){return(n=Object.setPrototypeOf||function(t,n){return t.__proto__=n,t})(t,e)}function e(t){var n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(t){return!1}}();return function(){var e,r=c(t);if(n){var i=c(this).constructor;e=Reflect.construct(r,arguments,i)}else e=r.apply(this,arguments);return o(this,e)}}function o(t,n){return!n||"object"!=typeof n&&"function"!=typeof n?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):n}function c(t){return(c=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{MYpo:function(o,c,r){"use strict";r.r(c),r.d(c,"FeaturesComponent",function(){return P}),r.d(c,"FeaturesModule",function(){return C});var i=r("SVse"),a=r("iInd"),l=r("u9T3"),u=r("CSIE"),f=r("EycX"),s=r("txmD"),p=r("C1VQ"),d=r("5EYB"),b=r("8Y7J"),g=r("VDRc"),m=r("/H1K"),x=r("V/MM"),O=r("h0Qx"),w=r("n8oj");function h(t,n){if(1&t&&(b.Wb(0,"div",9),b.Ic(1),b.Vb()),2&t){var e=b.ic().$implicit;b.Db(1),b.Jc(e.comingSoon)}}function _(t,n){if(1&t&&(b.Wb(0,"div",10),b.Ic(1),b.Vb()),2&t){var e=b.ic().$implicit;b.Db(1),b.Jc(e.experimental)}}function v(t,n){if(1&t&&(b.Wb(0,"div",2),b.Wb(1,"div",3),b.Wb(2,"div",4),b.Rb(3,"wm-icon",5),b.Wb(4,"h2"),b.Wb(5,"b"),b.Ic(6),b.Vb(),b.Vb(),b.Vb(),b.Rb(7,"p",6),b.Gc(8,h,2,1,"div",7),b.Gc(9,_,2,1,"div",8),b.Vb(),b.Vb()),2&t){var e=n.$implicit,o=b.ic();b.Db(1),b.pc("wmAnimate",e.animation||o.config.defaultAnimation||"none"),b.Db(1),b.pc("wmRedirect",e.url),b.Db(1),b.pc("icon",e.icon),b.Db(3),b.Jc(e.title),b.Db(1),b.pc("wm-readme",e.description),b.Db(1),b.pc("ngIf",e.comingSoon),b.Db(1),b.pc("ngIf",e.experimental)}}var P=function(){var o=function(o){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&n(t,e)}(r,o);var c=e(r);function r(){return t(this,r),c.apply(this,arguments)}return r}(d.a);return o.\u0275fac=function(t){return y(t||o)},o.\u0275cmp=b.Kb({type:o,selectors:[["wm-feature-matrix"]],features:[b.Ab],decls:2,vars:1,consts:[["fxLayout","row wrap","fxLayout.lt-sm","column",1,"row"],["class","cell","fxFlex","33.3%","fxFlex.lt-md","50%","fxFlex.lt-sm","100%",4,"ngFor","ngForOf"],["fxFlex","33.3%","fxFlex.lt-md","50%","fxFlex.lt-sm","100%",1,"cell"],["aos","",1,"content","mat-elevation-z2",3,"wmAnimate"],[1,"goto",3,"wmRedirect"],[1,"icon",3,"icon"],[3,"wm-readme"],["class","tag accent background-color-default contrast-default mat-small",4,"ngIf"],["class","tag warn background-color-default contrast-default mat-small",4,"ngIf"],[1,"tag","accent","background-color-default","contrast-default","mat-small"],[1,"tag","warn","background-color-default","contrast-default","mat-small"]],template:function(t,n){1&t&&(b.Wb(0,"div",0),b.Gc(1,v,10,7,"div",1),b.Vb()),2&t&&(b.Db(1),b.pc("ngForOf",n.config.features))},directives:[g.e,i.l,g.b,m.a,x.a,O.a,w.a,i.m],styles:["[_nghost-%COMP%]{position:relative;padding:32px;width:100%;display:flex;flex-direction:column;box-sizing:border-box;justify-content:center;align-items:center}[_nghost-%COMP%]   .row[_ngcontent-%COMP%]   .cell[_ngcontent-%COMP%]{padding:8px}[_nghost-%COMP%]   .row[_ngcontent-%COMP%]   .cell[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]{position:relative;width:100%;height:100%;padding:16px;text-align:center;box-sizing:border-box;border-radius:5px}[_nghost-%COMP%]   .row[_ngcontent-%COMP%]   .cell[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .goto[_ngcontent-%COMP%]{cursor:pointer}[_nghost-%COMP%]   .row[_ngcontent-%COMP%]   .cell[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%]{font-size:32px;width:48px;height:32px;line-height:32px}[_nghost-%COMP%]   .row[_ngcontent-%COMP%]   .cell[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .tag[_ngcontent-%COMP%]{position:absolute;right:10px;top:10px;padding:5px;border-radius:5px}"]}),o}(),y=b.Yb(P),C=function(){var n=function n(){t(this,n)};return n.\u0275mod=b.Ob({type:n}),n.\u0275inj=b.Nb({factory:function(t){return new(t||n)},imports:[[i.c,a.k,l.a,u.a,f.a,s.a,p.a]]}),n}()}}])}();