(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{BTe0:function(e,t,a){"use strict";a.d(t,"a",function(){return f}),a.d(t,"b",function(){return y});var r=a("8Y7J"),n=a("SVse"),i=a("UhP/"),s=a("8LU1"),o=a("omvX"),c=a("quSY"),l=a("xgIS"),m=a("pLZG");const b=["primaryValueBar"];class p{constructor(e){this._elementRef=e}}const u=Object(i.v)(p,"primary"),d=new r.s("mat-progress-bar-location",{providedIn:"root",factory:function(){const e=Object(r.X)(n.d),t=e?e.location:null;return{getPathname:()=>t?t.pathname+t.search:""}}});let g=0,f=(()=>{class e extends u{constructor(e,t,a,n){super(e),this._elementRef=e,this._ngZone=t,this._animationMode=a,this._isNoopAnimation=!1,this._value=0,this._bufferValue=0,this.animationEnd=new r.o,this._animationEndSubscription=c.a.EMPTY,this.mode="determinate",this.progressbarId="mat-progress-bar-"+g++;const i=n?n.getPathname().split("#")[0]:"";this._rectangleFillValue=`url('${i}#${this.progressbarId}')`,this._isNoopAnimation="NoopAnimations"===a}get value(){return this._value}set value(e){this._value=h(Object(s.f)(e)||0)}get bufferValue(){return this._bufferValue}set bufferValue(e){this._bufferValue=h(e||0)}_primaryTransform(){return{transform:`scale3d(${this.value/100}, 1, 1)`}}_bufferTransform(){return"buffer"===this.mode?{transform:`scale3d(${this.bufferValue/100}, 1, 1)`}:null}ngAfterViewInit(){this._ngZone.runOutsideAngular(()=>{const e=this._primaryValueBar.nativeElement;this._animationEndSubscription=Object(l.a)(e,"transitionend").pipe(Object(m.a)(t=>t.target===e)).subscribe(()=>{"determinate"!==this.mode&&"buffer"!==this.mode||this._ngZone.run(()=>this.animationEnd.next({value:this.value}))})})}ngOnDestroy(){this._animationEndSubscription.unsubscribe()}}return e.\u0275fac=function(t){return new(t||e)(r.Qb(r.l),r.Qb(r.B),r.Qb(o.a,8),r.Qb(d,8))},e.\u0275cmp=r.Kb({type:e,selectors:[["mat-progress-bar"]],viewQuery:function(e,t){if(1&e&&r.Lc(b,1),2&e){let e;r.uc(e=r.fc())&&(t._primaryValueBar=e.first)}},hostAttrs:["role","progressbar","aria-valuemin","0","aria-valuemax","100",1,"mat-progress-bar"],hostVars:4,hostBindings:function(e,t){2&e&&(r.Eb("aria-valuenow","indeterminate"===t.mode||"query"===t.mode?null:t.value)("mode",t.mode),r.Ib("_mat-animation-noopable",t._isNoopAnimation))},inputs:{color:"color",mode:"mode",value:"value",bufferValue:"bufferValue"},outputs:{animationEnd:"animationEnd"},exportAs:["matProgressBar"],features:[r.Ab],decls:9,vars:4,consts:[["width","100%","height","4","focusable","false",1,"mat-progress-bar-background","mat-progress-bar-element"],["x","4","y","0","width","8","height","4","patternUnits","userSpaceOnUse",3,"id"],["cx","2","cy","2","r","2"],["width","100%","height","100%"],[1,"mat-progress-bar-buffer","mat-progress-bar-element",3,"ngStyle"],[1,"mat-progress-bar-primary","mat-progress-bar-fill","mat-progress-bar-element",3,"ngStyle"],["primaryValueBar",""],[1,"mat-progress-bar-secondary","mat-progress-bar-fill","mat-progress-bar-element"]],template:function(e,t){1&e&&(r.hc(),r.Wb(0,"svg",0),r.Wb(1,"defs"),r.Wb(2,"pattern",1),r.Rb(3,"circle",2),r.Vb(),r.Vb(),r.Rb(4,"rect",3),r.Vb(),r.gc(),r.Rb(5,"div",4),r.Rb(6,"div",5,6),r.Rb(8,"div",7)),2&e&&(r.Db(2),r.pc("id",t.progressbarId),r.Db(2),r.Eb("fill",t._rectangleFillValue),r.Db(1),r.pc("ngStyle",t._bufferTransform()),r.Db(1),r.pc("ngStyle",t._primaryTransform()))},directives:[n.n],styles:['.mat-progress-bar{display:block;height:4px;overflow:hidden;position:relative;transition:opacity 250ms linear;width:100%}._mat-animation-noopable.mat-progress-bar{transition:none;animation:none}.mat-progress-bar .mat-progress-bar-element,.mat-progress-bar .mat-progress-bar-fill::after{height:100%;position:absolute;width:100%}.mat-progress-bar .mat-progress-bar-background{width:calc(100% + 10px)}.cdk-high-contrast-active .mat-progress-bar .mat-progress-bar-background{display:none}.mat-progress-bar .mat-progress-bar-buffer{transform-origin:top left;transition:transform 250ms ease}.cdk-high-contrast-active .mat-progress-bar .mat-progress-bar-buffer{border-top:solid 5px;opacity:.5}.mat-progress-bar .mat-progress-bar-secondary{display:none}.mat-progress-bar .mat-progress-bar-fill{animation:none;transform-origin:top left;transition:transform 250ms ease}.cdk-high-contrast-active .mat-progress-bar .mat-progress-bar-fill{border-top:solid 4px}.mat-progress-bar .mat-progress-bar-fill::after{animation:none;content:"";display:inline-block;left:0}.mat-progress-bar[dir=rtl],[dir=rtl] .mat-progress-bar{transform:rotateY(180deg)}.mat-progress-bar[mode=query]{transform:rotateZ(180deg)}.mat-progress-bar[mode=query][dir=rtl],[dir=rtl] .mat-progress-bar[mode=query]{transform:rotateZ(180deg) rotateY(180deg)}.mat-progress-bar[mode=indeterminate] .mat-progress-bar-fill,.mat-progress-bar[mode=query] .mat-progress-bar-fill{transition:none}.mat-progress-bar[mode=indeterminate] .mat-progress-bar-primary,.mat-progress-bar[mode=query] .mat-progress-bar-primary{-webkit-backface-visibility:hidden;backface-visibility:hidden;animation:mat-progress-bar-primary-indeterminate-translate 2000ms infinite linear;left:-145.166611%}.mat-progress-bar[mode=indeterminate] .mat-progress-bar-primary.mat-progress-bar-fill::after,.mat-progress-bar[mode=query] .mat-progress-bar-primary.mat-progress-bar-fill::after{-webkit-backface-visibility:hidden;backface-visibility:hidden;animation:mat-progress-bar-primary-indeterminate-scale 2000ms infinite linear}.mat-progress-bar[mode=indeterminate] .mat-progress-bar-secondary,.mat-progress-bar[mode=query] .mat-progress-bar-secondary{-webkit-backface-visibility:hidden;backface-visibility:hidden;animation:mat-progress-bar-secondary-indeterminate-translate 2000ms infinite linear;left:-54.888891%;display:block}.mat-progress-bar[mode=indeterminate] .mat-progress-bar-secondary.mat-progress-bar-fill::after,.mat-progress-bar[mode=query] .mat-progress-bar-secondary.mat-progress-bar-fill::after{-webkit-backface-visibility:hidden;backface-visibility:hidden;animation:mat-progress-bar-secondary-indeterminate-scale 2000ms infinite linear}.mat-progress-bar[mode=buffer] .mat-progress-bar-background{-webkit-backface-visibility:hidden;backface-visibility:hidden;animation:mat-progress-bar-background-scroll 250ms infinite linear;display:block}.mat-progress-bar._mat-animation-noopable .mat-progress-bar-fill,.mat-progress-bar._mat-animation-noopable .mat-progress-bar-fill::after,.mat-progress-bar._mat-animation-noopable .mat-progress-bar-buffer,.mat-progress-bar._mat-animation-noopable .mat-progress-bar-primary,.mat-progress-bar._mat-animation-noopable .mat-progress-bar-primary.mat-progress-bar-fill::after,.mat-progress-bar._mat-animation-noopable .mat-progress-bar-secondary,.mat-progress-bar._mat-animation-noopable .mat-progress-bar-secondary.mat-progress-bar-fill::after,.mat-progress-bar._mat-animation-noopable .mat-progress-bar-background{animation:none;transition-duration:1ms}@keyframes mat-progress-bar-primary-indeterminate-translate{0%{transform:translateX(0)}20%{animation-timing-function:cubic-bezier(0.5, 0, 0.701732, 0.495819);transform:translateX(0)}59.15%{animation-timing-function:cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);transform:translateX(83.67142%)}100%{transform:translateX(200.611057%)}}@keyframes mat-progress-bar-primary-indeterminate-scale{0%{transform:scaleX(0.08)}36.65%{animation-timing-function:cubic-bezier(0.334731, 0.12482, 0.785844, 1);transform:scaleX(0.08)}69.15%{animation-timing-function:cubic-bezier(0.06, 0.11, 0.6, 1);transform:scaleX(0.661479)}100%{transform:scaleX(0.08)}}@keyframes mat-progress-bar-secondary-indeterminate-translate{0%{animation-timing-function:cubic-bezier(0.15, 0, 0.515058, 0.409685);transform:translateX(0)}25%{animation-timing-function:cubic-bezier(0.31033, 0.284058, 0.8, 0.733712);transform:translateX(37.651913%)}48.35%{animation-timing-function:cubic-bezier(0.4, 0.627035, 0.6, 0.902026);transform:translateX(84.386165%)}100%{transform:translateX(160.277782%)}}@keyframes mat-progress-bar-secondary-indeterminate-scale{0%{animation-timing-function:cubic-bezier(0.15, 0, 0.515058, 0.409685);transform:scaleX(0.08)}19.15%{animation-timing-function:cubic-bezier(0.31033, 0.284058, 0.8, 0.733712);transform:scaleX(0.457104)}44.15%{animation-timing-function:cubic-bezier(0.4, 0.627035, 0.6, 0.902026);transform:scaleX(0.72796)}100%{transform:scaleX(0.08)}}@keyframes mat-progress-bar-background-scroll{to{transform:translateX(-8px)}}\n'],encapsulation:2,changeDetection:0}),e})();function h(e,t=0,a=100){return Math.max(t,Math.min(a,e))}let y=(()=>{class e{}return e.\u0275mod=r.Ob({type:e}),e.\u0275inj=r.Nb({factory:function(t){return new(t||e)},imports:[[n.c,i.j],i.j]}),e})()},IvFg:function(e,t,a){"use strict";a.r(t),a.d(t,"FeedbackModule",function(){return B});var r=a("SVse"),n=a("iInd"),i=a("s7LF"),s=a("u9T3"),o=a("iELJ"),c=a("Dxy4"),l=a("Q2Ze"),m=a("e6WT"),b=a("BTe0"),p=a("g7MM"),u=a("CSIE"),d=a("txmD"),g=a("8Y7J");const f=new g.s("wizdm.doorbel.config");var h=a("LRne"),y=a("eIep"),v=a("JIr8"),w=a("lJxs"),I=a("IheW");let V=(()=>{class e{constructor(e,t){if(this.config=e,this.http=t,this.maxFileSize=5242880,!e.url||!e.id||!e.appKey)throw new Error("DoorbellSerive requires a valid configuration!!!")}ring(){return this.http.post(`${this.config.url}/${this.config.id}/open`,"",{headers:{"Content-Type":"text/html"},params:{key:this.config.appKey},observe:"response",responseType:"text"}).toPromise().then(e=>(console.log(e),201===e.status))}submit(e,t){return this.uploader(t).pipe(Object(y.a)(t=>this.http.post(`${this.config.url}/${this.config.id}/submit`,Object.assign(Object.assign({},e),{attachments:t}),{headers:{"Content-Type":"application/json"},params:{key:this.config.appKey},observe:"response",responseType:"text"}))).toPromise().then(e=>201===e.status)}formData(e){const t=new FormData;for(let a=0;a<e.length;a++)e[a].size<=this.maxFileSize&&t.append(e[a].name,e[a]);return t}uploader(e){return e&&0!==e.length?this.http.post(`${this.config.url}/${this.config.id}/upload`,this.formData(e),{headers:{Accept:"application/json"},params:{key:this.config.appKey},observe:"response",responseType:"json"}).pipe(Object(v.a)(()=>Object(h.a)(void 0)),Object(w.a)(e=>e&&201===e.status?e.body:void 0)):Object(h.a)(void 0)}}return e.\u0275fac=function(t){return new(t||e)(g.ac(f),g.ac(I.b))},e.\u0275prov=g.Mb({token:e,factory:e.\u0275fac}),e})(),k=(()=>{class e{static init(t){return{ngModule:e,providers:[{provide:f,useValue:t}]}}}return e.\u0275mod=g.Ob({type:e}),e.\u0275inj=g.Nb({factory:function(t){return new(t||e)},providers:[V]}),e})();var D=a("lWmb"),_=a("Qfjl"),x=a("VDRc"),M=a("h0Qx"),W=a("V/MM");function O(e,t){if(1&e&&(g.Wb(0,"p",10),g.Ic(1),g.Vb()),2&e){const e=g.ic(2).$implicit;g.Db(1),g.Jc((null==e.notifications?null:e.notifications.success)||"Succeeded")}}function S(e,t){if(1&e&&(g.Wb(0,"p",11),g.Ic(1),g.Vb()),2&e){const e=g.ic(2).$implicit;g.Db(1),g.Jc((null==e.notifications?null:e.notifications.error)||"Error")}}function C(e,t){if(1&e&&(g.Wb(0,"mat-dialog-content",7),g.Gc(1,O,2,1,"p",8),g.Gc(2,S,2,1,"p",9),g.Vb()),2&e){const e=g.ic(2);g.pc("ngSwitch",e.success),g.Db(1),g.pc("ngSwitchCase",!0),g.Db(1),g.pc("ngSwitchCase",!1)}}function E(e,t){if(1&e&&(g.Wb(0,"mat-error"),g.Ic(1),g.Vb()),2&e){const e=g.ic(2).$implicit;g.Db(1),g.Jc((null==e.email||null==e.email.errors?null:e.email.errors.required)||"Email required")}}function J(e,t){if(1&e&&(g.Wb(0,"mat-error"),g.Ic(1),g.Vb()),2&e){const e=g.ic(2).$implicit;g.Db(1),g.Jc((null==e.email||null==e.email.errors?null:e.email.errors.invalid)||"Invalid email")}}function j(e,t){if(1&e&&(g.Wb(0,"mat-error"),g.Ic(1),g.Vb()),2&e){const e=g.ic(2).$implicit;g.Db(1),g.Jc((null==e.message||null==e.message.errors?null:e.message.errors.required)||"Message required")}}function X(e,t){if(1&e&&(g.Wb(0,"span",31),g.Ic(1),g.Vb()),2&e){const e=g.ic(3).$implicit;g.Db(1),g.Kc(" ",(null==e.attachments.errors?null:e.attachments.errors.sizeExceeded)||"File size exeeded"," ")}}function z(e,t){if(1&e&&(g.Wb(0,"span"),g.Ic(1),g.Vb()),2&e){const e=g.ic(5);g.Db(1),g.Kc("\xa0(",e.files.length,")")}}function $(e,t){if(1&e&&(g.Wb(0,"span"),g.Ic(1),g.Vb(),g.Gc(2,z,2,1,"span",19)),2&e){const e=g.ic(3).$implicit,t=g.ic();g.Db(1),g.Jc(e.attachments.label||"Attachments"),g.Db(1),g.pc("ngIf",(null==t.files?null:t.files.length)>0)}}function q(e,t){if(1&e){const e=g.Xb();g.Ub(0),g.Wb(1,"input",25,26),g.ec("change",function(t){return g.yc(e),g.ic(3).files=t.target.files}),g.Vb(),g.Wb(3,"div",27),g.ec("click",function(){g.yc(e);const t=g.vc(2);return t.value="",t.click()}),g.Rb(4,"wm-icon",28),g.Gc(5,X,2,1,"span",29),g.Gc(6,$,3,2,"ng-template",null,30,g.Hc),g.Vb(),g.Tb()}if(2&e){const e=g.vc(7),t=g.ic(2).$implicit,a=g.ic();g.Db(3),g.Dc("pointer-events",a.sending?"none":void 0),g.Ib("color-disabled",a.sending),g.Db(1),g.pc("icon",t.attachments.icon||"attach_file"),g.Db(1),g.pc("ngIf",a.fileSizeExceeded)("ngIfElse",e)}}function P(e,t){1&e&&g.Rb(0,"mat-progress-bar",32)}function G(e,t){if(1&e){const e=g.Xb();g.Wb(0,"form",12,13),g.ec("ngSubmit",function(){g.yc(e);const t=g.ic().language;return g.ic().send(t)}),g.Wb(2,"mat-dialog-content",14),g.Wb(3,"mat-form-field",15),g.Wb(4,"mat-label"),g.Ic(5),g.Vb(),g.Wb(6,"input",16),g.ec("ngModelChange",function(t){return g.yc(e),g.ic(2).name=t}),g.Vb(),g.Wb(7,"mat-hint"),g.Ic(8),g.Vb(),g.Vb(),g.Wb(9,"mat-form-field",15),g.Wb(10,"mat-label"),g.Ic(11),g.Vb(),g.Wb(12,"input",17,18),g.ec("ngModelChange",function(t){return g.yc(e),g.ic(2).email=t}),g.Vb(),g.Wb(14,"mat-hint"),g.Ic(15),g.Vb(),g.Gc(16,E,2,1,"mat-error",19),g.Gc(17,J,2,1,"mat-error",19),g.Vb(),g.Wb(18,"mat-form-field",15),g.Wb(19,"mat-label"),g.Ic(20),g.Vb(),g.Wb(21,"textarea",20,21),g.ec("ngModelChange",function(t){return g.yc(e),g.ic(2).message=t}),g.Vb(),g.Wb(23,"mat-hint"),g.Ic(24),g.Vb(),g.Gc(25,j,2,1,"mat-error",19),g.Vb(),g.Gc(26,q,8,7,"ng-container",19),g.Vb(),g.Wb(27,"mat-dialog-actions",22),g.Gc(28,P,1,0,"mat-progress-bar",23),g.Wb(29,"button",24),g.Ic(30),g.Vb(),g.Vb(),g.Vb()}if(2&e){const e=g.vc(1),t=g.vc(13),a=g.vc(22),r=g.ic().$implicit,n=g.ic();g.pc("disabled",n.sending),g.Db(5),g.Jc((null==r.name?null:r.name.label)||"Name"),g.Db(1),g.pc("ngModel",n.name)("disabled",n.authenticated),g.Db(2),g.Jc(null==r.name?null:r.name.hint),g.Db(3),g.Jc((null==r.email?null:r.email.label)||"Email"),g.Db(1),g.pc("ngModel",n.email)("disabled",n.authenticated&&!!n.me.email),g.Db(3),g.Jc(null==r.email?null:r.email.hint),g.Db(1),g.pc("ngIf",null==t.errors?null:t.errors.required),g.Db(1),g.pc("ngIf",null==t.errors?null:t.errors.email),g.Db(3),g.Jc((null==r.message?null:r.message.label)||"Message"),g.Db(1),g.pc("ngModel",n.message),g.Db(3),g.Jc(null==r.message?null:r.message.hint),g.Db(1),g.pc("ngIf",null==a.errors?null:a.errors.required),g.Db(1),g.pc("ngIf",r.attachments&&r.attachments.enable),g.Db(2),g.pc("ngIf",n.sending),g.Db(1),g.pc("disabled",!e.valid||n.sending),g.Db(1),g.Jc(r.send||"Send")}}function T(e,t){if(1&e&&(g.Wb(0,"a",33),g.Ic(1),g.Vb()),2&e){const e=t.ngIf;g.pc("wmRedirect",e.url),g.Db(1),g.Jc(e.caption)}}function R(e,t){if(1&e&&(g.Ub(0),g.Wb(1,"header",1),g.Wb(2,"span"),g.Ic(3),g.Vb(),g.Wb(4,"button",2),g.Rb(5,"wm-icon",3),g.Vb(),g.Vb(),g.Gc(6,C,3,3,"ng-template",null,4,g.Hc),g.Gc(8,G,31,19,"form",5),g.Gc(9,T,2,2,"a",6),g.Tb()),2&e){const e=t.$implicit,a=g.vc(7),r=g.ic();g.Db(3),g.Jc(e.title||"Feedback"),g.Db(1),g.pc("mat-dialog-close",r.success),g.Db(4),g.pc("ngIf",!r.sent)("ngIfElse",a),g.Db(1),g.pc("ngIf",e.credits)}}let A=(()=>{class e{constructor(e,t,a,r){this.ref=t,this.user=a,this.doorbell=r,this.success=!1,this.sending=!1,this.sent=!1,this.name=this.me.fullName||this.me.name||"",this.email=this.me.email||"",this.message="",this.files=null,this.ref.afterOpened().subscribe(()=>this.doorbell.ring())}get me(){return this.user.data||{}}get authenticated(){return this.user.auth.authenticated}get fileSizeExceeded(){if(!this.files||0===this.files.length)return!1;for(let e=0;e<this.files.length;e++)if(this.files[e].size>this.doorbell.maxFileSize)return!0;return!1}send(e){this.sending=!0,this.doorbell.submit({name:this.name,email:this.email,message:this.message,language:e,properties:this.authenticated?{userId:this.me.id}:void 0},this.files).then(e=>{this.success=e,this.sending=!1,this.sent=!0})}}return e.\u0275fac=function(t){return new(t||e)(g.Qb(o.a),g.Qb(o.g),g.Qb(D.b),g.Qb(V))},e.\u0275cmp=g.Kb({type:e,selectors:[["wm-feedback-dlg"]],decls:1,vars:1,consts:[[4,"wmContent","wmContentSelect"],["mat-dialog-title","","fxLayout","row","fxLayoutAlign","space-between end"],["mat-icon-button","",3,"mat-dialog-close"],["inline","true","icon","close"],["thankYou",""],[3,"disabled","ngSubmit",4,"ngIf","ngIfElse"],["class","mat-small",3,"wmRedirect",4,"ngIf"],[3,"ngSwitch"],["class","message color-default primary",4,"ngSwitchCase"],["class","message color-default warn",4,"ngSwitchCase"],[1,"message","color-default","primary"],[1,"message","color-default","warn"],[3,"disabled","ngSubmit"],["form","ngForm"],["fxLayout","column","fxLayoutAlign","space-around stretch","fxLayoutGap","10px"],["appearance","outline"],["matInput","","name","name",3,"ngModel","disabled","ngModelChange"],["matInput","","name","email","required","","email","",3,"ngModel","disabled","ngModelChange"],["emailInput","ngModel"],[4,"ngIf"],["matInput","","name","message","rows","5","required","","cdkFocusInitial","",3,"ngModel","ngModelChange"],["messageInput","ngModel"],["align","end"],["mode","indeterminate","color","primary",4,"ngIf"],["mat-flat-button","","color","primary","type","submit",3,"disabled"],["type","file","multiple","",2,"display","none",3,"change"],["openfile",""],["fxLayout","row","fxLayoutAlign","start center","fxLayoutGap","4px",1,"upload",3,"click"],[3,"icon"],["class","mat-error",4,"ngIf","ngIfElse"],["filesOk",""],[1,"mat-error"],["mode","indeterminate","color","primary"],[1,"mat-small",3,"wmRedirect"]],template:function(e,t){1&e&&g.Gc(0,R,10,5,"ng-container",0),2&e&&g.pc("wmContentSelect","feedback")},directives:[_.a,o.h,x.e,x.d,c.b,o.d,M.a,r.m,o.e,r.o,r.p,i.u,i.n,i.o,x.f,l.c,l.g,m.b,i.c,i.m,i.p,l.f,i.s,i.d,o.c,l.b,b.a,W.b],styles:["[_nghost-%COMP%]   .mat-dialog-content[_ngcontent-%COMP%]{max-width:100%;width:350px;margin:0;padding:0}[_nghost-%COMP%]   .message[_ngcontent-%COMP%]{text-align:center;white-space:pre-wrap;margin-bottom:20px;padding:5px}[_nghost-%COMP%]   .upload[_ngcontent-%COMP%]{cursor:pointer}[_nghost-%COMP%]   .upload[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{opacity:.5}[_nghost-%COMP%]   .upload[_ngcontent-%COMP%]:hover   span[_ngcontent-%COMP%]{opacity:inherit}"]}),e})();var L=a("HOC2");a("J3Me");const{doorbell:F}=L.a,Q=[{path:"",content:"feedback",component:A,data:{dialogConfig:{maxWidth:"100%"}}}];let B=(()=>{class e{}return e.\u0275mod=g.Ob({type:e}),e.\u0275inj=g.Nb({factory:function(t){return new(t||e)},imports:[[r.c,n.k,i.i,s.a,o.f,c.c,l.e,m.c,b.b,u.a,d.a,k.init(F),p.e.forChild(Q)]]}),e})()}}]);