<script>
import * as maptalks from "maptalks";
import mixin from 'mixin'
import {editorToolbar} from './components';
import {menu, menubutton, panel} from 'components';

export default {
	mixins: [mixin],
  data() {
    return {
			id: "map",
			editmenu: [{
				text: '编辑工具栏',
				iconCls: 'icon-ok',
				onclick() {
					console.log(arguments);
				}
			}, {
				text: '测量工具栏',
				iconCls: 'icon-ok',
				onclick() {
					console.log(arguments);
				}
			}]
    };
  },
  mounted() {
    this.$map = new maptalks.Map(this.id, {
      center: [-0.113049, 51.498568],
      zoom: 14,
      baseLayer: new maptalks.TileLayer("base", {
        urlTemplate:
          "http://www.google.cn/maps/vt?pb=!1m5!1m4!1i{z}!2i{x}!3i{y}!4i256!2m3!1e0!2sm!3i342009817!3m9!2sen-US!3sCN!5e18!12m1!1e47!12m3!1e37!2m1!1ssmartmaps!4e0&token=32965",
        subdomains: ["a", "b", "c", "d"],
        attribution: "&copy; Google Maps"
      })
		});
  },
  methods: {
	},
	components: {
		editorToolbar,
		easyuiMenu: menu,
		easyuiMenubutton: menubutton,
		easyuiPanel: panel
	},
	render() {
		return (
			<div>
				<div class="easyui-layout container">
					<div data-options="region:'north',border:false" style="overflow:hidden;">

						<easyui-panel style={{padding:'5px'}}>
							<easyui-menubutton title="文件" opts={{plain:true, hasDownArrow:false}}>
							</easyui-menubutton>

							<easyui-menubutton title="编辑" opts={{iconCls:'icon-edit'}}>
								<easyui-menu submenu={this.editmenu}></easyui-menu>
							</easyui-menubutton>

							<easyui-menubutton title="帮助" opts={{iconCls:'icon-help',hasDownArrow:false}}>
							</easyui-menubutton>

							<easyui-menubutton title="关于" opts={{hasDownArrow:false}}>
							</easyui-menubutton>
						</easyui-panel>

					</div>
					<div data-options="region:'west',split:true,title:'图层'" style="width:150px;padding:10px;">
						<div class="easyui-panel" data-options="border:false" style="padding:2px">
							<ul id="tt" class="easyui-tree" data-options="data: [{text: '井盖'}, {text: '道路'}, {text: '楼房'}],animate:true,checkbox:true"></ul>
							</div>
					</div>
					<div data-options="region:'center'">
							<div id={this.id} class='map'></div>
							<editor-toolbar></editor-toolbar>
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
