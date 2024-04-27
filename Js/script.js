//  Declaring Variables of function
const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password1 = document.getElementById('password1');
//  Adding a event listerner on the submit button
form.addEventListener('submit', e => {    
    e.preventDefault();

    validateInputs();
});
// Declaring function
const setError = (element, message) => {
    //  Declaring Variables of function
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success');
}
// Declaring function
const setSuccess = element => {
    //  Declaring Variables of function
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
};
// Declaring function
const isValidEmail = email => {
    const regex = /^[a-zA-Z0-9. _%+-]+@[a-zA-Z0-9. -]+\\. [a-zA-Z]{2,}$/;
    return regex.test(String(email).toLocaleLowerCase());
}
// Declaring function
const validateInputs = () => {
//  Declaring Variables of function 
    const usernameValue =username.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const password1Value = password1.value.trim();
// Testing Validation of user name
    if (usernameValue === '') {
        setError(username, 'Username is required:');
    }else{
        setSuccess(username);
    }
// Testing Validation of email and format
    if (emailValue === '') {
        setError(email, 'Email is required: ');
    }else if (!isValidEmail(emailValue)){
        setError(email, 'Provide a valid email address:')
    }else {
        setSuccess(email);
    }
// Testing the password on a password was put in
    if (passwordValue === '') {
        setError(password, 'Password is required:');
    }else if (passwordValue.length < 8) {
        setError(password, 'Password must be at least 8 characters.');
    }else {
        setSuccess(password);
    }
// Testing the password 2 if match and if password was put in
    if (password1Value === '') {
        setError(password1, 'Please confirm your password.')
    } else if(password1 !== passwordValue) {
        setError(password1, "Password doesn't match.");
    }else {
        setSuccess(password1);
    }
};
