const main = document.getElementById('main')
const createBtn = document.getElementById('createArrayBtn')
const visDiv = document.getElementById('visualize')
let newArray = [1,2,3,4,5,6,7,8,9,10]


createBtn.onclick = displayArray


function displayArray() {
    newArray.sort(() => 0.5 - Math.random());
    visDiv.innerHTML = ""
    newArray.forEach(element => {  
        const newDiv = document.createElement('div')
        newDiv.id = element
        newDiv.className = "newDiv"
        newDiv.innerHTML = element
        newDiv.style.height = element*30 + "px"
        visDiv.append(newDiv)
    });
}