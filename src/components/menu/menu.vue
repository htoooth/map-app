<script>

let $ = window.$;

export default {
  name: 'easyui-menu',
  props: {
    submenu: {
      type: Array,
      default() {
        return []
      }
    }
  },
  data() {
    return {
      index: 0,
      tempIndex: 1
    };
  },
  mounted() {
    this.index = Date.now() + this.tempIndex++;
    this.$menu = $(this.$el).menu();

    this.$nextTick(() => {
      this.submenu.forEach((i) => {
        this.addItem(i);
      })
    })
  },
  render() {
    return (
      <div id={this.index}></div>
    );
  },
  methods: {
    addItem(i) {
      this.$menu.menu('appendItem', i)
    }
  }
}
</script>
