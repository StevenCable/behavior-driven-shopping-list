/*jshint esversion: 6 */
const should = chai.should();
const expect = chai.expect;

let cookies;
let myList;

  beforeEach(() => {
    cookies = new ShoppingListItem('cookies', 'the shit i eat when i have the munchies');
  });
describe('ShoppingListItem', () => {
  
  it('should be a class', () => {
    ShoppingListItem.should.be.an.function;
  });

  it('should have a property of name', () => {
  expect(cookies).to.have.property('name');

  });

  it('should have a property of description', () => {
  expect(cookies).to.have.property('description');
  });

  it('should have a property of is_done', () => {
    expect(cookies).to.have.property('is_done');
  });

  it('should have two properties', () => {
    expect(ShoppingListItem).to.have.lengthOf(2);
  });


  describe('Check', () => {
    it('check should have a method', () => {
      console.log(ShoppingListItem);
      expect(cookies.check).to.be.a.function
    });

    it('should set is_done property to true', () => {
      cookies.check();
      expect(cookies.is_done).to.equal(true);

    });
  });

  describe('unCheck', () => {
      it('uncheck should be a method', () => {
      console.log(ShoppingListItem);
      expect(cookies.uncheck).to.be.a.function
    });

    it('should set is_done/ property to false', () => {
      cookies.uncheck();
      expect(cookies.is_done).to.equal(false);

    });

    it('should have a method named render', () => {

    });
  });

  describe('render', () => {
    it('render should be a function', () => {
      cookies.render.should.be.a.function
    });
    it('render should return a string', () => {
      cookies.render().should.be.a.string
    });
  });
});

beforeEach(() => {
  myList = new ShoppingList();
});

describe('ShoppingList', () => {
  it('ShoppingList should be a Class', () =>{
    ShoppingList.should.be.a.function
  });

  it('should have a property called items', ()=>{
    myList.should.have.property('items');
  });

describe('addItem', () => {
  it('should have a method called addItems', () =>{
    myList.addItem.should.be.a.function
  });

  it('item should be an instance of Shopping ListItem', () => {
    myList.addItem instanceof ShoppingListItem;
  });
});

describe('removeItem', () => {
  it('should have a method called removeItem', () =>{
    myList.removeItem.should.be.a.function
  });

  it('item should be an instance of ShoppingListItem', () =>{
    myList.removeItem.prototype  instanceof ShoppingListItem
  });

  it('should have a method called render', () =>{
    myList.render.should.be.a.function
  });

  it('render should return a string', () => {
    myList.render().should.be.a.string
  });
});

});