'use strict';

goog.require('Blockly');

Blockly.defineBlocksWithJsonArray([{
  "type": "tab_area",
  "message0": "%1 %2 %3",
  "args0": [
    {
      "type": "field_label_serializable",
      "name": "var",
      "text": "var"
    },
    {
      "type": "field_variable",
      "name": "tab_index",
      "variable": "tab_index"
    },
    {
      "type": "input_statement",
      "name": "tabs"
    }
  ],
  "colour": 230,
  "tooltip": "",
  "helpUrl": ""
}]);  // END JSON EXTRACT (Do not delete this comment.)
