<script>
import { toolbar, combobox, menubutton, menu } from "components";

import actionTypes from "../actionTypes";

export default {
  name: "measure-toolbar",
  props: {
    click: {
      type: Function
    }
  },
  components: {
    easyuiToolbar: toolbar,
    easyuiCombobox: combobox,
    easyuiMenubutton: menubutton,
    easyuiMenu: menu
  },
  data() {
    return {
      config: {
        line: {
          opts: {
            name: actionTypes.MEASURE_LINE,
            plain: true,
            hasDownArrow: false
          }
        },
        area: {
          opts: {
            name: actionTypes.MEASURE_AREA,
            plain: true,
            hasDownArrow: false
          }
        },
        cancel: {
          opts: {
            name: actionTypes.MEASURE_CLEAR,
            iconCls: "icon-cancel",
            plain: true,
            hasDownArrow: false
          }
        }
      }
    };
  },
  render() {
    return (
      <easyui-toolbar title="测量工具栏">
        <easyui-menubutton
          title="测距"
          opts={this.config.line.opts}
          click={this.click}
        />
        <easyui-menubutton
          title="测面"
          opts={this.config.area.opts}
          click={this.click}
        />
        <easyui-menubutton
          title="取消"
          opts={this.config.cancel.opts}
          click={this.click}
        />
      </easyui-toolbar>
    );
  }
};
</script>


<style lang="scss" scoped>
</style>