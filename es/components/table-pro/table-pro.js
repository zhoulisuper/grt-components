import _Dropdown from "antd/es/dropdown";
import _Button from "antd/es/button";
import _extends from "@babel/runtime/helpers/extends";
import _asyncToGenerator from "@babel/runtime/helpers/asyncToGenerator";
import _objectDestructuringEmpty from "@babel/runtime/helpers/objectDestructuringEmpty";
import _Menu from "antd/es/menu";
import _Space from "antd/es/space";
import _Tag from "antd/es/tag";
import _regeneratorRuntime from "@babel/runtime/regenerator";
import * as React from 'react';
import { ProTable, TableDropdown } from '@ant-design/pro-table';
import { EllipsisOutlined, PlusOutlined } from '@ant-design/icons';
import { useRef } from 'react';
import request from 'umi-request';
var columns = [{
  dataIndex: 'index',
  valueType: 'indexBorder',
  width: 48
}, {
  title: '标题',
  dataIndex: 'title',
  copyable: true,
  ellipsis: true,
  tip: '标题过长会自动收缩',
  formItemProps: {
    rules: [{
      required: true,
      message: '此项为必填项'
    }]
  }
}, {
  disable: true,
  title: '状态',
  dataIndex: 'state',
  filters: true,
  onFilter: true,
  valueType: 'select',
  valueEnum: {
    all: {
      text: '全部',
      status: 'Default'
    },
    open: {
      text: '未解决',
      status: 'Error'
    },
    closed: {
      text: '已解决',
      status: 'Success',
      disabled: true
    },
    processing: {
      text: '解决中',
      status: 'Processing'
    }
  }
}, {
  disable: true,
  title: '标签',
  dataIndex: 'labels',
  search: false,
  renderFormItem: function renderFormItem(_, _ref) {
    var defaultRender = _ref.defaultRender;
    return defaultRender(_);
  },
  render: function render(_, record) {
    return /*#__PURE__*/React.createElement(_Space, null, record.labels.map(function (_ref2) {
      var name = _ref2.name,
          color = _ref2.color;
      return /*#__PURE__*/React.createElement(_Tag, {
        color: color,
        key: name
      }, name);
    }));
  }
}, {
  title: '创建时间',
  key: 'showTime',
  dataIndex: 'created_at',
  valueType: 'dateTime',
  sorter: true,
  hideInSearch: true
}, {
  title: '创建时间',
  dataIndex: 'created_at',
  valueType: 'dateRange',
  hideInTable: true,
  search: {
    transform: function transform(value) {
      return {
        startTime: value[0],
        endTime: value[1]
      };
    }
  }
}, {
  title: '操作',
  valueType: 'option',
  key: 'option',
  render: function render(text, record, _, action) {
    return [/*#__PURE__*/React.createElement("a", {
      key: "editable",
      onClick: function onClick() {
        var _action$startEditable;

        action === null || action === void 0 ? void 0 : (_action$startEditable = action.startEditable) === null || _action$startEditable === void 0 ? void 0 : _action$startEditable.call(action, record.id);
      }
    }, "\u7F16\u8F91"), /*#__PURE__*/React.createElement("a", {
      href: record.url,
      target: "_blank",
      rel: "noopener noreferrer",
      key: "view"
    }, "\u67E5\u770B"), /*#__PURE__*/React.createElement(TableDropdown, {
      key: "actionGroup",
      onSelect: function onSelect() {
        return action === null || action === void 0 ? void 0 : action.reload();
      },
      menus: [{
        key: 'copy',
        name: '复制'
      }, {
        key: 'delete',
        name: '删除'
      }]
    })];
  }
}];
var menu = /*#__PURE__*/React.createElement(_Menu, null, /*#__PURE__*/React.createElement(_Menu.Item, {
  key: "1"
}, "1st item"), /*#__PURE__*/React.createElement(_Menu.Item, {
  key: "2"
}, "2nd item"), /*#__PURE__*/React.createElement(_Menu.Item, {
  key: "3"
}, "3rd item"));

var TablePro = function TablePro(_ref3) {
  _objectDestructuringEmpty(_ref3);

  var actionRef = useRef();
  return /*#__PURE__*/React.createElement(ProTable, {
    columns: columns,
    actionRef: actionRef,
    cardBordered: true,
    request: /*#__PURE__*/function () {
      var _ref4 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee(params, sort, filter) {
        return _regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (params === void 0) {
                  params = {};
                }

                console.log(sort, filter);
                return _context.abrupt("return", request('https://proapi.azurewebsites.net/github/issues', {
                  params: params
                }));

              case 3:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function (_x, _x2, _x3) {
        return _ref4.apply(this, arguments);
      };
    }(),
    editable: {
      type: 'multiple'
    },
    columnsState: {
      persistenceKey: 'pro-table-singe-demos',
      persistenceType: 'localStorage',
      onChange: function onChange(value) {
        console.log('value: ', value);
      }
    },
    rowKey: "id",
    search: {
      labelWidth: 'auto'
    },
    form: {
      // 由于配置了 transform，提交的参与与定义的不同这里需要转化一下
      syncToUrl: function syncToUrl(values, type) {
        if (type === 'get') {
          return _extends({}, values, {
            created_at: [values.startTime, values.endTime]
          });
        }

        return values;
      }
    },
    pagination: {
      pageSize: 5,
      onChange: function onChange(page) {
        return console.log(page);
      }
    },
    dateFormatter: "string",
    headerTitle: "\u9AD8\u7EA7\u8868\u683C",
    toolBarRender: function toolBarRender() {
      return [/*#__PURE__*/React.createElement(_Button, {
        key: "button",
        icon: /*#__PURE__*/React.createElement(PlusOutlined, null),
        type: "primary"
      }, "\u65B0\u5EFA"), /*#__PURE__*/React.createElement(_Dropdown, {
        key: "menu",
        overlay: menu
      }, /*#__PURE__*/React.createElement(_Button, null, /*#__PURE__*/React.createElement(EllipsisOutlined, null)))];
    }
  });
};

TablePro.displayName = 'TablePro';
export default TablePro;