'use strict'

var NodeObj = {}
var constr = {}

/**
* Creates the nodes that
* make up the linked list
*
* @param element
*/

NodeObj.Node = function (element) {
  this.element = element
  this.next = null
}

/**
* Creates the linked list object
* which provides behavior to the nodes
*/

constr.LinkedList = function () {
  this.head = new NodeObj.Node("head")
  this.find = constr.find
  this.insert = constr.insert
  this.remove = constr.remove
  this.display = constr.display
  this.findPrevious = constr.findPrevious
}

/**
* filters through nodes
* by comparing the item you pass
* to the content in the node
*
* @param content to find
* @return current node
*/

constr.find = function (item) {
  var currNode = this.head
  while (currNode.element != item) {
    currNode = currNode.next
  }
 return currNode
}

/**
* Inserts a node by specifying
* which node you want to insert it after,
* finding that node and then setting the
* current nodes pointer to the next
* and make the new node point to the next node
*
* @param item: to help find node to insert after
* @param element: new node content
*/

constr.insert = function (newElement, item) {
  var newNode = new NodeObj.Node(newElement)
  var current = this.find(item)
  newNode.next = current.next
  current.next = newNode
}

/**
* Finds the node previous to
* the one you want to remove
*
* @param item: helps to find node
* @return previous node
*/

constr.findPrevious = function(item) {
  var currNode = this.head;
  while (!(currNode.next == null) && (currNode.next.element != item)) {
    currNode = currNode.next;
  }
  return currNode;
}

/**
* Removes the node by pointing the
* previous nodes next to the node that
* is after the node you want to remvoe
*
* @param item: helps to find node
*/

constr.remove = function (item) {
  var prevNode = this.findPrevious(item);
  if (!(prevNode.next == null)) {
    prevNode.next = prevNode.next.next;
  }
}

/**
* Iterates over the linked list
* and prints the current element
*
* @return void
*/

constr.display = function () {
  var currNode = this.head
  while (!(currNode.next == null)) {
    console.log(currNode.next.element)
    currNode = currNode.next
   }
}

var sourceCode = {
  node: NodeObj,
  constr: constr
}

module.exports = sourceCode
