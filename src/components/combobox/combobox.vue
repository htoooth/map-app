<script>

let $ = window.$;

export default {
  name: 'easyui-combobox',
  props: {
    opts: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  mounted() {
    this.$combobox = $(this.$el).combobox(this.opts);
  },
  methods: {

  },
  render() {
    return (
      <div></div>
    );
  }
}
</script>