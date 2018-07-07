<script>

let $ = window.$;

export default {
  name: 'easyui-tree',
  props: {
    opts: {
      type: Object,
      default() {
        return {};
      }
    },
    clicknode: {
      type: Function
    }
  },
  mounted() {
    let self = this;

    this.$tree = $(this.$el).tree(Object.assign({}, this.opts, {
      onCheck(e) {
        self.clicknode && self.clicknode(e);
      }
    }));
  },
  render() {
    return (
      <ul></ul>
    );
  }
}
</script>