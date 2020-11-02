(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{UFnY:function(e,b,a){"use strict";a.r(b),a.d(b,"PublicModule",(function(){return d}));var c=a("ofXK"),o=a("tyNb"),i=a("fXoL");const l=[{path:"",component:(()=>{class e{constructor(e){this.locale=e,this.isEnglish=this.locale.startsWith("en")}}return e.\u0275fac=function(b){return new(b||e)(i.Db(i.u))},e.\u0275cmp=i.xb({type:e,selectors:[["app-public"]],decls:145,vars:1,consts:function(){var e,b,a,c,o,l,t,d,n,s,r,f,T,E,_,G,$,u,A,C,h,O,p,S,L,F,g,D,m,z,R,I,J;return e="" + "\ufffd#3\ufffd" + "Aller \xE0 la version fran\xE7aise" + "\ufffd/#3\ufffd" + "",b="Angular boilerplate",a="Angular 10 boilerplate with " + "\ufffd#8\ufffd" + "Spectre.css" + "\ufffd/#8\ufffd" + ", i18n, static prerendering and some common resources.",c="Getting started",o="" + "\ufffd#13\ufffd" + "npm install" + "\ufffd/#13\ufffd" + " is obviously a good start. After that, you can run:",l="" + "\ufffd#17\ufffd" + "npm start" + "\ufffd/#17\ufffd" + " to start the project locally on " + "\ufffd#18\ufffd" + "http://localhost:4200" + "\ufffd/#18\ufffd" + " (accessible through local network)",t="" + "\ufffd#21\ufffd" + "npm run start:fr" + "\ufffd/#21\ufffd" + " does the same using the French locale",d="" + "\ufffd#24\ufffd" + "npm lint" + "\ufffd/#24\ufffd" + " to lint (the default configuration has not been modified)",n="" + "[\ufffd#27\ufffd|\ufffd#28\ufffd]" + "npm run extract" + "[\ufffd/#27\ufffd|\ufffd/#28\ufffd]" + " to extract the source language file in " + "[\ufffd#27\ufffd|\ufffd#28\ufffd]" + "src/locale" + "[\ufffd/#27\ufffd|\ufffd/#28\ufffd]" + "",n=i.Kb(n),s="" + "[\ufffd#31\ufffd|\ufffd#32\ufffd]" + "npm run build" + "[\ufffd/#31\ufffd|\ufffd/#32\ufffd]" + " to build for production, files are generated in " + "[\ufffd#31\ufffd|\ufffd#32\ufffd]" + "dist/angular-boilerplate/browser" + "[\ufffd/#31\ufffd|\ufffd/#32\ufffd]" + "",s=i.Kb(s),r="" + "[\ufffd#35\ufffd|\ufffd#36\ufffd|\ufffd#37\ufffd]" + "npm run prerender" + "[\ufffd/#35\ufffd|\ufffd/#36\ufffd|\ufffd/#37\ufffd]" + " does the same but it also prerenders routes defined in the " + "[\ufffd#35\ufffd|\ufffd#36\ufffd|\ufffd#37\ufffd]" + "prerender" + "[\ufffd/#35\ufffd|\ufffd/#36\ufffd|\ufffd/#37\ufffd]" + " configuration in " + "[\ufffd#35\ufffd|\ufffd#36\ufffd|\ufffd#37\ufffd]" + "angular.json" + "[\ufffd/#35\ufffd|\ufffd/#36\ufffd|\ufffd/#37\ufffd]" + "",r=i.Kb(r),f="Features",T="Styling",E="" + "\ufffd#44\ufffd" + "Spectre.css" + "[\ufffd/#44\ufffd|\ufffd/#45\ufffd]" + ", a lightweight CSS framework, is included with its set of pure CSS icons " + "\ufffd#45\ufffd" + "Icons.css" + "[\ufffd/#44\ufffd|\ufffd/#45\ufffd]" + ".",E=i.Kb(E),_="i18n",G="i18n is done with the native package. It is currently configured to be in English in the source code and to have a French translation. The exact configuration is detailed below.",$="Common resources",u="Directives",A="" + "\ufffd#57\ufffd" + "AutofocusDirective" + "\ufffd/#57\ufffd" + ": dynamically focuses an element",C="Pipes",h="" + "\ufffd#63\ufffd" + "ConcatPipe" + "\ufffd/#63\ufffd" + "",O="" + "\ufffd#66\ufffd" + "ForObjectPipe" + "\ufffd/#66\ufffd" + ": iterates through the keys of an object",p="" + "\ufffd#69\ufffd" + "JoinPipe" + "\ufffd/#69\ufffd" + "",S="" + "\ufffd#72\ufffd" + "LastElementPipe" + "\ufffd/#72\ufffd" + ": returns the last element of an array",L="" + "\ufffd#75\ufffd" + "SplitPipe" + "\ufffd/#75\ufffd" + "",F="" + "\ufffd#78\ufffd" + "ToFixedPipe" + "\ufffd/#78\ufffd" + "",g="Structure",D="@core",m="" + "\ufffd#85\ufffd" + "CoreModule" + "\ufffd/#85\ufffd" + " is supposed to contain global services and models. There are a few other useful files:",z="" + "[\ufffd#89\ufffd|\ufffd#90\ufffd]" + "core.constants.ts" + "[\ufffd/#89\ufffd|\ufffd/#90\ufffd]" + " to store application constants (not to be confused with " + "[\ufffd#89\ufffd|\ufffd#90\ufffd]" + "environment.ts" + "[\ufffd/#89\ufffd|\ufffd/#90\ufffd]" + ")",z=i.Kb(z),R="" + "\ufffd#93\ufffd" + "core.utils.ts" + "\ufffd/#93\ufffd" + " to store simple functions you want to be able to use everywhere",I="@theme",J="" + "[\ufffd#98\ufffd|\ufffd#99\ufffd]" + "ThemeModule" + "[\ufffd/#98\ufffd|\ufffd/#99\ufffd]" + " is supposed to contain global resources which can be used in templates (components, directives, pipes, etc.). You can also find a folder named " + "[\ufffd#98\ufffd|\ufffd#99\ufffd]" + "styles" + "[\ufffd/#98\ufffd|\ufffd/#99\ufffd]" + " containing the following files:",[[1,"container","grid-lg","my-2"],e,[3,"href"],["id","angular-boilerplate",1,"text-center"],b,[1,"text-center"],a,["href","https://picturepan2.github.io/spectre"],["id","getting-started"],c,o,l,["href","http://localhost:4200"],t,d,n,s,r,["id","features"],f,["id","styling"],T,E,["href","https://picturepan2.github.io/icons.css"],["id","i18n"],_,G,["id","common-resources"],$,["id","directives"],u,A,["id","pipes"],C,h,O,p,S,L,F,["id","structure"],g,["id","-core"],D,m,z,R,["id","-theme"],I,J=i.Kb(J),"" + "\ufffd#103\ufffd" + "custom-spectre.css.scss" + "\ufffd/#103\ufffd" + " imports and configures Spectre.css","" + "\ufffd#106\ufffd" + "main.scss" + "\ufffd/#106\ufffd" + " defines global styles","" + "\ufffd#109\ufffd" + "variables.scss" + "\ufffd/#109\ufffd" + " stores global SCSS variables",["id","-modules"],"@modules","This is supposed to contain modules which are likely to be imported in various places in the application.",["id","configuration"],"Configuration","The project has been initialized with " + "\ufffd#118\ufffd" + "Angular CLI" + "\ufffd/#118\ufffd" + " and then modified.",["id","debugging"],"Debugging","" + "\ufffd#123\ufffd" + ".vscode/launch.json" + "\ufffd/#123\ufffd" + " allows to attach the debugger to " + "\ufffd#124\ufffd" + "Chrome" + "\ufffd/#124\ufffd" + ".","i18n","i18n has been configured like this:","the source code is in English and there is a French translation","language files are stored in " + "\ufffd#134\ufffd" + "src/locale" + "\ufffd/#134\ufffd" + "","the build command builds all the locales configured","the base HREF is empty for the source code language and set as the language code for the translations","a missing translation throws an error and stops the build",["id","routing"],"Routing","Nonexistent routes are redirected to home and scroll position restoration is enabled."]},template:function(e,b){1&e&&(i.Gb(0,"div",0),i.Gb(1,"p"),i.Lb(2,1),i.Eb(3,"a",2),i.Jb(),i.Fb(),i.Gb(4,"h1",3),i.Ib(5,4),i.Fb(),i.Gb(6,"p",5),i.Lb(7,6),i.Eb(8,"a",7),i.Jb(),i.Fb(),i.Gb(9,"h2",8),i.Ib(10,9),i.Fb(),i.Gb(11,"p"),i.Lb(12,10),i.Eb(13,"code"),i.Jb(),i.Fb(),i.Gb(14,"ul"),i.Gb(15,"li"),i.Lb(16,11),i.Eb(17,"code"),i.Eb(18,"a",12),i.Jb(),i.Fb(),i.Gb(19,"li"),i.Lb(20,13),i.Eb(21,"code"),i.Jb(),i.Fb(),i.Gb(22,"li"),i.Lb(23,14),i.Eb(24,"code"),i.Jb(),i.Fb(),i.Gb(25,"li"),i.Lb(26,15),i.Eb(27,"code"),i.Eb(28,"code"),i.Jb(),i.Fb(),i.Gb(29,"li"),i.Lb(30,16),i.Eb(31,"code"),i.Eb(32,"code"),i.Jb(),i.Fb(),i.Gb(33,"li"),i.Lb(34,17),i.Eb(35,"code"),i.Eb(36,"code"),i.Eb(37,"code"),i.Jb(),i.Fb(),i.Fb(),i.Gb(38,"h2",18),i.Ib(39,19),i.Fb(),i.Gb(40,"h3",20),i.Ib(41,21),i.Fb(),i.Gb(42,"p"),i.Lb(43,22),i.Eb(44,"a",7),i.Eb(45,"a",23),i.Jb(),i.Fb(),i.Gb(46,"h3",24),i.Ib(47,25),i.Fb(),i.Gb(48,"p"),i.Ib(49,26),i.Fb(),i.Gb(50,"h3",27),i.Ib(51,28),i.Fb(),i.Gb(52,"h4",29),i.Ib(53,30),i.Fb(),i.Gb(54,"ul"),i.Gb(55,"li"),i.Lb(56,31),i.Eb(57,"code"),i.Jb(),i.Fb(),i.Fb(),i.Gb(58,"h4",32),i.Ib(59,33),i.Fb(),i.Gb(60,"ul"),i.Gb(61,"li"),i.Lb(62,34),i.Eb(63,"code"),i.Jb(),i.Fb(),i.Gb(64,"li"),i.Lb(65,35),i.Eb(66,"code"),i.Jb(),i.Fb(),i.Gb(67,"li"),i.Lb(68,36),i.Eb(69,"code"),i.Jb(),i.Fb(),i.Gb(70,"li"),i.Lb(71,37),i.Eb(72,"code"),i.Jb(),i.Fb(),i.Gb(73,"li"),i.Lb(74,38),i.Eb(75,"code"),i.Jb(),i.Fb(),i.Gb(76,"li"),i.Lb(77,39),i.Eb(78,"code"),i.Jb(),i.Fb(),i.Fb(),i.Gb(79,"h2",40),i.Ib(80,41),i.Fb(),i.Gb(81,"h3",42),i.Ib(82,43),i.Fb(),i.Gb(83,"p"),i.Lb(84,44),i.Eb(85,"code"),i.Jb(),i.Fb(),i.Gb(86,"ul"),i.Gb(87,"li"),i.Lb(88,45),i.Eb(89,"code"),i.Eb(90,"code"),i.Jb(),i.Fb(),i.Gb(91,"li"),i.Lb(92,46),i.Eb(93,"code"),i.Jb(),i.Fb(),i.Fb(),i.Gb(94,"h3",47),i.Ib(95,48),i.Fb(),i.Gb(96,"p"),i.Lb(97,49),i.Eb(98,"code"),i.Eb(99,"code"),i.Jb(),i.Fb(),i.Gb(100,"ul"),i.Gb(101,"li"),i.Lb(102,50),i.Eb(103,"code"),i.Jb(),i.Fb(),i.Gb(104,"li"),i.Lb(105,51),i.Eb(106,"code"),i.Jb(),i.Fb(),i.Gb(107,"li"),i.Lb(108,52),i.Eb(109,"code"),i.Jb(),i.Fb(),i.Fb(),i.Gb(110,"h3",53),i.Ib(111,54),i.Fb(),i.Gb(112,"p"),i.Ib(113,55),i.Fb(),i.Gb(114,"h2",56),i.Ib(115,57),i.Fb(),i.Gb(116,"p"),i.Lb(117,58),i.Eb(118,"strong"),i.Jb(),i.Fb(),i.Gb(119,"h3",59),i.Ib(120,60),i.Fb(),i.Gb(121,"p"),i.Lb(122,61),i.Eb(123,"code"),i.Eb(124,"strong"),i.Jb(),i.Fb(),i.Gb(125,"h3",24),i.Ib(126,62),i.Fb(),i.Gb(127,"p"),i.Ib(128,63),i.Fb(),i.Gb(129,"ul"),i.Gb(130,"li"),i.Ib(131,64),i.Fb(),i.Gb(132,"li"),i.Lb(133,65),i.Eb(134,"code"),i.Jb(),i.Fb(),i.Gb(135,"li"),i.Ib(136,66),i.Fb(),i.Gb(137,"li"),i.Ib(138,67),i.Fb(),i.Gb(139,"li"),i.Ib(140,68),i.Fb(),i.Fb(),i.Gb(141,"h3",69),i.Ib(142,70),i.Fb(),i.Gb(143,"p"),i.Ib(144,71),i.Fb(),i.Fb()),2&e&&(i.ub(3),i.Rb("href",b.isEnglish?"fr":"../",i.Tb))},styles:[""]}),e})()}];let t=(()=>{class e{}return e.\u0275mod=i.Bb({type:e}),e.\u0275inj=i.Ab({factory:function(b){return new(b||e)},imports:[[o.a.forChild(l)],o.a]}),e})(),d=(()=>{class e{}return e.\u0275mod=i.Bb({type:e}),e.\u0275inj=i.Ab({factory:function(b){return new(b||e)},imports:[[c.b,t]]}),e})()}}]);