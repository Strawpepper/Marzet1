function handleItems(item) {
    let addItem = document.getElementById(item).value;
    let list = document.getElementById("list");
    let li = document.createElement("li");
    let itemInList = document.createTextNode(addItem);
    let deleteButton = document.createElement("button");
    let deleteText = document.createTextNode("Delete Item");
    let editButton = document.createElement("button");
    let editText = document.createTextNode("Edit Item");

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
        let edit = prompt("Edit item:");
        li.innerText = edit;
        li.appendChild(editButton);
        li.appendChild(deleteButton);
    };
};