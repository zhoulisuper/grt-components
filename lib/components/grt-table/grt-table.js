"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _table = _interopRequireDefault(require("antd/lib/table"));

var _popconfirm = _interopRequireDefault(require("antd/lib/popconfirm"));

var _typography = _interopRequireDefault(require("antd/lib/typography"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectDestructuringEmpty2 = _interopRequireDefault(require("@babel/runtime/helpers/objectDestructuringEmpty"));

var _form = _interopRequireDefault(require("antd/lib/form"));

var _input = _interopRequireDefault(require("antd/lib/input"));

var _inputNumber = _interopRequireDefault(require("antd/lib/input-number"));

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutPropertiesLoose"));

var React = _interopRequireWildcard(require("react"));

require("./index.scss");

var _excluded = ["editing", "dataIndex", "title", "inputType", "record", "index", "children"];

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var originData = [];

for (var i = 0; i < 100; i++) {
  originData.push({
    key: i.toString(),
    name: "Edrward " + i,
    age: 32,
    address: "London Park no. " + i
  });
}

var EditableCell = function EditableCell(_ref) {
  var editing = _ref.editing,
      dataIndex = _ref.dataIndex,
      title = _ref.title,
      inputType = _ref.inputType,
      record = _ref.record,
      index = _ref.index,
      children = _ref.children,
      restProps = (0, _objectWithoutPropertiesLoose2["default"])(_ref, _excluded);
  var inputNode = inputType === 'number' ? /*#__PURE__*/React.createElement(_inputNumber["default"], null) : /*#__PURE__*/React.createElement(_input["default"], null);
  return /*#__PURE__*/React.createElement("td", restProps, editing ? /*#__PURE__*/React.createElement(_form["default"].Item, {
    name: dataIndex,
    style: {
      margin: 0
    },
    rules: [{
      required: true,
      message: "Please Input " + title + "!"
    }]
  }, inputNode) : children);
};

var GrtTable = function GrtTable(_ref2) {
  (0, _objectDestructuringEmpty2["default"])(_ref2);

  var _Form$useForm = _form["default"].useForm(),
      form = _Form$useForm[0];

  var _useState = (0, React.useState)(originData),
      data = _useState[0],
      setData = _useState[1];

  var _useState2 = (0, React.useState)(''),
      editingKey = _useState2[0],
      setEditingKey = _useState2[1];

  var isEditing = function isEditing(record) {
    return record.key === editingKey;
  };

  var edit = function edit(record) {
    form.setFieldsValue((0, _extends2["default"])({
      name: '',
      age: '',
      address: ''
    }, record));
    setEditingKey(record.key);
  };

  var cancel = function cancel() {
    setEditingKey('');
  };

  var save = /*#__PURE__*/function () {
    var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(key) {
      var row, newData, index, item;
      return _regenerator["default"].wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              _context.next = 3;
              return form.validateFields();

            case 3:
              row = _context.sent;
              newData = [].concat(data);
              index = newData.findIndex(function (item) {
                return key === item.key;
              });

              if (index > -1) {
                item = newData[index];
                newData.splice(index, 1, (0, _extends2["default"])({}, item, row));
                setData(newData);
                setEditingKey('');
              } else {
                newData.push(row);
                setData(newData);
                setEditingKey('');
              }

              _context.next = 12;
              break;

            case 9:
              _context.prev = 9;
              _context.t0 = _context["catch"](0);
              console.log('Validate Failed:', _context.t0);

            case 12:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[0, 9]]);
    }));

    return function save(_x) {
      return _ref3.apply(this, arguments);
    };
  }();

  var columns = [{
    title: 'name',
    dataIndex: 'name',
    width: '25%',
    editable: true
  }, {
    title: 'age',
    dataIndex: 'age',
    width: '15%',
    editable: true
  }, {
    title: 'address',
    dataIndex: 'address',
    width: '40%',
    editable: true
  }, {
    title: 'operation',
    dataIndex: 'operation',
    render: function render(_, record) {
      var editable = isEditing(record);
      return editable ? /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement(_typography["default"].Link, {
        onClick: function onClick() {
          return save(record.key);
        },
        style: {
          marginRight: 8
        }
      }, "Save"), /*#__PURE__*/React.createElement(_popconfirm["default"], {
        title: "Sure to cancel?",
        onConfirm: cancel
      }, /*#__PURE__*/React.createElement("a", null, "Cancel"))) : /*#__PURE__*/React.createElement(_typography["default"].Link, {
        disabled: editingKey !== '',
        onClick: function onClick() {
          return edit(record);
        }
      }, "edit");
    }
  }];
  var mergedColumns = columns.map(function (col) {
    if (!col.editable) {
      return col;
    }

    return (0, _extends2["default"])({}, col, {
      onCell: function onCell(record) {
        return {
          record: record,
          inputType: col.dataIndex === 'age' ? 'number' : 'text',
          dataIndex: col.dataIndex,
          title: col.title,
          editing: isEditing(record)
        };
      }
    });
  });
  return /*#__PURE__*/React.createElement(_form["default"], {
    form: form,
    component: false
  }, /*#__PURE__*/React.createElement(_table["default"], {
    components: {
      body: {
        cell: EditableCell
      }
    },
    bordered: true,
    dataSource: data,
    columns: mergedColumns,
    rowClassName: "editable-row",
    pagination: {
      onChange: cancel
    }
  }));
}; // GrtTable.displayName = 'GrtTable';


var _default = GrtTable;
exports["default"] = _default;