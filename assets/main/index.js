System.register("chunks:///_virtual/ChrisTreeCtrl.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(t){var e,n,o,i,r,a,l,c,s,h,u,d,p;return{setters:[function(t){e=t.applyDecoratedDescriptor,n=t.inheritsLoose,o=t.initializerDefineProperty,i=t.assertThisInitialized},function(t){r=t.cclegacy,a=t._decorator,l=t.Node,c=t.Sprite,s=t.Color,h=t.ScrollView,u=t.Vec3,d=t.UITransform,p=t.Component}],execute:function(){var m,g,f,C,v,b,I,T,y,F,w,M,S,_,P,E,B,L,O,U,W,G,k,z,x,H,D;r._RF.push({},"3e481xllQdLaKQseiOVY/Yi","ChrisTreeCtrl",void 0);var A=a.ccclass,N=a.property;t("ChrisTreeCtrl",(m=A("ChrisTreeCtrl"),g=N(l),f=N(l),C=N(l),v=N(l),b=N(l),I=N(l),T=N(l),y=N(l),F=N(l),w=N(l),M=N(l),S=N(l),m((E=e((P=function(t){function e(){for(var e,n=arguments.length,r=new Array(n),a=0;a<n;a++)r[a]=arguments[a];return e=t.call.apply(t,[this].concat(r))||this,o(e,"nodeStarOnTree",E,i(e)),o(e,"containItemOnTree",B,i(e)),o(e,"nodeScroll",L,i(e)),o(e,"nodeLight",O,i(e)),o(e,"containStar",U,i(e)),o(e,"containGift",W,i(e)),o(e,"containLight",G,i(e)),o(e,"containItem",k,i(e)),o(e,"nodeItemMove",z,i(e)),o(e,"nodeContaiBouding",x,i(e)),o(e,"nodeBoudingGift",H,i(e)),o(e,"nodeTick",D,i(e)),e._canUpdatePos=!0,e._countItem=0,e._isGift=!1,e}n(e,t);var r=e.prototype;return r.start=function(){this.node.on(l.EventType.TOUCH_MOVE,this.onTouchMove.bind(this)),this.node.on(l.EventType.TOUCH_CANCEL,this.onTouchCancel.bind(this)),this.init()},r.init=function(){this.setupContainStar(),this.setupContainLight(),this.setupContainGift(),this.setupContainItem()},r.setupContainStar=function(){for(var t=0;t<this.containStar.children.length;t++){this.containStar.children[t].on(l.EventType.TOUCH_END,this.onItemStarClick.bind(this))}},r.setupContainLight=function(){for(var t=0;t<this.containLight.children.length;t++){this.containLight.children[t].on(l.EventType.TOUCH_END,this.onItemLightClick.bind(this))}},r.setupContainGift=function(){for(var t=0;t<this.containGift.children.length;t++){var e=this.containGift.children[t];e.on(l.EventType.TOUCH_START,this.onGiftClicked.bind(this)),e.on(l.EventType.TOUCH_END,this.onTouchItemEnd.bind(this))}},r.setupContainItem=function(){for(var t=0;t<this.containItem.children.length;t++){var e=this.containItem.children[t];e.on(l.EventType.TOUCH_START,this.onItemClicked.bind(this)),e.on(l.EventType.TOUCH_END,this.onTouchItemEnd.bind(this))}},r.onItemStarClick=function(t){for(var e=t.currentTarget,n=0;n<this.containStar.children.length;n++)this.containStar.children[n].getComponent(c).color=(new s).fromHEX("#FFFFFF");e.getComponent(c).color=(new s).fromHEX("#FF6161"),this.nodeStarOnTree.getComponent(c).spriteFrame=e.getChildByPath("bgItem/icon").getComponent(c).spriteFrame},r.onItemLightClick=function(t){for(var e=t.currentTarget,n=0;n<this.containLight.children.length;n++){this.containLight.children[n].getComponent(c).color=(new s).fromHEX("#FFFFFF")}e.getComponent(c).color=(new s).fromHEX("#FF6161"),this.nodeLight.getComponent(c).spriteFrame=e.getChildByPath("bgItem/icon").getComponent(c).spriteFrame},r.onItemClicked=function(t){this._isGift=!1,this.nodeScroll.getComponent(h).enabled=!1;var e=t.getUILocation();this.nodeItemMove.setWorldPosition(new u(e.x,e.y)),this.nodeItemMove.scale=new u(.7,.7),this.nodeItemMove.getComponent(c).spriteFrame=t.currentTarget.getChildByPath("bgItem/icon").getComponent(c).spriteFrame},r.onGiftClicked=function(t){this._isGift=!0,this.nodeScroll.getComponent(h).enabled=!1;var e=t.getUILocation();this.nodeItemMove.setWorldPosition(new u(e.x,e.y)),this.nodeItemMove.scale=new u(.7,.7),this.nodeItemMove.getComponent(c).spriteFrame=t.currentTarget.getChildByPath("bgItem/icon").getComponent(c).spriteFrame},r.onTouchMove=function(t){if(this._canUpdatePos){var e=t.getUILocation();this.nodeItemMove.setWorldPosition(new u(e.x,e.y))}},r.onTouchCancel=function(t){this.checkAndUpdateIcon(),this.nodeItemMove.getComponent(c).spriteFrame=null,this.nodeScroll.getComponent(h).enabled=!0,this._countItem>=12&&(this.nodeTick.active=!0)},r.onTouchItemEnd=function(t){this.nodeItemMove.getComponent(c).spriteFrame=null},r.checkAndUpdateIcon=function(){if(null!=this.nodeItemMove.getComponent(c).spriteFrame)if(this._isGift){var t=this.nodeBoudingGift.getComponent(d).getBoundingBoxToWorld(),e=this.nodeItemMove.getComponent(d).getBoundingBoxToWorld();if(t.intersects(e)){var n=new l;return n.addComponent(d),n.getComponent(d).anchorY=0,n.parent=this.containItemOnTree,n.setWorldPosition(this.nodeItemMove.getWorldPosition()),n.addComponent(c).spriteFrame=this.nodeItemMove.getComponent(c).spriteFrame,n.getWorldPosition().y>t.yMax?n.setWorldPosition(new u(n.getWorldPosition().x,t.yMax)):n.getWorldPosition().y<t.yMin&&n.setWorldPosition(new u(n.getWorldPosition().x,t.yMin)),n.scale=new u(.3,.3),void this._countItem++}}else for(var o=0;o<this.nodeContaiBouding.children.length;o++){var i=this.nodeContaiBouding.children[o].getComponent(d).getBoundingBoxToWorld(),r=this.nodeItemMove.getComponent(d).getBoundingBoxToWorld();if(i.intersects(r)){var a=new l;return a.parent=this.containItemOnTree,a.setWorldPosition(this.nodeItemMove.getWorldPosition()),a.addComponent(c).spriteFrame=this.nodeItemMove.getComponent(c).spriteFrame,a.scale=new u(.5,.5),void this._countItem++}}},r.update=function(t){this._canUpdatePos=!0},e}(p)).prototype,"nodeStarOnTree",[g],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),B=e(P.prototype,"containItemOnTree",[f],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),L=e(P.prototype,"nodeScroll",[C],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),O=e(P.prototype,"nodeLight",[v],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),U=e(P.prototype,"containStar",[b],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),W=e(P.prototype,"containGift",[I],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),G=e(P.prototype,"containLight",[T],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),k=e(P.prototype,"containItem",[y],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),z=e(P.prototype,"nodeItemMove",[F],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),x=e(P.prototype,"nodeContaiBouding",[w],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),H=e(P.prototype,"nodeBoudingGift",[M],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),D=e(P.prototype,"nodeTick",[S],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),_=P))||_));r._RF.pop()}}}));

System.register("chunks:///_virtual/debug-view-runtime-control.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(t){var e,o,i,n,s,l,r,a,g,h,p,c,C,d,m,u,L;return{setters:[function(t){e=t.applyDecoratedDescriptor,o=t.inheritsLoose,i=t.initializerDefineProperty,n=t.assertThisInitialized},function(t){s=t.cclegacy,l=t._decorator,r=t.Node,a=t.Color,g=t.Canvas,h=t.UITransform,p=t.instantiate,c=t.Label,C=t.RichText,d=t.Toggle,m=t.Button,u=t.director,L=t.Component}],execute:function(){var f,M,b,v,T,S,x,E,I;s._RF.push({},"b2bd1+njXxJxaFY3ymm06WU","debug-view-runtime-control",void 0);var A=l.ccclass,y=l.property;t("DebugViewRuntimeControl",(f=A("internal.DebugViewRuntimeControl"),M=y(r),b=y(r),v=y(r),f((x=e((S=function(t){function e(){for(var e,o=arguments.length,s=new Array(o),l=0;l<o;l++)s[l]=arguments[l];return e=t.call.apply(t,[this].concat(s))||this,i(e,"compositeModeToggle",x,n(e)),i(e,"singleModeToggle",E,n(e)),i(e,"EnableAllCompositeModeButton",I,n(e)),e._single=0,e.strSingle=["No Single Debug","Vertex Color","Vertex Normal","Vertex Tangent","World Position","Vertex Mirror","Face Side","UV0","UV1","UV Lightmap","Project Depth","Linear Depth","Fragment Normal","Fragment Tangent","Fragment Binormal","Base Color","Diffuse Color","Specular Color","Transparency","Metallic","Roughness","Specular Intensity","IOR","Direct Diffuse","Direct Specular","Direct All","Env Diffuse","Env Specular","Env All","Emissive","Light Map","Shadow","AO","Fresnel","Direct Transmit Diffuse","Direct Transmit Specular","Env Transmit Diffuse","Env Transmit Specular","Transmit All","Direct Internal Specular","Env Internal Specular","Internal All","Fog"],e.strComposite=["Direct Diffuse","Direct Specular","Env Diffuse","Env Specular","Emissive","Light Map","Shadow","AO","Normal Map","Fog","Tone Mapping","Gamma Correction","Fresnel","Transmit Diffuse","Transmit Specular","Internal Specular","TT"],e.strMisc=["CSM Layer Coloration","Lighting With Albedo"],e.compositeModeToggleList=[],e.singleModeToggleList=[],e.miscModeToggleList=[],e.textComponentList=[],e.labelComponentList=[],e.textContentList=[],e.hideButtonLabel=void 0,e._currentColorIndex=0,e.strColor=["<color=#ffffff>","<color=#000000>","<color=#ff0000>","<color=#00ff00>","<color=#0000ff>"],e.color=[a.WHITE,a.BLACK,a.RED,a.GREEN,a.BLUE],e}o(e,t);var s=e.prototype;return s.start=function(){if(this.node.parent.getComponent(g)){var t=this.node.parent.getComponent(h),e=.5*t.width,o=.5*t.height,i=.1*e-e,n=o-.1*o,s=this.node.getChildByName("MiscMode"),l=p(s);l.parent=this.node,l.name="Buttons";var r=p(s);r.parent=this.node,r.name="Titles";for(var u=0;u<2;u++){var L=p(this.EnableAllCompositeModeButton.getChildByName("Label"));L.setPosition(i+(u>0?450:150),n,0),L.setScale(.75,.75,.75),L.parent=r;var f=L.getComponent(c);f.string=u?"----------Composite Mode----------":"----------Single Mode----------",f.color=a.WHITE,f.overflow=0,this.labelComponentList[this.labelComponentList.length]=f}n-=20;for(var M=0,b=0;b<this.strSingle.length;b++,M++){b===this.strSingle.length>>1&&(i+=200,M=0);var v=b?p(this.singleModeToggle):this.singleModeToggle;v.setPosition(i,n-20*M,0),v.setScale(.5,.5,.5),v.parent=this.singleModeToggle.parent;var T=v.getComponentInChildren(C);T.string=this.strSingle[b],this.textComponentList[this.textComponentList.length]=T,this.textContentList[this.textContentList.length]=T.string,v.on(d.EventType.TOGGLE,this.toggleSingleMode,this),this.singleModeToggleList[b]=v}i+=200,this.EnableAllCompositeModeButton.setPosition(i+15,n,0),this.EnableAllCompositeModeButton.setScale(.5,.5,.5),this.EnableAllCompositeModeButton.on(m.EventType.CLICK,this.enableAllCompositeMode,this),this.EnableAllCompositeModeButton.parent=l;var S=this.EnableAllCompositeModeButton.getComponentInChildren(c);this.labelComponentList[this.labelComponentList.length]=S;var x=p(this.EnableAllCompositeModeButton);x.setPosition(i+90,n,0),x.setScale(.5,.5,.5),x.on(m.EventType.CLICK,this.changeTextColor,this),x.parent=l,(S=x.getComponentInChildren(c)).string="TextColor",this.labelComponentList[this.labelComponentList.length]=S;var E=p(this.EnableAllCompositeModeButton);E.setPosition(i+200,n,0),E.setScale(.5,.5,.5),E.on(m.EventType.CLICK,this.hideUI,this),E.parent=this.node.parent,(S=E.getComponentInChildren(c)).string="Hide UI",this.labelComponentList[this.labelComponentList.length]=S,this.hideButtonLabel=S,n-=40;for(var I=0;I<this.strMisc.length;I++){var A=p(this.compositeModeToggle);A.setPosition(i,n-20*I,0),A.setScale(.5,.5,.5),A.parent=s;var y=A.getComponentInChildren(C);y.string=this.strMisc[I],this.textComponentList[this.textComponentList.length]=y,this.textContentList[this.textContentList.length]=y.string,A.getComponent(d).isChecked=!!I,A.on(d.EventType.TOGGLE,I?this.toggleLightingWithAlbedo:this.toggleCSMColoration,this),this.miscModeToggleList[I]=A}n-=150;for(var D=0;D<this.strComposite.length;D++){var B=D?p(this.compositeModeToggle):this.compositeModeToggle;B.setPosition(i,n-20*D,0),B.setScale(.5,.5,.5),B.parent=this.compositeModeToggle.parent;var w=B.getComponentInChildren(C);w.string=this.strComposite[D],this.textComponentList[this.textComponentList.length]=w,this.textContentList[this.textContentList.length]=w.string,B.on(d.EventType.TOGGLE,this.toggleCompositeMode,this),this.compositeModeToggleList[D]=B}}else console.error("debug-view-runtime-control should be child of Canvas")},s.isTextMatched=function(t,e){var o=new String(t),i=o.search(">");return-1===i?t===e:(o=(o=o.substr(i+1)).substr(0,o.search("<")))===e},s.toggleSingleMode=function(t){for(var e=u.root.debugView,o=t.getComponentInChildren(C),i=0;i<this.strSingle.length;i++)this.isTextMatched(o.string,this.strSingle[i])&&(e.singleMode=i)},s.toggleCompositeMode=function(t){for(var e=u.root.debugView,o=t.getComponentInChildren(C),i=0;i<this.strComposite.length;i++)this.isTextMatched(o.string,this.strComposite[i])&&e.enableCompositeMode(i,t.isChecked)},s.toggleLightingWithAlbedo=function(t){u.root.debugView.lightingWithAlbedo=t.isChecked},s.toggleCSMColoration=function(t){u.root.debugView.csmLayerColoration=t.isChecked},s.enableAllCompositeMode=function(t){var e=u.root.debugView;e.enableAllCompositeMode(!0);for(var o=0;o<this.compositeModeToggleList.length;o++){this.compositeModeToggleList[o].getComponent(d).isChecked=!0}var i=this.miscModeToggleList[0].getComponent(d);i.isChecked=!1,e.csmLayerColoration=!1,(i=this.miscModeToggleList[1].getComponent(d)).isChecked=!0,e.lightingWithAlbedo=!0},s.hideUI=function(t){var e=this.node.getChildByName("Titles"),o=!e.active;this.singleModeToggleList[0].parent.active=o,this.miscModeToggleList[0].parent.active=o,this.compositeModeToggleList[0].parent.active=o,this.EnableAllCompositeModeButton.parent.active=o,e.active=o,this.hideButtonLabel.string=o?"Hide UI":"Show UI"},s.changeTextColor=function(t){this._currentColorIndex++,this._currentColorIndex>=this.strColor.length&&(this._currentColorIndex=0);for(var e=0;e<this.textComponentList.length;e++)this.textComponentList[e].string=this.strColor[this._currentColorIndex]+this.textContentList[e]+"</color>";for(var o=0;o<this.labelComponentList.length;o++)this.labelComponentList[o].color=this.color[this._currentColorIndex]},s.onLoad=function(){},s.update=function(t){},e}(L)).prototype,"compositeModeToggle",[M],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),E=e(S.prototype,"singleModeToggle",[b],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),I=e(S.prototype,"EnableAllCompositeModeButton",[v],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),T=S))||T));s._RF.pop()}}}));

System.register("chunks:///_virtual/GameCtrl.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(e){var n,t,r,o,i,a,l,u,c,s,d;return{setters:[function(e){n=e.applyDecoratedDescriptor,t=e.inheritsLoose,r=e.initializerDefineProperty,o=e.assertThisInitialized},function(e){i=e.cclegacy,a=e._decorator,l=e.Node,u=e.Camera,c=e.Vec3,s=e.tween,d=e.Component}],execute:function(){var p,f,m,b,h,g,w,y,G,v,T,z,E,C,R,S,_,D,B,I,P,F,U;i._RF.push({},"ed9f5vf88JHFqqk1De9PgDr","GameCtrl",void 0);var k=a.ccclass,q=a.property;e("GameCtrl",(p=k("GameCtrl"),f=q(l),m=q(l),b=q(l),h=q(l),g=q(l),w=q(l),y=q(l),G=q(l),v=q(l),T=q(u),p((C=n((E=function(e){function n(){for(var n,t=arguments.length,i=new Array(t),a=0;a<t;a++)i[a]=arguments[a];return n=e.call.apply(e,[this].concat(i))||this,r(n,"nodeChrisTree",C,o(n)),r(n,"nodeRoom",R,o(n)),r(n,"nodeTree",S,o(n)),r(n,"nodeRootTree",_,o(n)),r(n,"nodeSpriteShot",D,o(n)),r(n,"nodeEndGame",B,o(n)),r(n,"nodeBgEndGame",I,o(n)),r(n,"nodeRootUIEndGame",P,o(n)),r(n,"listStar",F,o(n)),r(n,"cam",U,o(n)),n._countStar=3,n._renderTex=null,n}t(n,e);var i=n.prototype;return i.start=function(){globalThis.gameCtrl=this},i.btnDoneChrisTree=function(){this.nodeChrisTree.active=!1,this.nodeRoom.active=!0,this.nodeTree.parent=this.nodeRootTree,this.nodeTree.active=!0,this.nodeTree.setPosition(new c(0,0,0))},i.btnShotImage=function(){this.onGameEnd()},i.onGameEnd=function(){var e=this;this.nodeEndGame.active=!0,this.nodeBgEndGame.scale=new c(0,0,0),s(this.nodeBgEndGame).to(.5,{scale:new c(1,1,1)}).call((function(){})).start(),s(this.nodeRootUIEndGame).to(1,{scale:new c(1,1,1)}).call((function(){for(var n=0;n<e._countStar;n++){var t=e.listStar[n].children[0];s(t).delay(1.3*n).to(.5,{scale:new c(1,1,1)}).to(.2,{scale:new c(1.1,1.1,1.1)}).to(.2,{scale:new c(1,1,1)}).to(.2,{scale:new c(1.1,1.1,1.1)}).to(.2,{scale:new c(1,1,1)}).start()}})).start()},n}(d)).prototype,"nodeChrisTree",[f],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),R=n(E.prototype,"nodeRoom",[m],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),S=n(E.prototype,"nodeTree",[b],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),_=n(E.prototype,"nodeRootTree",[h],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),D=n(E.prototype,"nodeSpriteShot",[g],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),B=n(E.prototype,"nodeEndGame",[w],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),I=n(E.prototype,"nodeBgEndGame",[y],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),P=n(E.prototype,"nodeRootUIEndGame",[G],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),F=n(E.prototype,"listStar",[v],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return[]}}),U=n(E.prototype,"cam",[T],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),z=E))||z));i._RF.pop()}}}));

System.register("chunks:///_virtual/main",["./debug-view-runtime-control.ts","./ChrisTreeCtrl.ts","./GameCtrl.ts","./RoomCtrl.ts","./ScaleCtrl.ts"],(function(){return{setters:[null,null,null,null,null],execute:function(){}}}));

System.register("chunks:///_virtual/RoomCtrl.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(e){var n,t,o,i,r,c,a,l,F,s;return{setters:[function(e){n=e.applyDecoratedDescriptor,t=e.inheritsLoose,o=e.initializerDefineProperty,i=e.assertThisInitialized},function(e){r=e.cclegacy,c=e._decorator,a=e.Node,l=e.Sprite,F=e.Color,s=e.Component}],execute:function(){var u,m,h,p,g,d,f,C,b,y,w,L,E,H,v,N,X,k,z;r._RF.push({},"8fd32/kQMVJFYtueAIqYuPe","RoomCtrl",void 0);var B=c.ccclass,D=c.property;e("RoomCtrl",(u=B("RoomCtrl"),m=D(a),h=D(a),p=D(a),g=D(a),d=D(a),f=D(a),C=D(a),b=D(a),u((L=n((w=function(e){function n(){for(var n,t=arguments.length,r=new Array(t),c=0;c<t;c++)r[c]=arguments[c];return n=e.call.apply(e,[this].concat(r))||this,o(n,"nodeStarOnTree",L,i(n)),o(n,"nodeVong",E,i(n)),o(n,"nodeChuong",H,i(n)),o(n,"nodeLight1",v,i(n)),o(n,"nodeLight2",N,i(n)),o(n,"nodeRuyBang",X,i(n)),o(n,"containList",k,i(n)),o(n,"containNodeDecor",z,i(n)),n}t(n,e);var r=n.prototype;return r.start=function(){this.init()},r.init=function(){this.addEventClickedItem()},r.addEventClickedItem=function(){for(var e=0;e<this.containList.children.length;e++){this.containList.children[e].on(a.EventType.TOUCH_START,this.onItemClick.bind(this))}},r.onItemClick=function(e){var n=e.currentTarget,t=n.getChildByPath("bgItem/icon").getComponent(l).spriteFrame.name,o=n.getChildByPath("bgItem/icon").getComponent(l).spriteFrame;switch(t=t.slice(0,3)){case"von":this.containList.children[4].getComponent(l).color=(new F).fromHEX("#FFFFFF"),this.containList.children[5].getComponent(l).color=(new F).fromHEX("#FFFFFF"),n.getComponent(l).color=(new F).fromHEX("#FF6161"),this.containNodeDecor.getChildByName("vong1").getComponent(l).spriteFrame=o;break;case"ruy":this.containList.children[0].getComponent(l).color=(new F).fromHEX("#FFFFFF"),this.containList.children[1].getComponent(l).color=(new F).fromHEX("#FFFFFF"),this.containNodeDecor.getChildByName("ruybang1").getComponent(l).spriteFrame=o;break;case"den":this.containList.children[2].getComponent(l).color=(new F).fromHEX("#FFFFFF"),this.containList.children[3].getComponent(l).color=(new F).fromHEX("#FFFFFF"),this.containNodeDecor.getChildByName("den1").getComponent(l).spriteFrame=o;break;case"bon":this.containList.children[9].getComponent(l).color=(new F).fromHEX("#FFFFFF"),this.containList.children[10].getComponent(l).color=(new F).fromHEX("#FFFFFF"),this.containNodeDecor.getChildByName("bong1").getComponent(l).spriteFrame=o;break;case"chu":this.containList.children[6].getComponent(l).color=(new F).fromHEX("#FFFFFF"),this.containList.children[7].getComponent(l).color=(new F).fromHEX("#FFFFFF"),this.containList.children[8].getComponent(l).color=(new F).fromHEX("#FFFFFF"),this.containNodeDecor.getChildByName("chuong1").getComponent(l).spriteFrame=o}n.getComponent(l).color=(new F).fromHEX("#FF6161")},n}(s)).prototype,"nodeStarOnTree",[m],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),E=n(w.prototype,"nodeVong",[h],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),H=n(w.prototype,"nodeChuong",[p],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),v=n(w.prototype,"nodeLight1",[g],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),N=n(w.prototype,"nodeLight2",[d],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),X=n(w.prototype,"nodeRuyBang",[f],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),k=n(w.prototype,"containList",[C],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),z=n(w.prototype,"containNodeDecor",[b],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),y=w))||y));r._RF.pop()}}}));

System.register("chunks:///_virtual/ScaleCtrl.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(e){var t,i,n,o,l,s,c;return{setters:[function(e){t=e.inheritsLoose},function(e){i=e.cclegacy,n=e._decorator,o=e.screen,l=e.Vec3,s=e.view,c=e.Component}],execute:function(){var r;i._RF.push({},"eac551vEshJ/qHDWuR8pEC8","ScaleCtrl",void 0);var a=n.ccclass;n.property,e("ScaleCtrl",a("ScaleCtrl")(r=function(e){function i(){for(var t,i=arguments.length,n=new Array(i),o=0;o<i;o++)n[o]=arguments[o];return(t=e.call.apply(e,[this].concat(n))||this).globalScale=1,t}t(i,e);var n=i.prototype;return n.start=function(){this.handleMultiRes(),o.on("window-resize",this.onWindowResize.bind(this)),this.onWindowResize()},n.onWindowResize=function(){this.handleMultiRes(),this.node.scale=new l(this.globalScale,this.globalScale,1)},n.handleMultiRes=function(){var e=o.windowSize,t=s.getDesignResolutionSize(),i=e.width/e.height,n=t.width/t.height;i>n&&(this.globalScale=n/i)},i}(c))||r);i._RF.pop()}}}));

(function(r) {
  r('virtual:///prerequisite-imports/main', 'chunks:///_virtual/main'); 
})(function(mid, cid) {
    System.register(mid, [cid], function (_export, _context) {
    return {
        setters: [function(_m) {
            var _exportObj = {};

            for (var _key in _m) {
              if (_key !== "default" && _key !== "__esModule") _exportObj[_key] = _m[_key];
            }
      
            _export(_exportObj);
        }],
        execute: function () { }
    };
    });
});