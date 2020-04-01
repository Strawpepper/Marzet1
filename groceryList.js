function handleList(itemID, listID, doneListID) {
    let addItem = document.getElementById(itemID).value;
    let list = document.getElementById(listID);
    let doneList = document.getElementById(doneListID);

    //Creating elements

    let li = document.createElement("li");
    let label = document.createElement("label");
    let deleteButton = document.createElement("span");
    let editButton = document.createElement("span");
    let star = document.createElement("span");
    let hr = document.createElement("hr");
    let checkbox = document.createElement("input");

    //Text

    label.innerText = addItem;

    //Setting attributes

    li.className = "list-style";
    star.className = "fa fa-star itemButtons";
    checkbox.type = "checkbox";
    checkbox.className = "checkbox";
    checkbox.id = "cb";
    editButton.className = "fa fa-pencil itemButtons";
    deleteButton.className = "fa fa-times itemButtons";

    //Appending 
    li.appendChild(checkbox);
    li.appendChild(label);
    li.appendChild(deleteButton);
    li.appendChild(editButton);
    li.appendChild(star);
    li.appendChild(hr);

    if (addItem === "")
        alert("Please enter an item");
    else
        list.appendChild(li);


    deleteButton.onclick = function () {
        li.remove();
    };

    // editButton.onclick = function () {
    //     var listItem = li;

    //     var editInput = li.querySelector('input[type=text]');
    //     var label = li.querySelector("label");
    //     var containsClass = li.classList.contains("editMode");
    //     //If class of the parent is .editmode
    //     if (containsClass) {

    //         //switch to .editmode
    //         //label becomes the inputs value.
    //         label.innerText = editInput.value;
    //     } else {
    //         editInput.value = label.innerText;
    //     }

    //     //toggle .editmode on the parent.
    //     listItem.classList.toggle("editMode");
    // };

    editButton.onclick = function () {
        let edit = prompt("Edit item:");

        if (edit === "")
            alert("Please enter an item");
        else {
            label.innerText = edit;
            li.appendChild(checkbox);
            li.appendChild(label);
            li.appendChild(deleteButton);
            li.appendChild(editButton);
            li.appendChild(star);
            li.appendChild(hr);
        }
    };

    let checkedOrUnchecked = ["checked", "unchecked"];

    star.onclick = function () {
        if (checkedOrUnchecked[0] === "checked")
            star.className = "fa fa-star checked itemButtons";
        else
            star.className = "fa fa-star itemButtons";

        let changeState = checkedOrUnchecked.shift();
        checkedOrUnchecked.push(changeState);
    };


    checkbox.onclick = function () {
        let doneItem = li;
        let checkbox = document.getElementById("cb");

        if (checkbox.checked) {
            doneItem.className = "doneItems";
            doneList.appendChild(doneItem);
        }
        else {
            doneItem.className = "list-style";
            list.appendChild(doneItem);
        }
    };
};

function print(id) {
    var objFra = document.getElementById(id);
    objFra.contentWindow.focus();
    objFra.contentWindow.print();
}