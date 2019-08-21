
function submitForm(){
  let node = document.querySelector("main")
  node.innerHTML = ""
  const submitMain = document.querySelector("main")
  const submitDiv = document.createElement("div")
  submitMain.appendChild(submitDiv)
  submitDiv.classList.add("submitDiv")
  // CHANGE HARD CODED CATEGORY VALUE TO ${VALUE}
  submitDiv.innerHTML = `
    <div class="submitForm">
      <form class="add-recipe-form" style="">
        <h3>Submit a Recipe</h3>
        <br></br>
        <select name="category_id">
        <option>Category</option>
        <option value="37">Cakes</option>
        <option value="38">Cupcakes</option>
        <option value="39">Cookies</option>
        <option value="40">Other</option>
        </select>
        <br></br>
        <input type="text" name="name" value="" placeholder="Name" class="input-text"></input>
        <br></br>
        <input type="text" name="ingredients" value="" placeholder="Ingredients" class="input-text"></input>
        <br></br>
        <input type="text" name="procedure" value="" placeholder="Procedure" class="input-text"></input>
        <br></br>
        <input type="text" name="picture" value="" placeholder="Picture" class="input-text"></input>
        <br></br>
        <input type="submit" name="submit" value="Submit" class="submit"></input>
      </form>
    </div>`
    submitDiv.addEventListener('submit', submitRecipe)
}

function submitRecipe(event){
  event.preventDefault()
  let data = {
    name: event.target["name"].value,
    category_id: event.target["category_id"].value,
    ingredients: event.target["ingredients"].value,
    procedure: event.target["procedure"].value,
    picture: event.target["picture"].value
  }
  fetch("http://localhost:3000/recipes/submit", {
    method: "POST",
    headers: {"Content-Type": "application/json"},
    Accept: "application/json",
    body: JSON.stringify(data)
  })
    .then(res => res.json())
    .then(data => renderRecipe(data))
}