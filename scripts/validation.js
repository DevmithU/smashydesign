let errorFlag = true;

function validateField(fieldId, fieldName) {
    const field = document.getElementById(fieldId);
    const errorField = document.getElementById(fieldId + "Error");
    errorField.textContent = "";
    field.classList.remove("input-value-error");

    if (!field.value.trim()) {
        errorField.textContent = `${fieldName} is required.`;
        errorFlag = false;
    } else {
        if (fieldId === "email") {
            const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
            if (!emailRegex.test(field.value)) {
                errorField.textContent = "Invalid email address";
                field.classList.add("input-value-error");
                errorFlag = false;
            }
        }

        if (fieldId === "firstName" || fieldId === "lastName") {
            const nameRegex = /^[a-zA-Z]+$/;
            if (!nameRegex.test(field.value)) {
                errorField.textContent = `${fieldName} should not contain numbers or symbols.`;
                field.classList.add("input-value-error");
                errorFlag = false;
            }
        }
    }
}

function resetField(fieldId) {
    const field = document.getElementById(fieldId);
    field.value = '';
}

function disableButton() {
    document.getElementById('submitButton').classList.add('btn-disabled');
}

function enableButton() {
    document.getElementById('submitButton').classList.remove('btn-disabled');
}

function submitMessage() {
    errorFlag = true;  // Reset errorFlag before validating

    validateField('email', 'Email');
    validateField('firstName', 'First Name');
    validateField('lastName', 'Last Name');
    validateField('address', 'Address');

    if (!errorFlag) {
        disableButton();
    } else {
        // Form submission code
        resetField('firstName');
        resetField('lastName');
        resetField('email');
        resetField('address');
        showMessage();
        console.log('Form data Submitted');
    }
}

function showMessage() {
    document.getElementById('overlay').style.display = 'block';
}

function hideMessage() {
    document.getElementById('overlay').style.display = 'none';
}
