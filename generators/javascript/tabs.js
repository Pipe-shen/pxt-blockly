'use strict';
goog.require('Blockly.JavaScript');

Blockly.JavaScript['tab_area'] = function(block) {
  var variable_tab_index = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('tab_index'), Blockly.Variables.NAME_TYPE);
  var statements_tabs = Blockly.JavaScript.statementToCode(block, 'tabs');
  // TODO: Assemble JavaScript into code variable.
  var code = 'function '+variable_tab_index+'(){\n' + statements_tabs + '\n}';
  return code;
};