//  Declaring Variables of function
const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password1 = document.getElementById('password1');
// Declaring variables and changing Attributes
const topMenuEl = document.querySelector("nav");
topMenuEl.style.backgroundColor = "var(--top-menu-bg)";
topMenuEl.style.height = "100%";
topMenuEl.className = "flex-around";
var menuLinks = [
    { text: 'about', href: '/about' },
    { text: 'catalog', href: '/catalog' },
    { text: 'orders', href: '/orders' },
    { text: 'account', href: '/account' },
  ];
// Looping though the array creating a elements,setting attributes to href and adding text plus apprend child element
for (let i = 0; i < menuLinks.length; i++) {
    const a = document.createElement("a");
    a.setAttribute("href", menuLinks[i].href);
    a.textContent = menuLinks[i].text;
    topMenuEl.appendChild(a);
  }
//  Adding a event listerner on the submit button
form.addEventListener('submit', e => {    
    e.preventDefault();
    validateInputs();
});
// Declaring error function
const setError = (element, message) => {
    //  Declaring Variables of function
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success');
}
// Declaring success function
const setSuccess = element => {
    //  Declaring Variables of function
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
};
// Declaring email function
const isValidEmail = email => {
    const regex = /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
    return regex.test(String(email).toLocaleLowerCase());
}
// Declaring validate function
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
    } else if(password1Value !== passwordValue) {
        setError(password1Value, "Password doesn't match.");
    }else {
        setSuccess(password1);
    }
};
