//remove DOM node Main

const element = document.getElementById("main"); 
element.remove()

// has a 'newHeader' variable that points to 
// node 'h1#victory'"

const newHeader = document.createElement("h1")
newHeader.setAttribute("id", "victory")

//has a 'newHeader' variable that points to node 
// 'h1#victory' with "YOUR-NAME is the champion" inside
newHeader.textContent = "YOUR-NAME is the champion"

document.body.append(newHeader)


