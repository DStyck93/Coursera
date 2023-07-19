function addTask () {
  var input = document.getElementById("input");
  // get current text from input field
  var newTask = input.value;
  // only add new item to list if some text was entered
  if (newTask != "") {
    // create new HTML list item
    var item = document.createElement("li");
    // add HTML for buttons and new task text
    // Note, need to use '' because of "" in HTML
    item.innerHTML = 
      '<input type="button" class="done" onclick="markDone(this.parentNode)" value="&#x2713;" />' + 
      '<input type="button" class="remove" onclick="remove(this.parentNode)" value="&#x2715;" />' +
      '<input type="button" class="important" onclick="important(this.parentNode)" value="!">' +
      newTask;
    // add new item as part of existing list
    document.getElementById("tasks").appendChild(item);  
    
     /* Step 4 below here */
    input.value = "";
    input.placeholder = "enter next task...";
  }
}

// change styling used for given item
function markDone (item) { 
  if (item.className != "finished") {
    item.className = 'finished';
  } else {
    item.className = "";
  }
    
}

/* Step 7 below here */
function remove (item) {
  // remove item completely from document
  if(item.className == 'finished'){
    item.remove();
  }   
}

function important (item) {
  if (item.className != "isImportant" && item.className !=  "finished") {
    item.className = "isImportant";
  } else if (item.className != "finished"){
    item.className = "";
  }
  
}

/* Step 11 below here */
function doAbout() {
  var div = document.getElementById("divabout");
  if(div.className != "aboutcolor"){
    div.innerHTML = "Author: Dakota Styck";
    div.className = "aboutcolor";
  }
}

/* Step 14 below here */
function clearAbout() {
  var div = document.getElementById("divabout");
  div.innerHTML = "";
  div.className = "";
}