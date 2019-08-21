function addReviewForm(recipe){
  let node = document.querySelector("main")
    node.innerHTML = ""
    const submitReviewMain = document.querySelector("main")
    const submitReviewDiv = document.createElement("div")
    submitReviewMain.appendChild(submitReviewDiv)
    submitReviewDiv.classList.add("submitReviewDiv")
    submitReviewDiv.innerHTML = `
      <div class="submitReviewForm">
        <form class="add-review-form" style="">
          <h3>Submit a Review</h3>
          <br></br>
          <h6>Recipe</h6>
          <input type="text" name="recipe" value="" placeholder="${recipe.name}" class="input-text" readonly></input>
          <input type="hidden" name="recipe_id" value="${recipe.id}" placeholder="" class="input-text" readonly></input>
          <br></br>
          <h6>Review</h6>
          <input type="text" name="content" value="" placeholder="Type your review here" class="input-text"></input>
          <br></br>
          <input type="submit" name="submit" value="Submit" class="submit"></input>
        </form>
      </div>`
      submitReviewDiv.addEventListener('submit', event => addReview(event, recipe))
  }

  function addReview(event, recipe){
    event.preventDefault()
    let data = {
      content: event.target["content"].value,
      recipe_id: event.target["recipe_id"].value,
    }
    fetch("http://localhost:3000/reviews/submit", {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      Accept: "application/json",
      body: JSON.stringify(data)
    })
      .then(res => res.json())
      renderHome()
  }