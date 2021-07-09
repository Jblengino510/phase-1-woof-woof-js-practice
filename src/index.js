const baseURL = 'http://localhost:3000/pups'

//DOM Selectors

const pupBar = document.querySelector('#dog-bar')
const pupInfo = document.querySelector('#dog-info')
const filterBtn = document.querySelector('#good-dog-filter')

//Fetches

function fetchAllPups(){
    fetch(baseURL)
    .then(res => res.json())
    .then(renderAllInBar)
}

function fetchOnePup(id){
    return fetch(baseURL + `/${id}`)
    .then(res => res.json())
}

//Rendering

function renderAllInBar(pupsArray){
    pupBar.innerHTML = ''
    pupsArray.forEach(addOnePupToBar)
}

function addOnePupToBar(pupObj){
    const pupSpan = document.createElement('span')
    
    pupSpan.innerText = pupObj.name
    pupSpan.dataset.id = pupObj.id
    pupSpan.addEventListener('click', spanClick)

    pupBar.append(pupSpan)
}

function showOnePup(pupObj){
    console.log(pupObj)
    pupInfo.innerHTML = ''
    const pupDiv = document.createElement('div')
    pupDiv.innerHTML = `
    <img src=${pupObj.image}>
  <h2>${pupObj.name}</h2>
    `
    const pupBtn = document.createElement('button')

    pupBtn.textContent = ((pupObj.isGoodDog) ? 'Good Dog' : 'Bad Dog')
    pupBtn.addEventListener('click', () => togglePupBtn(pupBtn))
    pupDiv.append(pupBtn)
    pupInfo.append(pupDiv)

}

//Event Handlers

function spanClick(event){
    const id = event.target.dataset.id
    fetchOnePup(id).then(showOnePup)
}

function togglePupBtn(pupButton){
    pupButton.textContent = pupButton.textContent.includes('Good') ? 'Bad Dog' : 'Good Dog'
}

//Initialize
fetchAllPups()



   
   
   
   
   
   
   
   
   
   
