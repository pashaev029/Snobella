let link = new URL(window.location.href);
let id1 = link.searchParams.get("id");
console.log(id1);

let productData = async () => {
  let info = await fetch("products.json").then((a) => (a = a.json()));

  let find = info.bestSeller.find((a) => a.id == id1);

  let productDetails = document.querySelector(".product-details");
  let productTop = document.querySelector(".product-top");
  let productBottom = document.querySelector(".product-bottom");
  let productSlider = document.querySelector(".product-slider");
  let productImg = document.querySelector(".product-img");
  let productInfo = document.querySelector(".product-info");

  productTop.innerHTML = `
   <p> Home <strong> > </strong> <span> ${find.name}</span> </p>
  `;
  productDetails.append(productTop);

  productSlider.innerHTML = `
  <img src="${find.img}"/>
  <img src="${find.img}"/>
  <img src="${find.img}"/>
  <img src="${find.img}"/>
  `;
  productBottom.append(productSlider);

  productImg.innerHTML = `
  <img src="${find.img}"/>
  `;
  productBottom.append(productImg);

  productInfo.innerHTML = `
  <h1>Hotel Magique Love and Magique Tote Bag</h1>

  <div class="star-home flex a-center">
    <img src="${find.star}" alt="">
    <img src="${find.star}" alt="">
    <img src="${find.star}" alt="">
    <img src="${find.star}" alt="">
    <img src="${find.star}" alt="">
    <small style="margin-left:10px;">   5.0 | 2 reviews</small>
  </div>

  <div class="pieces flex a-center">
    <div class="piece flex">  <p>2-9 pieces</p>  <p style="margin-left:30px;">US $20.00</p></div>
    <div class="piece flex">  <p>50 pieces</p>  <p style="margin-left:30px;">US $215.00</p></div>
    <div class="piece flex">  <p>40 pieces</p>  <p style="margin-left:30px;">US $12.00</p></div>
    <div class="piece flex">  <p>2-9 pieces</p>  <p style="margin-left:30px;">US $20.00</p></div>
  </div>

  <div class="size" style>
    <h3>Size</h3> <h3> Color</h3>
  </div>

  <div class="flex" style="margin-bottom: 30px;">
    <div class="flex  size-button">
        <button>XS</button>
        <button>S</button>
        <button>M</button>
    </div>

    <div class="flex  color-button">
        <button style="background-color: #CD5C0B ;" ></button>
        <button style="background-color: #0085FF ;"></button>
        <button style="background-color:#35783B ;"></button>
        <button style="background-color: #ED0875 ;"></button>
    </div>
    </div>

    <div class="flex cardButton">
        <button class="btn">Add to card</button>
        <button class="btn2">Cash Payment</button>
    </div>
  `;

  productBottom.append(productInfo);
  productDetails.append(productBottom);
};
productData();

document.querySelector("#reviews").addEventListener("click", () => {
  document.querySelector(".reviews-text").classList.remove("DR-show");
  document.querySelector(".description-text").classList.add("DR-show");
  document.querySelector("#reviews").classList.add("border-bt");
  document.querySelector("#descrip").classList.remove("border-bt");
});
document.querySelector("#descrip").addEventListener("click", () => {
  document.querySelector(".description-text").classList.remove("DR-show");
  document.querySelector(".reviews-text").classList.add("DR-show");
  document.querySelector("#descrip").classList.add("border-bt");
  document.querySelector("#reviews").classList.remove("border-bt");
});

let data2 = async () => {
  let descrip = await fetch("featured.json").then((a) => (a = a.json()));
  descrip.rewies.map((a) => {
    let reviewsText = document.querySelector(".reviews-text");
    reviewsText.classList.add("reviews");
    let div = document.createElement("div");
    div.classList.add("reviews-div");
    let h2 = document.createElement("h2");
    h2.innerText = `John Smith`;
    let star = document.createElement("i");
    let h3 = document.createElement("h3");
    h3.innerText = `09 July, 2021`;
    let p = document.createElement("p");
    p.innerText = `   Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
        et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco</p>
  `;

    for (let i = 0; i < a.star; i++) {
      star.innerHTML += `
             <i class="fas fa-star"></i>
             `;
    }
    h2.append(star);
    div.append(h2, h3, p);
    reviewsText.append(div);
  });
};

let handbags = document.querySelector(".handbags");
let AllProducts = [];
const createSlider = async () => {
  let bags = await fetch("products.json").then((a) => a.json());
  AllProducts = bags;
  bags.featuredProducts.map((product) => {
    let handbag = document.createElement("div");
    handbag.setAttribute("product-id", product.id);
    handbag.classList.add("handbag");
    let handbag_img = document.createElement("div");
    handbag_img.classList.add("handbag_img");
    let productImg = document.createElement("img");
    productImg.setAttribute("src", product.img);
    if (product.info) {
      let about = document.createElement("span");
      about.classList.add("about");
      product.info.includes("%") ? (about.style = "background:red") : "";
      about.innerText = `${product.info}`;
      handbag_img.append(about);
    }

    let heart = document.createElement("span");
    heart.classList.add("heart");
    heart.innerHTML += `<i class="far fa-heart"></i>`;
    handbag_img.append(productImg, heart);
    handbag.append(handbag_img);

    let handbag_details = document.createElement("div");
    handbag_details.classList.add("handbag_details");

    let stars = document.createElement("span");
    for (let i = 0; i < product.stars; i++) {
      let starsimg = document.createElement("img");
      starsimg.classList.add("size");
      starsimg.setAttribute("src", "icons/star.svg");
      stars.append(starsimg);
    }

    let h3 = document.createElement("h3");
    h3.innerText = `${product.description}`;

    let form1 = document.createElement("span");
    form1.classList.add("form1");
    form1.innerText = `$${product.price}`;

    let form2 = document.createElement("span");
    form2.classList.add("form2");
    form2.innerText = `From $${product.discount}`;

    let a = document.createElement("button");
    a.addEventListener("click", () => addToBasket(product.id, event));
    a.classList.add("add");
    a.innerText = "Add to cart";
    handbag_details.append(stars, h3, form1, form2, a);
    handbag.append(handbag_details);
    handbags.append(handbag);
  });
  $(document).ready(function () {
    $(".handbags").owlCarousel({
      items: 3,
      margin: 60,
      loop: false,
      nav: true,
      dots: false,
    });
  });
};
createSlider();
