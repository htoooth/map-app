<script>
import * as maptalks from "maptalks";
import mixin from 'mixin'
import {editorToolbar, measureToolbar} from './components';
import {menu, menubutton, panel, tree} from 'components';
import actionTypes from './actionTypes'

let $ = window.$;

export default {
	mixins: [mixin],
  data() {
    return {
			id: "map",
			editmenu: [{
				name: actionTypes.TOOLBAR_EDITOR,
				text: '编辑工具栏',
				iconCls: 'icon-blank',
				disabled: false
			}, {
				name: actionTypes.TOOLBAR_MEASURE,
				text: '测量工具栏',
				iconCls: 'icon-blank',
				disabled: false
			}],
			layerInfo: [{
				type: 'Point',
				id: '井盖',
				layer: null
			}, {
				type: 'LineString',
				id: '道路',
				layer: null
			}, {
				type: 'Polygon',
				id: '楼房',
				layer: null
			}],
			toolbar: {
				editor: false,
				measure: false
			},
			map: {
				$map: null,
				tool: {
					drawTool: null,
					distanceTool: null,
					areaTool: null
				},
				layers: {
					all: [],
					visual: [],
					edit: null
				}
			},
			toc: {
				data: [],
				animate:true,
				checkbox:true,
			}
    };
  },
  mounted() {
		this.initMap();
		this.initLayer();
		this.initToc();
		this.initDrawTool();
  },
  methods: {
		initMap() {
			this.map.$map = new maptalks.Map(this.id, {
        center: [-0.113049, 51.498568],
        zoom: 14,
        baseLayer: new maptalks.TileLayer("base", {
          urlTemplate:
            "http://www.google.cn/maps/vt?pb=!1m5!1m4!1i{z}!2i{x}!3i{y}!4i256!2m3!1e0!2sm!3i342009817!3m9!2sen-US!3sCN!5e18!12m1!1e47!12m3!1e37!2m1!1ssmartmaps!4e0&token=32965",
          subdomains: ["a", "b", "c", "d"],
          attribution: "&copy; Google Maps"
        })
			});

			// click;
			this.map.$map.on('click', (e) => {

			});
		},
		initMeasureLineTool() {
			this.map.tool.distanceTool = new maptalks.DistanceTool({
        'symbol': {
          'lineColor' : '#34495e',
          'lineWidth' : 2
        },
        'vertexSymbol' : {
          'markerType'        : 'ellipse',
          'markerFill'        : '#1bbc9b',
          'markerLineColor'   : '#000',
          'markerLineWidth'   : 3,
          'markerWidth'       : 10,
          'markerHeight'      : 10
        },

        'labelOptions' : {
          'textSymbol': {
            'textFaceName': 'monospace',
            'textFill' : '#fff',
            'textLineSpacing': 1,
            'textHorizontalAlignment': 'right',
            'textDx': 15,
            'markerLineColor': '#b4b3b3',
            'markerFill' : '#000'
          },
          'boxStyle' : {
            'padding' : [6, 2],
            'symbol' : {
              'markerType' : 'square',
              'markerFill' : '#000',
              'markerFillOpacity' : 0.9,
              'markerLineColor' : '#b4b3b3'
            }
          }
        },
        'clearButtonSymbol' :[{
          'markerType': 'square',
          'markerFill': '#000',
          'markerLineColor': '#b4b3b3',
          'markerLineWidth': 2,
          'markerWidth': 15,
          'markerHeight': 15,
          'markerDx': 20
        }, {
          'markerType': 'x',
          'markerWidth': 10,
          'markerHeight': 10,
          'markerLineColor' : '#fff',
          'markerDx': 20
        }],
        'language' : 'zh-CN'
      });
		},
		initMeasureAreaTool() {
			this.map.tool.areaTool = new maptalks.AreaTool({
        'symbol': {
          'lineColor' : '#1bbc9b',
          'lineWidth' : 2,
          'polygonFill' : '#fff',
          'polygonOpacity' : 0.3
        },
        'vertexSymbol' : {
          'markerType'        : 'ellipse',
          'markerFill'        : '#34495e',
          'markerLineColor'   : '#1bbc9b',
          'markerLineWidth'   : 3,
          'markerWidth'       : 10,
          'markerHeight'      : 10
        },
        'labelOptions' : {
          'textSymbol': {
            'textFaceName': 'monospace',
            'textFill' : '#fff',
            'textLineSpacing': 1,
            'textHorizontalAlignment': 'right',
            'textDx': 15
          },
          'boxStyle' : {
            'padding' : [6, 2],
            'symbol' : {
              'markerType' : 'square',
              'markerFill' : '#000',
              'markerFillOpacity' : 0.9,
              'markerLineColor' : '#b4b3b3'
            }
          }
        },
        'clearButtonSymbol' :[{
          'markerType': 'square',
          'markerFill': '#000',
          'markerLineColor': '#b4b3b3',
          'markerLineWidth': 2,
          'markerWidth': 15,
          'markerHeight': 15,
          'markerDx': 22
        }, {
          'markerType': 'x',
          'markerWidth': 10,
          'markerHeight': 10,
          'markerLineColor' : '#fff',
          'markerDx': 22
        }],
        language: 'zh-CN'
      });
		},
		initDrawTool() {
			let self = this;

			this.map.tool.drawTool = new maptalks.DrawTool({
				mode: 'Point',
			}).addTo(this.map.$map).disable();

			this.map.tool.drawTool.on('drawend', function(param){
				let geometry = param.geometry;

				if (self.map.layers.edit) {
					self.map.layers.edit.addGeometry(geometry);
				}
			});
		},
		initLayer() {
			this.layerInfo.forEach((i) => {
				let layer = this._addLayer(i);
				layer.addTo(this.map.$map);

				this.map.layers.all.push(layer);
				this.map.layers.visual.push(layer);
			})
		},
		initToc() {
			this.$refs.toc.$tree.tree('loadData', this.layerInfo.map(i => {
				return {
					id: i.id,
					text: i.id,
					checked: true
				}
			}))
		},
		_addLayer(i) {
			let layer =  new maptalks.VectorLayer(i.id);
			layer.geometryType = i.type;
			i.layer = layer;
			return layer;
		},
		clicksubmenu(e, ctx) {
			const name = e.name;

			switch(name) {
				case actionTypes.TOOLBAR_EDITOR: {

					if (e.iconCls === 'icon-blank') {
						ctx.menu('setIcon', {target:e.target, iconCls: 'icon-ok'})
						this.toolbar.editor = true;
					}

					if (e.iconCls === 'icon-ok') {
						ctx.menu('setIcon', {target:e.target, iconCls: 'icon-blank'})
						this.toolbar.editor = false;
					}

					break;
				}
				case actionTypes.TOOLBAR_MEASURE: {
					if (e.iconCls === 'icon-blank') {
						ctx.menu('setIcon', {target:e.target, iconCls: 'icon-ok'})
						this.toolbar.measure = true;
					}

					if (e.iconCls === 'icon-ok') {
						ctx.menu('setIcon', {target:e.target, iconCls: 'icon-blank'})
						this.toolbar.measure = false;
						this.removeMeasureTool();
					}

					break;
				}
				case actionTypes.EDITOR_SELECT_START: {

					break;
				}
				case actionTypes.EDITOR_SELECT_END: {

					break;
				}
				case actionTypes.EDITOR_EDIT_START: {

					break;
				}
				case actionTypes.EDITOR_EDIT_SAVE: {

					break;
				}

				case actionTypes.EDITOR_EDIT_END: {

					break;
				}
				case actionTypes.EDITOR_CREATE_START: {
					this.map.tool.drawTool.setMode(this.map.layers.edit.geometryType).enable();
					break;
				}
				case actionTypes.EDITOR_CREATE_SAVE: {
					break;
				}
				case actionTypes.EDITOR_CREATE_END: {
					this.map.tool.drawTool.disable();
					break;
				}

				default: {
					console.log(e, ctx);
				}
			}
		},
		clickmenu(ctx) {
			let opts = ctx.menubutton('options');

			let name = opts.name;

			switch(name) {
				case actionTypes.MEASURE_LINE: {
					if (!this.map.tool.distanceTool) {
						this.initMeasureLineTool();
					}
					this.map.tool.distanceTool.addTo(this.map.$map);
					break;
				}
				case actionTypes.MEASURE_AREA: {
					if (!this.map.tool.areaTool) {
						this.initMeasureAreaTool();
					}
					this.map.tool.areaTool.addTo(this.map.$map);
					break;
				}
				case actionTypes.MEASURE_CLEAR: {
					this.map.tool.distanceTool && this.map.tool.distanceTool.clear();
					this.map.tool.areaTool && this.map.tool.areaTool.clear();
					break;
				}
				default: {
					console.log(ctx);
				}
			}
		},
		clicknode(e) {
			let id = e.id;

			if (!id) {
				return;
			}

			let layerInfo = this._findLayerById(id);

			if (!layerInfo) {
				return;
			}

			if (e._checked) {
				if (!layerInfo.layer.isVisible()) {
					layerInfo.layer.show();
				}
			} else {
				layerInfo.layer.hide();
			}

			this.map.layers.visual = this.map.layers.all.filter((i) => {
				return i.isVisible();
			})
		},
		removeMeasureTool() {
			if (this.map.tool.distanceTool) {
				this.map.tool.distanceTool.clear();
				this.map.tool.distanceTool.remove();
			}

			if (this.map.tool.areaTool) {
				this.map.tool.areaTool.clear();
				this.map.tool.areaTool.remove();
			}
		},
		_findLayerById(id) {
			let info = this.layerInfo.find((item) => {
				return item.id === id;
			});

			return info;
		},
		onSelectLayer(id) {
			console.log(id);
			let layerInfo = this._findLayerById(id);
			this.map.layers.edit = layerInfo.layer;
		}
	},
	components: {
		editorToolbar,
		measureToolbar,
		easyuiMenu: menu,
		easyuiMenubutton: menubutton,
		easyuiPanel: panel,
		easyuiTree: tree,
	},
	computed: {
		layer() {
			return this.map.layers.visual.map(i => {
				return {
					id: i.getId(),
					text: i.getId()
				}
			})
		}
	},
	render() {
		let toolbars = []

		if (this.toolbar.editor) {
			toolbars.push(<editor-toolbar onselectlayer={this.onSelectLayer} clicksubmenu={this.clicksubmenu} layer={this.layer}></editor-toolbar>)
		}

		if (this.toolbar.measure) {
			toolbars.push(<measure-toolbar click={this.clickmenu}></measure-toolbar>)
		}

		return (
			<div>
				<div class="easyui-layout container">
					<div data-options="region:'north',border:false" style="overflow:hidden;">
						<easyui-panel style={{padding:'5px'}}>
							<easyui-menubutton title="文件" opts={{plain:true, hasDownArrow:false}}>
							</easyui-menubutton>

							<easyui-menubutton title="编辑" opts={{iconCls:'icon-edit'}} clicksubmenu={this.clicksubmenu}>
								<easyui-menu submenu={this.editmenu}></easyui-menu>
							</easyui-menubutton>

							<easyui-menubutton title="帮助" opts={{iconCls:'icon-help',hasDownArrow:false}} clicksubmenu={this.clicksubmenu}>
							</easyui-menubutton>

							<easyui-menubutton title="关于" opts={{hasDownArrow:false}} clicksubmenu={this.clicksubmenu}>
							</easyui-menubutton>
						</easyui-panel>

					</div>
					<div data-options="region:'west',split:true,title:'图层'" style="width:150px;padding:10px;">
						<easyui-panel opts={{border:false}} style="padding:2px">
							<easyui-tree ref="toc" opts={this.toc} clicknode={this.clicknode}></easyui-tree>
						</easyui-panel>
					</div>
					<div data-options="region:'center'">
							<div id={this.id} class="map"></div>
							{toolbars}
					</div>
				</div>
			</div>
		);
	}

};
</script>

<style lang="scss">
.menu {

}

.container {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  width: 100%;
}

.map {
	position: relative;
	width: 100%;
	height: 100%;
}
</style>
