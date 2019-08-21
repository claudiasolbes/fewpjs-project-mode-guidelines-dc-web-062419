
function showRecipe(recipe){
  const recipeMain = document.querySelector("main")
  const recipeDiv = document.createElement("div")
  recipeMain.appendChild(recipeDiv)
  recipeDiv.classList.add("cardDiv")
  recipeDiv.innerHTML = `
    <div class="card" style="width: 18rem;">
    <div id= recipe${recipe.id}>
      <img class="card-img-top" src=${recipe.picture} alt="Card image cap">
      <div class="card-body">
        <h5 class="card-title">${recipe.name}</h5>
      </div>
    </div>
      <button id=deleteButton${recipe.id}> Delete </button>
    </div>
    &nbsp;`
  const recipeCardDiv = document.querySelector(`#recipe${recipe.id}`)
  const deleteButton = document.querySelector(`#deleteButton${recipe.id}`)
  deleteButton.addEventListener("click", event => deleteRecipe(recipe, recipeDiv))
  recipeCardDiv.addEventListener('click', event => renderRecipe(recipe))
}

function renderCakes(){
    let node = document.querySelector("main")
    node.innerHTML = ""
    fetch("http://localhost:3000/recipes/filter/cakes")
    .then(response => response.json())
    .then(recipes => recipes.forEach(showRecipe))
    cakesMain = document.querySelector("main")
    const cakesDiv = document.createElement("div")
    cakesDiv.classList.add("category")
    cakesMain.appendChild(cakesDiv)
    const cakesCategory = document.createElement("h3")
    cakesCategory.innerText = "Cakes"
    cakesDiv.appendChild(cakesCategory)
  }

  function renderCupcakes(){
    let node = document.querySelector("main")
    node.innerHTML = ""
    fetch("http://localhost:3000/recipes/filter/cupcakes")
    .then(response => response.json())
    .then(recipes => recipes.forEach(showRecipe))
    cupcakesMain = document.querySelector("main")
    const cupcakesDiv = document.createElement("div")
    cupcakesDiv.classList.add("category")
    cupcakesMain.appendChild(cupcakesDiv)
    const cupcakesCategory = document.createElement("h3")
    cupcakesCategory.innerText = "Cupcakes"
    cupcakesDiv.appendChild(cupcakesCategory)
  }

  function renderCookies(){
    let node = document.querySelector("main")
    node.innerHTML = ""
    fetch("http://localhost:3000/recipes/filter/cookies")
    .then(response => response.json())
    .then(recipes => recipes.forEach(showRecipe))
    cookiesMain = document.querySelector("main")
    const cookiesDiv = document.createElement("div")
    cookiesDiv.classList.add("category")
    cookiesMain.appendChild(cookiesDiv)
    const cookiesCategory = document.createElement("h3")
    cookiesCategory.innerText = "cookies"
    cookiesDiv.appendChild(cookiesCategory)
  }

  function renderOther(){
    let node = document.querySelector("main")
    node.innerHTML = ""
    fetch("http://localhost:3000/recipes/filter/other")
    .then(response => response.json())
    .then(recipes => recipes.forEach(showRecipe))
    otherMain = document.querySelector("main")
    const otherDiv = document.createElement("div")
    otherDiv.classList.add("category")
    otherMain.appendChild(otherDiv)
    const otherCategory = document.createElement("h3")
    otherCategory.innerText = "other"
    otherDiv.appendChild(otherCategory)
  }

  function renderAllDesserts(){
    let node = document.querySelector("main")
    node.innerHTML = ""
    fetch("http://localhost:3000/recipes")
    .then(response => response.json())
    .then(recipes => recipes.forEach(showRecipe))
    dessertsMain = document.querySelector("main")
    const dessertsDiv = document.createElement("div")
    dessertsDiv.classList.add("category")
    dessertsMain.appendChild(dessertsDiv)
    const dessertsCategory = document.createElement("h3")
    dessertsCategory.innerText = "All 3 Ingredient Recipes"
    dessertsDiv.appendChild(dessertsCategory)
  }
