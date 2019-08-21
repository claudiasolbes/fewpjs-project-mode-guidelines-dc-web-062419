
function deleteRecipe(recipe, recipeDiv){
  recipeDiv.remove()
  fetch(`http://localhost:3000/recipes/${recipe.id}`, {
    method: "DELETE",
  })
    .then(res => res.json())
    .then(() => recipeDiv.remove())
}