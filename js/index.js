//Javascript for Color and Size: switching active class to display information

let size = document.getElementById('size');
let sizeBtns = size.getElementsByClassName('size-button');


for (let i = 0; i < sizeBtns.length; i++) {
    sizeBtns[i].addEventListener("click", function() {

        let btnElements = sizeBtns[0];
        while(btnElements){
            if(btnElements.tagName === "INPUT"){
                btnElements.classList.remove("size-active");
            }
            btnElements = btnElements.nextSibling;
        }
        this.classList.add("size-active");

        let sizeSelected = size.getElementsByClassName('size-active')[0].value;


        values[1] = ", " + sizeSelected;
        updateSummary();


    });
}

let color = document.getElementById('color');
let colorBtns = color.getElementsByClassName('color-button');

for (let c = 0; c < colorBtns.length; c++) {
    colorBtns[c].addEventListener("click", function() {

        let btnElements = colorBtns[0];
        while(btnElements){
            if(btnElements.tagName === "INPUT"){
                btnElements.classList.remove("color-active");
            }
            btnElements = btnElements.nextSibling;
        }

        this.classList.add("color-active");

        let colorSelected = color.getElementsByClassName('color-active')[0].value;

        values[2] = ", " + colorSelected;
        updateSummary();

    });
}

//Order Information
let item = document.getElementsByClassName('product-item');

item[0].innerHTML = "Incredibles T-Shirt";
item[1].innerHTML = item[0].innerHTML;
item[2].innerHTML = item[0].innerHTML;
let values = [item[0].innerHTML,'',''];

function updateSummary(){
    item[1].innerHTML = values.join(' ');
    item[2].innerHTML = values.join(' ');
}

//Event Listeners for input fields
let fName = document.getElementById("fullname");

fName.addEventListener("keyup", function () {

    document.getElementById("shippingName").innerHTML = fName.value;
});

let address = document.getElementById("address");

address.addEventListener("keyup", function () {

    document.getElementById("shippingAddress").innerHTML = address.value;
});

let address2 = document.getElementById("address2");

address2.addEventListener("keyup", function () {

    document.getElementById("shippingAddress22").innerHTML = address2.value;
});

let city = document.getElementById("city");
let state = document.getElementById("state");
let zip = document.getElementById("zip");
let country = document.getElementById("country");

let inputCity = document.getElementById("shippingCity");
let inputCountry = document.getElementById("shippingCountry");

city.addEventListener("keyup", function() {
    inputCity.innerHTML = city.value + ", " +  state.value + " " + zip.value;
});

state.addEventListener("change", function() {
inputCity.innerHTML = city.value + ", " +  state.value + " " + zip.value;

});

zip.addEventListener("keyup", function() {
    inputCity.innerHTML = city.value + ", " +  state.value + " " + zip.value;

});

country.addEventListener("change", function() {
    inputCountry.innerHTML = country.value;

});

let email = document.getElementById('email');
email.addEventListener("blur", checkEmail);

    function checkEmail() {


        let filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

        if (!filter.test(email.value)) {

            return false;
        }
    }


let submit = document.getElementById('submit-order');

submit.addEventListener("click", function () {

    let form = document.getElementById('shipping-details');
    //form.submit();

    form.addEventListener("submit", function () {
        let container = document.getElementById('container');
        container.style.display = "none";
        document.getElementById('order-complete').style.display = "block";
        document.getElementById('order-complete').style.flexDirection = "column";
        document.getElementById('order-complete').style.flexWrap = "wrap";
        document.getElementById('shippingName2').innerHTML = fName.value;
        document.getElementById('shippingAddress2').innerHTML = address.value;
        document.getElementById('shippingCity2').innerHTML = city.value + ",";
        document.getElementById('shippingSt2').innerHTML = state.value;
        document.getElementById('shippingZip2').innerHTML = zip.value;
        document.getElementById('shippingCountry2').innerHTML = country.value;
    })

});