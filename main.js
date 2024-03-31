function Add(item){
    alert("NIGA!");
}

let text = document.getElementsByTagName("a");
for (let i = 0; i < text.length; i++){
    text[i].setAttribute("draggable", false);
    //console.log("Made " + text[i] + " non-draggable.");
}