<script>

import {toolbar, combobox, menubutton, menu} from 'components';

import actionTypes from '../actionTypes'

export default {
  name: 'editor-toolbar',
  props: {
    clicksubmenu: {
      type: Function
    },
    layer: {
      type: Array,
      default() {
        return [];
      }
    },
    onselectlayer: {
      type: Function,
    }
  },
  components: {
    easyuiToolbar: toolbar,
    easyuiCombobox: combobox,
    easyuiMenubutton: menubutton,
    easyuiMenu: menu
  },
  data() {
    let self = this;

    return {
      config: {
        layer: {
          data: self.layer,
          valueField:'id',
          textField:'text',
          height: 25,
          editable: false,
          panelHeight:'auto',
          label: '图层:',
          labelPosition: 'left',
          labelWidth:40,
          onChange(newVal, oldVal) {
            if (newVal) {
              self.config.edit.opts.disabled = false;
              self.onselectlayer && self.onselectlayer(newVal);
            } else {
              self.config.edit.opts.disabled = true;
            }
          }
        },
        select: {
          opts: {
            iconCls:'icon-search',
            disabled: true
          },
          submenu: [{
            name: actionTypes.EDITOR_SELECT_START,
            text: '开始选择',
            iconCls: 'icon-search',
            disabled: false,
          }, {
            name: actionTypes.EDITOR_SELECT_END,
            text: '取消选择',
            iconCls: 'icon-cancel',
            disabled: true,
          }]
        },
        edit: {
          opts: {
            iconCls:'icon-edit',
            disabled: true
          },
          submenu: [{
            name: actionTypes.EDITOR_EDIT_START,
            text: '开始编缉',
            iconCls: 'icon-edit',
            disabled: false,
          }, {
            name: actionTypes.EDITOR_EDIT_SAVE,
            text: '保存编缉',
            iconCls: 'icon-save',
            disabled: true,
          }, {
            name: actionTypes.EDITOR_EDIT_END,
            text: '结束编缉',
            iconCls: 'icon-cancel',
            disabled: true,
          }]
        },
        create: {
          opts: {
            iconCls:'icon-add',
            disabled: true
          },
          submenu: [{
            name: actionTypes.EDITOR_CREATE_START,
            text: '开始标注',
            iconCls: 'icon-add',
            disabled: false,
          }, {
            name: actionTypes.EDITOR_CREATE_SAVE,
            text: '保存标注',
            iconCls: 'icon-save',
            disabled: true,
          },{
            name: actionTypes.EDITOR_CREATE_END,
            text: '结束标注',
            iconCls: 'icon-clear',
            disabled: true,
          }]
        },
        remove: {
          opts: {
            plain:true,
            iconCls:'icon-cancel',
            hasDownArrow:false,
            disabled: true
          }
        }
      }
    };
  },
  mounted() {
  },
  methods: {
    click(e, ctx) {
      const name = e.name;

			switch(name) {
				case actionTypes.EDITOR_SELECT_START: {

          this._setSumenuDisabledStatus(actionTypes.EDITOR_SELECT_START, true);
          this._setSumenuDisabledStatus(actionTypes.EDITOR_SELECT_END, false);
          break;
				}
				case actionTypes.EDITOR_SELECT_END: {

          this._setSumenuDisabledStatus(actionTypes.EDITOR_SELECT_START, false);
          this._setSumenuDisabledStatus(actionTypes.EDITOR_SELECT_END, true);
          break;
				}
				case actionTypes.EDITOR_EDIT_START: {
          this.$refs.layer.$combobox.combobox('disable');
          this.config.select.opts.disabled = false;
          this.config.create.opts.disabled = false;
          this.config.remove.opts.disabled = false;

          this._setSumenuDisabledStatus(actionTypes.EDITOR_EDIT_START, true);
          this._setSumenuDisabledStatus(actionTypes.EDITOR_EDIT_SAVE, false);
          this._setSumenuDisabledStatus(actionTypes.EDITOR_EDIT_END, false);
					break;
				}
				case actionTypes.EDITOR_EDIT_SAVE: {
          break;
				}

				case actionTypes.EDITOR_EDIT_END: {
          this.$refs.layer.$combobox.combobox('enable');
          this.config.select.opts.disabled = true;
          this.config.create.opts.disabled = true;
          this.config.remove.opts.disabled = true;


          this._setSumenuDisabledStatus(actionTypes.EDITOR_EDIT_START, false);
          this._setSumenuDisabledStatus(actionTypes.EDITOR_EDIT_SAVE, true);
          this._setSumenuDisabledStatus(actionTypes.EDITOR_EDIT_END, true);
          break;
				}
				case actionTypes.EDITOR_CREATE_START: {

          this._setSumenuDisabledStatus(actionTypes.EDITOR_CREATE_START, true);
          this._setSumenuDisabledStatus(actionTypes.EDITOR_CREATE_SAVE, false);
          this._setSumenuDisabledStatus(actionTypes.EDITOR_CREATE_END, false);

					break;
				}
				case actionTypes.EDITOR_CREATE_SAVE: {

					break;
				}
				case actionTypes.EDITOR_CREATE_END: {

          this._setSumenuDisabledStatus(actionTypes.EDITOR_CREATE_START, false);
          this._setSumenuDisabledStatus(actionTypes.EDITOR_CREATE_SAVE, true);
          this._setSumenuDisabledStatus(actionTypes.EDITOR_CREATE_END, true);
					break;
				}
				default: {
					console.log(e, ctx);
        }
      }

      this.clicksubmenu(e, ctx)
    },
    _setSumenuDisabledStatus(name, status) {
      let menu = this._findMenuByName(name);
      menu.disabled = status;

      return menu;
    },
    _findMenuByName(name) {
      let menu;

      menu = this.config.select.submenu.find(i => i.name === name)

      if (menu) {
        return menu;
      }

      menu = this.config.edit.submenu.find(i => i.name === name)

      if (menu) {
        return menu;
      }

      menu = this.config.create.submenu.find(i => i.name === name)

      return menu;
    }

  },
  watch: {
    layer() {
      this.$refs.layer.$combobox.combobox('loadData', this.layer);
    }
  },
  render() {
    return (
      <easyui-toolbar title="编辑工具栏">
        <easyui-combobox ref="layer" opts={this.config.layer}></easyui-combobox>
        <easyui-menubutton ref="edit" title="编辑" opts={this.config.edit.opts} clicksubmenu={this.click}>
          <easyui-menu submenu={this.config.edit.submenu}></easyui-menu>
        </easyui-menubutton>
        <easyui-menubutton ref="select" title="选择" opts={this.config.select.opts} clicksubmenu={this.click}>
          <easyui-menu submenu={this.config.select.submenu}></easyui-menu>
        </easyui-menubutton>
        <easyui-menubutton ref="create" title="创建" opts={this.config.create.opts} clicksubmenu={this.click}>
          <easyui-menu submenu={this.config.create.submenu}></easyui-menu>
        </easyui-menubutton>
        <easyui-menubutton ref="remove" title="删除" opts={this.config.remove.opts}></easyui-menubutton>
      </easyui-toolbar>
    );
  }
}
</script>


<style lang="scss" scoped>
</style>

