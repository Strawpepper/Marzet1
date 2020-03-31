function handleGroceryList(item) {
    let addItem = document.getElementById(item).value;
    let list = document.getElementById("list");
    let li = document.createElement("li");
    let itemInList = document.createTextNode(addItem);
    let deleteButton = document.createElement("button");
    let deleteText = document.createTextNode("Delete Item");
    let editButton = document.createElement("button");
    let editText = document.createTextNode("Edit Item");
    let star = document.createElement("span");
    star.className = "fa fa-star";

    editButton.appendChild(editText);
    deleteButton.appendChild(deleteText);
    li.appendChild(itemInList);
    li.appendChild(star);
    li.appendChild(editButton);
    li.appendChild(deleteButton);
    list.appendChild(li);

    deleteButton.onclick = function () {
        li.remove();
    };

    editButton.onclick = function () {
        let edit = prompt("Edit item:");
        li.innerText = edit;
        li.appendChild(star);
        li.appendChild(editButton);
        li.appendChild(deleteButton);
    };

    let checkedOrUnchecked = ["checked", "unchecked"];

    star.onclick = function () {

        if (checkedOrUnchecked[0] === "checked")
            star.className = "fa fa-star checked";
        else
            star.className = "fa fa-star";

        let changeState = checkedOrUnchecked.shift();
        checkedOrUnchecked.push(changeState);
    };
};