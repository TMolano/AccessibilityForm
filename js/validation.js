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

        if(!this.input.value.patternMismatch([A-Za-z ])) {

            this.addError("Must only contain letters")
        }

        return this.errors
    }
}

submitted.addEventListener("click", (event) => {

    event.preventDefault();

    let validateName = new checkValidity(validName, "text");
    let errorMessages = validateName.getMessages();

    console.log(errorMessages);

    if(errorMessages.length > 0){

        errorMessages.forEach((error) => {
            validName.insertAdjacentHTML('afterend', '<p class="error">' + error + '</p>')
        })
    }
    else{alert("Form Submitted")}
});