var node = require("../../src/linkedList.js").node
var constr = require("../../src/linkedList.js").constr

var nextTest = new node.Node('has next?')
var LLobj = new constr.LinkedList()

LLobj.insert("node 1", "head")
LLobj.insert("node 2", "node 1")
LLobj.insert("node 3", "node 2")

module.exports = {
  nextTest: nextTest,
  LLobj: LLobj
}
