let myDiv = document.querySelector(".our-element");
let myP = document.getElementsByTagName("p");

//Delete Paragraph 
myP[0].remove();

//Create Cope of Div
let myFirCopy = myDiv.cloneNode();
let mySecCopy = myDiv.cloneNode();

//Add Our New Div before and after orginal div
myDiv.before(myFirCopy);
myDiv.after(mySecCopy);

//Get New Div
let divOne = document.getElementsByTagName("div")[0];
let divTwo = document.getElementsByTagName("div")[2];

//Set First Div
let txtOne = document.createTextNode("Start");
divOne.appendChild(txtOne);
divOne.setAttribute("class", "start");
divOne.setAttribute("title", "Start Element");
divOne.setAttribute("data-value", "Start");

//Set Second Div
let txtTwo = document.createTextNode("End");
divTwo.appendChild(txtTwo);
divTwo.setAttribute("class", "end");
divTwo.setAttribute("title", "End Element");
divTwo.setAttribute("dtat-value", "End")
