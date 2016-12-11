/*jshint esversion: 6 */
const should = chai.should();
const expect = chai.expect;

describe('ShoppingListItem', () => {
  let myList;
  beforeEach(() => {
    myList = new ShoppingListItem('cookies', 'the shit i eat when i have the munchies');
  })

  it('should be a class', () => {
    ShoppingListItem.should.be.an.function;
  });


  it('should have a property of name', () => {
  expect(myList).to.have.property('name');

  });

  it('should have a property of description', () => {
  expect(myList).to.have.property('description');
  })

  it('should have a property of is_done', () => {
    expect(myList).to.have.property('is_done');
  })

  it('should have two properties', () => {
    expect(ShoppingListItem).to.have.lengthOf(2);
  })

  it('check should have a method', () => {
    console.log(ShoppingListItem);
    expect(myList.check).to.be.a.function
  })

  it('should set is_done property to true', () => {
    myList.check();
    expect(myList.is_done).to.equal(true)

  })
    it('uncheck should be a method', () => {
    console.log(ShoppingListItem);
    expect(myList.uncheck).to.be.a.function
  })

  it('should set is_done property to false', () => {
    myList.uncheck();
    expect(myList.is_done).to.equal(false)

  })
})