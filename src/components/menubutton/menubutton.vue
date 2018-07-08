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
    },
    clicksubmenu: {
      type: Function
    },
    click: {
      type: Function
    }
  },
  mounted() {
    let menu = this.$children.filter(i => i.$options.name === 'easyui-menu')[0]

    let self = this;

    if (menu) {
      this.$nextTick(() => {
        this.$menubutton = $(this.$refs.title).menubutton(Object.assign({}, this.opts, {
          menu: '#' + menu.index,
          onClick() {
            self.click && self.click(self.$menubutton);
          }
        }));
      });
    } else {
      this.$menubutton = $(this.$refs.title).menubutton(Object.assign({}, this.opts, {
        onClick() {
          self.click && self.click(self.$menubutton);
        }
      }));
    }
  },
  watch: {
    opts: {
      deep: true,
      handler(newVal, oldVal) {
        if (!this.$menubutton) {
          return;
        }
        if (newVal.disabled) {
          this.$menubutton.menubutton('disable');
        } else {
          this.$menubutton.menubutton('enable');
        }
      }
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
