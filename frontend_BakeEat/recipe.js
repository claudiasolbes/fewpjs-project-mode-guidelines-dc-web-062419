
function renderRecipe(recipe){
  let node = document.querySelector("main")
  node.innerHTML = ""
  const recipeMain = document.querySelector("main")
  const recipeDiv = document.createElement("div")
  recipeDiv.classList.add("recipe")
  recipeMain.appendChild(recipeDiv)
  const recipeH3 = document.createElement("h3")
  recipeH3.innerText = recipe.name
  recipeDiv.appendChild(recipeH3)
  const recipePicture = document.createElement("img")
  recipePicture.src = recipe.picture
  recipeDiv.appendChild(recipePicture)
  const recipeIngredients = document.createElement("p")
  recipeIngredients.classList.add("ingredients")
  recipeIngredients.innerText = `Ingredients: ${recipe.ingredients}`
  recipeDiv.appendChild(recipeIngredients)
  const recipeProcedure = document.createElement("p")
  recipeProcedure.innerText = `Procedure: ${recipe.procedure}`
  recipeDiv.appendChild(recipeProcedure)
  recipeReviewsDiv = document.createElement("div")
  fetch(`http://localhost:3000/reviews/${recipe.id}`)
  .then(response => response.json())
  .then(reviews => renderReviews(reviews, recipeDiv, recipe))
}

function singleReviews(reviews){
  const reviewsArray = reviews.map(function(review){
    return review.content
  })
  return reviewsArray
}

function renderReviews(reviews, recipeDiv, recipe){
  singleReviews(reviews)
  recipeReviewsUl = document.createElement("ul")
  recipeReviewsUl.innerText = `Reviews: `
  recipeDiv.appendChild(recipeReviewsUl)
  recipeReviewsLi = document.createElement("li")
  recipeReviewsUl.appendChild(recipeReviewsLi)
  recipeReviewsLi.innerText = `${singleReviews(reviews)}`
  recipeDiv.appendChild(recipeReviewsDiv)
  const addReviewButton = document.createElement("button")
  addReviewButton.id = "addReviewButton"
  addReviewButton.innerText = "Add Review"
  recipeReviewsDiv.appendChild(addReviewButton)
  addReviewButton.addEventListener("click", event => addReviewForm(recipe))
}
