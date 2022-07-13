function addItem(){
    let ul = document.getElementById("list");
    let item = document.getElementById("item");
    let li = document.createElement("li");
    li.setAttribute('id',item.value);
    li.appendChild(document.createTextNode(item.value));
    ul.appendChild(li);
}

function removeItem(){
    let ul = document.getElementById("list");
    let item = document.getElementById("item");
    let remove = document.getElementById(item.value);
    ul.removeChild(remove);
}
