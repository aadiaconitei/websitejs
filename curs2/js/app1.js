// 1 - Selectati sectiunea cu id="container" 

document.getElementById("container");

// 2 - Selectati sectiunea cu id="container"  folosind querySelector.

document.querySelector("#container");

// 3 - Selectati elementele HTMl cu class = "second".

document.getElementsByClassName("second");

    // sau

document.querySelectorAll(".second");

// 4 - Selectati elementele HTMl cu class ="third", dar doar din elementul ol.

document.querySelector("ol .third");

// 5 - In sectiunea cu id= "container" afisati  "Salut!".

var foundDiv = document.getElementById("container");
//foundDiv.innerText = 'Salut!';

// 6 - Pentru elementul HTML cu class="footer" mai adaugati clasa "main".

var footer = document.querySelector(".footer");
footer.classList.add("main");

    // sau

//footer.className += "main";

// 7 - Stergeti clasa main adaugata la ex. 6.

var footer = document.querySelector(".footer");
//footer.classList.remove("main");

// 8 - Creati un nou element li.

var newLi = document.createElement("li");

// 9 - Pentru elementul creat la ex. 8 adaugati textul  "four".

newLi.innerText = "four"

// 10 - Adaugati un element li in tag-ul ul

var list = document.querySelector("#container ul");
list.appendChild(newLi);

// 11 - Setati  background ="green" pentru toate elementele li din ol.

var liInsideOl = document.querySelectorAll("ol li");
for(var i = 0; i < liInsideOl.length; i++){
    liInsideOl[i].style.backgroundColor = "green";
}

// 12 - Stergeti elementul cu class ="footer".

var footer = document.querySelector(".footer");
//footer.remove();