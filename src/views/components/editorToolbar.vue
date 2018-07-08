<script>
import { toolbar, combobox, menubutton, menu } from "components";
import util from "libs/util";
import actionTypes from "../actionTypes";

export default {
  name: "editor-toolbar",
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
      type: Function
    },
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
    let self = this;

    return {
      config: {
        layer: {
          data: self.layer,
          valueField: "id",
          textField: "text",
          height: 25,
          editable: false,
          panelHeight: "auto",
          label: "图层:",
          labelPosition: "left",
          labelWidth: 40,
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
            iconCls: "icon-search",
            disabled: true
          },
          submenu: [
            {
              name: actionTypes.EDITOR_SELECT_START,
              text: "开始选择",
              iconCls: "icon-search",
              disabled: false
            },
            {
              name: actionTypes.EDITOR_SELECT_END,
              text: "取消选择",
              iconCls: "icon-cancel",
              disabled: true
            }
          ]
        },
        edit: {
          opts: {
            iconCls: "icon-edit",
            disabled: true
          },
          submenu: [
            {
              name: actionTypes.EDITOR_EDIT_MODE_START,
              text: "开始编缉",
              iconCls: "icon-edit",
              disabled: false
            },
            {
              name: actionTypes.EDITOR_EDIT_MODE_SAVE,
              text: "保存编缉",
              iconCls: "icon-save",
              disabled: true
            },
            {
              name: actionTypes.EDITOR_EDIT_MODE_END,
              text: "结束编缉",
              iconCls: "icon-cancel",
              disabled: true
            }
          ]
        },
        create: {
          opts: {
            iconCls: "icon-add",
            disabled: true
          },
          submenu: [
            {
              name: actionTypes.EDITOR_CREATE_START,
              text: "开始标注",
              iconCls: "icon-add",
              disabled: false
            },
            {
              name: actionTypes.EDITOR_CREATE_END,
              text: "结束标注",
              iconCls: "icon-clear",
              disabled: true
            }
          ]
        },
        modify: {
          opts: {
            iconCls: "icon-edit",
            disabled: true
          },
          submenu: [
            {
              name: actionTypes.EDITOR_MODIFY_START,
              text: "开始修改",
              iconCls: "icon-edit",
              disabled: true
            },
            {
              name: actionTypes.EDITOR_MODIFY_END,
              text: "结束修改",
              iconCls: "icon-cancel",
              disabled: true
            }
          ]
        },
        remove: {
          opts: {
            name: actionTypes.EDITOR_REMOVE,
            plain: true,
            iconCls: "icon-cancel",
            hasDownArrow: false,
            disabled: true
          }
        }
      }
    };
  },
  mounted() {},
  methods: {
    clickmenuitem(e, ctx) {
      const name = e.name;

      switch (name) {
        case actionTypes.EDITOR_SELECT_START: {
          this._setSumenuDisabledStatus(actionTypes.EDITOR_SELECT_START, true);
          this._setSumenuDisabledStatus(actionTypes.EDITOR_SELECT_END, false);

          this._setSumenuDisabledStatus(actionTypes.EDITOR_MODIFY_START, false);
          break;
        }
        case actionTypes.EDITOR_SELECT_END: {
          this._setSumenuDisabledStatus(actionTypes.EDITOR_SELECT_START, false);
          this._setSumenuDisabledStatus(actionTypes.EDITOR_SELECT_END, true);
          break;
        }
        case actionTypes.EDITOR_EDIT_MODE_START: {
          this.$refs.layer.$combobox.combobox("disable");
          this.config.select.opts.disabled = false;
          this.config.create.opts.disabled = false;
          this.config.remove.opts.disabled = false;
          this.config.modify.opts.disabled = false;

          this._setSumenuDisabledStatus(
            actionTypes.EDITOR_EDIT_MODE_START,
            true
          );
          this._setSumenuDisabledStatus(
            actionTypes.EDITOR_EDIT_MODE_SAVE,
            false
          );
          this._setSumenuDisabledStatus(
            actionTypes.EDITOR_EDIT_MODE_END,
            false
          );
          break;
        }

        case actionTypes.EDITOR_EDIT_MODE_SAVE: {
          break;
        }

        case actionTypes.EDITOR_EDIT_MODE_END: {
          this.$refs.layer.$combobox.combobox("enable");
          this.config.select.opts.disabled = true;
          this.config.create.opts.disabled = true;
          this.config.remove.opts.disabled = true;
          this.config.modify.opts.disabled = true;

          this._setSumenuDisabledStatus(
            actionTypes.EDITOR_EDIT_MODE_START,
            false
          );
          this._setSumenuDisabledStatus(
            actionTypes.EDITOR_EDIT_MODE_SAVE,
            true
          );
          this._setSumenuDisabledStatus(actionTypes.EDITOR_EDIT_MODE_END, true);

          this.resetCreate();
          this.resetModify();
          this.resetSelect();
          break;
        }
        case actionTypes.EDITOR_CREATE_START: {
          this._setSumenuDisabledStatus(actionTypes.EDITOR_CREATE_START, true);
          this._setSumenuDisabledStatus(actionTypes.EDITOR_CREATE_END, false);

          break;
        }

        case actionTypes.EDITOR_CREATE_END: {
          this._setSumenuDisabledStatus(actionTypes.EDITOR_CREATE_START, false);
          this._setSumenuDisabledStatus(actionTypes.EDITOR_CREATE_END, true);
          break;
        }

        case actionTypes.EDITOR_MODIFY_START: {
          this._setSumenuDisabledStatus(actionTypes.EDITOR_MODIFY_START, true);
          this._setSumenuDisabledStatus(actionTypes.EDITOR_MODIFY_END, false);
          break;
        }

        case actionTypes.EDITOR_MODIFY_END: {
          this._setSumenuDisabledStatus(actionTypes.EDITOR_MODIFY_START, false);
          this._setSumenuDisabledStatus(actionTypes.EDITOR_MODIFY_END, true);
          break;
        }
        default: {
          window.logger.error("menu error %s", name);
        }
      }

      this.clicksubmenu(e, ctx);
    },
    _setSumenuDisabledStatus(name, status) {
      let menu = this._findMenuByName(name);

      if (!menu) {
        return window.logger.error(`menu canot find menu ${name}`);
      }

      menu.disabled = status;
      return menu;
    },
    _findMenuByName(name) {
      let menu = util.findInArrays(
        i => i.name === name,
        this.config.select.submenu,
        this.config.edit.submenu,
        this.config.create.submenu,
        this.config.modify.submenu
      );

      return menu;
    },
    resetCreate() {
      this._setSumenuDisabledStatus(actionTypes.EDITOR_CREATE_START, false);
      this._setSumenuDisabledStatus(actionTypes.EDITOR_CREATE_END, true);
    },
    resetModify() {
      this._setSumenuDisabledStatus(actionTypes.EDITOR_MODIFY_START, true);
      this._setSumenuDisabledStatus(actionTypes.EDITOR_MODIFY_END, true);
    },
    resetSelect() {
      this._setSumenuDisabledStatus(actionTypes.EDITOR_SELECT_START, false);
      this._setSumenuDisabledStatus(actionTypes.EDITOR_SELECT_END, true);
    }
  },
  watch: {
    layer() {
      this.$refs.layer.$combobox.combobox("loadData", this.layer);
    }
  },
  render() {
    return (
      <easyui-toolbar title="编辑工具栏">
        <easyui-combobox ref="layer" opts={this.config.layer} />
        <easyui-menubutton
          ref="edit"
          title="编辑"
          opts={this.config.edit.opts}
          clicksubmenu={this.clickmenuitem}
        >
          <easyui-menu submenu={this.config.edit.submenu} />
        </easyui-menubutton>
        <easyui-menubutton
          ref="select"
          title="选择"
          opts={this.config.select.opts}
          clicksubmenu={this.clickmenuitem}
        >
          <easyui-menu submenu={this.config.select.submenu} />
        </easyui-menubutton>
        <easyui-menubutton
          ref="create"
          title="创建"
          opts={this.config.create.opts}
          clicksubmenu={this.clickmenuitem}
        >
          <easyui-menu submenu={this.config.create.submenu} />
        </easyui-menubutton>
        <easyui-menubutton
          ref="select"
          title="修改"
          opts={this.config.modify.opts}
          clicksubmenu={this.clickmenuitem}
        >
          <easyui-menu submenu={this.config.modify.submenu} />
        </easyui-menubutton>
        <easyui-menubutton
          ref="remove"
          title="删除"
          opts={this.config.remove.opts}
          click={this.click}
        />
      </easyui-toolbar>
    );
  }
};
</script>


<style lang="scss" scoped>
</style>

