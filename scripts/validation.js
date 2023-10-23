let errorFlag = false;


function validateField(fieldId,fieldName) {
    const field = document.getElementById(fieldId);
    const errorField = document.getElementById(fieldId + "Error");

    if (!field.value.trim()) {
        errorField.textContent = `${fieldName} is required.`;
        disableButton();
        console.log('444');

    } else {
        errorField.textContent = "";
        enableButton()
        console.log('333');

        if (fieldId === "email") {
            const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
            if (!emailRegex.test(field.value)) {
                errorField.textContent = "Invalid email address";
                field.classList.add("input-value-error");
                disableButton();
                console.log('222');

            }else{
                field.classList.remove("input-value-error");
                errorField.textContent = "";
                enableButton()
                console.log('1111');

            }
        }
    }
}
function disableButton(){
    errorFlag = false;
    document.getElementById('submitButton').classList.add('btn-disabled');
    console.log('999');

}
function enableButton(){
    errorFlag = true;
    document.getElementById('submitButton').classList.remove('btn-disabled');
    console.log('777');


}

function submitMessage(){
    validateField('firstName','First Name')
    validateField('lastName','Last Name')
    validateField('email','Email')
    validateField('address','Address')


    if(errorFlag){
        //Form submission code
        console.log('Form data Submitted');
    }
}

