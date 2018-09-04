console.log("testing 1.. 2...");

// Create a "close" button and append it to each list item
var myNodelist = document.getElementsByClassName("list-group-item");
var i;
for (i = 0; i < myNodelist.length; i++) {
    var btn = document.createElement("button");
    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    btn.className = "close";
    span.appendChild(txt);
    btn.appendChild(span);
    myNodelist[i].appendChild(btn);
}

// Click on a close button to hide the current list item
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
}

// Create a new list item when clicking on the "Add" button
function newElement(event) {
  event.preventDefault();
  var li = document.createElement("li");
  var inputValue = document.getElementById("myInput").value;
  var t = document.createTextNode(inputValue);
  li.className = "list-group-item";
  li.append(t);
  console.log(inputValue);
  if (inputValue === '') {
    alert("You must write something!");
  } else {
    document.getElementsByClassName("list-group")[0].appendChild(li);
  }
  document.getElementById("myInput").value = "";

    var btn = document.createElement("BUTTON");
    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    btn.className = "close";
    span.appendChild(txt);
    btn.appendChild(span);
    myNodelist[i].appendChild(btn);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }
}