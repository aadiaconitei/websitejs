// API https://makeup-api.herokuapp.com/
// https://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline

// Pas 4
document.addEventListener('DOMContentLoaded', onLoad);
console.log('apelez api')

// Pas 1
async function getProducts() {
    let response = await fetch("https://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline");
    let products = await response.json();
    return products;
}

// Pas 2
function onLoad() {
    document.getElementById('loader').classList.remove('hidden');
    getProducts().then(function (products) {
        console.log('incepe ap1')
        listProducts(products).then(function (){
           
            var $container = $('.portfolioContainer');
            var $filter = $('#filter');
            $container.isotope({
                filter: '.mascara',
                layoutMode: 'masonry',
                animationOptions: {
                    duration: 750,
                    easing: 'linear'
                },
                containerStyle: {
                    position: 'relative',
                    overflow: 'visible'
                },
            });
            $filter.find('a').click(function() {
                var selector = $(this).attr('data-filter');
                $filter.find('a').removeClass('active');
                $(this).addClass('active');
                $container.isotope({
                    filter: selector,
                    animationOptions: {
                        animationDuration: 750,
                        easing: 'linear',
                        queue: false,
                    }
                });
                return false;
            });
        });

    }).catch(function (rej) {
        console.log('Produsele nu au fost primite: ', rej);

    }).finally(() => {
        console.log("Cererea s-a incheiat: cu succes sau fara succes.");

    });
}

// Pas 3
async function listProducts(products) {
    let html='';
    products.forEach(function (product) {
        //console.log(product);
        let divProduct=`
        <div class="col-md-4 col-sm-6 mb-4 ${product.product_type}">
        <div class="card mb-30"><a class="card-img-tiles" href="#" data-abc="true">
                <div class="inner">
                    <div class="main-img"><img src="${product.image_link}" alt="Category"></div>
                    <div class="thumblist">
                    <img src="${product.image_link}" alt="Category">
                    <img src="${product.image_link}" alt="Category"></div>
                </div>
            </a>
            <div class="card-body text-center">
                <h4 class="card-title">${product.name} ${product.category}</h4>
                <p class="text-muted">Starting from ${product.price}</p>
                <a class="btn btn-outline-primary btn-sm" href="#" data-abc="true">View Products</a>
            </div>
        </div>
    </div>
       `;
    html +=divProduct;
    });
    let container = document.getElementById('portfolioContainer');
    container.innerHTML = html;
    document.getElementById('loader').classList.add('hidden');

}
console.log('se termina api')

