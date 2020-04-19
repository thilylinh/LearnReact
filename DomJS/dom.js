function getTodo() {
    let todo = [];
    if (localStorage.getItem('todos') === null) {
        todo = [];
    } else {
        todo = JSON.parse(localStorage.getItem('todos'));
    }
    return todo;
}

function addTodo(todo) {
    let todos = getTodo();
    todos.push(todo);
    localStorage.setItem('todos', JSON.stringify(todos))
}

document.addEventListener('DOMContentLoaded', () => {
    getTodo().map((todo) => {
        var li = document.createElement("li");
        let value = todo;
        li.className = "li-todo";
        var t = document.createTextNode(value);
        //append close button
        var span = document.createElement("span");
        var txt = document.createTextNode("X");
        span.className = "close";
        span.appendChild(txt);
        li.appendChild(t);
        li.appendChild(span);
        document.getElementById("UL").appendChild(li);

        // Click on a close button to hide the current list item
        close();
        //checked
        checked();
    })
});
//close 
function close() {
    var close = document.getElementsByClassName("close");
    var i;
    for (i = 0; i < close.length; i++) {
        close[i].onclick = function() {
            var div = this.parentElement;
            div.style.display = "none";
            var liDone = document.createElement("li");
            getTodo().map((toto))
        }
    }

}

// Add a "checked" symbol when clicking on a list item
function checked() {
    var list = document.getElementsByTagName('li');
    for (let i = 0; i < list.length; i++) {
        list[i].onclick = (ev) => {
            ev.target.classList.toggle('checked');
        }
    }
}


// Create a new list item when clicking on the "Add" button
function newElement() {

    let li = document.createElement("li");
    var inputValue = document.getElementById("inputText").value;
    // var t = document.createTextNode(inputValue);
    // li.appendChild(t);
    if (inputValue === '') {
        alert("Please write somthing!");
    } else {
        addTodo(inputValue);

    }
    document.getElementById("inputText").value = "";
    location.reload();
}