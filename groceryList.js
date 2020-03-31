let groceryList = [];

function addItem(item) {
    let addItem = document.getElementById(item).value;
    groceryList.unshift(addItem);

    displayItems();
};

function displayItems() {
    let list = document.getElementById("list");
    let li = document.createElement("li");
    let itemInList;

    for (const item of groceryList) {
        itemInList = document.createTextNode(item);
        li.appendChild(itemInList);
    }

    list.appendChild(li);
}