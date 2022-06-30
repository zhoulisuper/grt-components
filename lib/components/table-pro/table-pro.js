"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _dropdown = _interopRequireDefault(require("antd/lib/dropdown"));

var _button = _interopRequireDefault(require("antd/lib/button"));

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _objectDestructuringEmpty2 = _interopRequireDefault(require("@babel/runtime/helpers/objectDestructuringEmpty"));

var _menu = _interopRequireDefault(require("antd/lib/menu"));

var _space = _interopRequireDefault(require("antd/lib/space"));

var _tag = _interopRequireDefault(require("antd/lib/tag"));

var React = _interopRequireWildcard(require("react"));

var _proTable = require("@ant-design/pro-table");

var _icons = require("@ant-design/icons");

var _umiRequest = _interopRequireDefault(require("umi-request"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

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
    return /*#__PURE__*/React.createElement(_space["default"], null, record.labels.map(function (_ref2) {
      var name = _ref2.name,
          color = _ref2.color;
      return /*#__PURE__*/React.createElement(_tag["default"], {
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
    }, "\u67E5\u770B"), /*#__PURE__*/React.createElement(_proTable.TableDropdown, {
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
var menu = /*#__PURE__*/React.createElement(_menu["default"], null, /*#__PURE__*/React.createElement(_menu["default"].Item, {
  key: "1"
}, "1st item"), /*#__PURE__*/React.createElement(_menu["default"].Item, {
  key: "2"
}, "2nd item"), /*#__PURE__*/React.createElement(_menu["default"].Item, {
  key: "3"
}, "3rd item"));

var TablePro = function TablePro(_ref3) {
  (0, _objectDestructuringEmpty2["default"])(_ref3);
  var actionRef = (0, React.useRef)();
  return /*#__PURE__*/React.createElement(_proTable.ProTable, {
    columns: columns,
    actionRef: actionRef,
    cardBordered: true,
    request: /*#__PURE__*/function () {
      var _ref4 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(params, sort, filter) {
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (params === void 0) {
                  params = {};
                }

                console.log(sort, filter);
                return _context.abrupt("return", (0, _umiRequest["default"])('https://proapi.azurewebsites.net/github/issues', {
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
          return (0, _extends2["default"])({}, values, {
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
      return [/*#__PURE__*/React.createElement(_button["default"], {
        key: "button",
        icon: /*#__PURE__*/React.createElement(_icons.PlusOutlined, null),
        type: "primary"
      }, "\u65B0\u5EFA"), /*#__PURE__*/React.createElement(_dropdown["default"], {
        key: "menu",
        overlay: menu
      }, /*#__PURE__*/React.createElement(_button["default"], null, /*#__PURE__*/React.createElement(_icons.EllipsisOutlined, null)))];
    }
  });
};

TablePro.displayName = 'TablePro';
var _default = TablePro;
exports["default"] = _default;