//Index html Connection
let myShoppingList = new ShoppingList();
const contentContainer = document.getElementById("content");
const itemName = document.getElementById('itemName');
const description = document.getElementById('description');
let loadButton =document.getElementById('add_shopping_list_item_button');

loadButton.addEventListener('click', add_to_shopping_list);


function add_to_shopping_list() {
  //create a function that will read the val of title and desc fields
  let itemNameBox = itemName.value + ": ";
  let itemDescriptionBox = description.value;

  //create new var new_shopping_list_item
  let new_shopping_list_item = new ShoppingListItem(itemNameBox, itemDescriptionBox);
  myShoppingList.addItem(new_shopping_list_item);
  contentContainer.innerHTML = myShoppingList.render();

  //empty string innerHTML = nameArray
  //will store result of constructing new shoppng list item and passing in val an descr
}