const currencyFormatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
});
const productList = {
    "residential": {"name": "Residential Solar", "desc":"For the individual who wants to save on their electricity bill, reduce your carbon footprint and increase the value of your home", "price":500999, "img":"img/solar-panels1.jpg"},
    "utility": {"name": "Utility Solar", "desc":"With a utility level system, save even more on your bills, reduce lots of your carbon footprint and maybe increase the value of your home", "price":75350, "img":"img/solar-panels2.jpg"},
    "commercial": {"name": "Commercial Solar", "desc":"Our most power system, the Commerical level solar, electricity savings are best, carbon footprint reduces to EU42.5 and value of your home will break through roof", "price":1500595, "img":"img/solar-panels3.jpg"}
};

// Close modals if page was refreshed
// -this prevents form fields reverting to default values
if(performance.navigation.type == performance.navigation.TYPE_RELOAD){
    location.href="";
}
var openLoginModal = document.getElementById("btnLogin");
openLoginModal.addEventListener('click', function(){
    location.href="#modalLogin";
});

var closeLoginModalBtns = document.getElementsByClassName("closeBtn");
for(var i=0; i<closeLoginModalBtns.length; i++){
    closeLoginModalBtns[i].addEventListener('click', function(){
        location.href="";
    });
}

var globalProductName;
var moreInfoBtns = document.getElementsByClassName("btnMore");
for(var i=0; i<moreInfoBtns.length; i++){
    moreInfoBtns[i].addEventListener('click', function(){
        globalProductName = this.value;
        window.sessionStorage.setItem('globalProductName', this.value);
        location.href="#modalCart";
        document.getElementById("product-img").src = productList[this.value].img;
        document.getElementById("product-name").textContent = productList[this.value].name;
        document.getElementById("product-desc").textContent = productList[this.value].desc;
        document.getElementById("product-price").textContent = currencyFormatter.format(productList[this.value].price);
        var productTotal = document.getElementById("product-total");
        productTotal.value = currencyFormatter.format(productQuantity.value * productList[sessionStorage.getItem('globalProductName')].price);

    });
}

var productQuantity = document.getElementById("product-quantity");
var productTotal = document.getElementById("product-total");
productQuantity.addEventListener('change', function(){
    // alert(`Quantity selected: ${productQuantity.value} and product name is ${globalProductName}`);
    // alert(`Quantity selected: ${productQuantity.value} and product name is (session) ${sessionStorage.getItem('globalProductName')}`);
    productTotal.value = currencyFormatter.format(productQuantity.value * productList[sessionStorage.getItem('globalProductName')].price);
});

let productAdd = document.getElementById("product-add");
productAdd.addEventListener('click', function(){
    let orderSummary = document.getElementById("order-summary");
    orderSummary.textContent = `Added ${productQuantity.value} unit(s) of ${sessionStorage.getItem('globalProductName')} for a total of ${productTotal.value} to your cart`;
});
