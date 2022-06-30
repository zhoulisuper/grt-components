
import { ComponentMetadata, Snippet } from '@alilc/lowcode-types';

const GrtButtonMeta: ComponentMetadata = {
  "componentName": "GrtButton",
  "title": "GrtButton",
  "docUrl": "",
  "screenshot": "",
  "devMode": "proCode",
  "npm": {
    "package": "grt-comps",
    "version": "0.1.0",
    "exportName": "GrtButton",
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
            "en-US": "type",
            "zh-CN": "类型"
          },
          "tip": "type | 类型"
        },
        "name": "type",
        "description": "类型",
        "setter": {
          "componentName": "RadioGroupSetter",
          "props": {
            "dataSource": [
              {
                "label": "primary",
                "value": "primary"
              },
              {
                "label": "secondary",
                "value": "secondary"
              },
              {
                "label": "normal",
                "value": "normal"
              }
            ],
            "options": [
              {
                "label": "primary",
                "value": "primary"
              },
              {
                "label": "secondary",
                "value": "secondary"
              },
              {
                "label": "normal",
                "value": "normal"
              }
            ]
          },
          "initialValue": "primary"
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "color",
            "zh-CN": "color"
          }
        },
        "name": "color",
        "setter": {
          "componentName": "RadioGroupSetter",
          "props": {
            "dataSource": [
              {
                "label": "string",
                "value": "string"
              }
            ],
            "options": [
              {
                "label": "string",
                "value": "string"
              }
            ]
          },
          "initialValue": "string"
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "style",
            "zh-CN": "style"
          }
        },
        "name": "style",
        "setter": {
          "componentName": "RadioGroupSetter",
          "props": {
            "dataSource": [
              {
                "label": "object",
                "value": "object"
              }
            ],
            "options": [
              {
                "label": "object",
                "value": "object"
              }
            ]
          },
          "initialValue": "object"
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "onClick",
            "zh-CN": "onClick"
          }
        },
        "name": "onClick",
        "setter": {
          "componentName": "FunctionSetter"
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "value",
            "zh-CN": "value"
          }
        },
        "name": "value",
        "setter": {
          "componentName": "MixedSetter",
          "props": {
            "setters": [
              {
                "componentName": "StringSetter",
                "isRequired": false,
                "initialValue": ""
              },
              {
                "componentName": "NumberSetter",
                "isRequired": false,
                "initialValue": 0
              },
              {
                "componentName": "ArraySetter",
                "props": {
                  "itemSetter": {
                    "componentName": "StringSetter",
                    "isRequired": false,
                    "initialValue": ""
                  }
                },
                "initialValue": []
              }
            ]
          }
        }
      }
    ],
    "supports": {},
    "component": {}
  }
};
const snippets: Snippet[] = [
  {
    "title": "GrtButton",
    "screenshot": "",
    "schema": {
      "componentName": "GrtButton",
      "props": {}
    }
  }
];

export default {
  ...GrtButtonMeta,
  snippets
};
