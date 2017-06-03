var colors = ["Blue", "Red", "Orange", "Purple", "Hazel", "Aquamarine", "Periwinkle", "Azure", "Fuchsia", "Chocolate", "Amber", "Amaranth"];
var reindeer = ["Dasher", "Dancer", "Prancer", "Vixen", "Comet", "Cupid", "Donner", "Blitzen"];

var combo = [colors, reindeer];


function addReindeerToHTML(message){
var hohohoElement = document.getElementById("reindeer");

//hohohoElement is a node that points to id "reindeer"
hohohoElement.innerHTML= message;
}

var html = "";

function iterateThroughArrays(combo){
for(var i=0; i<reindeer.length; i++) {
	message = `<div>${colors[i]} ${reindeer[i]}</div>`

	html += message;

}
addReindeerToHTML(html);
}

iterateThroughArrays(combo);




