const HeaderHtml = `
  <header class="section-navbar">
      <section class="top_txt">
        <div class="head container">
          <div class="head_txt">
            <p>Free Shipping, 30-Day Returns, and Money-Back Guarantee</p>
          </div>
          <div class="sing_in_up">
            <a href="sign-in.html">Sign In</a>
            <a href="sign-up.html">Sign Up</a>
          </div>
        </div>
      </section>
      <div class="container">
        <div class="navbar-brand">
          <a href="#"><h1 class="logo">Logo</h1></a>
        </div>
        <div class="navbar">
          <ul>
            <li class="nav-item">
              <a href="/" class="nav-link">Home</a>
            </li>
            <li>
              <a href="/about.html" class="nav-link">About</a>
            </li>
            <li>
              <a href="/products.html" class="nav-link">Product</a>
            </li>
            <li>
              <a href="/contact.html" class="nav-link">Contact</a>
            </li>
            <li class="nav-item">
              <a href="./addTocart.html" class="nav-link add-to-cart-button" id="cartValue"><i class="fa-solid fa-cart-shopping"></i> 0</a>
            </li>
          </ul>
        </div>
      </div>
    </header>

`
const headerElem = document.querySelector(".section-header");
headerElem.insertAdjacentHTML("afterbegin",HeaderHtml)