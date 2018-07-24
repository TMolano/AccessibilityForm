const submitted = document.querySelector('#submit-order');
const validEmail = document.querySelector('#email');
const validName = document.querySelector('#fullname');
const validAddress = document.querySelector('#address');
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
    let validateZip = new checkValidity(validZip, "text");


    let errorMessages = validateName.getMessages();

    if(validZip.validity.patternMismatch){
        validZip.setCustomValidity("Must be a 5 digit code.");
    }
    else {validZip.setCustomValidity("")}

    console.log(errorMessages);

    if(errorMessages.length > 0){

        errorMessages.forEach((error) => {
            validName.insertAdjacentHTML('afterend', '<p class="error">' + error + '</p>');
            validZip.insertAdjacentHTML('afterend', '<p class="error">' + error + '</p>');

        })
    }
    else{
        form.addEventListener("submit", (event) => {
            event.preventDefault();

        })
    }


});


