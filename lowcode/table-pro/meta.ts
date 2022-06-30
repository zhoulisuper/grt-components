
import { ComponentMetadata, Snippet } from '@alilc/lowcode-types';

const TableProMeta: ComponentMetadata = {
  "componentName": "TablePro",
  "title": "TablePro",
  "docUrl": "",
  "screenshot": "",
  "devMode": "proCode",
  "npm": {
    "package": "grt-comps",
    "version": "0.1.0",
    "exportName": "TablePro",
    "main": "src/index.tsx",
    "destructuring": true,
    "subName": ""
  },
  "configure": {
    "props": [
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "value",
            "zh-CN": "类型"
          },
          "tip": "value | 类型"
        },
        "name": "value",
        "description": "类型",
        "setter": {
          "componentName": "RadioGroupSetter",
          "props": {
            "dataSource": [
              {
                "label": "ddd",
                "value": "ddd"
              }
            ],
            "options": [
              {
                "label": "ddd",
                "value": "ddd"
              }
            ]
          },
          "initialValue": "ddd"
        }
      }
    ],
    "supports": {
      "style": true
    },
    "component": {}
  }
};
const snippets: Snippet[] = [
  {
    "title": "TablePro",
    "screenshot": "",
    "schema": {
      "componentName": "TablePro",
      "props": {}
    }
  }
];

export default {
  ...TableProMeta,
  snippets
};
