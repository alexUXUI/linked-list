'use strict'

/**
 * @const testing frameworks
 */

const chai = require (`chai`)
const expect = require(`chai`).expect
const assert = require(`chai`).assert
const chaiSubset = require(`chai-subset`)

chai.use(chaiSubset)

/**
 * @const source code
 * @const fixture paths
 */

const node = require("../src/linkedList.js").node
const constr = require("../src/linkedList.js").constr
const LLfixturePath = "./fixtures/linkedList.fixture.js"
const NodefixturePath = "./fixtures/node.fixture.js"

/**
 * @param fixtures for testing the node class
 *
 * Tests the implementation
 * of the node class
 */

describe(`Node Object testing suite: `, () => {

  var LL = require(NodefixturePath).LLobj
  var nextTest = require(NodefixturePath).nextTest

 /**
   * Tests to make sure that the node
   * has an element to contain information
   */

  it('should have an element', () => {
    let nodeTest = new node.Node(3)
    assert.isObject(node)
    expect(nodeTest).to.deep.equal({
      element: 3,
      next: null
    })
  })

/**
  * Tests to make sure that the node
  * has an next attirbute
  */

  it('should have a next', () => {
    var shouldHaveNext = LL.find("node 1")
    var shouldHaveNextContent = shouldHaveNext.element
    var hasNext = shouldHaveNext.next
    expect(hasNext.next).to.not.equal(null)
  })

/**
  * Tests to make sure that the
  * tail node points to null
  */

  it('should have a tail that points to null', () => {
    var shouldNotHaveNext = LL.find("node 2")
    var shouldNotHaveNextContent = shouldNotHaveNext.element
    var hasNext = shouldNotHaveNext.next
    expect(hasNext.next).to.equal(null)
  })

})

/**
 * Tests the implementation
 * of the Linked list object
 *
 * @param fixtures for testing the node class
 */

describe(`Linked list testing suite: `, () => {

  var fixture = require(LLfixturePath).LList
  var find = require(LLfixturePath).find

  /**
   * Tests the linked list head node
   *
   * @param linkedListHead for testing the head node
   */

  it('should have a head', () => {
    const linkedListHead = require(LLfixturePath).linkedListHead
    var findHead = fixture.find('data 1')

    expect(findHead).to.containSubset(linkedListHead)
    assert.isObject(findHead)
  })

  /**
   * Tests the linked list tail node
   *
   * @param LLtail for testing the tail node
   */

  it('should have a tail that points to null', () => {
    const tail = require(LLfixturePath).LLtail
    let tailNode = tail.find("fourth node")
    let nextAfterTail = tailNode.next

    expect(tail).to.containSubset(tail)
    expect(nextAfterTail).to.equal(null)
    assert.isObject(tail)
  })

  /**
   * Tests the linked list find function
   */

  it('should provide find functionality', () => {
    var findData = fixture.find("data 1")
    expect(findData).to.equal(findData)
  })

  /**
   * Tests the linked insert function
   */

  it('should provide insert functionality', () => {
    const insert = require(LLfixturePath).LLinsert
    const beforeInsert = require(LLfixturePath).beforeInsert
    const afterInsert = require(LLfixturePath).afterInsert

    expect(beforeInsert).to.not.equal(afterInsert)
    expect(afterInsert).to.not.deep.equal(beforeInsert)
    insert.insert("second content", "head content")
    expect(afterInsert).to.equal(afterInsert)
  })

  /**
   * Tests the linked remove function
   */

  it('should provide remove functionality', () => {
    const cities = require(LLfixturePath).cities.cities
    const before = require(LLfixturePath).cities.before
    const after = require(LLfixturePath).cities.after

    var beforeRemove = cities.find("Conway")
    var afterRemvoe = cities.find("Conway")

    expect(beforeRemove).to.deep.equal(before)
    cities.remove("Russellville")
    expect(afterRemvoe).to.deep.equal(after)
  })

})
