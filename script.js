var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
const clearAllBtn = document.getElementById('clear-list');

ul.addEventListener('click', updateList);
clearAllBtn.addEventListener('click', clearList)

function inputLength() {
	return input.value.length;
}

function updateList(e) {
	const target = e.target;
	if(target.tagName === 'SPAN') {
		target.classList.toggle('done');
	} else if(target.tagName === 'BUTTON') {
		target.parentElement.classList.add("animated");
		target.parentElement.classList.add("rollOut")
		setTimeout(function(){
			target.parentElement.remove();
			target.parentElement.classList.remove("animated");
			target.parentElement.classList.remove("rollOut")
		}, 500)
		
	}
}

function clearList() {
	if (ul.innerHTML != '') {
		if(confirm('Remove all items from list?')) {
				ul.classList.add("animated");
				ul.classList.add("fadeOut");
				setTimeout(function(){
					ul.innerHTML = '';
					ul.classList.remove("animated");
					ul.classList.remove("fadeOut");	
				}, 500);
		}
	}
		
}

function createListElement() {
	var li = document.createElement("li");
	li.innerHTML = '<span>'+ input.value + '</span><button class="remove-button btn btn-danger btn-sm auto-lm">Remove</button>';
	ul.appendChild(li);
	li.classList.add("list-group-item");
	li.classList.add("animated");
	li.classList.add("tada");
	input.value = "";
}


function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();	
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);

