!function(){function r(r,e){for(var t=0;t<e.length;t++){var a=e[t];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(r,a.key,a)}}function e(e,t,a){return t&&r(e.prototype,t),a&&r(e,a),e}function t(r,e){return(t=Object.setPrototypeOf||function(r,e){return r.__proto__=e,r})(r,e)}function a(r){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(r){return!1}}();return function(){var t,a=i(r);if(e){var o=i(this).constructor;t=Reflect.construct(a,arguments,o)}else t=a.apply(this,arguments);return n(this,t)}}function n(r,e){return!e||"object"!=typeof e&&"function"!=typeof e?function(r){if(void 0===r)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return r}(r):e}function i(r){return(i=Object.setPrototypeOf?Object.getPrototypeOf:function(r){return r.__proto__||Object.getPrototypeOf(r)})(r)}function o(r,e){if(!(r instanceof e))throw new TypeError("Cannot call a class as a function")}(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{BTe0:function(r,n,i){"use strict";i.d(n,"a",function(){return h}),i.d(n,"b",function(){return w});var s=i("8Y7J"),c=i("SVse"),l=i("UhP/"),m=i("8LU1"),u=i("omvX"),b=i("quSY"),f=i("xgIS"),p=i("pLZG"),d=["primaryValueBar"],g=Object(l.v)(function r(e){o(this,r),this._elementRef=e},"primary"),y=new s.s("mat-progress-bar-location",{providedIn:"root",factory:function(){var r=Object(s.X)(c.d),e=r?r.location:null;return{getPathname:function(){return e?e.pathname+e.search:""}}}}),v=0,h=function(){var r=function(r){!function(r,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");r.prototype=Object.create(e&&e.prototype,{constructor:{value:r,writable:!0,configurable:!0}}),e&&t(r,e)}(i,r);var n=a(i);function i(r,e,t,a){var c;o(this,i),(c=n.call(this,r))._elementRef=r,c._ngZone=e,c._animationMode=t,c._isNoopAnimation=!1,c._value=0,c._bufferValue=0,c.animationEnd=new s.o,c._animationEndSubscription=b.a.EMPTY,c.mode="determinate",c.progressbarId="mat-progress-bar-"+v++;var l=a?a.getPathname().split("#")[0]:"";return c._rectangleFillValue="url('".concat(l,"#").concat(c.progressbarId,"')"),c._isNoopAnimation="NoopAnimations"===t,c}return e(i,[{key:"value",get:function(){return this._value},set:function(r){this._value=k(Object(m.f)(r)||0)}},{key:"bufferValue",get:function(){return this._bufferValue},set:function(r){this._bufferValue=k(r||0)}},{key:"_primaryTransform",value:function(){return{transform:"scale3d(".concat(this.value/100,", 1, 1)")}}},{key:"_bufferTransform",value:function(){return"buffer"===this.mode?{transform:"scale3d(".concat(this.bufferValue/100,", 1, 1)")}:null}},{key:"ngAfterViewInit",value:function(){var r=this;this._ngZone.runOutsideAngular(function(){var e=r._primaryValueBar.nativeElement;r._animationEndSubscription=Object(f.a)(e,"transitionend").pipe(Object(p.a)(function(r){return r.target===e})).subscribe(function(){"determinate"!==r.mode&&"buffer"!==r.mode||r._ngZone.run(function(){return r.animationEnd.next({value:r.value})})})})}},{key:"ngOnDestroy",value:function(){this._animationEndSubscription.unsubscribe()}}]),i}(g);return r.\u0275fac=function(e){return new(e||r)(s.Qb(s.l),s.Qb(s.B),s.Qb(u.a,8),s.Qb(y,8))},r.\u0275cmp=s.Kb({type:r,selectors:[["mat-progress-bar"]],viewQuery:function(r,e){var t;(1&r&&s.Lc(d,1),2&r)&&(s.uc(t=s.fc())&&(e._primaryValueBar=t.first))},hostAttrs:["role","progressbar","aria-valuemin","0","aria-valuemax","100",1,"mat-progress-bar"],hostVars:4,hostBindings:function(r,e){2&r&&(s.Eb("aria-valuenow","indeterminate"===e.mode||"query"===e.mode?null:e.value)("mode",e.mode),s.Ib("_mat-animation-noopable",e._isNoopAnimation))},inputs:{color:"color",mode:"mode",value:"value",bufferValue:"bufferValue"},outputs:{animationEnd:"animationEnd"},exportAs:["matProgressBar"],features:[s.Ab],decls:9,vars:4,consts:[["width","100%","height","4","focusable","false",1,"mat-progress-bar-background","mat-progress-bar-element"],["x","4","y","0","width","8","height","4","patternUnits","userSpaceOnUse",3,"id"],["cx","2","cy","2","r","2"],["width","100%","height","100%"],[1,"mat-progress-bar-buffer","mat-progress-bar-element",3,"ngStyle"],[1,"mat-progress-bar-primary","mat-progress-bar-fill","mat-progress-bar-element",3,"ngStyle"],["primaryValueBar",""],[1,"mat-progress-bar-secondary","mat-progress-bar-fill","mat-progress-bar-element"]],template:function(r,e){1&r&&(s.hc(),s.Wb(0,"svg",0),s.Wb(1,"defs"),s.Wb(2,"pattern",1),s.Rb(3,"circle",2),s.Vb(),s.Vb(),s.Rb(4,"rect",3),s.Vb(),s.gc(),s.Rb(5,"div",4),s.Rb(6,"div",5,6),s.Rb(8,"div",7)),2&r&&(s.Db(2),s.pc("id",e.progressbarId),s.Db(2),s.Eb("fill",e._rectangleFillValue),s.Db(1),s.pc("ngStyle",e._bufferTransform()),s.Db(1),s.pc("ngStyle",e._primaryTransform()))},directives:[c.n],styles:['.mat-progress-bar{display:block;height:4px;overflow:hidden;position:relative;transition:opacity 250ms linear;width:100%}._mat-animation-noopable.mat-progress-bar{transition:none;animation:none}.mat-progress-bar .mat-progress-bar-element,.mat-progress-bar .mat-progress-bar-fill::after{height:100%;position:absolute;width:100%}.mat-progress-bar .mat-progress-bar-background{width:calc(100% + 10px)}.cdk-high-contrast-active .mat-progress-bar .mat-progress-bar-background{display:none}.mat-progress-bar .mat-progress-bar-buffer{transform-origin:top left;transition:transform 250ms ease}.cdk-high-contrast-active .mat-progress-bar .mat-progress-bar-buffer{border-top:solid 5px;opacity:.5}.mat-progress-bar .mat-progress-bar-secondary{display:none}.mat-progress-bar .mat-progress-bar-fill{animation:none;transform-origin:top left;transition:transform 250ms ease}.cdk-high-contrast-active .mat-progress-bar .mat-progress-bar-fill{border-top:solid 4px}.mat-progress-bar .mat-progress-bar-fill::after{animation:none;content:"";display:inline-block;left:0}.mat-progress-bar[dir=rtl],[dir=rtl] .mat-progress-bar{transform:rotateY(180deg)}.mat-progress-bar[mode=query]{transform:rotateZ(180deg)}.mat-progress-bar[mode=query][dir=rtl],[dir=rtl] .mat-progress-bar[mode=query]{transform:rotateZ(180deg) rotateY(180deg)}.mat-progress-bar[mode=indeterminate] .mat-progress-bar-fill,.mat-progress-bar[mode=query] .mat-progress-bar-fill{transition:none}.mat-progress-bar[mode=indeterminate] .mat-progress-bar-primary,.mat-progress-bar[mode=query] .mat-progress-bar-primary{-webkit-backface-visibility:hidden;backface-visibility:hidden;animation:mat-progress-bar-primary-indeterminate-translate 2000ms infinite linear;left:-145.166611%}.mat-progress-bar[mode=indeterminate] .mat-progress-bar-primary.mat-progress-bar-fill::after,.mat-progress-bar[mode=query] .mat-progress-bar-primary.mat-progress-bar-fill::after{-webkit-backface-visibility:hidden;backface-visibility:hidden;animation:mat-progress-bar-primary-indeterminate-scale 2000ms infinite linear}.mat-progress-bar[mode=indeterminate] .mat-progress-bar-secondary,.mat-progress-bar[mode=query] .mat-progress-bar-secondary{-webkit-backface-visibility:hidden;backface-visibility:hidden;animation:mat-progress-bar-secondary-indeterminate-translate 2000ms infinite linear;left:-54.888891%;display:block}.mat-progress-bar[mode=indeterminate] .mat-progress-bar-secondary.mat-progress-bar-fill::after,.mat-progress-bar[mode=query] .mat-progress-bar-secondary.mat-progress-bar-fill::after{-webkit-backface-visibility:hidden;backface-visibility:hidden;animation:mat-progress-bar-secondary-indeterminate-scale 2000ms infinite linear}.mat-progress-bar[mode=buffer] .mat-progress-bar-background{-webkit-backface-visibility:hidden;backface-visibility:hidden;animation:mat-progress-bar-background-scroll 250ms infinite linear;display:block}.mat-progress-bar._mat-animation-noopable .mat-progress-bar-fill,.mat-progress-bar._mat-animation-noopable .mat-progress-bar-fill::after,.mat-progress-bar._mat-animation-noopable .mat-progress-bar-buffer,.mat-progress-bar._mat-animation-noopable .mat-progress-bar-primary,.mat-progress-bar._mat-animation-noopable .mat-progress-bar-primary.mat-progress-bar-fill::after,.mat-progress-bar._mat-animation-noopable .mat-progress-bar-secondary,.mat-progress-bar._mat-animation-noopable .mat-progress-bar-secondary.mat-progress-bar-fill::after,.mat-progress-bar._mat-animation-noopable .mat-progress-bar-background{animation:none;transition-duration:1ms}@keyframes mat-progress-bar-primary-indeterminate-translate{0%{transform:translateX(0)}20%{animation-timing-function:cubic-bezier(0.5, 0, 0.701732, 0.495819);transform:translateX(0)}59.15%{animation-timing-function:cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);transform:translateX(83.67142%)}100%{transform:translateX(200.611057%)}}@keyframes mat-progress-bar-primary-indeterminate-scale{0%{transform:scaleX(0.08)}36.65%{animation-timing-function:cubic-bezier(0.334731, 0.12482, 0.785844, 1);transform:scaleX(0.08)}69.15%{animation-timing-function:cubic-bezier(0.06, 0.11, 0.6, 1);transform:scaleX(0.661479)}100%{transform:scaleX(0.08)}}@keyframes mat-progress-bar-secondary-indeterminate-translate{0%{animation-timing-function:cubic-bezier(0.15, 0, 0.515058, 0.409685);transform:translateX(0)}25%{animation-timing-function:cubic-bezier(0.31033, 0.284058, 0.8, 0.733712);transform:translateX(37.651913%)}48.35%{animation-timing-function:cubic-bezier(0.4, 0.627035, 0.6, 0.902026);transform:translateX(84.386165%)}100%{transform:translateX(160.277782%)}}@keyframes mat-progress-bar-secondary-indeterminate-scale{0%{animation-timing-function:cubic-bezier(0.15, 0, 0.515058, 0.409685);transform:scaleX(0.08)}19.15%{animation-timing-function:cubic-bezier(0.31033, 0.284058, 0.8, 0.733712);transform:scaleX(0.457104)}44.15%{animation-timing-function:cubic-bezier(0.4, 0.627035, 0.6, 0.902026);transform:scaleX(0.72796)}100%{transform:scaleX(0.08)}}@keyframes mat-progress-bar-background-scroll{to{transform:translateX(-8px)}}\n'],encapsulation:2,changeDetection:0}),r}();function k(r){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:100;return Math.max(e,Math.min(t,r))}var w=function(){var r=function r(){o(this,r)};return r.\u0275mod=s.Ob({type:r}),r.\u0275inj=s.Nb({factory:function(e){return new(e||r)},imports:[[c.c,l.j],l.j]}),r}()},"Ok+D":function(r,t,a){"use strict";a.r(t),a.d(t,"UserAccessModule",function(){return A});var n=a("SVse"),i=a("s7LF"),s=a("u9T3"),c=a("Q2Ze"),l=a("e6WT"),m=a("Tj54"),u=a("Dxy4"),b=a("BTe0"),f=a("g7MM"),p=a("kSUX"),d=a("R6uK"),g=a("lJxs"),y=a("eIep"),v=a("8Y7J"),h=a("Qfjl"),k=a("VDRc");function w(r,e){if(1&r&&(v.Wb(0,"mat-error"),v.Ic(1),v.Vb()),2&r){var t=v.ic().$implicit;v.Db(1),v.Jc(null==t.email||null==t.email.errors?null:t.email.errors.required)}}function _(r,e){if(1&r&&(v.Wb(0,"mat-error"),v.Ic(1),v.Vb()),2&r){var t=v.ic().$implicit;v.Db(1),v.Jc(null==t.email||null==t.email.errors?null:t.email.errors.email)}}function x(r,e){if(1&r){var t=v.Xb();v.Wb(0,"div",1),v.Wb(1,"mat-form-field"),v.Wb(2,"mat-label"),v.Ic(3),v.Vb(),v.Wb(4,"input",2,3),v.ec("ngModelChange",function(r){return v.yc(t),v.ic().email=r}),v.Vb(),v.Wb(6,"mat-hint"),v.Ic(7),v.Vb(),v.Gc(8,w,2,1,"mat-error",4),v.Gc(9,_,2,1,"mat-error",4),v.Vb(),v.Wb(10,"div",5),v.Wb(11,"button",6),v.ec("click",function(){v.yc(t);var r=v.ic();return r.viewAccess(r.email)}),v.Ic(12),v.Vb(),v.Wb(13,"button",6),v.ec("click",function(){v.yc(t);var r=v.ic();return r.grantAccess(r.email)}),v.Ic(14),v.Vb(),v.Wb(15,"button",6),v.ec("click",function(){v.yc(t);var r=v.ic();return r.revokeAccess(r.email)}),v.Ic(16),v.Vb(),v.Vb(),v.Vb()}if(2&r){var a=e.$implicit,n=v.vc(5),i=v.ic();v.Db(3),v.Jc((null==a.email?null:a.email.label)||"Email"),v.Db(1),v.pc("ngModel",i.email),v.Db(3),v.Jc(null==a.email?null:a.email.hint),v.Db(1),v.pc("ngIf",null==n.errors?null:n.errors.required),v.Db(1),v.pc("ngIf",null==n.errors?null:n.errors.email),v.Db(2),v.pc("color",(null==a.actions||null==a.actions.view?null:a.actions.view.color)||"primary")("disabled",n.invalid),v.Db(1),v.Kc(" ",(null==a.actions||null==a.actions.view?null:a.actions.view.caption)||"View priviledges"," "),v.Db(1),v.pc("color",(null==a.actions||null==a.actions.grant?null:a.actions.grant.color)||"accent")("disabled",n.invalid),v.Db(1),v.Kc(" ",(null==a.actions||null==a.actions.grant?null:a.actions.grant.caption)||"Grant admin priviledges"," "),v.Db(1),v.pc("color",(null==a.actions||null==a.actions.revoke?null:a.actions.revoke.color)||"warn")("disabled",n.invalid),v.Db(1),v.Kc(" ",(null==a.actions||null==a.actions.reoke?null:a.actions.reoke.caption)||"Revoke admin proviledges"," ")}}var V,O=((V=function(){function r(e,t){o(this,r),this.auth=e,this.client=t}return e(r,[{key:"listUsers",value:function(r){return this.client.post("users",r)}},{key:"updateUser",value:function(r,e){return this.client.patch("users/".concat(r),e)}},{key:"getUserByEmail",value:function(r){return this.listUsers([{email:r}]).pipe(Object(g.a)(function(r){return r[0]}))}},{key:"viewAccess",value:function(r){var e=this;return this.getUserByEmail(r).subscribe(function(r){return e.result=r&&r.customClaims})}},{key:"grantAccess",value:function(r){var e=this;return this.getUserByEmail(r).pipe(Object(y.a)(function(r){return e.updateUser(r.uid,{customClaims:{admin:!0}})})).subscribe(function(r){return e.result=r})}},{key:"revokeAccess",value:function(r){var e=this;return this.getUserByEmail(r).pipe(Object(y.a)(function(r){return e.updateUser(r.uid,{customClaims:null})})).subscribe(function(r){return e.result=r})}}]),r}()).\u0275fac=function(r){return new(r||V)(v.Qb(d.c),v.Qb(p.b))},V.\u0275cmp=v.Kb({type:V,selectors:[["wm-user-access"]],decls:4,vars:4,consts:[["fxLayout","row","fxLayoutAlign","center start","fxLayout.lt-sm","column","fxLayoutAlign.lt-sm","center center","fxLayoutGap","16px",4,"wmContent","wmContentSelect"],["fxLayout","row","fxLayoutAlign","center start","fxLayout.lt-sm","column","fxLayoutAlign.lt-sm","center center","fxLayoutGap","16px"],["matInput","","name","email","email","","required","",3,"ngModel","ngModelChange"],["input","ngModel"],[4,"ngIf"],["fxLayout","column","fxLayoutAlign","center center","fxLayoutGap","8px"],["mat-button","","fxFlex","33",3,"color","disabled","click"]],template:function(r,e){1&r&&(v.Gc(0,x,17,14,"div",0),v.Wb(1,"p"),v.Ic(2),v.jc(3,"json"),v.Vb()),2&r&&(v.pc("wmContentSelect","admin-access"),v.Db(2),v.Jc(v.kc(3,2,e.result)))},directives:[h.a,k.e,k.d,k.f,c.c,c.g,l.b,i.c,i.d,i.s,i.m,i.p,c.f,n.m,u.b,k.b,c.b],pipes:[n.f],styles:["[_nghost-%COMP%]{position:relative;min-height:100%;padding-top:32px;display:flex;flex-direction:column;justify-content:center;align-items:center}[_nghost-%COMP%]   .mat-form-field[_ngcontent-%COMP%]{min-width:300px}"]}),V);a("J3Me");var j,D=[{path:"",content:"admin-access",component:O}],A=((j=function r(){o(this,r)}).\u0275mod=v.Ob({type:j}),j.\u0275inj=v.Nb({factory:function(r){return new(r||j)},imports:[[n.c,i.i,s.a,c.e,l.c,m.b,u.c,b.b,f.e.forChild(D)]]}),j)}}])}();