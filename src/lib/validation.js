// It is common regex for validation of firstName, lastName, address .etc
const commonRegex = /(^[_,.]|[!@#$%^&*()?":{}|<>])/;
const commonValidator = (value) => !commonRegex.test(value);

const validators = {
    email: {
        validator: (value) => {
            const emailRex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            return emailRex.test(value);
        },
        errorMessage: 'Uh oh! Looks like there is an issue with your email. Please input a correct email.'
    },
    password: {
        validator: (value) => {
            return value.length >= 6 && value.length <= 15;
        },
        errorMessage: `Invalid password length. Minimum length is 6. Maximum length is 15`
    },
    firstName: {
        validator: commonValidator,
        errorMessage: `Invalid name format. Name cannot contain special characters.`
    },
    lastName: {
        validator: commonValidator,
        errorMessage: `Invalid name format. Last name cannot contain special characters.`
    },
    address: {
        validator: commonValidator,
        errorMessage: `Invalid name format. Address cannot contain special characters.`
    }
};

function validateInput(value, validator) {
    const toSet = {valid: null, className: ""};
    if (validator(value)) {
        toSet.valid = true;
        toSet.className = 'has-success'
    } else {
        toSet.valid = false;
        toSet.className = 'has-danger'
    }

    return toSet;
}

function validateForm(validationObject) {
    return Object.keys(validationObject).every(key => validationObject[key].valid === true);
}

export default {
    validators,
    validateInput,
    validateForm
};