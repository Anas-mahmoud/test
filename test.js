console.log("start");
var j= document.createElement("div");
j.id = "j"
// Get a reference to the element, before we want to insert the element
var sp1 = document.getElementById("s1");
console.log("sp4");

console.log(sp1);
var sp2 = document.getElementById("s2");

console.log("sp4");

console.log(sp2);
var sp3 = document.getElementById("s3");
console.log("sp4");
console.log(sp3);

var sp4 = document.getElementById("s4");
console.log("sp4");
console.log(sp4);

// Get a reference to the parent element
var parentDiv = sp1.parentNode;
console.log(parentDiv);
// Insert the neparentDiv w element into the DOM before sp2
parentDiv.insertBefore(j, sp1);
console.log(j);
j.appendChild(sp1);
j.appendChild(sp2);
j.appendChild(sp3);
j.appendChild(sp4);
console.log("done");