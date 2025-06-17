function changeText() {
    var replaceText = document.getElementsByClassName("mini-text");
    replaceText[0].innerHTML = "Scroll untuk melihat";
 
    document.getElementById("icon-up").style.display = "none";
 
    document.getElementById("icon-down").style.display = "block";
 
 }
function changeImage(element) {
    element.setAttribute("src","assets/img2.png")
}

function changeImageBack(element) {
    element.setAttribute("src","assets/img1.png")
}
//List
var myList = document.getElementsByTagName("li");
var i;
for (i= 0; i < myList.length; i++) {
    var span = document.createElement("span");
    span.innerHtml = "x";
    myList[i].appendChild(span).setAttribute("class","close");
}

var close = document.getElementsByClassName("close");
var i;
for (i= 0; i < close.length; i++) {
    close[i].onclick = function() {
        var div = this.parentElement;
        div.style.display = "none"
    }
}
function newElement() {
    var li =document.createElement("li");
    var inputValue = document.getElementById("myInput").value;


if(inputValue === '' || inputValue === ' ') {
    alert("Data tidak boleh kosong!");
} else {
    document.getElementById("myUL").appendChild(li).setAttribute("class", "search-tags-item");
    li.innerHTML = inputValue;
}

document.getElementById("myInput").value ="";

var span = document.createElement("SPAN");
span.innerHTML = "x";
li.appendChild(span).setAttribute("classs", "close");

for(i = 0; i < close.length; i++) {
    close[i].onclick = function() {
         var div = this.parentElement;
         div.style.display = "none"
        }
    }       
}

//button
var btnLike = document.querySelector("#green"); 
var btnDislike = document.querySelector("#red");

if(btnLike) {
  btnLike.onclick = likeColor;
}
if(btnDislike) {
  btnDislike.onclick = dislikeColor;
}

function likeColor() {
  if (btnDislike.classList.contains("red")) {
    btnDislike.classList.remove("red");
  }

  this.classList.toggle("green");
}

function dislikeColor() {
  if (btnLike.classList.contains("green")) {
    btnLike.classList.remove("green");
  }

  this.classList.toggle("red");
}

