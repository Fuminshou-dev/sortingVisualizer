// import { mergeSort, mergeSortHelper } from "./mergeSort"


const main = document.getElementById('main')
const createBtn = document.getElementById('createArrayBtn')
const visDiv = document.getElementById('visualize')
const mergeBtn = document.getElementById('mergeBTN')
let sortedArr = []
let newArray = []


createBtn.onclick = displayArray
// mergeBtn.onclick = mergeSort

function displayMerged() {
    visDiv.innerHTML = ""
    sortedArr.forEach(element => {
        const newDiv = document.createElement('div')
        newDiv.id = element
        newDiv.className = "newDiv"
        newDiv.innerHTML = ''
        newDiv.style.height = element*300 + "%"
        visDiv.append(newDiv)
    })
}

function displayArray() {
    visDiv.innerHTML = ""
    newArray = []

    for (let i = 1; i < 101; i++) {
        newArray.push(i)
    }

    
    newArray.sort(() => 0.5 - Math.random());
    console.log(newArray.length / 2)
    newArray.forEach(element => {  
        const newDiv = document.createElement('div')
        newDiv.id = element
        newDiv.className = "newDiv"
        newDiv.innerHTML = ''
        newDiv.style.height = element*300 + "%"
        visDiv.append(newDiv)
    });
    // console.log(newArray)
    return newArray

}


