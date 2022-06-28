

// adds an id to each item in the list
function numberListItems() {
    let listItem = document.querySelectorAll('.list-item');
    let listItemArray = Array.from(listItem);

    listItemArray.forEach(function(item , index) {
        index++ 
        item.setAttribute("id",index)

    });
}

function listallListId() {
    let listItem = document.querySelectorAll('.list-item');
    let listItemArray = Array.from(listItem);

    listItemArray.forEach(function(item , index) {
        console.log(item.id)
    });
}
function updateListeners() { 
    // Moving up the list
    document.querySelectorAll('.item-button__moveup').forEach(function(item) {
        item.addEventListener('click', function(e) {
            numberListItems();
            let parent = e.target.parentElement;
            if (parent.previousElementSibling) {
                parent.parentElement.insertBefore(parent, parent.previousElementSibling);
            }
        });
    });


    // Moving down the list
    document.querySelectorAll('.item-button__movedown').forEach(function(item) {
        item.addEventListener('click', function(e) {
            numberListItems();
            let parent = e.target.parentElement;
            if (parent.nextElementSibling) {
                parent.parentElement.insertBefore(parent.nextElementSibling, parent);
            }
        });
    });


    // Removing the list item
    document.querySelectorAll('.item-button__delete').forEach(function(item) {
        item.addEventListener('click', function(e) {
            let parent = e.target.parentElement;
            parent.remove();
            numberListItems();
        });
    })

    // edits the title of the list item
    document.querySelectorAll('.item-button__edit').forEach(function(item) {
        item.addEventListener('click', function(e) {
            let parent = e.target.parentElement.firstElementChild;
            let input = document.createElement('input');
            input.setAttribute('type','text');
            input.setAttribute('value',parent.innerText);
            parent.innerText = '';
            parent.appendChild(input);
            input.focus();
            input.addEventListener('blur', function(e) {
                parent.innerText = input.value;
            }
            );
        }
        );
    }
    );
}
numberListItems(); 
updateListeners(); // updates the listeners when the page loads to make sure they are working



// button when clicked adds a list item from the input
document.querySelector('.add-button').addEventListener('click', function(e) {
    let input = document.querySelector('.input-field');
    let newListItem = document.createElement('li');
    let list = document.querySelector('.list');
    if (input.value) { // checks if the input has a value if not it wont add a list item
        newListItem.classList.add('list-item');
        newListItem.innerHTML = `
        <p class="list-item__title">${input.value}</p> 
        <button class="item-button item-button__edit">Edit</button>
        <button class="item-button item-button__delete">Delete</button> 
        <button class="item-button item-button__moveup">Move Up</button> 
        <button class="item-button item-button__movedown">Move Down</button>`;
        list.appendChild(newListItem);
        input.value = '';
        numberListItems();
        enableDragSort('drag-sort-enable');
        updateListeners();
    }});

// function gets tasks from database
async function getTasks(url){
    const response = await fetch(url);
    var data = await response.json();
    console.log(data);
}

getTasks("http://54.197.13.168:8080/");