const submitted = document.querySelector('#submit-order');
const validEmail = document.querySelector('#email');
const validName = document.querySelector('#fullname');
const validAddress = document.querySelector('#address');
const validAddress2 = document.querySelector('#address2');
const validCity = document.querySelector('#city');
const validZip = document.querySelector('#zip');

class checkValidity {

    constructor(input, type){

        this.input = input;
        this.type = type;
        this.errors = [];
    }

    addError(message){

        this.errors.push(message);
    }

    getMessages() {
        const status = this.input.validity;

        if(status.typeMismatch){

            this.addError('Entry does not match the field type')
        }
        if(status.patternMismatch){

            this.addError('Entry does not match the field pattern')
        }


        if(status.tooShort){

            this.addError('Entry is too short')
        }

        if(status.tooLong){

            this.addError('Entry is too long')
        }

        return this.errors
    }
}

submitted.addEventListener("click", (event) => {



    let validateName = new checkValidity(validName, "text");
    let validateEmail = new checkValidity(validEmail, "text");
    let validateCity = new checkValidity(validCity, "text");
    let validateAddress = new checkValidity(validAddress, "text");
    let validateAddress2 = new checkValidity(validAddress2, "text");
    let validateZip = new checkValidity(validZip, "text");



    let errorName = validateName.getMessages();


    if(errorName.length > 0) {

        errorName.forEach((error) => {
            validName.insertAdjacentHTML('afterend', '<p class="error">' + error + '</p>');

        })
    }

    let errorEmail = validateEmail.getMessages();


    if(errorEmail.length > 0) {

        errorEmail.forEach((error) => {
            validEmail.insertAdjacentHTML('afterend', '<p class="error">' + error + '</p>');

        })
    }

    let errorCity = validateCity.getMessages();


    if(errorCity.length > 0) {

        errorCity.forEach((error) => {
            validCity.insertAdjacentHTML('afterend', '<p class="error">' + error + '</p>');

        })
    }

    let errorAddress = validateAddress.getMessages();


    if(errorAddress.length > 0) {

        errorAddress.forEach((error) => {
            validEmail.insertAdjacentHTML('afterend', '<p class="error">' + error + '</p>');

        })
    }

    let errorAddress2 = validateAddress2.getMessages();


    if(errorAddress2.length > 0) {

        errorAddress2.forEach((error) => {
            validAddress2.insertAdjacentHTML('afterend', '<p class="error">' + error + '</p>');

        })
    }

    let errorZip = validateZip.getMessages();

    if(errorZip.length > 0){

        errorZip.forEach((error) => {
            validZip.insertAdjacentHTML('afterend', '<p class="error">' + error + '</p>');

        })
    }

    else{
        form.addEventListener("submit", (event) => {



        })
    }


});


