var myNodeList;
function addNewTask() {
    var list = document.createElement("li");
    var ol1 = document.getElementById("taskname").value;
    var text = document.createTextNode(ol1);
    list.appendChild(text);
    list.setAttribute("id","listid")
    //Checkbox
    var checkbox = document.createElement("INPUT");
    checkbox.type = "checkbox";
    // Assigning the attributes
    // to created checkbox
    checkbox.type = "checkbox";
    checkbox.name = "name";
    checkbox.value = "value";
    checkbox.id = "idcheck";

    // creating label for checkbox
    var label = document.createElement('label');

    // assigning attributes for
    // the created label tag
    label.htmlFor = "idcheck";

    // appending the created text to
    // the created label tag
    label.appendChild(document.createTextNode('This is the label for checkbox.'));
    list.appendChild(checkbox);
    //Create Delete button
    var button_delete = document.createElement("button")
    var button_text_delete = document.createTextNode("Delete Task")
    button_delete.setAttribute("id", "deleteButton");
    button_delete.setAttribute("class","deleteBtn");
    button_delete.appendChild(button_text_delete);
    var span = document.createElement("SPAN");
    span.className = "close";
    span.appendChild(button_delete);
    list.appendChild(span);
    //Create finished Button
   /* var button_finished = document.createElement("button")
    var button_text_finished = document.createTextNode("Finish Task")
    button_finished.appendChild(button_text_finished)
    list.appendChild(button_finished);*/
    if (ol1 === "" || ol1 === " ") {
        alert("You must enter a task")
    } else {
        document.getElementById("listedinput").appendChild(list);
    }
    document.getElementById("taskname").value = ""

    myNodeList = document.querySelectorAll("li");

    document.getElementById("deleteButton").addEventListener("click", deleteTask());

}

function deleteTask() {
    var close = document.getElementsByClassName("close");
    var i;
    for (i = 0; i < close.length; i++) {
        close[i].onclick = function () {
            var div = this.parentElement;
            div.style.display = "none";
        }
    }
}

function clearall() {
    for (var i = 0; i < myNodeList.length; i++) {
        document.getElementById("listedinput").removeChild(myNodeList[i]);
    }
}
