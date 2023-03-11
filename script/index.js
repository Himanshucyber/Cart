// var images = document.querySelectorAll('#slideshow img');
// console.log("Himashu")
// var currentImageIndex = 0;
// var intervalId = setInterval(nextImage, 2000);

// function nextImage() {
//   images[currentImageIndex].classList.remove('active');
//   currentImageIndex = (currentImageIndex + 1) % images.length;
//   images[currentImageIndex].classList.add('active');
// }

let products=document.getElementById("products");

let url = "http://localhost:3000/restaurants";

fetch(url)
.then((res)=>{
    return res.json();
})
.then((data)=>{
    //let req=data.data;
    console.log(data);
    renderDOM(data)
  })

  
function renderDOMcards (item){
  // let obj = {};
  //let id = item.__id ;
  let title = item.title ; 
  let price = item.price;
  let rating=item.rating;
  let image = item.imgage;
  let cat = item.Category;
  
  // id="cards${id}" data-cards = ${id}

  return `
  <div class="renderCards" >
      <img  src="${image}" alt="err">
      <h3>${title}</h3>
      <div class="starPrice">
      <p class="icon-star _537e4">&star;</span><span>${rating}</p>
      <p>₹ ${price}</p>
      </div>
      <p>${cat.join()}</p>
      <button class="cards-buttons" data-mainc="${cat}"  data-title="${title}"  data-price="${price}" data-img1="${image}" data-rating=${rating}>QUICK VIEW</button>
  </div>
  `
}

function renderDOM(prodData){
  //  sortingCopy = [...prodData];
  let arr = prodData.map((el,ind)=>{
      return renderDOMcards(el);
  })
 
  products.innerHTML = `
      ${ arr.join("")}
  `
  let btn=document.querySelectorAll(".cards-buttons")
console.log(btn)
 btn.forEach((item)=>{
  item.addEventListener("click",(e)=>{
    console.log(e)
   
    let singleprod = {};

    singleprod.image  = e.target.dataset.img1;
    singleprod.Title  = e.target.dataset.title;
    singleprod.Price  = e.target.dataset.price;
    singleprod.Category  = e.target.dataset.mainc;
    singleprod.rating  = e.target.dataset.rating;

    // singleprod.Image1  = e.target.dataset.img1;
    // singleprod.Image2  = e.target.dataset.img2;
    // singleprod.Image3  = e.target.dataset.img3;
    // singleprod.Image4  = e.target.dataset.img4;
    // singleprod.color = e.target.dataset.col;
   console.log(singleprod)

    localStorage.setItem("singleProduct",JSON.stringify(singleprod));

  })
 })

}

