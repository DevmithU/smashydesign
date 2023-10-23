let errorFlag = false;


function validateField(fieldId, fieldName) {
    const field = document.getElementById(fieldId);
    const errorField = document.getElementById(fieldId + "Error");

    if (!field.value.trim()) {
        errorField.textContent = `${fieldName} is required.`;
        disableButton();

    } else {
        errorField.textContent = "";
        enableButton();

        // Check for email validation
        if (fieldId === "email") {
            const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
            if (!emailRegex.test(field.value)) {
                errorField.textContent = "Invalid email address";
                field.classList.add("input-value-error");
                disableButton();
            } else {
                field.classList.remove("input-value-error");
                errorField.textContent = "";
                enableButton();
            }
        }

        // Check for firstName and lastName validation
        if (fieldId === "firstName" || fieldId === "lastName") {
            const nameRegex = /^[a-zA-Z]+$/; // This ensures the name contains only letters
            if (!nameRegex.test(field.value)) {
                errorField.textContent = `${fieldName} should not contain numbers or symbols.`;
                field.classList.add("input-value-error");
                disableButton();
            } else {
                field.classList.remove("input-value-error");
                errorField.textContent = "";
                enableButton();
            }
        }
    }
}

function resetField(fieldId){
    const field = document.getElementById(fieldId);
    field.value='';

}
function disableButton(){
    errorFlag = false;
    document.getElementById('submitButton').classList.add('btn-disabled');

}
function enableButton(){
    errorFlag = true;
    document.getElementById('submitButton').classList.remove('btn-disabled');


}

function submitMessage() {
    validateField('email', 'Email');
    validateField('firstName', 'First Name');
    validateField('lastName', 'Last Name');
    validateField('address', 'Address');


    if (errorFlag === true) {
        //Form submission code


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
