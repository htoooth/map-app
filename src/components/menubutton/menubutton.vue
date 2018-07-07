<script>

let $ = window.$;

export default {
  name: 'easyui-menubutton',
  props: {
    title: {
      type: String,
      default() {
        return ''
      }
    },
    opts: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  mounted() {
    let menu = this.$children.filter(i => i.$options.name === 'easyui-menu')[0]

    if (menu) {
      this.$nextTick(() => {
        this.$menubutton = $(this.$refs.title).menubutton(Object.assign({}, this.opts, {
          menu: '#' + menu.index
        }));
      });
    } else {
      this.$menubutton = $(this.$refs.title).menubutton(this.opts);
    }
  },
  render() {
    return (
        <a ref="title" href="#">{this.title}
          {this.$slots.default}
        </a>
    );
  }
}
</script>
