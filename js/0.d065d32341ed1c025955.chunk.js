webpackJsonp([0],{386:function(n,e,t){"use strict";function i(n){s||t(404)}Object.defineProperty(e,"__esModule",{value:!0});var a=t(391),s=!1,o=t(141),r=i,u=o(a.a,null,!1,r,null,null);u.options.__file="src/views/index.vue",e.default=u.exports},387:function(n,e){function t(n,e){var t=n[1]||"",a=n[3];if(!a)return t;if(e&&"function"==typeof btoa){var s=i(a);return[t].concat(a.sources.map(function(n){return"/*# sourceURL="+a.sourceRoot+n+" */"})).concat([s]).join("\n")}return[t].join("\n")}function i(n){return"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(n))))+" */"}n.exports=function(n){var e=[];return e.toString=function(){return this.map(function(e){var i=t(e,n);return e[2]?"@media "+e[2]+"{"+i+"}":i}).join("")},e.i=function(n,t){"string"==typeof n&&(n=[[null,n,""]]);for(var i={},a=0;a<this.length;a++){var s=this[a][0];"number"==typeof s&&(i[s]=!0)}for(a=0;a<n.length;a++){var o=n[a];"number"==typeof o[0]&&i[o[0]]||(t&&!o[2]?o[2]=t:t&&(o[2]="("+o[2]+") and ("+t+")"),e.push(o))}},e}},388:function(n,e,t){function i(n){for(var e=0;e<n.length;e++){var t=n[e],i=c[t.id];if(i){i.refs++;for(var a=0;a<i.parts.length;a++)i.parts[a](t.parts[a]);for(;a<t.parts.length;a++)i.parts.push(s(t.parts[a]));i.parts.length>t.parts.length&&(i.parts.length=t.parts.length)}else{for(var o=[],a=0;a<t.parts.length;a++)o.push(s(t.parts[a]));c[t.id]={id:t.id,refs:1,parts:o}}}}function a(){var n=document.createElement("style");return n.type="text/css",d.appendChild(n),n}function s(n){var e,t,i=document.querySelector("style["+E+'~="'+n.id+'"]');if(i){if(p)return h;i.parentNode.removeChild(i)}if(y){var s=f++;i=m||(m=a()),e=o.bind(null,i,s,!1),t=o.bind(null,i,s,!0)}else i=a(),e=r.bind(null,i),t=function(){i.parentNode.removeChild(i)};return e(n),function(i){if(i){if(i.css===n.css&&i.media===n.media&&i.sourceMap===n.sourceMap)return;e(n=i)}else t()}}function o(n,e,t,i){var a=t?"":i.css;if(n.styleSheet)n.styleSheet.cssText=_(e,a);else{var s=document.createTextNode(a),o=n.childNodes;o[e]&&n.removeChild(o[e]),o.length?n.insertBefore(s,o[e]):n.appendChild(s)}}function r(n,e){var t=e.css,i=e.media,a=e.sourceMap;if(i&&n.setAttribute("media",i),b.ssrId&&n.setAttribute(E,e.id),a&&(t+="\n/*# sourceURL="+a.sources[0]+" */",t+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(a))))+" */"),n.styleSheet)n.styleSheet.cssText=t;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(t))}}var u="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!u)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var l=t(406),c={},d=u&&(document.head||document.getElementsByTagName("head")[0]),m=null,f=0,p=!1,h=function(){},b=null,E="data-vue-ssr-id",y="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());n.exports=function(n,e,t,a){p=t,b=a||{};var s=l(n,e);return i(s),function(e){for(var t=[],a=0;a<s.length;a++){var o=s[a],r=c[o.id];r.refs--,t.push(r)}e?(s=l(n,e),i(s)):s=[];for(var a=0;a<t.length;a++){var r=t[a];if(0===r.refs){for(var u=0;u<r.parts.length;u++)r.parts[u]();delete c[r.id]}}}};var _=function(){var n=[];return function(e,t){return n[e]=t,n.filter(Boolean).join("\n")}}()},389:function(n,e,t){"use strict";var i=t(412),a=t(414),s=(t(395),t(397)),o=t(420),r=t(422),u=t(425);t(427);t.d(e,"b",function(){return i.a}),t.d(e,"c",function(){return a.a}),t.d(e,"d",function(){return s.a}),t.d(e,"a",function(){return o.a}),t.d(e,"e",function(){return r.a}),t.d(e,"f",function(){return u.a})},390:function(n,e,t){"use strict";var i=t(430),a=t.n(i);e.a=a()({TOOLBAR_EDITOR:null,TOOLBAR_MEASURE:null,EDITOR_EDIT_MODE_START:null,EDITOR_EDIT_MODE_SAVE:null,EDITOR_EDIT_MODE_END:null,EDITOR_SELECT_START:null,EDITOR_SELECT_END:null,EDITOR_MODIFY_START:null,EDITOR_MODIFY_END:null,EDITOR_CREATE_START:null,EDITOR_CREATE_END:null,EDITOR_REMOVE:null,MEASURE_LINE:null,MEASURE_AREA:null,MEASURE_CLEAR:null})},391:function(n,e,t){"use strict";var i=t(142),a=t(143),s=t.n(a),o=t(407),r=t(408),u=t(389),l=t(390),c=t(434);window.$;e.a={mixins:[o.a],data:function(){return{id:"map",editmenu:[{name:l.a.TOOLBAR_EDITOR,text:"编辑工具栏",iconCls:"icon-blank",disabled:!1},{name:l.a.TOOLBAR_MEASURE,text:"测量工具栏",iconCls:"icon-blank",disabled:!1}],layerInfo:[{type:"Point",id:"井盖",layer:null},{type:"LineString",id:"道路",layer:null},{type:"Polygon",id:"楼房",layer:null}],toolbar:{editor:!1,measure:!1},map:{$map:null,tool:{drawTool:null,distanceTool:null,areaTool:null},layers:{all:[],visual:[],edit:null},geoms:{select:[],created:[],changed:[],modified:[]},status:{editMode:!1,select:!1,modify:!1,create:!1}},toc:{data:[],animate:!0,checkbox:!0}}},mounted:function(){this.initMap(),this.initLayer(),this.initToc(),this.initDrawTool()},methods:{initMap:function(){var n=this,e=this;this.map.$map=new i.d(this.id,{center:[-.113049,51.498568],zoom:14,doubleClickZoom:!1,baseLayer:new i.e("base",{urlTemplate:"http://www.google.cn/maps/vt?pb=!1m5!1m4!1i{z}!2i{x}!3i{y}!4i256!2m3!1e0!2sm!3i342009817!3m9!2sen-US!3sCN!5e18!12m1!1e47!12m3!1e37!2m1!1ssmartmaps!4e0&token=32965",subdomains:["a","b","c","d"],attribution:"&copy; Google Maps"})}),this.map.$map.on("click",function(t){window.logger.info("map click %o",t.coordinate);var i=e.map.layers.edit?e.map.layers.edit:null;if(!i)return window.logger.info("no edit layer");e.map.status.select&&(e.map.status.modify||(n._clearSelectGeom(),n._selectGeomsAt(t.coordinate,[i]).then(function(e){if(0===e.length)return void window.logger.info("no geom selected");window.logger.info("%d geom selected",e.length),e.forEach(function(n){n.updateSymbol({lineColor:"#66f0ff"})}),n.map.geoms.select=e})))}),this.map.$map.on("dblClick",function(n){window.logger.info("map dblClick %o",n.coordinate)})},initMeasureLineTool:function(){this.map.tool.distanceTool=new i.b(c.b)},initMeasureAreaTool:function(){this.map.tool.areaTool=new i.a(c.a)},initDrawTool:function(){var n=this;this.map.tool.drawTool=new i.c({mode:"Point"}).addTo(this.map.$map).disable(),this.map.tool.drawTool.on("drawend",function(e){var t=e.geometry;n.map.layers.edit&&(n.map.layers.edit.addGeometry(t),n._addCreatedGeoms(t))})},initLayer:function(){var n=this;this.layerInfo.forEach(function(e){var t=n._addLayer(e);t.addTo(n.map.$map),n.map.layers.all.push(t),n.map.layers.visual.push(t)})},initToc:function(){this.$refs.toc.$tree.tree("loadData",this.layerInfo.map(function(n){return{id:n.id,text:n.id,checked:!0}}))},_addLayer:function(n){var e=new i.f(n.id);return e.geometryType=n.type,n.layer=e,e},clicksubmenu:function(n,e){var t=n.name;switch(t){case l.a.TOOLBAR_EDITOR:"icon-blank"===n.iconCls&&(e.menu("setIcon",{target:n.target,iconCls:"icon-ok"}),this.toolbar.editor=!0),"icon-ok"===n.iconCls&&(e.menu("setIcon",{target:n.target,iconCls:"icon-blank"}),this.toolbar.editor=!1,this.map.layers.edit=!1);break;case l.a.TOOLBAR_MEASURE:"icon-blank"===n.iconCls&&(e.menu("setIcon",{target:n.target,iconCls:"icon-ok"}),this.toolbar.measure=!0),"icon-ok"===n.iconCls&&(e.menu("setIcon",{target:n.target,iconCls:"icon-blank"}),this.toolbar.measure=!1,this.removeMeasureTool());break;case l.a.EDITOR_SELECT_START:this.map.status.select=!0,this.map.status.create=!1;break;case l.a.EDITOR_SELECT_END:this.map.status.select=!1,this.map.status.modify=!1;break;case l.a.EDITOR_EDIT_MODE_START:this.map.status.edit=!0;break;case l.a.EDITOR_EDIT_MODE_SAVE:this.map.status.create=!1,this.map.status.select=!1,this.map.status.modify=!1;break;case l.a.EDITOR_EDIT_MODE_END:this.map.status.edit=!1,this.map.status.create=!1,this.map.status.select=!1,this.map.status.modify=!1;break;case l.a.EDITOR_CREATE_START:this.map.status.create=!0,this.map.status.select=!1,this.map.status.modify=!1;break;case l.a.EDITOR_CREATE_END:this.map.status.create=!1;break;case l.a.EDITOR_MODIFY_START:this.map.status.modify=!0;break;case l.a.EDITOR_MODIFY_END:this.map.status.modify=!1;break;default:window.logger.error("cannt find menu %s",t)}},clickmenu:function(n){var e=n.menubutton("options"),t=e.name;switch(t){case l.a.MEASURE_LINE:this.map.tool.distanceTool||this.initMeasureLineTool(),this.map.tool.distanceTool.addTo(this.map.$map);break;case l.a.MEASURE_AREA:this.map.tool.areaTool||this.initMeasureAreaTool(),this.map.tool.areaTool.addTo(this.map.$map);break;case l.a.MEASURE_CLEAR:this.map.tool.distanceTool&&this.map.tool.distanceTool.clear(),this.map.tool.areaTool&&this.map.tool.areaTool.clear();break;case l.a.EDITOR_REMOVE:this._removeGeoms(),this.map.status.select=!1,this.map.status.modify=!1;break;default:window.logger.error("cannot find menu %s",t)}},clicknode:function(n){var e=n.id;if(e){var t=this._findLayerById(e);t&&(n._checked?t.layer.isVisible()||t.layer.show():t.layer.hide(),this.map.layers.visual=this.map.layers.all.filter(function(n){return n.isVisible()}))}},removeMeasureTool:function(){this.map.tool.distanceTool&&(this.map.tool.distanceTool.clear(),this.map.tool.distanceTool.remove()),this.map.tool.areaTool&&(this.map.tool.areaTool.clear(),this.map.tool.areaTool.remove())},_findLayerById:function(n){return this.layerInfo.find(function(e){return e.id===n})},onSelectLayer:function(n){var e=this._findLayerById(n);this.map.layers.edit=e.layer,window.logger.info("edittoolbar select layer %s",n)},_clearSelectGeom:function(){var n=this.map.layers.edit?this.map.layers.edit:null;if(!n)return window.logger.info("no edit layer");n.forEach(function(n){n.updateSymbol({lineColor:"#34495e"})})},_selectGeomsAt:function(n,e){var t=this;return new Promise(function(i,a){if(e||(e=t.map.layers.visual),!n)return i([]);t.map.$map.identify({coordinate:n,layers:e},function(n){i(n)})})},_startModify:function(){this.map.geoms.select.forEach(function(n){n.startEdit()})},_endModify:function(){var n=this;this.map.geoms.select.forEach(function(e){e.endEdit(),e.isEditing()&&n._addModifiedGeoms(e)})},_startCreate:function(){this.map.tool.drawTool.setMode(this.map.layers.edit.geometryType).enable()},_endCreate:function(){this.map.tool.drawTool.disable()},_removeGeoms:function(){this.map.layers.edit.removeGeometry(this.map.geoms.select),this._addDeletedGeoms(this.map.geoms.select),this.$refs.editortoolbar.resetSelect(),this.$refs.editortoolbar.resetModify()},_addDeletedGeoms:function(n){var e=this;if(s.a.isArray(n))return void n.forEach(function(n){e.map.geoms.deleted.push(n)});this.map.geoms.deleted.push(n)},_addCreatedGeoms:function(n){var e=this;if(s.a.isArray(n))return void n.forEach(function(n){e.map.geoms.created.push(n)});this.map.geoms.created.push(n)},_addModifiedGeoms:function(n){var e=this;if(s.a.isArray(n))return void n.forEach(function(n){e.map.geoms.modified.push(n)});this.map.geoms.modified.push(n)},_clearGeoms:function(){this.map.geoms.deleted=[],this.map.geoms.created=[],this.map.geoms.modified=[]},_resetChanged:function(){}},components:{editorToolbar:r.a,measureToolbar:r.b,easyuiMenu:u.b,easyuiMenubutton:u.c,easyuiPanel:u.d,easyuiTree:u.f},computed:{layer:function(){return this.map.layers.visual.map(function(n){return{id:n.getId(),text:n.getId()}})}},watch:{"map.status.select":function(n){var e=this;this.$nextTick(function(){e.map.geoms.select=[]}),n||(this._clearSelectGeom(),this.$refs.editortoolbar.resetSelect())},"map.status.modify":function(n){n?this._startModify():(this._endModify(),this.$refs.editortoolbar.resetModify())},"map.status.create":function(n){n?this._startCreate():(this._endCreate(),this.$refs.editortoolbar.resetCreate())}},render:function(){var n=arguments[0],e=[];return this.toolbar.editor&&e.push(n("editor-toolbar",{ref:"editortoolbar",attrs:{onselectlayer:this.onSelectLayer,clicksubmenu:this.clicksubmenu,click:this.clickmenu,layer:this.layer}})),this.toolbar.measure&&e.push(n("measure-toolbar",{attrs:{click:this.clickmenu}})),n("div",[n("div",{class:"easyui-layout container"},[n("div",{attrs:{"data-options":"region:'north',border:false"},style:"overflow:hidden;"},[n("easyui-panel",{style:{padding:"5px"}},[n("easyui-menubutton",{attrs:{title:"文件",opts:{plain:!0,hasDownArrow:!1}}}),n("easyui-menubutton",{attrs:{title:"编辑",opts:{iconCls:"icon-edit"},clicksubmenu:this.clicksubmenu}},[n("easyui-menu",{attrs:{submenu:this.editmenu}})]),n("easyui-menubutton",{attrs:{title:"帮助",opts:{iconCls:"icon-help",hasDownArrow:!1},clicksubmenu:this.clicksubmenu}}),n("easyui-menubutton",{attrs:{title:"关于",opts:{hasDownArrow:!1},clicksubmenu:this.clicksubmenu}})])]),n("div",{attrs:{"data-options":"region:'west',split:true,title:'图层'"},style:"width:150px;padding:10px;"},[n("easyui-panel",{attrs:{opts:{border:!1}},style:"padding:2px"},[n("easyui-tree",{ref:"toc",attrs:{opts:this.toc,clicknode:this.clicknode}})])]),n("div",{attrs:{"data-options":"region:'center'"}},[n("div",{attrs:{id:this.id},class:"map"}),e])])])}}},392:function(n,e,t){"use strict";var i=t(389),a=t(144),s=t(390);e.a={name:"editor-toolbar",props:{clicksubmenu:{type:Function},layer:{type:Array,default:function(){return[]}},onselectlayer:{type:Function},click:{type:Function}},components:{easyuiToolbar:i.e,easyuiCombobox:i.a,easyuiMenubutton:i.c,easyuiMenu:i.b},data:function(){var n=this;return{config:{layer:{data:n.layer,valueField:"id",textField:"text",height:25,editable:!1,panelHeight:"auto",label:"图层:",labelPosition:"left",labelWidth:40,onChange:function(e,t){e?(n.config.edit.opts.disabled=!1,n.onselectlayer&&n.onselectlayer(e)):n.config.edit.opts.disabled=!0}},select:{opts:{iconCls:"icon-search",disabled:!0},submenu:[{name:s.a.EDITOR_SELECT_START,text:"开始选择",iconCls:"icon-search",disabled:!1},{name:s.a.EDITOR_SELECT_END,text:"取消选择",iconCls:"icon-cancel",disabled:!0}]},edit:{opts:{iconCls:"icon-edit",disabled:!0},submenu:[{name:s.a.EDITOR_EDIT_MODE_START,text:"开始编缉",iconCls:"icon-edit",disabled:!1},{name:s.a.EDITOR_EDIT_MODE_SAVE,text:"保存编缉",iconCls:"icon-save",disabled:!0},{name:s.a.EDITOR_EDIT_MODE_END,text:"结束编缉",iconCls:"icon-cancel",disabled:!0}]},create:{opts:{iconCls:"icon-add",disabled:!0},submenu:[{name:s.a.EDITOR_CREATE_START,text:"开始标注",iconCls:"icon-add",disabled:!1},{name:s.a.EDITOR_CREATE_END,text:"结束标注",iconCls:"icon-clear",disabled:!0}]},modify:{opts:{iconCls:"icon-edit",disabled:!0},submenu:[{name:s.a.EDITOR_MODIFY_START,text:"开始修改",iconCls:"icon-edit",disabled:!0},{name:s.a.EDITOR_MODIFY_END,text:"结束修改",iconCls:"icon-cancel",disabled:!0}]},remove:{opts:{name:s.a.EDITOR_REMOVE,plain:!0,iconCls:"icon-cancel",hasDownArrow:!1,disabled:!0}}}}},mounted:function(){},methods:{clickmenuitem:function(n,e){var t=n.name;switch(t){case s.a.EDITOR_SELECT_START:this._setSumenuDisabledStatus(s.a.EDITOR_SELECT_START,!0),this._setSumenuDisabledStatus(s.a.EDITOR_SELECT_END,!1),this._setSumenuDisabledStatus(s.a.EDITOR_MODIFY_START,!1);break;case s.a.EDITOR_SELECT_END:this._setSumenuDisabledStatus(s.a.EDITOR_SELECT_START,!1),this._setSumenuDisabledStatus(s.a.EDITOR_SELECT_END,!0);break;case s.a.EDITOR_EDIT_MODE_START:this.$refs.layer.$combobox.combobox("disable"),this.config.select.opts.disabled=!1,this.config.create.opts.disabled=!1,this.config.remove.opts.disabled=!1,this.config.modify.opts.disabled=!1,this._setSumenuDisabledStatus(s.a.EDITOR_EDIT_MODE_START,!0),this._setSumenuDisabledStatus(s.a.EDITOR_EDIT_MODE_SAVE,!1),this._setSumenuDisabledStatus(s.a.EDITOR_EDIT_MODE_END,!1);break;case s.a.EDITOR_EDIT_MODE_SAVE:break;case s.a.EDITOR_EDIT_MODE_END:this.$refs.layer.$combobox.combobox("enable"),this.config.select.opts.disabled=!0,this.config.create.opts.disabled=!0,this.config.remove.opts.disabled=!0,this.config.modify.opts.disabled=!0,this._setSumenuDisabledStatus(s.a.EDITOR_EDIT_MODE_START,!1),this._setSumenuDisabledStatus(s.a.EDITOR_EDIT_MODE_SAVE,!0),this._setSumenuDisabledStatus(s.a.EDITOR_EDIT_MODE_END,!0),this.resetCreate(),this.resetModify(),this.resetSelect();break;case s.a.EDITOR_CREATE_START:this._setSumenuDisabledStatus(s.a.EDITOR_CREATE_START,!0),this._setSumenuDisabledStatus(s.a.EDITOR_CREATE_END,!1);break;case s.a.EDITOR_CREATE_END:this._setSumenuDisabledStatus(s.a.EDITOR_CREATE_START,!1),this._setSumenuDisabledStatus(s.a.EDITOR_CREATE_END,!0);break;case s.a.EDITOR_MODIFY_START:this._setSumenuDisabledStatus(s.a.EDITOR_MODIFY_START,!0),this._setSumenuDisabledStatus(s.a.EDITOR_MODIFY_END,!1);break;case s.a.EDITOR_MODIFY_END:this._setSumenuDisabledStatus(s.a.EDITOR_MODIFY_START,!1),this._setSumenuDisabledStatus(s.a.EDITOR_MODIFY_END,!0);break;default:window.logger.error("menu error %s",t)}this.clicksubmenu(n,e)},_setSumenuDisabledStatus:function(n,e){var t=this._findMenuByName(n);return t?(t.disabled=e,t):window.logger.error("menu canot find menu "+n)},_findMenuByName:function(n){return a.a.findInArrays(function(e){return e.name===n},this.config.select.submenu,this.config.edit.submenu,this.config.create.submenu,this.config.modify.submenu)},resetCreate:function(){this._setSumenuDisabledStatus(s.a.EDITOR_CREATE_START,!1),this._setSumenuDisabledStatus(s.a.EDITOR_CREATE_END,!0)},resetModify:function(){this._setSumenuDisabledStatus(s.a.EDITOR_MODIFY_START,!0),this._setSumenuDisabledStatus(s.a.EDITOR_MODIFY_END,!0)},resetSelect:function(){this._setSumenuDisabledStatus(s.a.EDITOR_SELECT_START,!1),this._setSumenuDisabledStatus(s.a.EDITOR_SELECT_END,!0)}},watch:{layer:function(){this.$refs.layer.$combobox.combobox("loadData",this.layer)}},render:function(){var n=arguments[0];return n("easyui-toolbar",{attrs:{title:"编辑工具栏"}},[n("easyui-combobox",{ref:"layer",attrs:{opts:this.config.layer}}),n("easyui-menubutton",{ref:"edit",attrs:{title:"编辑",opts:this.config.edit.opts,clicksubmenu:this.clickmenuitem}},[n("easyui-menu",{attrs:{submenu:this.config.edit.submenu}})]),n("easyui-menubutton",{ref:"select",attrs:{title:"选择",opts:this.config.select.opts,clicksubmenu:this.clickmenuitem}},[n("easyui-menu",{attrs:{submenu:this.config.select.submenu}})]),n("easyui-menubutton",{ref:"create",attrs:{title:"创建",opts:this.config.create.opts,clicksubmenu:this.clickmenuitem}},[n("easyui-menu",{attrs:{submenu:this.config.create.submenu}})]),n("easyui-menubutton",{ref:"select",attrs:{title:"修改",opts:this.config.modify.opts,clicksubmenu:this.clickmenuitem}},[n("easyui-menu",{attrs:{submenu:this.config.modify.submenu}})]),n("easyui-menubutton",{ref:"remove",attrs:{title:"删除",opts:this.config.remove.opts,click:this.click}})])}}},393:function(n,e,t){"use strict";var i=window.$;e.a={name:"easyui-menu",props:{submenu:{type:Array,default:function(){return[]}},opts:{type:Object,default:function(){return{}}}},data:function(){return{index:0,tempIndex:1}},mounted:function(){var n=this;this.index=Date.now()+this.tempIndex++;var e=this;this.$menu=i(this.$el).menu(Object.assign({},this.opts,{onClick:function(n){e.$parent.clicksubmenu&&e.$parent.clicksubmenu(n,e.$menu)}})),this.$nextTick(function(){n.submenu.forEach(function(e){n.addItem(e)})})},render:function(){return(0,arguments[0])("div",{attrs:{id:this.index}})},watch:{submenu:{deep:!0,handler:function(n,e){var t=this;n.forEach(function(n){var e=t.$menu.menu("findItem",{name:n.name});e&&(n.disabled?t.$menu.menu("disableItem",e.target):t.$menu.menu("enableItem",e.target))})}}},methods:{addItem:function(n){this.$menu.menu("appendItem",n)}}}},394:function(n,e,t){"use strict";var i=window.$;e.a={name:"easyui-menubutton",props:{title:{type:String,default:function(){return""}},opts:{type:Object,default:function(){return{}}},clicksubmenu:{type:Function},click:{type:Function}},mounted:function(){var n=this,e=this.$children.filter(function(n){return"easyui-menu"===n.$options.name})[0],t=this;e?this.$nextTick(function(){n.$menubutton=i(n.$refs.title).menubutton(Object.assign({},n.opts,{menu:"#"+e.index,onClick:function(){t.click&&t.click(t.$menubutton)}}))}):this.$menubutton=i(this.$refs.title).menubutton(Object.assign({},this.opts,{onClick:function(){t.click&&t.click(t.$menubutton)}}))},watch:{opts:{deep:!0,handler:function(n,e){this.$menubutton&&(n.disabled?this.$menubutton.menubutton("disable"):this.$menubutton.menubutton("enable"))}}},render:function(){return(0,arguments[0])("a",{ref:"title",attrs:{href:"#"}},[this.title,this.$slots.default])}}},395:function(n,e,t){"use strict";var i=t(416);e.a=i.a},396:function(n,e,t){"use strict";var i=window.$;e.a={name:"easyui-draggable",props:{title:{type:String,default:function(){return""}},opts:{type:Object,default:function(){return{}}}},data:function(){return{index:0,tempIndex:0,drag:!1}},mounted:function(){var n=this;this.index=Date.now()+this.tempIndex++,this.$draggable=null;var e=this,t={onStartDrag:function(){e.drag=!0},onStopDrag:function(){e.drag=!1}};this.$nextTick(function(){n.title?n.$draggable=i(n.$el).draggable(Object.assign(t,n.opts,{handle:"#"+n.index})):n.$draggable=i(n.$el).draggable(Object.assign(t,n.opts))})},methods:{},render:function(){var n=arguments[0],e="";return this.title&&(e=n("div",{attrs:{id:this.index},class:{"easyui-draggable_title":!0,"easyui-draggable_title_drag":this.drag}},[this.title])),n("div",{class:"easyui-draggable_border"},[e,this.$slots.default])}}},397:function(n,e,t){"use strict";var i=t(419);e.a=i.a},398:function(n,e,t){"use strict";var i=window.$;e.a={name:"easyui-panel",props:{opts:{type:Object,default:function(){return{}}}},mounted:function(){var n=this;this.$nextTick(function(){n.$panel=i(n.$el).panel(n.opts)})},methods:{},render:function(){return(0,arguments[0])("div",[this.$slots.default])}}},399:function(n,e,t){"use strict";var i=window.$;e.a={name:"easyui-combobox",props:{opts:{type:Object,default:function(){return{}}}},mounted:function(){this.$combobox=i(this.$el).combobox(this.opts)},methods:{},render:function(){return(0,arguments[0])("div")}}},400:function(n,e,t){"use strict";var i=t(395),a=t(397);e.a={name:"easyui-toobar",props:{title:{type:String,default:function(){return"未命名"}}},mounted:function(){},methods:{},components:{easyuiDraggable:i.a,easyuiPanel:a.a},render:function(){var n=arguments[0];return n("easyui-draggable",{attrs:{title:this.title}},[n("easyui-panel",{style:{padding:"5px"}},[this.$slots.default])])}}},401:function(n,e,t){"use strict";var i=window.$;e.a={name:"easyui-tree",props:{opts:{type:Object,default:function(){return{}}},clicknode:{type:Function}},mounted:function(){var n=this;this.$tree=i(this.$el).tree(Object.assign({},this.opts,{onCheck:function(e){n.clicknode&&n.clicknode(e)}}))},render:function(){return(0,arguments[0])("ul")}}},402:function(n,e,t){"use strict";var i=t(142);e.a={name:"maptalks-map",props:{},data:function(){return{id:Date.now()+1}},mounted:function(){var n=this;this.$nextTick(function(){n.$map=new i.d(n.id,{center:[-.113049,51.498568],zoom:14,baseLayer:new i.e("base",{urlTemplate:"http://www.google.cn/maps/vt?pb=!1m5!1m4!1i{z}!2i{x}!3i{y}!4i256!2m3!1e0!2sm!3i342009817!3m9!2sen-US!3sCN!5e18!12m1!1e47!12m3!1e37!2m1!1ssmartmaps!4e0&token=32965",subdomains:["a","b","c","d"],attribution:"&copy; Google Maps"})})})},render:function(){return(0,arguments[0])("div",{attrs:{id:this.id}})}}},403:function(n,e,t){"use strict";var i=t(389),a=t(390);e.a={name:"measure-toolbar",props:{click:{type:Function}},components:{easyuiToolbar:i.e,easyuiCombobox:i.a,easyuiMenubutton:i.c,easyuiMenu:i.b},data:function(){return{config:{line:{opts:{name:a.a.MEASURE_LINE,plain:!0,hasDownArrow:!1}},area:{opts:{name:a.a.MEASURE_AREA,plain:!0,hasDownArrow:!1}},cancel:{opts:{name:a.a.MEASURE_CLEAR,iconCls:"icon-cancel",plain:!0,hasDownArrow:!1}}}}},render:function(){var n=arguments[0];return n("easyui-toolbar",{attrs:{title:"测量工具栏"}},[n("easyui-menubutton",{attrs:{title:"测距",opts:this.config.line.opts,click:this.click}}),n("easyui-menubutton",{attrs:{title:"测面",opts:this.config.area.opts,click:this.click}}),n("easyui-menubutton",{attrs:{title:"取消",opts:this.config.cancel.opts,click:this.click}})])}}},404:function(n,e,t){var i=t(405);"string"==typeof i&&(i=[[n.i,i,""]]),i.locals&&(n.exports=i.locals);t(388)("666c76cb",i,!1,{})},405:function(n,e,t){e=n.exports=t(387)(!1),e.push([n.i,"\n.container {\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  width: 100%;\n}\n.map {\n  position: relative;\n  width: 100%;\n  height: 100%;\n}\n",""])},406:function(n,e){n.exports=function(n,e){for(var t=[],i={},a=0;a<e.length;a++){var s=e[a],o=s[0],r=s[1],u=s[2],l=s[3],c={id:n+":"+a,css:r,media:u,sourceMap:l};i[o]?i[o].parts.push(c):t.push(i[o]={id:o,parts:[c]})}return t}},407:function(n,e,t){"use strict";e.a={mounted:function(){window.$.parser.parse(this.$el)}}},408:function(n,e,t){"use strict";var i=t(409),a=t(431);t.d(e,"a",function(){return i.a}),t.d(e,"b",function(){return a.a})},409:function(n,e,t){"use strict";function i(n){s||t(410)}var a=t(392),s=!1,o=t(141),r=i,u=o(a.a,null,!1,r,"data-v-62c84daf",null);u.options.__file="src/views/components/editorToolbar.vue",e.a=u.exports},410:function(n,e,t){var i=t(411);"string"==typeof i&&(i=[[n.i,i,""]]),i.locals&&(n.exports=i.locals);t(388)("ffce17a0",i,!1,{})},411:function(n,e,t){e=n.exports=t(387)(!1),e.push([n.i,"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",""])},412:function(n,e,t){"use strict";var i=t(413);e.a=i.a},413:function(n,e,t){"use strict";var i=t(393),a=t(141),s=a(i.a,null,!1,null,null,null);s.options.__file="src/components/menu/menu.vue",e.a=s.exports},414:function(n,e,t){"use strict";var i=t(415);e.a=i.a},415:function(n,e,t){"use strict";var i=t(394),a=t(141),s=a(i.a,null,!1,null,null,null);s.options.__file="src/components/menubutton/menubutton.vue",e.a=s.exports},416:function(n,e,t){"use strict";function i(n){s||t(417)}var a=t(396),s=!1,o=t(141),r=i,u=o(a.a,null,!1,r,"data-v-b2a097aa",null);u.options.__file="src/components/draggable/draggable.vue",e.a=u.exports},417:function(n,e,t){var i=t(418);"string"==typeof i&&(i=[[n.i,i,""]]),i.locals&&(n.exports=i.locals);t(388)("56f9016c",i,!1,{})},418:function(n,e,t){e=n.exports=t(387)(!1),e.push([n.i,"\n.easyui-draggable_border[data-v-b2a097aa] {\n  background: #fafafa;\n  border: 1px solid #95b8e7;\n  margin-top: 10px;\n  margin-left: 10px;\n  position: absolute;\n  top: 0;\n  left: 0;\n}\n.easyui-draggable_title[data-v-b2a097aa] {\n  padding: 5px;\n  background: #4e91ea;\n  color: #fff;\n}\n.easyui-draggable_title_drag[data-v-b2a097aa] {\n  background-color: #95b8e7;\n}\n",""])},419:function(n,e,t){"use strict";var i=t(398),a=t(141),s=a(i.a,null,!1,null,null,null);s.options.__file="src/components/panel/panel.vue",e.a=s.exports},420:function(n,e,t){"use strict";var i=t(421);e.a=i.a},421:function(n,e,t){"use strict";var i=t(399),a=t(141),s=a(i.a,null,!1,null,null,null);s.options.__file="src/components/combobox/combobox.vue",e.a=s.exports},422:function(n,e,t){"use strict";var i=t(423);e.a=i.a},423:function(n,e,t){"use strict";function i(n){s||t(424)}var a=t(400),s=!1,o=t(141),r=i,u=o(a.a,null,!1,r,null,null);u.options.__file="src/components/toolbar/toolbar.vue",e.a=u.exports},424:function(n,e){},425:function(n,e,t){"use strict";var i=t(426);e.a=i.a},426:function(n,e,t){"use strict";var i=t(401),a=t(141),s=a(i.a,null,!1,null,null,null);s.options.__file="src/components/tree/tree.vue",e.a=s.exports},427:function(n,e,t){"use strict";var i=t(428);i.a},428:function(n,e,t){"use strict";var i=t(429);e.a=i.a},429:function(n,e,t){"use strict";var i=t(402),a=t(141),s=a(i.a,null,!1,null,null,null);s.options.__file="src/components/maptalks/map/map.vue",e.a=s.exports},430:function(n,e,t){"use strict";var i=function(n){var e,t={};if(!(n instanceof Object)||Array.isArray(n))throw new Error("keyMirror(...): Argument must be an object.");for(e in n)n.hasOwnProperty(e)&&(t[e]=e);return t};n.exports=i},431:function(n,e,t){"use strict";function i(n){s||t(432)}var a=t(403),s=!1,o=t(141),r=i,u=o(a.a,null,!1,r,"data-v-060a48ac",null);u.options.__file="src/views/components/measureToolbar.vue",e.a=u.exports},432:function(n,e,t){var i=t(433);"string"==typeof i&&(i=[[n.i,i,""]]),i.locals&&(n.exports=i.locals);t(388)("8ef1eb26",i,!1,{})},433:function(n,e,t){e=n.exports=t(387)(!1),e.push([n.i,"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",""])},434:function(n,e,t){"use strict";t.d(e,"b",function(){return i}),t.d(e,"a",function(){return a});var i={symbol:{lineColor:"#34495e",lineWidth:2},vertexSymbol:{markerType:"ellipse",markerFill:"#1bbc9b",markerLineColor:"#000",markerLineWidth:3,markerWidth:10,markerHeight:10},labelOptions:{textSymbol:{textFaceName:"monospace",textFill:"#fff",textLineSpacing:1,textHorizontalAlignment:"right",textDx:15,markerLineColor:"#b4b3b3",markerFill:"#000"},boxStyle:{padding:[6,2],symbol:{markerType:"square",markerFill:"#000",markerFillOpacity:.9,markerLineColor:"#b4b3b3"}}},clearButtonSymbol:[{markerType:"square",markerFill:"#000",markerLineColor:"#b4b3b3",markerLineWidth:2,markerWidth:15,markerHeight:15,markerDx:20},{markerType:"x",markerWidth:10,markerHeight:10,markerLineColor:"#fff",markerDx:20}],language:"zh-CN"},a={symbol:{lineColor:"#1bbc9b",lineWidth:2,polygonFill:"#fff",polygonOpacity:.3},vertexSymbol:{markerType:"ellipse",markerFill:"#34495e",markerLineColor:"#1bbc9b",markerLineWidth:3,markerWidth:10,markerHeight:10},labelOptions:{textSymbol:{textFaceName:"monospace",textFill:"#fff",textLineSpacing:1,textHorizontalAlignment:"right",textDx:15},boxStyle:{padding:[6,2],symbol:{markerType:"square",markerFill:"#000",markerFillOpacity:.9,markerLineColor:"#b4b3b3"}}},clearButtonSymbol:[{markerType:"square",markerFill:"#000",markerLineColor:"#b4b3b3",markerLineWidth:2,markerWidth:15,markerHeight:15,markerDx:22},{markerType:"x",markerWidth:10,markerHeight:10,markerLineColor:"#fff",markerDx:22}],language:"zh-CN"}}});