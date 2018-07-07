<script>

let $ = window.$;

export default {
  name: 'easyui-draggable',
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
        return {};
      }
    }
  },
  data() {
    return {
      index: 0,
      tempIndex: 0,
      drag: false,
    };
  },
  mounted() {
    this.index = Date.now() + this.tempIndex++;
    this.$draggable = null;

    let self = this;

    let onDrag = {
      onStartDrag() {
        self.drag = true;
      },
      onStopDrag() {
        self.drag = false;
      }
    }

    this.$nextTick(() => {
      if (this.title) {
        this.$draggable = $(this.$el).draggable(Object.assign(onDrag, this.opts, {
          handle: '#' + this.index
        }));
      } else {
        this.$draggable = $(this.$el).draggable(Object.assign(onDrag, this.opts));
      }
    });
  },
  methods: {

  },
  render() {
    let title = ''
    if (this.title) {
      title = <div id={this.index} class={{"easyui-draggable_title": true, "easyui-draggable_title_drag": this.drag}}>{this.title}</div>
    }

    return (
      <div class="easyui-draggable_border">
        {title}
        {this.$slots.default}
      </div>
    );
  }
}
</script>

<style lang="scss" scoped>

.easyui-draggable_border {
  background:#fafafa;
  border:1px solid #95b8e7;
  margin-top:10px;
  margin-left: 10px;
  position:absolute;
  top:0;
  left:0;
}

.easyui-draggable_title {
  padding:5px;
  background:#4e91ea;
  color:#fff;
}

.easyui-draggable_title_drag {
  background-color: #95b8e7;
}

</style>
