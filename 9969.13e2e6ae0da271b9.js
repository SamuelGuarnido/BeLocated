"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[9969],{9969:(k,h,l)=>{l.d(h,{FX:()=>P,If:()=>s,K2:()=>f,MA:()=>g,Os:()=>c,P:()=>F,hZ:()=>_,i0:()=>d,iF:()=>m,kY:()=>p,kp:()=>u,sf:()=>w,ui:()=>E,wk:()=>y});var s=function(e){return e[e.State=0]="State",e[e.Transition=1]="Transition",e[e.Sequence=2]="Sequence",e[e.Group=3]="Group",e[e.Animate=4]="Animate",e[e.Keyframes=5]="Keyframes",e[e.Style=6]="Style",e[e.Trigger=7]="Trigger",e[e.Reference=8]="Reference",e[e.AnimateChild=9]="AnimateChild",e[e.AnimateRef=10]="AnimateRef",e[e.Query=11]="Query",e[e.Stagger=12]="Stagger",e}(s||{});const u="*";function _(e,t){return{type:s.Trigger,name:e,definitions:t,options:{}}}function d(e,t=null){return{type:s.Animate,styles:t,timings:e}}function c(e,t=null){return{type:s.Group,steps:e,options:t}}function f(e,t=null){return{type:s.Sequence,steps:e,options:t}}function m(e){return{type:s.Style,styles:e,offset:null}}function y(e,t,n){return{type:s.State,name:e,styles:t,options:n}}function p(e,t,n=null){return{type:s.Transition,expr:e,animation:t,options:n}}function g(e=null){return{type:s.AnimateChild,options:e}}function F(e,t,n=null){return{type:s.Query,selector:e,animation:t,options:n}}class w{constructor(t=0,n=0){this._onDoneFns=[],this._onStartFns=[],this._onDestroyFns=[],this._originalOnDoneFns=[],this._originalOnStartFns=[],this._started=!1,this._destroyed=!1,this._finished=!1,this._position=0,this.parentPlayer=null,this.totalTime=t+n}_onFinish(){this._finished||(this._finished=!0,this._onDoneFns.forEach(t=>t()),this._onDoneFns=[])}onStart(t){this._originalOnStartFns.push(t),this._onStartFns.push(t)}onDone(t){this._originalOnDoneFns.push(t),this._onDoneFns.push(t)}onDestroy(t){this._onDestroyFns.push(t)}hasStarted(){return this._started}init(){}play(){this.hasStarted()||(this._onStart(),this.triggerMicrotask()),this._started=!0}triggerMicrotask(){queueMicrotask(()=>this._onFinish())}_onStart(){this._onStartFns.forEach(t=>t()),this._onStartFns=[]}pause(){}restart(){}finish(){this._onFinish()}destroy(){this._destroyed||(this._destroyed=!0,this.hasStarted()||this._onStart(),this.finish(),this._onDestroyFns.forEach(t=>t()),this._onDestroyFns=[])}reset(){this._started=!1,this._finished=!1,this._onStartFns=this._originalOnStartFns,this._onDoneFns=this._originalOnDoneFns}setPosition(t){this._position=this.totalTime?t*this.totalTime:1}getPosition(){return this.totalTime?this._position/this.totalTime:1}triggerCallback(t){const n="start"==t?this._onStartFns:this._onDoneFns;n.forEach(i=>i()),n.length=0}}class E{constructor(t){this._onDoneFns=[],this._onStartFns=[],this._finished=!1,this._started=!1,this._destroyed=!1,this._onDestroyFns=[],this.parentPlayer=null,this.totalTime=0,this.players=t;let n=0,i=0,r=0;const o=this.players.length;0==o?queueMicrotask(()=>this._onFinish()):this.players.forEach(a=>{a.onDone(()=>{++n==o&&this._onFinish()}),a.onDestroy(()=>{++i==o&&this._onDestroy()}),a.onStart(()=>{++r==o&&this._onStart()})}),this.totalTime=this.players.reduce((a,v)=>Math.max(a,v.totalTime),0)}_onFinish(){this._finished||(this._finished=!0,this._onDoneFns.forEach(t=>t()),this._onDoneFns=[])}init(){this.players.forEach(t=>t.init())}onStart(t){this._onStartFns.push(t)}_onStart(){this.hasStarted()||(this._started=!0,this._onStartFns.forEach(t=>t()),this._onStartFns=[])}onDone(t){this._onDoneFns.push(t)}onDestroy(t){this._onDestroyFns.push(t)}hasStarted(){return this._started}play(){this.parentPlayer||this.init(),this._onStart(),this.players.forEach(t=>t.play())}pause(){this.players.forEach(t=>t.pause())}restart(){this.players.forEach(t=>t.restart())}finish(){this._onFinish(),this.players.forEach(t=>t.finish())}destroy(){this._onDestroy()}_onDestroy(){this._destroyed||(this._destroyed=!0,this._onFinish(),this.players.forEach(t=>t.destroy()),this._onDestroyFns.forEach(t=>t()),this._onDestroyFns=[])}reset(){this.players.forEach(t=>t.reset()),this._destroyed=!1,this._finished=!1,this._started=!1}setPosition(t){const n=t*this.totalTime;this.players.forEach(i=>{const r=i.totalTime?Math.min(1,n/i.totalTime):1;i.setPosition(r)})}getPosition(){const t=this.players.reduce((n,i)=>null===n||i.totalTime>n.totalTime?i:n,null);return null!=t?t.getPosition():0}beforeDestroy(){this.players.forEach(t=>{t.beforeDestroy&&t.beforeDestroy()})}triggerCallback(t){const n="start"==t?this._onStartFns:this._onDoneFns;n.forEach(i=>i()),n.length=0}}const P="!"}}]);