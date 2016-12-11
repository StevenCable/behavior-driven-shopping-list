/*jshint esversion: 6 */

class ShoppingListItem {
  constructor(name, description) {
    this.name = name;
    this.decription = description;
    this.is_done = false;
  }
  check(){
    is_done = true;
  }
  uncheck(){
    is_done = false;
  }
  render(){
    return `li class="completed_${is_done}"><<span>${this.name}</span> <span>${this.description}</span></li>`;
   }

}

<<<<<<< HEAD
class ShoppingList{
  constructor(){
    this.items = [];

  }

  addItem(item){
    if(item instanceof ShoppingListItem){
      this.items.push(item);
    }else{
      throw new Error("Uh-Oh Spaghetti-Ohs! You tried to add something that shouldn't be added");
    }
  }
  removeItem(item){
    if(this.items.indexOf(item)>-1){
      this.items.splice(item.indexOf(this.items),1);
      console.log(`You just crossed off ${item} from your list`);
    }
    if(item === null && this.items[0] !== null){
      this.items.pop();
    }
  }
}
=======
>>>>>>> 4fda373821013a614f1a7dff734dc8f80c44a067
