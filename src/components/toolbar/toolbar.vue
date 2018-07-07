

<script>

import draggable from '../draggable';
import panel from '../panel';

export default {
  name: 'easyui-toobar',
  props: {
    title: {
      type: String,
      default() {
        return '未命名'
      }
    }
  },
  mounted(){

  },
  methods: {

  },
  components: {
    easyuiDraggable: draggable,
    easyuiPanel: panel
  },
  render () {
    return (
      <easyui-draggable title={this.title}>
        <easyui-panel style={{padding: '5px'}}>
          {this.$slots.default}
        </easyui-panel>
      </easyui-draggable>
    );
  }
}
</script>

<style>

</style>
