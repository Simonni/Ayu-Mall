'use strict'
//we are declaring a constrctor that displaying a bunch of images 
///we use the index array to access the images 
let public_counter=0
let sportApparels = []
let MySportShop = document.getElementById('img-container')
let sport_apparel= document.getElementsByClassName('Sport-image')
function Images (newTitle, path, id, description){
  this.title = newTitle
  this.path = path
  this._id = id
  this.clicked = 0
  this. shown = 0
  this.alt = description
}
if(localStorage.local){
  let parsePlaces = localStorage.getItem('local')
  //   console.log(sportApparel)
  sportApparels = JSON.parse(parsePlaces)
} else{
// We now are creating(initiating) a new instance of the image object 
  let BackPack = new Images('BackPack', './assets/BackPack.jpg', 'image of a strong BackPack')
  let BaseBall = new Images('Baseball', './assets/BaseBall.jpg', 'Images of the BaseBall')
  let BasketBall = new Images('Basketball', './assets/BasketBall.jpg', 'Images of BasketBall')
  let Bowling = new Images('Bowling', './assets/Bowling.jpg', 'Images of the Bowling')
  let Football= new Images('Football', './assets/Football.jpg', 'Foootball')
  let Futsal= new Images('Futsal', './assets/Futsal.jpg', 'Images of a Futsal shoes')
  let Gloves= new Images('Gloves', './assets/Gloves.jpg', 'Image of Gloves')
  let GroundTennis= new Images('GroundTenniss', './assets/GroundTennis.jpg', 'Image of GroundTennis')
  let Gymbicycle= new Images('Gymbicycle', './assets/Gymbicycle.jpg', 'Image of Gymbicycle')
  let Hat= new Images('Hat', './assets/Hat.jpg', 'Image of Hat')
  let Headset= new Images('Headset', './assets/Headset.jpg', 'Image of Headset')
  let BoxingGloves= new Images('BoxingGloves', './assets/BoxingGloves.jpg', 'Image of BoxingGloves')
  let sweatShirt= new Images('sweatShirt', './assets/sweatShirt.jpg', 'Image of sweatShirt')
  let pingPong= new Images('pingPong', './assets/pingPong.jpg', 'pingPong')

  sportApparels.push(BasketBall, BaseBall, Bowling, Football, Futsal, BackPack, Headset,pingPong,BoxingGloves, Hat, GroundTennis, Gymbicycle,sweatShirt, Gloves)
}
let randomNumber = function() {
  return Math.floor(Math.random() * sportApparels.length)
}
let FirstImage
let SecondImage
let ThirdImage

let clickHandler = function(event) {
  if(FirstImage._id === event.target.id) {
    FirstImage.clicked++
    public_counter++
  } else if(SecondImage._id === event.target.id) {
    SecondImage.clicked++
    public_counter++
  } else {
    ThirdImage.clicked++
    public_counter++
  }
  localStorage.setItem('local', JSON.stringify(sportApparels))
  if(public_counter< 25){
    displayImages()
  //if(public_counter===15){
  }
  else{
    displayChart()
  }
  //console.log(public_counter)}
  //displayImages()

}
let elImage
let displayImages = function() {
  for(let i = 0; i < sport_apparel.length; i++) {
    elImage = sport_apparel[i]
    let random = sportApparels[randomNumber()]
    if(i === 0) {
      FirstImage = random
    } else if(i === 1) {
      SecondImage = random
      while (FirstImage === SecondImage){
        random = sportApparels[randomNumber()]
        SecondImage = random
      }
    } else if (i===2) {
      ThirdImage = random
      while (FirstImage === ThirdImage || SecondImage === ThirdImage){ 
        console.log('Hello')
        random = sportApparels[randomNumber()]
        ThirdImage = random
      }
    }
    
    elImage.src = random.path
    elImage.setAttribute('id',random._id)
    random.shown++
    console.log(random.id, elImage._id)
    elImage.addEventListener('click', clickHandler)
    
  }

}
displayImages()
function Ayu(){
  displayImages()}
