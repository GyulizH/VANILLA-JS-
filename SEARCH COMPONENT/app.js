function debounce(func, wait = 100) {
    let timeout;
    return function (...args) {
        clearTimeout(timeout);
        timeout = setTimeout(() => {
            func.apply(this, args);
        }, wait);
    };
}

let toBeShownCount = 0
let allResults
function showAllImagesByBreed(){
    const searchInput = document.querySelector(".search-field").value
   if(searchInput.length>0) displayImages(searchInput)
    else{
       document.querySelector(".list-container").style.visibility = "hidden"
       document.querySelector(".list-container").innerHTML = ``
   }
}

function displayImages(input){
    fetch(`https://dog.ceo/api/breed/${input}/images`)
        .then(response => response.json())
        .then(data => {
            hideLoadingIndicator()
            if(data.status === 'error'){
                //setTimeout(() => displayError(data.message),1000)// can i use settimeout inside fetch
                displayError(data.message)
            }else if(data.status === 'success'){
                hideError()
                allResults = data.message
                showAllImages(allResults)
            }
        })
        .catch(error => console.log(error))
}

const loadingIndicator = document.querySelector(".loading")

function showLoadingIndicator(){
    document.querySelector(".list-container").style.visibility = "visible"
    loadingIndicator.classList.add("display")
}

function hideLoadingIndicator(){
    document.querySelector(".list-container").style.visibility = "visible"
    loadingIndicator.classList.remove("display")
}

function displayError(message){
    document.querySelector(".list-container").style.visibility = "visible"
    document.querySelector(".list-container").innerHTML = `<div>Error: ${message}</div>`
}

function hideError(){
    document.querySelector(".list-container").style.visibility = "visible"
    document.querySelector(".list-container").innerHTML = ``
}

function showAllImages(list){
    for(let el of list){
        toBeShownCount++
        let listItem = document.createElement("div")
        listItem.innerHTML = `<img src='${el}'/>`
        document.querySelector(".list-container").appendChild(listItem)
        if(toBeShownCount === 10) break
    }
}

function addListContainer(){
    let listContainer = document.createElement('div')
    listContainer.classList.add("list-container")
    listContainer.innerHTML = `
            <div class="loading">Loading...</div>
    `
    document.querySelector(".container").appendChild(listContainer)
}

function addList(){
    document.querySelector(".list-container").classList.add("searchResults")
}

function removeList(){
    if(document.querySelector(".search-field").value.length === 0){
        document.querySelector(".list-container").classList.remove("searchResults")
    }
}

//document.querySelector(".search-field").addEventListener("keyup",addListContainer)
document.querySelector(".search-field").addEventListener("keyup",addList)
document.querySelector(".search-field").addEventListener("keyup",removeList)
document.querySelector(".search-field").addEventListener("keyup",showLoadingIndicator)
document.querySelector(".search-field").addEventListener("keyup", debounce(showAllImagesByBreed, 300))