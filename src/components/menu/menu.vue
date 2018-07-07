<script>

let $ = window.$;

export default {
  name: 'easyui-menu',
  props: {
    submenu: {
      type: Array,
      default() {
        return [];
      }
    },
    opts: {
      type: Object,
      default() {
        return {};
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

    let self = this;

    this.$menu = $(this.$el).menu(Object.assign({}, this.opts, {onClick(e) {
      self.$parent.clicksubmenu && self.$parent.clicksubmenu(e, self.$menu);
    }}));

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
  watch: {
    submenu: {
      deep: true,
      handler(newValue, oldValue) {
        newValue.forEach(i => {
          let menuItem = this.$menu.menu('findItem', {name: i.name})

          if (menuItem) {
            if (i.disabled) {
              this.$menu.menu('disableItem', menuItem.target)
            } else {
              this.$menu.menu('enableItem', menuItem.target)
            }
          }
        })
      }
    }
  },
  methods: {
    addItem(i) {
      this.$menu.menu('appendItem', i)
    }
  }
}
</script>
