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
    let editInput = document.createElement("input");

    //Text

    label.innerText = addItem;

    //Setting attributes

    li.className = "list-style";
    star.className = "fa fa-star itemButtons";
    checkbox.type = "checkbox";
    checkbox.className = "checkbox";
    checkbox.id = "checkboxID";
    editButton.className = "fa fa-pencil itemButtons";
    deleteButton.className = "fa fa-times itemButtons";
    editInput.type = "text";

    //Appending 

    li.appendChild(checkbox);
    li.appendChild(label);
    li.appendChild(deleteButton);
    li.appendChild(editButton);
    li.appendChild(star);
    li.appendChild(hr);

    if (addItem === "")
        document.getElementById(itemID).className = "form-control error";
    else {
        list.appendChild(li);
        document.getElementById(itemID).value = "";
        document.getElementById(itemID).className = "form-control";
    }

    // Functions that manipulate items 

    deleteButton.onclick = function () {
        li.remove();
    };

    editButton.onclick = function () {
        // let edit = prompt("Edit item:");
        let save = document.createElement("button");
        save.innerText = "Save";

        li.removeChild(label);
        li.removeChild(checkbox);
        li.appendChild(editInput);
        li.appendChild(save);
        li.appendChild(hr);
        editInput.value = label.innerText;

        save.onclick = function () {
            li.removeChild(editInput);
            li.removeChild(save);
            li.removeChild(hr);

            if (editInput === "")
                alert("Please enter an item");
            else {
                label.innerText = editInput.value;
                li.appendChild(checkbox);
                li.appendChild(label);
                li.appendChild(deleteButton);
                li.appendChild(editButton);
                li.appendChild(star);
                li.appendChild(hr);

            }
        };
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

function saveToPDF() {
    var pdf = new jsPDF('p', 'pt', 'letter');
    pdf.canvas.height = 72 * 11;
    pdf.canvas.width = 72 * 8.5;
    pdf.fromHTML(document.body);
    pdf.save('GroceryListAndToDo.pdf');
};

var element = document.getElementById("clickbind");
element.addEventListener("click", saveToPDF);