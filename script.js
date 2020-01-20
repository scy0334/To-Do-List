var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");

//Function that deletes list//
function deleteList(){
	var List = this.parentNode;
	List.remove();
}

//Adding delete button to the existing list//
var x = document.querySelectorAll("li");
var i;
for (i = 0; i < x.length; i++){
	var del = document.createElement("button");
	del.innerHTML = "Delete";
	del.addEventListener("click", deleteList);
	x[i].appendChild(del);
}

//Function that creates List with Delete Button//
function createListElement() {
	var li = document.createElement("li");
	var del = document.createElement("button");
	del.innerHTML = "Delete";
	del.addEventListener("click", deleteList);
	li.appendChild(document.createTextNode(input.value));
	li.appendChild(del);
	ul.appendChild(li);
	input.value = "";
}

//Function that shows the length of input value//
function inputLength() {
	return input.value.length;
}

//Function that creates list if input value is more than 0//

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

//Adding event listener so that if input value is typed and "submit" button is clicked, it creates list//
button.addEventListener("click", addListAfterClick);


//Function that add list after "return" or "enter" keypress//
function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

//Adding event listener so that if input value is typed and "return" or "enter" key is pressed, it creates list//
input.addEventListener("keypress", addListAfterKeypress);


//Function that toggles "done" class on and off//
function toggleClassDoneOnAndOff(event) {
	if (event.target.tagName === "LI"){
		event.target.classList.toggle("done");
	}
}
ul.addEventListener("click", toggleClassDoneOnAndOff);