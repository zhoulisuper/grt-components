import _Table from "antd/es/table";
import _Popconfirm from "antd/es/popconfirm";
import _Typography from "antd/es/typography";
import _asyncToGenerator from "@babel/runtime/helpers/asyncToGenerator";
import _extends from "@babel/runtime/helpers/extends";
import _objectDestructuringEmpty from "@babel/runtime/helpers/objectDestructuringEmpty";
import _Form from "antd/es/form";
import _Input from "antd/es/input";
import _InputNumber from "antd/es/input-number";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/objectWithoutPropertiesLoose";
var _excluded = ["editing", "dataIndex", "title", "inputType", "record", "index", "children"];
import _regeneratorRuntime from "@babel/runtime/regenerator";
import * as React from 'react';
import "./index.scss";
import { useState } from 'react';
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
      restProps = _objectWithoutPropertiesLoose(_ref, _excluded);

  var inputNode = inputType === 'number' ? /*#__PURE__*/React.createElement(_InputNumber, null) : /*#__PURE__*/React.createElement(_Input, null);
  return /*#__PURE__*/React.createElement("td", restProps, editing ? /*#__PURE__*/React.createElement(_Form.Item, {
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
  _objectDestructuringEmpty(_ref2);

  var _Form$useForm = _Form.useForm(),
      form = _Form$useForm[0];

  var _useState = useState(originData),
      data = _useState[0],
      setData = _useState[1];

  var _useState2 = useState(''),
      editingKey = _useState2[0],
      setEditingKey = _useState2[1];

  var isEditing = function isEditing(record) {
    return record.key === editingKey;
  };

  var edit = function edit(record) {
    form.setFieldsValue(_extends({
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
    var _ref3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee(key) {
      var row, newData, index, item;
      return _regeneratorRuntime.wrap(function _callee$(_context) {
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
                newData.splice(index, 1, _extends({}, item, row));
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
      return editable ? /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement(_Typography.Link, {
        onClick: function onClick() {
          return save(record.key);
        },
        style: {
          marginRight: 8
        }
      }, "Save"), /*#__PURE__*/React.createElement(_Popconfirm, {
        title: "Sure to cancel?",
        onConfirm: cancel
      }, /*#__PURE__*/React.createElement("a", null, "Cancel"))) : /*#__PURE__*/React.createElement(_Typography.Link, {
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

    return _extends({}, col, {
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
  return /*#__PURE__*/React.createElement(_Form, {
    form: form,
    component: false
  }, /*#__PURE__*/React.createElement(_Table, {
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


export default GrtTable;