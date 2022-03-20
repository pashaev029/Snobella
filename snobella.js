let container = document.querySelector(".bags");
const getData = async () => {
  let bags = await fetch("products.json").then((a) => a.json());
  bags.bag.map((item) => {
    container.innerHTML += `
    <div class="bag color">
        <img src="${item.img}" alt="" />
      <div class="bag-details">
        <p>${item.name}</p>
      </div>
  </div>
    `;
  });
  $(document).ready(function () {
    $(".slider").owlCarousel({
      items: 1,
      margin: 60,
      loop: true,
      dots: true,
      autoplay: true,
      autoplayTimeout: 5000,
    });
    $(".bags").owlCarousel({
      items: 4,
      margin: 60,
      loop: true,
      nav: true,
      autoplay: true,
      autoplayTimeout: 5000,
    });
  });
};
getData();

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

let bestSeller = document.querySelector(".bestseller");
let bestProducts = [];
const bestSlider = async () => {
  let bags = await fetch("products.json").then((a) => a.json());
  bestProducts = bags;
  bags.bestSeller.map((product) => {
    let handbag = document.createElement("div");
    handbag.setAttribute("product-id", product.id);
    handbag.classList.add("handbag");

    let handbag_img = document.createElement("a");
    handbag_img.setAttribute("href", `product.html?id=${product.id}`);
    handbag_img.classList.add("handbag_img");
    handbag_img.setAttribute("target", "_blank");

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
    heart.addEventListener("click", (e) => {
      e.preventDefault();
    });
    heart.classList.add("heart");
    heart.innerHTML += `<i class="far fa-heart"></i>`;
    handbag_img.append(productImg, heart);
    handbag.append(handbag_img);

    let handbag_details = document.createElement("div");
    handbag_details.classList.add("handbag_details");
    let stars = document.createElement("span");

    for (let i = 0; i < product.stars; i++) {
      let starsImg = document.createElement("img");
      starsImg.classList.add("size");
      starsImg.setAttribute("src", "icons/star.svg");
      stars.append(starsImg);
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
    a.addEventListener("click", () => addBasket(product.id, event));
    a.classList.add("add");
    a.innerText = "Add to cart";
    handbag_details.append(stars, h3, form1, form2, a);
    handbag.append(handbag_details);
    bestSeller.append(handbag);
  });
  $(document).ready(function () {
    $(".bestseller").owlCarousel({
      items: 3,
      margin: 60,
      loop: false,
      nav: true,
      dots: false,
    });
  });
};
bestSlider();

let discount = document.querySelector(".discount");
const discountSlider = async () => {
  let bags = await fetch("products.json").then((a) => a.json());
  bags.discountProducts.map((product) => {
    let handbag = document.createElement("div");
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

    let a = document.createElement("a");
    a.classList.add("add");
    a.innerText = "Add to cart";
    handbag_details.append(stars, h3, form1, form2, a);
    handbag.append(handbag_details);
    discount.append(handbag);
  });
  $(document).ready(function () {
    $(".discount").owlCarousel({
      items: 3,
      margin: 60,
      loop: false,
      nav: true,
      dots: false,
    });
  });
};
discountSlider();

let basket = [];
const addToBasket = (id, e) => {
  let item = AllProducts.featuredProducts.find((a) => a.id == id);
  let check = basket.find((a) => a.id == id);
  if (check) {
    basket = basket.filter((a) => a.id != id);
    e.target.innerText = "Add To Cart";
    e.target.classList.remove("added");
  } else {
    basket.push(item);
    e.target.innerText = "Added To Cart";
    e.target.classList.add("added");
  }
  refreshBasketModal();
};

document.querySelector(".open-basket").addEventListener("click", (e) => {
  e.preventDefault();
  document.querySelector(".basket-modal").classList.toggle("modal-opened");
});

const refreshBasketModal = () => {
  document.querySelector(".basket-modal").innerHTML = "";
  basket.map((a) => {
    let product_name =
      a.description.length > 30
        ? `${a.description.slice(0, 30)}...`
        : a.description;
    document.querySelector(".basket-modal").innerHTML += `
        <li>
            <img src="${a.img}" alt="" />
            <div>
              <h3>${product_name}<h3>
              <h3>$${a.price}</h3>
            </div>
        </li>
    `;
  });
};

window.addEventListener("scroll", (e) => {
  if (window.scrollY > 100) {
    document.querySelector(".basket-modal").classList.remove("modal-opened");
  }
});

//

let bestBasket = [];
const addBasket = (id, e) => {
  let item = bestProducts.bestSeller.find((a) => a.id == id);
  let check = bestBasket.find((a) => a.id == id);
  if (check) {
    bestBasket = bestBasket.filter((a) => a.id != id);
    e.target.innerText = "Add To Cart";
    e.target.classList.remove("added");
  } else {
    bestBasket.push(item);
    e.target.innerText = "Added To Cart";
    e.target.classList.add("added");
  }
  refreshBestModal();
};

document.querySelector(".open-basket").addEventListener("click", (e) => {
  e.preventDefault();
});

const refreshBestModal = () => {
  document.querySelector(".basket-modal").innerHTML = "";
  bestBasket.map((a) => {
    document.querySelector(".basket-modal").innerHTML += `
    <li>
      <img src="img/${a.img}" alt"" />
      <h3>${a.description}</h3>
    </li>
    `;
  });
};

window.addEventListener("scroll", (e) => {
  if (window.scrollY > 100) {
    document.querySelector(".basket-modal").classList.remove("modal-opened");
  }
});
