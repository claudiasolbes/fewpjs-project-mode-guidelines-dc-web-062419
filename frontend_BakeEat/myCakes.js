function showMyCakes(){
  let node = document.querySelector("main")
    node.innerHTML = ""
    const myCakesMain = document.querySelector("main")
    const myCakesDiv = document.createElement("div")
    myCakesMain.appendChild(myCakesDiv)
    myCakesDiv.innerHTML = `
    <div class="card-group">
    <div class="card">
      <h5>Makeup Box</h5>
      <video class="card-img-top" src="/Users/claudiasolbes/Flatiron/javascript/mod3/fewpjs-project-mode-guidelines-dc-web-062419/frontend_BakeEat/videos/makeup.mov" alt="Card image cap" autoplay>
      <div class="card-body">
      </div>
    </div>
    <div class="card">
      <h5>Basketball</h5>
      <video class="card-img-top" src="/Users/claudiasolbes/Flatiron/javascript/mod3/fewpjs-project-mode-guidelines-dc-web-062419/frontend_BakeEat/videos/basketball.mov" alt="Card image cap" autoplay>
      <div class="card-body">
      </div>
    </div>
    <div class="card">
      <h5>Ugly Sweater</h5>
      <video class="card-img-top" src="/Users/claudiasolbes/Flatiron/javascript/mod3/fewpjs-project-mode-guidelines-dc-web-062419/frontend_BakeEat/videos/uglySweater.mov" alt="Card image cap" autoplay>
      <div class="card-body">
      </div>
    </div>
    <div class="card">
      <h5>Swan</h5>
      <video class="card-img-top" src="/Users/claudiasolbes/Flatiron/javascript/mod3/fewpjs-project-mode-guidelines-dc-web-062419/frontend_BakeEat/videos/swan.mov" alt="Card image cap" autoplay>
      <div class="card-body">
      </div>
    </div>
    <div class="card">
      <h5>Purple and Gold</h5>
      <img class="card-img-top" src="/Users/claudiasolbes/Flatiron/javascript/mod3/fewpjs-project-mode-guidelines-dc-web-062419/frontend_BakeEat/videos/image1.jpeg" alt="Card image cap">
      <div class="card-body">
      </div>
    </div>
  </div>`
  }