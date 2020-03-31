let groceryList = [];

function handleItems(item) {
    let addItem = document.getElementById(item).value;
    list = document.getElementById("list");
    li = document.createElement("li");
    itemInList = document.createTextNode(addItem);
    deleteButton = document.createElement("button");
    deleteText = document.createTextNode("Delete Item");
    editButton = document.createElement("button");
    editText = document.createTextNode("Edit Item");

    editButton.appendChild(editText);
    deleteButton.appendChild(deleteText);
    li.appendChild(itemInList);
    li.appendChild(editButton);
    li.appendChild(deleteButton);
    list.appendChild(li);

    deleteButton.onclick = function () {
        li.remove();
    };

    editButton.onclick = function () {
        let edit = prompt("Edit item");
        li.innerText = edit;
        li.appendChild(editButton);
        li.appendChild(deleteButton);
    };


};