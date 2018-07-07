<script>
import * as maptalks from "maptalks";

export default {
  name: 'maptalks-map',
  props: {

  },
  data() {
    return {
      id: Date.now() + 1
    }
  },
  mounted() {
    this.$nextTick(() => {
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
    });
  },
  render() {
    return (
      <div id={this.id}></div>
    );
  }

}
</script>
