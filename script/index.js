
let products=document.getElementById("products");

let noOfRest=document.getElementById("count");

let rating=document.getElementById("rating");

let l2h=document.getElementById("l2h");
let h2l=document.getElementById("h2l");

let search=document.getElementById("search");

let count=0;

let url = "http://localhost:3000/restaurants";


let ApiData=[];
fetch(url)
.then((res)=>{
    return res.json();
})
.then((data)=>{
    //let req=data.data;
   
    ApiData= data;
    renderDOM(data);
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
      <p class="price" >  ₹ ${price}</p>
      </div>
      <p class="cat">  ${cat.join()}</p>
      <button class="cards-buttons" data-mainc="${cat}"  data-title="${title}"  data-price="${price}" data-img1="${image}" data-rating=${rating}>QUICK VIEW</button>
  </div>
  `
}

function renderDOM(prodData){
  //  sortingCopy = [...prodData];
  let arr = prodData.map((el,ind)=>{
      return renderDOMcards(el);
  })
  noOfRest.innerHTML=`<h3>${prodData.length} restaurants</h3>`;
  products.innerHTML = `
      ${ arr.join("")}
  `
  
  
  
  
  
  let btn=document.querySelectorAll(".cards-buttons")

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
    window.location.href = "/product.html"
  })
 })

}
 function redirecttohomepage(){
  window.location.href = "/index.html"
 }

// AddEventLissner

rating.addEventListener("click",()=>{
  products.innerHTML = null;
   let filterData=ApiData.sort((a,b)=>{return b.rating - a.rating})
   console.log(filterData)
 renderDOM(filterData);
})

l2h.addEventListener("click",()=>{
  products.innerHTML = null;
   let filterData=ApiData.sort((a,b)=>{return a.price - b.price})
   console.log(filterData)
 renderDOM(filterData);
})

h2l.addEventListener("click",()=>{
  products.innerHTML = null;
   let filterData=ApiData.sort((a,b)=>{return b.price - a.price})
   console.log(filterData)
 renderDOM(filterData);
})

search.addEventListener("change",()=>{
  products.innerHTML = null;
  let searchText=search.value.toLowerCase();
  console.log(searchText);
  console.log(ApiData);
  let filterData=ApiData.filter((item)=>{

   let title=item.title.toLowerCase();
   console.log(item)
   let Category=item.Category.join("").toLowerCase();
    if(title.includes(searchText) || Category.includes(searchText)){
      return true;
    }
  })
  console.log(filterData)
renderDOM(filterData);

})