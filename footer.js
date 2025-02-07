const FooterHtml = `
 <div class="container-footer">
        <footer>
            <div class="social">
              <a href="#"><i class="fa-brands fa-instagram"></i></a>
              <a href="#"><i class="fa-brands fa-snapchat"></i></a>
              <a href="#"><i class="fa-brands fa-twitter"></i></a>
              <a href="#"><i class="fa-brands fa-facebook"></i></a>
            </div>
            <ul class="list-inline">
                <li class="list-inline-item"><a href="/">Home</a></li>
                <li class="list-inline-item"><a href="/products.html">Product</a></li>
                <li class="list-inline-item"><a href="/about.html">About</a></li>
                <li class="list-inline-item"><a href="/policy.html">Privacy Policy</a></li>
            </ul>
            <p class="copyright">Resived By Ritik</p>
        </footer>
`
const footerElem = document.querySelector(".section-footer");
footerElem.insertAdjacentHTML("afterbegin",FooterHtml)