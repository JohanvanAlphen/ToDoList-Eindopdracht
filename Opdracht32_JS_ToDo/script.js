const button = document.getElementById("button");
const mainList = document.getElementById("main-list");
const myText = document.getElementById("myText");


const getCompleteList = async () => {
    document.getElementById("main-list").innerHTML = "";
    const allListItems = await getData();
    allListItems.forEach(todo => createList(todo));
}

const createList = async (todo) => {

    // New Li
    const newLi = document.createElement("li");
    newLi.id = todo._id
    mainList.appendChild(newLi);
    console.log("newLi", newLi);

    // New Text field
    const textInput = document.createElement("input");
    textInput.setAttribute("type", "text");
    textInput.className = "textinput";
    textInput.innerText = myText.value;
    textInput.value = todo.description;
    textInput.id = todo._id;
    newLi.appendChild(textInput);
    textInput.addEventListener("change", updateItem);

    // New Checkbox
    const checkBox = document.createElement("input");
    checkBox.className = "checkbox"
    checkBox.setAttribute("type", "checkbox");
    checkBox.addEventListener("change", updateItem);
    checkBox.addEventListener("change", async (todo) => {
        if (todo.target.checked) {
            textInput.className = "checked";
        }
        else {
            textInput.className = "textinput";
        }
    })
    newLi.appendChild(checkBox);

    // New Delete button
    const delButton = document.createElement("button");
    delButton.innerHTML = "\u2421";
    delButton.id = todo._id;
    delButton.className = "delete-button"
    newLi.appendChild(delButton);
    delButton.addEventListener("click", deleteItem);
}

// Add task (POST)
const addItem = async () => {
    const inputValue = myText.value;
    if (inputValue === "") {
        alert('No entries were made');
    } else {
        myText.value = "";
        await postData(inputValue);
        getCompleteList()
    } console.log("inputValue", inputValue);
}

// Update task (PUT)
const updateItem = async (e) => {
    if (e.target.type == "text") {
        await putData({ _id: e.target.id, description: e.target.value, done: e.target.parentNode.checked });
    }
}

// Delete task (DELETE)
const deleteItem = async (e) => {
    const listItem = e.target.parentNode;
    const li = listItem.parentNode;
    li.removeChild(listItem)

    let idOfClickedItem = e.target.id;
    await deleteData(idOfClickedItem);
}

button.addEventListener("click", addItem);
getCompleteList()

