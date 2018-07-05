<script>
import * as maptalks from "maptalks";

export default {
  data() {
    return {
      id: "map"
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
		
		window.$.parser.parse();
  },
  methods: {
  },
	render() {
		return (
			<div>
				<div class="easyui-panel" style="padding:5px;">
					<a href="#" class="easyui-linkbutton" data-options="plain:true">Home</a>
					<a href="#" class="easyui-menubutton" data-options="iconCls:'icon-edit'">Edit</a>
					<a href="#" class="easyui-menubutton" data-options="iconCls:'icon-help'">Help</a>
					<a href="#" class="easyui-menubutton" data-options="">About</a>
				</div>
				<div id={this.id} class="container"></div>
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
  top: 30px;
  right: 0;
  bottom: 0;
  width: 100%;
}
</style>
