let groceryList = [];

function addItem(item) {
    let addItem = document.getElementById(item).value;
    groceryList.unshift(addItem);
};

function displayItems(id) {
    let list = document.getElementById(id);
    let ul = document.createElement("ul");
    let li = document.createElement("li");

    for (const item of groceryList) {
        li.innerText = item;
        list.appendChild(ul);
        list.appendChild(li);

    }
}