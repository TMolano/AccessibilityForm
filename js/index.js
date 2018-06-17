var size = document.getElementById('size');
var sizeBtns = size.getElementsByClassName('size-button');


for (var i = 0; i < sizeBtns.length; i++) {
    sizeBtns[i].addEventListener("click", function() {

        var btnElements = sizeBtns[0];
        while(btnElements){
            if(btnElements.tagName === "BUTTON"){
                btnElements.classList.remove("size-active");
            }
            btnElements = btnElements.nextSibling;
        }

        this.classList.add("size-active");

        var sizeSelected = size.getElementsByClassName('size-active')[0].value;


        values[1] = ", " + sizeSelected;
        updateSummary();


    });
}

var color = document.getElementById('color');
var colorBtns = color.getElementsByClassName('color-button');

for (var c = 0; c < colorBtns.length; c++) {
    colorBtns[c].addEventListener("click", function() {

        var btnElements = colorBtns[0];
        while(btnElements){
            if(btnElements.tagName === "BUTTON"){
                btnElements.classList.remove("color-active");
            }
            btnElements = btnElements.nextSibling;
        }

        this.classList.add("color-active");

        var colorSelected = color.getElementsByClassName('color-active')[0].value;

        values[2] = ", " + colorSelected;
        updateSummary();

    });
}

var item = document.getElementsByClassName('product-item');


item[0].innerHTML = "Incredibles T-Shirt";
item[1].innerHTML = item[0].innerHTML;
item[2].innerHTML = item[0].innerHTML;
let values = [item[0].innerHTML,'',''];



function updateSummary(){
    item[1].innerHTML = values.join(' ');
    item[2].innerHTML = values.join(' ');
}

var fName = document.getElementById("fullname");

fName.addEventListener("keyup", function () {

    document.getElementById("shippingName").innerHTML = fName.value;
});

var address = document.getElementById("address");

address.addEventListener("keyup", function () {

    document.getElementById("shippingAddress").innerHTML = address.value;
});

var city = document.getElementById("city");
var state = document.getElementById("state");
var zip = document.getElementById("zip");
var country = document.getElementById("country");



var inputCity = document.getElementById("shippingCity");
var inputSt = document.getElementById("shippingSt");
var inputZip = document.getElementById("shippingZip");
var inputCountry = document.getElementById("shippingCountry");

city.addEventListener("keyup", function() {
    inputCity.innerHTML = city.value;

    city.addEventListener("blur", function () {
        inputCity.innerHTML = city.value + ", ";

    })
});

state.addEventListener("change", function() {
inputSt.innerHTML = state.value + " ";

});

zip.addEventListener("keyup", function() {
inputZip.innerHTML= zip.value;

});

country.addEventListener("change", function() {
    inputCountry.innerHTML = country.value;

});


document.getElementById("email").addEventListener("blur", checkEmail);

function checkEmail() {

    let email = document.getElementById('email');
    let filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

    if (!filter.test(email.value)) {

        return false;
    }
}


var submit = document.getElementById('submit-order');

submit.addEventListener("click", function () {

    var form = document.getElementById('shipping-details');
    form.submit();

    var container = document.getElementById('container');
    container.style.display = "none";
    document.getElementById('order-complete').style.display = "block";
    document.getElementById('shippingName2').innerHTML = fName.value;
    document.getElementById('shippingAddress2').innerHTML = address.value;
    document.getElementById('shippingCity2').innerHTML = city.value + ",";
    document.getElementById('shippingSt2').innerHTML = state.value;
    document.getElementById('shippingZip2').innerHTML = zip.value;
    document.getElementById('shippingCountry2').innerHTML = country.value;

});