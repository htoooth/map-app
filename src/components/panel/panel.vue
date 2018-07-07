<script>

let $ = window.$;

export default {
  name: 'easyui-panel',
  props: {
    opts: {
      type: Object,
      default() {
        return {};
      }
    },
  },
  mounted() {
    this.$nextTick(() => {
      this.$panel = $(this.$el).panel(this.opts);
    })
  },
  methods: {

  },
  render() {
    return (
      <div>
        {this.$slots.default}
      </div>
    );
  }
}
</script>