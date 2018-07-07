<script>

import {toolbar, combobox, menubutton, menu} from 'components';

export default {
  name: 'editor-toolbar',
  components: {
    easyuiToolbar: toolbar,
    easyuiCombobox: combobox,
    easyuiMenubutton: menubutton,
    easyuiMenu: menu
  },
  data() {
    return {
      config: {
        layer: {
          data: [{id: 1, text: '22'}],
          valueField:'id',
          textField:'text',
          height: 25,
          editable: false,
          panelHeight:'auto',
          label: '图层:',
          labelPosition: 'left',
          labelWidth:40
        },
        select: {
          opts: {
            iconCls:'icon-search',
          },
          submenu: [{
            text: '开始选择',
            iconCls: 'icon-search',
            onclick() {
              console.log(arguments);
            }
          }, {
            text: '取消选择',
            iconCls: 'icon-cancel',
            onclick() {
              console.log(arguments);
            }
          }]
        },
        edit: {
          opts: {
            iconCls:'icon-edit',
          },
          submenu: [{
            text: '开始编缉',
            iconCls: 'icon-edit',
            onclick() {
              console.log(arguments);
            }
          }, {
            text: '保存编缉',
            iconCls: 'icon-save',
            onclick() {
              console.log(arguments);
            }
          }, {
            text: '结束编缉',
            iconCls: 'icon-cancel',
            onclick() {
              console.log(arguments);
            }
          }]
        },
        create: {
          opts: {
            iconCls:'icon-add',
          },
          submenu: [{
            text: '新建标注',
            iconCls: 'icon-ok',
            onclick() {
              console.log(arguments);
            }
          }, {
            text: '结束标注',
            iconCls: 'icon-clear',
            onclick() {
              console.log(arguments);
            }
          }]
        },
        remove: {
          opts: {
            plain:true,
            iconCls:'icon-cancel',
            hasDownArrow:false
          }
        }
      }
    };
  },
  render() {
    return (
      <easyui-toolbar title="编辑工具栏">
        <easyui-combobox opts={this.config.layer}></easyui-combobox>
        <easyui-menubutton title="选择" opts={this.config.select.opts}>
          <easyui-menu submenu={this.config.select.submenu}></easyui-menu>
        </easyui-menubutton>
        <easyui-menubutton title="编辑" opts={this.config.edit.opts}>
          <easyui-menu submenu={this.config.edit.submenu}></easyui-menu>
        </easyui-menubutton>
        <easyui-menubutton title="创建" opts={this.config.create.opts}>
          <easyui-menu submenu={this.config.create.submenu}></easyui-menu>
        </easyui-menubutton>
        <easyui-menubutton title="删除" opts={this.config.remove.opts}></easyui-menubutton>
      </easyui-toolbar>
    );
  }
}
</script>


<style lang="scss" scoped>
</style>

