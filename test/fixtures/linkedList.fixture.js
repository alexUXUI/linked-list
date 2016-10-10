'use strict'

/**
  * @const source code
  */

const node = require("../../src/linkedList.js").node
const constr = require("../../src/linkedList.js").constr


/**
 * create fixture for testing
 * the head of the linked list
 *
 * @return linked list instance
 */

var LList = new constr.LinkedList()
var LLNode = new node.Node("whatever")

LList.insert("data 1", "head")
LList.insert("data 2", "data 1")

var linkedListHead = {
  element: 'data 1',
  next: {
    element: 'data 2',
    next: null
  }
}

/**
 * create fixture for testing
 * the tail of the linked list
 *
 * @return linked list instance
 */

var LLtail = new constr.LinkedList()

LLtail.insert("first node", "head")
LLtail.insert("second node", "first node")
LLtail.insert("third node", "second node")
LLtail.insert("fourth node", "third node")

/**
 * create fixture for testing
 * the insert function of the linked list
 *
 * @return linked list instance
 * @return linked list before insert
 * @return linked list after insert
 */

var LLinsert = new constr.LinkedList()

var beforeInsert = {
  element: 'head content',
  next: null
}

var afterInsert = {
  element: 'head content',
    next: {
      element: 'second content',
      next: null
  }
}

LLinsert.insert("head content", "head")

/**
 * create fixture for testing
 * the removw function of the linked list
 *
 * @return linked list instance
 * @return linked list before insert
 * @return linked list after insert
 */

var cities = new constr.LinkedList()
cities.insert("Conway", "head")
cities.insert("Russellville", "Conway")

var before = {
  element: 'Conway',
  next: {
    element: 'Russellville',
    next: null
  }
}

var after = {
  element: 'Conway',
  next: null
}

module.exports = {
  LList: LList,
  find: LList.find,
  remove: LList.remove,
  LLNode: LLNode,
  linkedListHead: linkedListHead,
  LLtail: LLtail,
  LLinsert: LLinsert,
  beforeInsert: beforeInsert,
  afterInsert: afterInsert,
  cities: {
    cities: cities,
    before: before,
    after: after
  }
}
