!function(){function r(r,e){for(var t=0;t<e.length;t++){var a=e[t];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(r,a.key,a)}}function e(e,t,a){return t&&r(e.prototype,t),a&&r(e,a),e}function t(r,e){return(t=Object.setPrototypeOf||function(r,e){return r.__proto__=e,r})(r,e)}function a(r){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(r){return!1}}();return function(){var t,a=i(r);if(e){var o=i(this).constructor;t=Reflect.construct(a,arguments,o)}else t=a.apply(this,arguments);return n(this,t)}}function n(r,e){return!e||"object"!=typeof e&&"function"!=typeof e?function(r){if(void 0===r)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return r}(r):e}function i(r){return(i=Object.setPrototypeOf?Object.getPrototypeOf:function(r){return r.__proto__||Object.getPrototypeOf(r)})(r)}function o(r,e){if(!(r instanceof e))throw new TypeError("Cannot call a class as a function")}(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{BTe0:function(r,n,i){"use strict";i.d(n,"a",function(){return w}),i.d(n,"b",function(){return k});var s=i("8Y7J"),c=i("SVse"),l=i("UhP/"),m=i("8LU1"),u=i("omvX"),f=i("quSY"),b=i("xgIS"),p=i("pLZG"),d=["primaryValueBar"],g=Object(l.v)(function r(e){o(this,r),this._elementRef=e},"primary"),h=new s.s("mat-progress-bar-location",{providedIn:"root",factory:function(){var r=Object(s.X)(c.d),e=r?r.location:null;return{getPathname:function(){return e?e.pathname+e.search:""}}}}),v=0,w=function(){var r=function(r){!function(r,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");r.prototype=Object.create(e&&e.prototype,{constructor:{value:r,writable:!0,configurable:!0}}),e&&t(r,e)}(i,r);var n=a(i);function i(r,e,t,a){var c;o(this,i),(c=n.call(this,r))._elementRef=r,c._ngZone=e,c._animationMode=t,c._isNoopAnimation=!1,c._value=0,c._bufferValue=0,c.animationEnd=new s.o,c._animationEndSubscription=f.a.EMPTY,c.mode="determinate",c.progressbarId="mat-progress-bar-"+v++;var l=a?a.getPathname().split("#")[0]:"";return c._rectangleFillValue="url('".concat(l,"#").concat(c.progressbarId,"')"),c._isNoopAnimation="NoopAnimations"===t,c}return e(i,[{key:"value",get:function(){return this._value},set:function(r){this._value=y(Object(m.f)(r)||0)}},{key:"bufferValue",get:function(){return this._bufferValue},set:function(r){this._bufferValue=y(r||0)}},{key:"_primaryTransform",value:function(){return{transform:"scale3d(".concat(this.value/100,", 1, 1)")}}},{key:"_bufferTransform",value:function(){return"buffer"===this.mode?{transform:"scale3d(".concat(this.bufferValue/100,", 1, 1)")}:null}},{key:"ngAfterViewInit",value:function(){var r=this;this._ngZone.runOutsideAngular(function(){var e=r._primaryValueBar.nativeElement;r._animationEndSubscription=Object(b.a)(e,"transitionend").pipe(Object(p.a)(function(r){return r.target===e})).subscribe(function(){"determinate"!==r.mode&&"buffer"!==r.mode||r._ngZone.run(function(){return r.animationEnd.next({value:r.value})})})})}},{key:"ngOnDestroy",value:function(){this._animationEndSubscription.unsubscribe()}}]),i}(g);return r.\u0275fac=function(e){return new(e||r)(s.Qb(s.l),s.Qb(s.B),s.Qb(u.a,8),s.Qb(h,8))},r.\u0275cmp=s.Kb({type:r,selectors:[["mat-progress-bar"]],viewQuery:function(r,e){var t;(1&r&&s.Lc(d,1),2&r)&&(s.uc(t=s.fc())&&(e._primaryValueBar=t.first))},hostAttrs:["role","progressbar","aria-valuemin","0","aria-valuemax","100",1,"mat-progress-bar"],hostVars:4,hostBindings:function(r,e){2&r&&(s.Eb("aria-valuenow","indeterminate"===e.mode||"query"===e.mode?null:e.value)("mode",e.mode),s.Ib("_mat-animation-noopable",e._isNoopAnimation))},inputs:{color:"color",mode:"mode",value:"value",bufferValue:"bufferValue"},outputs:{animationEnd:"animationEnd"},exportAs:["matProgressBar"],features:[s.Ab],decls:9,vars:4,consts:[["width","100%","height","4","focusable","false",1,"mat-progress-bar-background","mat-progress-bar-element"],["x","4","y","0","width","8","height","4","patternUnits","userSpaceOnUse",3,"id"],["cx","2","cy","2","r","2"],["width","100%","height","100%"],[1,"mat-progress-bar-buffer","mat-progress-bar-element",3,"ngStyle"],[1,"mat-progress-bar-primary","mat-progress-bar-fill","mat-progress-bar-element",3,"ngStyle"],["primaryValueBar",""],[1,"mat-progress-bar-secondary","mat-progress-bar-fill","mat-progress-bar-element"]],template:function(r,e){1&r&&(s.hc(),s.Wb(0,"svg",0),s.Wb(1,"defs"),s.Wb(2,"pattern",1),s.Rb(3,"circle",2),s.Vb(),s.Vb(),s.Rb(4,"rect",3),s.Vb(),s.gc(),s.Rb(5,"div",4),s.Rb(6,"div",5,6),s.Rb(8,"div",7)),2&r&&(s.Db(2),s.pc("id",e.progressbarId),s.Db(2),s.Eb("fill",e._rectangleFillValue),s.Db(1),s.pc("ngStyle",e._bufferTransform()),s.Db(1),s.pc("ngStyle",e._primaryTransform()))},directives:[c.n],styles:['.mat-progress-bar{display:block;height:4px;overflow:hidden;position:relative;transition:opacity 250ms linear;width:100%}._mat-animation-noopable.mat-progress-bar{transition:none;animation:none}.mat-progress-bar .mat-progress-bar-element,.mat-progress-bar .mat-progress-bar-fill::after{height:100%;position:absolute;width:100%}.mat-progress-bar .mat-progress-bar-background{width:calc(100% + 10px)}.cdk-high-contrast-active .mat-progress-bar .mat-progress-bar-background{display:none}.mat-progress-bar .mat-progress-bar-buffer{transform-origin:top left;transition:transform 250ms ease}.cdk-high-contrast-active .mat-progress-bar .mat-progress-bar-buffer{border-top:solid 5px;opacity:.5}.mat-progress-bar .mat-progress-bar-secondary{display:none}.mat-progress-bar .mat-progress-bar-fill{animation:none;transform-origin:top left;transition:transform 250ms ease}.cdk-high-contrast-active .mat-progress-bar .mat-progress-bar-fill{border-top:solid 4px}.mat-progress-bar .mat-progress-bar-fill::after{animation:none;content:"";display:inline-block;left:0}.mat-progress-bar[dir=rtl],[dir=rtl] .mat-progress-bar{transform:rotateY(180deg)}.mat-progress-bar[mode=query]{transform:rotateZ(180deg)}.mat-progress-bar[mode=query][dir=rtl],[dir=rtl] .mat-progress-bar[mode=query]{transform:rotateZ(180deg) rotateY(180deg)}.mat-progress-bar[mode=indeterminate] .mat-progress-bar-fill,.mat-progress-bar[mode=query] .mat-progress-bar-fill{transition:none}.mat-progress-bar[mode=indeterminate] .mat-progress-bar-primary,.mat-progress-bar[mode=query] .mat-progress-bar-primary{-webkit-backface-visibility:hidden;backface-visibility:hidden;animation:mat-progress-bar-primary-indeterminate-translate 2000ms infinite linear;left:-145.166611%}.mat-progress-bar[mode=indeterminate] .mat-progress-bar-primary.mat-progress-bar-fill::after,.mat-progress-bar[mode=query] .mat-progress-bar-primary.mat-progress-bar-fill::after{-webkit-backface-visibility:hidden;backface-visibility:hidden;animation:mat-progress-bar-primary-indeterminate-scale 2000ms infinite linear}.mat-progress-bar[mode=indeterminate] .mat-progress-bar-secondary,.mat-progress-bar[mode=query] .mat-progress-bar-secondary{-webkit-backface-visibility:hidden;backface-visibility:hidden;animation:mat-progress-bar-secondary-indeterminate-translate 2000ms infinite linear;left:-54.888891%;display:block}.mat-progress-bar[mode=indeterminate] .mat-progress-bar-secondary.mat-progress-bar-fill::after,.mat-progress-bar[mode=query] .mat-progress-bar-secondary.mat-progress-bar-fill::after{-webkit-backface-visibility:hidden;backface-visibility:hidden;animation:mat-progress-bar-secondary-indeterminate-scale 2000ms infinite linear}.mat-progress-bar[mode=buffer] .mat-progress-bar-background{-webkit-backface-visibility:hidden;backface-visibility:hidden;animation:mat-progress-bar-background-scroll 250ms infinite linear;display:block}.mat-progress-bar._mat-animation-noopable .mat-progress-bar-fill,.mat-progress-bar._mat-animation-noopable .mat-progress-bar-fill::after,.mat-progress-bar._mat-animation-noopable .mat-progress-bar-buffer,.mat-progress-bar._mat-animation-noopable .mat-progress-bar-primary,.mat-progress-bar._mat-animation-noopable .mat-progress-bar-primary.mat-progress-bar-fill::after,.mat-progress-bar._mat-animation-noopable .mat-progress-bar-secondary,.mat-progress-bar._mat-animation-noopable .mat-progress-bar-secondary.mat-progress-bar-fill::after,.mat-progress-bar._mat-animation-noopable .mat-progress-bar-background{animation:none;transition-duration:1ms}@keyframes mat-progress-bar-primary-indeterminate-translate{0%{transform:translateX(0)}20%{animation-timing-function:cubic-bezier(0.5, 0, 0.701732, 0.495819);transform:translateX(0)}59.15%{animation-timing-function:cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);transform:translateX(83.67142%)}100%{transform:translateX(200.611057%)}}@keyframes mat-progress-bar-primary-indeterminate-scale{0%{transform:scaleX(0.08)}36.65%{animation-timing-function:cubic-bezier(0.334731, 0.12482, 0.785844, 1);transform:scaleX(0.08)}69.15%{animation-timing-function:cubic-bezier(0.06, 0.11, 0.6, 1);transform:scaleX(0.661479)}100%{transform:scaleX(0.08)}}@keyframes mat-progress-bar-secondary-indeterminate-translate{0%{animation-timing-function:cubic-bezier(0.15, 0, 0.515058, 0.409685);transform:translateX(0)}25%{animation-timing-function:cubic-bezier(0.31033, 0.284058, 0.8, 0.733712);transform:translateX(37.651913%)}48.35%{animation-timing-function:cubic-bezier(0.4, 0.627035, 0.6, 0.902026);transform:translateX(84.386165%)}100%{transform:translateX(160.277782%)}}@keyframes mat-progress-bar-secondary-indeterminate-scale{0%{animation-timing-function:cubic-bezier(0.15, 0, 0.515058, 0.409685);transform:scaleX(0.08)}19.15%{animation-timing-function:cubic-bezier(0.31033, 0.284058, 0.8, 0.733712);transform:scaleX(0.457104)}44.15%{animation-timing-function:cubic-bezier(0.4, 0.627035, 0.6, 0.902026);transform:scaleX(0.72796)}100%{transform:scaleX(0.08)}}@keyframes mat-progress-bar-background-scroll{to{transform:translateX(-8px)}}\n'],encapsulation:2,changeDetection:0}),r}();function y(r){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:100;return Math.max(e,Math.min(t,r))}var k=function(){var r=function r(){o(this,r)};return r.\u0275mod=s.Ob({type:r}),r.\u0275inj=s.Nb({factory:function(e){return new(e||r)},imports:[[c.c,l.j],l.j]}),r}()},mHRq:function(r,t,a){"use strict";a.r(t),a.d(t,"LoginModule",function(){return H});var n=a("SVse"),i=a("s7LF"),s=a("u9T3"),c=a("iELJ"),l=a("Dxy4"),m=a("Q2Ze"),u=a("e6WT"),f=a("BTe0"),b=a("g7MM"),p=a("C1VQ"),d=a("txmD"),g=a("CSIE"),h=a("fi6C"),v=a("lWmb"),w=a("GS7A"),y=[Object(w.o)("vanish",[Object(w.n)("* => *",[Object(w.m)({opacity:"0"}),Object(w.e)("500ms ease",Object(w.m)("*"))])]),Object(w.o)("morph",[Object(w.n)(":enter",[Object(w.m)({opacity:"0",height:"0",transform:"scaleY(0) rotateX(90deg)"}),Object(w.e)("500ms ease",Object(w.m)("*"))]),Object(w.n)(":leave",[Object(w.e)("500ms ease",Object(w.m)({opacity:"0",height:"0",transform:"scaleY(0) rotateX(90deg)"}))])])],k=a("8Y7J"),I=a("Qfjl"),V=a("n8oj"),P=a("VDRc"),E=a("h0Qx"),_=a("ackY");function C(r,e){if(1&r&&(k.Wb(0,"p",18),k.Ic(1),k.jc(2,"pluck"),k.jc(3,"camelize"),k.Vb()),2&r){var t=k.ic().$implicit,a=k.ic();k.pc("@morph",void 0),k.Db(1),k.Jc(k.mc(2,2,k.kc(3,6,a.errorCode),t.errors,a.errorCode))}}function x(r,e){if(1&r){var t=k.Xb();k.Wb(0,"a",21),k.ec("click",function(){k.yc(t);var r=e.$implicit;return k.ic(3).signInWith(r)}),k.hc(),k.Wb(1,"svg"),k.Rb(2,"use"),k.Vb(),k.Vb()}if(2&r){var a=e.$implicit;k.Db(2),k.Fb("href","#",a,"",null,"xlink")}}var D=function(){return["google","facebook","twitter"]};function O(r,e){1&r&&(k.Wb(0,"div",19),k.Gc(1,x,3,1,"a",20),k.Vb()),2&r&&(k.pc("@morph",void 0),k.Db(1),k.pc("ngForOf",k.rc(2,D)))}function W(r,e){if(1&r&&(k.Wb(0,"mat-error"),k.Ic(1),k.Vb()),2&r){var t=k.ic(3).$implicit;k.Db(1),k.Kc(" ",null==t.errors?null:t.errors.nameRequired," ")}}function R(r,e){if(1&r&&(k.Wb(0,"mat-form-field",26),k.Wb(1,"mat-label"),k.Ic(2),k.Vb(),k.Rb(3,"input",27),k.Gc(4,W,2,1,"mat-error",28),k.Vb()),2&r){var t=k.ic(2).$implicit,a=k.ic();k.pc("@morph",void 0),k.Db(2),k.Jc(null==t.labels?null:t.labels.fullname),k.Db(2),k.pc("ngIf",null==a.form.controls.name.errors?null:a.form.controls.name.errors.required)}}function j(r,e){if(1&r&&(k.Wb(0,"mat-error"),k.Ic(1),k.Vb()),2&r){var t=k.ic(3).$implicit;k.Db(1),k.Kc(" ",null==t.errors?null:t.errors.emailRequired," ")}}function G(r,e){if(1&r&&(k.Wb(0,"mat-error"),k.Ic(1),k.Vb()),2&r){var t=k.ic(3).$implicit;k.Db(1),k.Kc(" ",null==t.errors?null:t.errors.emailInvalid," ")}}function q(r,e){if(1&r&&(k.Wb(0,"mat-form-field",26),k.Wb(1,"mat-label"),k.Ic(2),k.Vb(),k.Rb(3,"input",29),k.Gc(4,j,2,1,"mat-error",28),k.Gc(5,G,2,1,"mat-error",28),k.Vb()),2&r){var t=k.ic(2).$implicit,a=k.ic();k.pc("@morph",void 0),k.Db(2),k.Jc(null==t.labels?null:t.labels.email),k.Db(2),k.pc("ngIf",null==a.form.controls.email.errors?null:a.form.controls.email.errors.required),k.Db(1),k.pc("ngIf",null==a.form.controls.email.errors?null:a.form.controls.email.errors.email)}}function M(r,e){if(1&r&&(k.Wb(0,"mat-error"),k.Ic(1),k.Vb()),2&r){var t=k.ic(3).$implicit;k.Db(1),k.Kc(" ",null==t.errors?null:t.errors.passwordRequired," ")}}function X(r,e){if(1&r){var t=k.Xb();k.Wb(0,"mat-hint",33),k.ec("navigate",function(r){return k.yc(t),k.ic(4).switchPage(r)}),k.Wb(1,"a",21),k.ec("click",function(){return k.yc(t),k.ic(4).switchPage("forgotPassword")}),k.Ic(2,"Forgot password?"),k.Vb(),k.Vb()}if(2&r){var a=k.ic(3).$implicit;k.pc("wm-readme",a.forgot)("@morph",void 0)}}function A(r,e){if(1&r){var t=k.Xb();k.Wb(0,"mat-form-field",26),k.Wb(1,"mat-label"),k.Ic(2),k.Vb(),k.Rb(3,"input",30),k.Wb(4,"wm-icon",31),k.ec("click",function(){k.yc(t);var r=k.ic(3);return r.showPassword=!r.showPassword}),k.Vb(),k.Gc(5,M,2,1,"mat-error",28),k.Gc(6,X,3,2,"mat-hint",32),k.Vb()}if(2&r){var a=k.ic(2).$implicit,n=k.ic();k.pc("@morph",void 0),k.Db(2),k.Jc(null==a.labels?null:a.labels.password),k.Db(1),k.pc("type",n.showPassword?"text":"password"),k.Db(1),k.pc("icon",n.showPassword?"visibility":"visibility_off"),k.Db(1),k.pc("ngIf",null==n.form.controls.password.errors?null:n.form.controls.password.errors.required),k.Db(1),k.pc("ngIf","signIn"===n.page)}}function S(r,e){if(1&r&&(k.Wb(0,"mat-error"),k.Ic(1),k.Vb()),2&r){var t=k.ic(3).$implicit;k.Db(1),k.Kc(" ",null==t.errors?null:t.errors.emailRequired," ")}}function $(r,e){if(1&r&&(k.Wb(0,"mat-error"),k.Ic(1),k.Vb()),2&r){var t=k.ic(3).$implicit;k.Db(1),k.Kc(" ",null==t.errors?null:t.errors.emailInvalid," ")}}function z(r,e){if(1&r&&(k.Wb(0,"mat-form-field",26),k.Wb(1,"mat-label"),k.Ic(2),k.Vb(),k.Rb(3,"input",34),k.Gc(4,S,2,1,"mat-error",28),k.Gc(5,$,2,1,"mat-error",28),k.Vb()),2&r){var t=k.ic(2).$implicit,a=k.ic();k.pc("@morph",void 0),k.Db(2),k.Jc(null==t.labels?null:t.labels.newEmail),k.Db(2),k.pc("ngIf",null==a.form.controls.newEmail.errors?null:a.form.controls.newEmail.errors.required),k.Db(1),k.pc("ngIf",null==a.form.controls.newEmail.errors?null:a.form.controls.newEmail.errors.email)}}function B(r,e){if(1&r&&(k.Wb(0,"mat-error"),k.Ic(1),k.Vb()),2&r){var t=k.ic(3).$implicit;k.Db(1),k.Kc(" ",null==t.errors?null:t.errors.passwordRequired," ")}}function L(r,e){if(1&r&&(k.Wb(0,"mat-form-field",26),k.Wb(1,"mat-label"),k.Ic(2),k.Vb(),k.Rb(3,"input",35),k.Gc(4,B,2,1,"mat-error",28),k.Vb()),2&r){var t=k.ic(2).$implicit,a=k.ic();k.pc("@morph",void 0),k.Db(2),k.Jc(null==t.labels?null:t.labels.newPassword),k.Db(2),k.pc("ngIf",null==a.form.controls.newPassword.errors?null:a.form.controls.newPassword.errors.required)}}function F(r,e){if(1&r&&(k.Wb(0,"button",36),k.Ic(1),k.Vb()),2&r){var t=e.ngIf,a=k.ic(2).$implicit,n=k.ic();k.pc("color",(null==a.pages[n.page]?null:a.pages[n.page].color)||"primary")("disabled",!!n.errorCode||!n.form.valid)("@morph",void 0),k.Db(1),k.Jc(t)}}function J(r,e){1&r&&k.Rb(0,"mat-progress-bar",37),2&r&&k.pc("@morph",void 0)}function N(r,e){if(1&r){var t=k.Xb();k.Wb(0,"form",22),k.ec("ngSubmit",function(){k.yc(t);var r=k.ic(2);return r.activate(r.page)}),k.Gc(1,R,5,3,"mat-form-field",23),k.Gc(2,q,6,4,"mat-form-field",23),k.Gc(3,A,7,6,"mat-form-field",23),k.Gc(4,z,6,4,"mat-form-field",23),k.Gc(5,L,5,3,"mat-form-field",23),k.Gc(6,F,2,4,"button",24),k.Gc(7,J,1,1,"mat-progress-bar",25),k.Vb()}if(2&r){var a=k.ic().$implicit,n=k.ic();k.pc("formGroup",n.form)("@morph",void 0),k.Db(1),k.pc("ngIf",n.form.contains("name")),k.Db(1),k.pc("ngIf",n.form.contains("email")),k.Db(1),k.pc("ngIf",n.form.contains("password")),k.Db(1),k.pc("ngIf",n.form.contains("newEmail")),k.Db(1),k.pc("ngIf",n.form.contains("newPassword")),k.Db(1),k.pc("ngIf",null==a.pages[n.page]?null:a.pages[n.page].caption),k.Db(1),k.pc("ngIf",n.progress)}}function Q(r,e){if(1&r){var t=k.Xb();k.Wb(0,"p",38),k.ec("navigate",function(r){return k.yc(t),k.ic(2).switchPage(r)}),k.Vb()}if(2&r){var a=e.ngIf,n=k.ic(2);k.pc("wm-readme",a)("@vanish",n.page)}}function T(r,e){if(1&r&&(k.Ub(0),k.Wb(1,"h1",1),k.Ic(2),k.Vb(),k.Gc(3,C,4,8,"p",2),k.Rb(4,"p",3),k.Gc(5,O,2,3,"div",4),k.Gc(6,N,8,9,"form",5),k.Gc(7,Q,1,2,"p",6),k.hc(),k.Wb(8,"svg",7),k.Wb(9,"symbol",8),k.Rb(10,"path",9),k.Rb(11,"path",10),k.Rb(12,"path",11),k.Rb(13,"path",12),k.Vb(),k.Wb(14,"symbol",13),k.Rb(15,"path",14),k.Rb(16,"path",15),k.Vb(),k.Wb(17,"symbol",16),k.Rb(18,"path",17),k.Vb(),k.Vb(),k.Tb()),2&r){var t=e.$implicit,a=k.ic();k.Db(1),k.pc("@vanish",a.page),k.Db(1),k.Jc(null==t.pages[a.page]?null:t.pages[a.page].title),k.Db(1),k.pc("ngIf",a.errorCode),k.Db(1),k.pc("wm-readme",null==t.pages[a.page]?null:t.pages[a.page].message)("@vanish",a.page),k.Db(1),k.pc("ngIf","social"===a.page),k.Db(1),k.pc("ngIf","social"!==a.page),k.Db(1),k.pc("ngIf",null==t.pages[a.page]?null:t.pages[a.page].instructions)}}var K,Y=((K=function(){function r(e,t,a,n,s){var c=this;o(this,r),this.data=e,this.ref=t,this.user=a,this.gtag=n,this.redirect=s,this.errorCode=null,this.progress=!1,this.showPassword=!1,this.name=new i.e(null,i.t.required),this.email=new i.e(null,[i.t.required,i.t.email]),this.password=new i.e(null,i.t.required),this.newEmail=new i.e(null,[i.t.required,i.t.email]),this.newPassword=new i.e(null,i.t.required),this.form=new i.g({});var l=e&&e.mode;this.switchPage(l||"social"),this.ref.afterOpened().subscribe(function(){"verifyEmail"!==l&&"recoverEmail"!==l||c.auth.applyActionCode(e&&e.code).then(function(){return c.auth.user.reload()}).catch(function(r){return c.showError(r.code)})}),this.ref.beforeClosed().subscribe(function(){return c.navigate(e.url)})}return e(r,[{key:"auth",get:function(){return this.user.auth}},{key:"switchPage",value:function(r){var e=this;switch(this.showPassword=this.progress=!1,this.errorCode=null,Object.keys(this.form.controls).forEach(function(r){e.form.removeControl(r)}),this.page=r){case"social":break;case"register":this.form.addControl("name",this.name),this.form.addControl("email",this.email),this.form.addControl("password",this.password);break;case"signIn":this.form.addControl("email",this.email),this.form.addControl("password",this.password);break;case"forgotPassword":this.form.addControl("email",this.email);break;case"resetPassword":this.form.addControl("newPassword",this.newPassword);break;case"changePassword":this.form.addControl("password",this.password),this.form.addControl("newPassword",this.newPassword);break;case"changeEmail":this.form.addControl("password",this.password),this.form.addControl("newEmail",this.newEmail);break;case"sendEmailVerification":case"verifyEmail":case"recoverEmail":break;case"delete":this.auth.getProviderId().then(function(r){"password"==r&&e.form.addControl("password",e.password)});break;default:console.error("Invalid login page requested:",r)}}},{key:"showError",value:function(r){var e=this;this.progress=!1,this.errorCode=r,setTimeout(function(){return e.errorCode=null},1e4)}},{key:"activate",value:function(r){switch(this.progress=!0,r){case"signIn":this.signIn(this.email.value,this.password.value);break;case"register":this.registerNew(this.email.value,this.password.value,this.name.value);break;case"forgotPassword":this.forgotPassword(this.email.value);break;case"resetPassword":this.resetPassword(this.newPassword.value);break;case"changePassword":this.updatePassword(this.password.value,this.newPassword.value);break;case"changeEmail":this.updateEmail(this.password.value,this.newEmail.value);break;case"sendEmailVerification":this.sendEmailVerification();break;case"delete":this.deleteAccount(this.password.value);break;case"verifyEmail":case"recoverEmail":this.ref.close(this.auth.user)}}},{key:"navigate",value:function(r){return r?this.redirect.navigate(r):Promise.resolve(!0)}},{key:"registerNew",value:function(r,e,t){var a=this;this.auth.registerNew(r,e,t).then(function(r){a.gtag.signUp(null==r?void 0:r.providerId),a.user.register(r).then(function(){return r.sendEmailVerification()}).then(function(){return a.ref.close(r)})}).catch(function(r){return a.showError(r.code)})}},{key:"signIn",value:function(r,e){var t=this;this.auth.signIn(r,e).then(function(r){t.gtag.login(null==r?void 0:r.providerId),t.ref.close(r)}).catch(function(r){return t.showError(r.code)})}},{key:"signInWith",value:function(r){var e=this;this.auth.signInWith(r).then(function(r){e.gtag.login(null==r?void 0:r.providerId),e.user.register(r).then(function(){return e.ref.close(r)})}).catch(function(r){return e.showError(r.code)})}},{key:"sendEmailVerification",value:function(){var r=this,e=this.data&&this.data.url||"";return"url"in this.data&&delete this.data.url,this.auth.user.sendEmailVerification({url:window.location.origin+e}).then(function(){return r.ref.close(null)}).catch(function(e){return r.showError(e.code)})}},{key:"forgotPassword",value:function(r){var e=this;this.auth.sendPasswordResetEmail(r).then(function(){return e.ref.close(null)}).catch(function(r){return e.showError(r.code)})}},{key:"resetPassword",value:function(r){var e=this;this.auth.confirmPasswordReset(this.data&&this.data.code||"",r).then(function(){return e.ref.close(null)}).catch(function(r){return e.showError(r.code)})}},{key:"updateEmail",value:function(r,e){var t=this;this.auth.reauthenticate(r).then(function(r){r.updateEmail(e).then(function(){return r.sendEmailVerification()}).then(function(){return t.ref.close(r)})}).catch(function(r){return t.showError(r.code)})}},{key:"updatePassword",value:function(r,e){var t=this;this.auth.reauthenticate(r).then(function(r){return r.updatePassword(e).then(function(){return t.ref.close(r)})}).catch(function(r){return t.showError(r.code)})}},{key:"deleteAccount",value:function(r){var e=this;this.auth.reauthenticate(r).then(function(r){e.navigate("/").then(function(){return e.user.delete()}).then(function(){return r.delete()}).catch(function(r){return e.showError(r.code)})}).then(function(){return e.ref.close(null)}).catch(function(r){return e.showError(r.code)})}}]),r}()).\u0275fac=function(r){return new(r||K)(k.Qb(c.a),k.Qb(c.g),k.Qb(v.b),k.Qb(h.b),k.Qb(g.b))},K.\u0275cmp=k.Kb({type:K,selectors:[["wm-login-dlg"]],decls:1,vars:1,consts:[[4,"wmContent","wmContentSelect"],["mat-dialog-title","",1,"mat-title"],["class","mat-error",4,"ngIf"],[1,"mat-small",3,"wm-readme"],["class","providers","fxLayout","row","fxLayoutAlign","space-around",4,"ngIf"],["fxLayout","column","fxLayoutAlign","space-around stretch","fxLayoutGap","10px",3,"formGroup","ngSubmit",4,"ngIf"],["class","mat-small bit-of-space",3,"wm-readme","navigate",4,"ngIf"],["xmlns","http://www.w3.org/2000/svg","height","0","width","0","visibility","hidden"],["id","google","viewBox","0 0 533.5 544.3"],["fill","#4285F4","d","M533.5 278.4c0-18.5-1.5-37.1-4.7-55.3H272.1v104.8h147c-6.1 33.8-25.7 63.7-54.4 82.7v68h87.7c51.5-47.4 81.1-117.4 81.1-200.2z"],["fill","#34A853","d","M272.1 544.3c73.4 0 135.3-24.1 180.4-65.7l-87.7-68c-24.4 16.6-55.9 26-92.6 26-71 0-131.2-47.9-152.8-112.3H28.9v70.1c46.2 91.9 140.3 149.9 243.2 149.9z"],["fill","#FBBC04","d","M119.3 324.3c-11.4-33.8-11.4-70.4 0-104.2V150H28.9c-38.6 76.9-38.6 167.5 0 244.4l90.4-70.1z"],["fill","#EA4335","d","M272.1 107.7c38.8-.6 76.3 14 104.4 40.8l77.7-77.7C405 24.6 339.7-.8 272.1 0 169.2 0 75.1 58 28.9 150l90.4 70.1c21.5-64.5 81.8-112.4 152.8-112.4z"],["id","facebook","viewBox","0 0 400 400"],["fill","#1977F3","d","M400 201C400 90.551 310.449 1 200 1S0 90.551 0 201c0 99.817 73.126 182.562 168.753 197.581V258.826h-50.795V201h50.795v-44.073c0-50.119 29.869-77.823 75.545-77.823 21.881 0 44.775 3.91 44.775 3.91v49.219h-25.228c-24.835 0-32.598 15.413-32.598 31.248V201h55.464l-8.86 57.826h-46.604v139.755C326.874 383.59 400 300.845 400 201z"],["fill","#FEFEFE","d","M277.851 257.826l8.86-57.826h-55.464v-37.519c0-15.807 7.735-31.248 32.598-31.248h25.228V82.014s-22.894-3.91-44.775-3.91c-45.676 0-75.545 27.676-75.545 77.823V200h-50.795v57.826h50.795v139.755A200.795 200.795 0 00200 400c10.631 0 21.066-.844 31.247-2.419V257.826h46.604z"],["id","twitter","viewBox","0 0 400 400"],["fill","#1DA1F2","d","M125.792 362.474c150.944 0 233.504-125.056 233.504-233.504 0-3.552 0-7.088-.24-10.608A166.986 166.986 0 00400 75.882a163.814 163.814 0 01-47.136 12.912 82.352 82.352 0 0036.08-45.392 164.474 164.474 0 01-52.112 19.92c-25.439-27.05-65.861-33.67-98.599-16.149-32.739 17.521-49.653 54.826-41.257 90.997A232.993 232.993 0 0127.84 52.426c-21.782 37.498-10.656 85.47 25.408 109.552A81.452 81.452 0 0116 151.706v1.04c.011 39.065 27.548 72.712 65.84 80.448a81.933 81.933 0 01-37.056 1.408c10.751 33.431 41.561 56.332 76.672 56.992a164.672 164.672 0 01-101.92 35.2A167.174 167.174 0 010 325.61a232.344 232.344 0 00125.792 36.8"],[1,"mat-error"],["fxLayout","row","fxLayoutAlign","space-around",1,"providers"],[3,"click",4,"ngFor","ngForOf"],[3,"click"],["fxLayout","column","fxLayoutAlign","space-around stretch","fxLayoutGap","10px",3,"formGroup","ngSubmit"],["appearance","legacy",4,"ngIf"],["mat-stroked-button","","type","submit","class","btn",3,"color","disabled",4,"ngIf"],["mode","indeterminate","color","accent",4,"ngIf"],["appearance","legacy"],["matInput","","formControlName","name"],[4,"ngIf"],["matInput","","formControlName","email"],["matInput","","formControlName","password",3,"type"],["matSuffix","",1,"pwd",3,"icon","click"],["class","mat-small","align","end",3,"wm-readme","navigate",4,"ngIf"],["align","end",1,"mat-small",3,"wm-readme","navigate"],["matInput","","formControlName","newEmail"],["matInput","","formControlName","newPassword"],["mat-stroked-button","","type","submit",1,"btn",3,"color","disabled"],["mode","indeterminate","color","accent"],[1,"mat-small","bit-of-space",3,"wm-readme","navigate"]],template:function(r,e){1&r&&k.Gc(0,T,19,8,"ng-container",0),2&r&&k.pc("wmContentSelect","login")},directives:[I.a,c.h,n.m,V.a,P.e,P.d,n.l,i.u,i.n,P.f,i.h,m.c,m.g,u.b,i.c,i.m,i.f,m.b,E.a,m.i,m.f,l.b,f.a],pipes:[_.d,_.a],styles:["[_nghost-%COMP%]{display:flex;flex-direction:column;box-sizing:border-box;justify-content:space-around;align-items:stretch;text-align:center;width:350px;max-width:100%}[_nghost-%COMP%]   .providers[_ngcontent-%COMP%]{height:48px}[_nghost-%COMP%]   .providers[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]{width:48px;height:48px}[_nghost-%COMP%]   .bit-of-space[_ngcontent-%COMP%]{margin:12px 0}[_nghost-%COMP%]   .pwd[_ngcontent-%COMP%]{cursor:pointer}[_nghost-%COMP%]   .btn[_ngcontent-%COMP%]{margin-top:10px;min-height:48px}"],data:{animation:y}}),K);a("J3Me");var Z,U=[{path:"",content:"login",component:Y,data:{dialogConfig:{width:350,maxWidth:"100%"}}}],H=((Z=function r(){o(this,r)}).\u0275mod=k.Ob({type:Z}),Z.\u0275inj=k.Nb({factory:function(r){return new(r||Z)},imports:[[n.c,i.r,s.a,c.f,m.e,u.c,l.c,f.b,p.a,d.a,b.e.forChild(U)]]}),Z)}}])}();