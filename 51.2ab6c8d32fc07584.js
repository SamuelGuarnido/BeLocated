"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[51],{51:(v,a,o)=>{o.r(a),o.d(a,{LoginPageComponent:()=>P});var i=o(9417),_=o(3719),d=o(9631),s=o(3152),r=o(1378),p=o(2214),m=o(9552),n=o(4438),u=o(7399);const f=()=>["/home"],C=()=>["/login"];(0,p.Wp)(m.C);let P=(()=>{var l;class g{constructor(t,e){this.authService=t,this.router=e,this.emailControl=new i.MJ("",[i.k0.required,i.k0.email]),this.passwordControl=new i.MJ("",[i.k0.required])}onLogin(){const t=this.emailControl.value,e=this.passwordControl.value;this.emailControl.valid&&this.passwordControl.valid?this.authService.onLogin(null!=t?t:"",null!=e?e:""):console.error("Email or password is invalid."),console.log(t,e)}onGoogleSignIn(){this.authService.googleSignIn()}}return(l=g).\u0275fac=function(t){return new(t||l)(n.rXU(u.u),n.rXU(s.Ix))},l.\u0275cmp=n.VBU({type:l,selectors:[["app-login-page"]],standalone:!0,features:[n.aNF],decls:23,vars:6,consts:[[1,"content"],["fill","clear",3,"routerLink"],["name","chevron-back-outline"],[1,"login-process"],[1,"welcome"],[1,"login-input"],["type","email","fill","solid","label","Email","label-placement","floating","placeholder","Enter your email",3,"formControl"],["id","password","type","password","fill","solid","label","Password","label-placement","floating","placeholder","Enter your password",3,"formControl"],["id","forgotPass","fill","clear","mode","md"],["id","login-btn","fill","solid","mode","md",3,"click","routerLink"],["id","orLogin"],[1,"o-auth-btn"],["expand","block","fill","outline",3,"click"],["name","logo-google"],[1,"registerInLogin"],["id","register-login-btn","href","/register"]],template:function(t,e){1&t&&(n.j41(0,"ion-content",0)(1,"ion-button",1),n.nrm(2,"ion-icon",2),n.k0s(),n.j41(3,"div",3)(4,"div",4),n.EFF(5," Hi! Welcome back! "),n.k0s(),n.j41(6,"div",5),n.nrm(7,"ion-input",6)(8,"ion-input",7),n.j41(9,"ion-button",8),n.EFF(10,"Forgot password?"),n.k0s(),n.j41(11,"ion-button",9),n.bIt("click",function(){return e.onLogin()}),n.EFF(12,"Login"),n.k0s(),n.j41(13,"div",10)(14,"p"),n.EFF(15," Or Login with "),n.k0s(),n.j41(16,"div",11)(17,"ion-button",12),n.bIt("click",function(){return e.onGoogleSignIn()}),n.nrm(18,"ion-icon",13),n.k0s()()(),n.j41(19,"div",14),n.EFF(20," Don't have an account? "),n.j41(21,"a",15),n.EFF(22,"Register now"),n.k0s()()()()()),2&t&&(n.R7$(),n.Y8G("routerLink",n.lJ4(4,f)),n.R7$(6),n.Y8G("formControl",e.emailControl),n.R7$(),n.Y8G("formControl",e.passwordControl),n.R7$(3),n.Y8G("routerLink",n.lJ4(5,C)))},dependencies:[r.$w,r.iq,r.W9,r.Jm,i.YN,i.BC,i.X1,i.l_,_.RG,d.fS,s.Wk],styles:[".content[_ngcontent-%COMP%]{--background: white;display:flex;flex-direction:column}.content[_ngcontent-%COMP%]   ion-button[_ngcontent-%COMP%]{color:#000;margin-top:2vh}.login-process[_ngcontent-%COMP%]{display:flex;flex-direction:column;color:#000}.login-process[_ngcontent-%COMP%]   .welcome[_ngcontent-%COMP%]{font-family:Roboto,sans-serif;font-weight:700;font-size:4vh;text-align:start;margin-left:2vh;margin-top:8vh}.login-process[_ngcontent-%COMP%]   .login-input[_ngcontent-%COMP%]{display:flex;flex-direction:column;justify-content:center;align-items:center;margin-top:10vh;border:1vh;border-color:#000}.login-process[_ngcontent-%COMP%]   .login-input[_ngcontent-%COMP%]   ion-input[_ngcontent-%COMP%]{width:90%;margin-bottom:3vh;--background: #f0f0f0;--color: #000;--padding-start: 2vh}.login-process[_ngcontent-%COMP%]   .login-input[_ngcontent-%COMP%]   #password[_ngcontent-%COMP%]{margin-bottom:0vh}.login-process[_ngcontent-%COMP%]   .login-input[_ngcontent-%COMP%]   #forgotPass[_ngcontent-%COMP%]{color:#004696;margin-left:60%;font-size:1.3vh}.login-process[_ngcontent-%COMP%]   .login-input[_ngcontent-%COMP%]   #login-btn[_ngcontent-%COMP%]{width:90%;--background: black;color:#fff;font-weight:700}.login-process[_ngcontent-%COMP%]   .login-input[_ngcontent-%COMP%]   #orLogin[_ngcontent-%COMP%]{display:flex;flex-direction:column;justify-content:center;align-items:center;margin-top:2vh;font-size:1.7vh;color:#789}.registerInLogin[_ngcontent-%COMP%]{display:flex;flex-direction:row;justify-content:center;align-items:center;font-size:1.7vh;margin-top:6vh}.registerInLogin[_ngcontent-%COMP%]   #register-login-btn[_ngcontent-%COMP%]{margin-left:1vh;text-decoration:none}"],changeDetection:0}),g})()}}]);