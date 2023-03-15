let productTemp = document.getElementById("product");

let productData=JSON.parse(localStorage.getItem("singleProduct"))

console.log(productData);



window.addEventListener("load",()=>{
    productTemp.innerHTML= renderDOMcards(productData)
})



function renderDOMcards (item){
    // let obj = {};
    //let id = item.__id ;
    let title = item.Title ; 
    let price = item.Price;
    let rating=item.rating;
    let image = item.image;
    let cat = item.Category
    ;
    
    // id="cards${id}" data-cards = ${id}
  
    return `
    <div id="top">
    <p>Home / ${title}</p>
    <i class="fa-light fa-heart"></i>
    <i class="fa-solid fa-magnifying-glass"></i>
    </div>
      <div>
        <h3>${title}</h3>
        <img  src="${image}" alt="err"> 
        <div class="starPrice">
        <p class="icon-star _537e4">&star;</span><span>${rating}</p>
        <p class="price" >  ₹ ${price}</p>
        </div>
        
    </div>
    `
  }