/*jshint esversion: 6 */

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
    if(item instanceof ShoppingListItem){
      if(this.items.indexOf(item)>-1){
        this.items.splice(this.items.indexOf(item),1);
        console.log(`You just crossed off ${item.name} from your list`);
      }else if (this.items.indexOf(item) < 0){
        throw new Error(`Whatchu tryna do? Can't remove ${item.name} if you don't have ${item.name}. You feelin' alright hun?`);
      }
    }else{
      throw new Error(`Whatchu tryna do? ${item.name} isn't even a real choice. Go home, you're drunk`);
    }
    if(item === undefined && this.items.length>0){
        this.items.pop();
      }
  }
  render(){


  }
}