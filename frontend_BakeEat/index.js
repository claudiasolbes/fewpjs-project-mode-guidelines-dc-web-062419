document.addEventListener('DOMContentLoaded', function(){
  console.log('Dom is loaded')
  selectElements()
})

function selectElements(){
  const homeNavBar = document.getElementById("home")
  const cakesDropDown = document.getElementById("cakes")
  const cupcakesDropDown = document.getElementById("cupcakes")
  const cookiesDropDown = document.getElementById("cookies")
  const otherDropDown = document.getElementById("other")
  const allDessertsDropDown = document.getElementById("allDesserts")
  const submitRecipeNavBar = document.getElementById("submit")
  const myCakes = document.getElementById("myCakes")
  homeNavBar.addEventListener("click", renderHome)
  cakesDropDown.addEventListener("click", renderCakes)
  cupcakesDropDown.addEventListener("click", renderCupcakes)
  cookiesDropDown.addEventListener("click", renderCookies)
  otherDropDown.addEventListener("click", renderOther)
  allDessertsDropDown.addEventListener("click", renderAllDesserts)
  submitRecipeNavBar.addEventListener("click", submitForm)
  myCakes.addEventListener("click", showMyCakes)
}

function renderHome(){
  const homePageMain = document.querySelector("main")
  homePageMain.innerHTML = `
  <div id="pictures">
    <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
      <ol class="carousel-indicators">
        <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
      </ol>
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img class="d-block w-100" src="https://images.britcdn.com/wp-content/uploads/2016/12/3-minute-3-ingredient-peanut-butter-fudge-645x739.png?w=1000&auto=format&q=50" alt="First slide">
          <div class="carousel-caption d-none d-md-block">
            <h1>Peanut Butter Fudge</h1>
              <p>...</p>
          </div>
        </div>
        <div class="carousel-item">
          <img class="d-block w-100" src="https://www.garnishwithlemon.com/wp-content/uploads/2014/11/Rolo-Pretzel-Truffles-2-of-2.jpg" alt="Second slide">
        <div class="carousel-caption d-none d-md-block">
          <h1>Rolo Pretzel Turtles</h1>
            <p>...</p>
        </div>
        </div>
        <div class="carousel-item">
          <img class="d-block w-100" src="https://images.britcdn.com/wp-content/uploads/2016/12/3-Ingredient-Peanut-Butter-cookies-are-so-easy-to-make1-e1448370551240-645x968.jpg?w=1000&auto=format&q=50" alt="Third slide">
        <div class="carousel-caption d-none d-md-block">
          <h1>Flourless Peanut Butter Cookies</h1>
            <p>...</p>
        </div>
          </div>
        </div>
        <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
        </a>
        <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
        </a>
      </div>
    </div>`
}