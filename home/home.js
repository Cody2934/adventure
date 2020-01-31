import { saveUser } from '../data/api.js';
import makeUser from './make-user.js';

// grab the <form> data from the home page
const userSignUp = document.getElementById('user-sign-up');

// adding an eventListener to the button and prevent button from refreshing or redirecting
userSignUp.addEventListener('submit', function(event) {
    event.preventDefault();

    // make a new form data object
    const formData = new FormData(userSignUp);
    const user = makeUser(formData);
    // use the form data object to make a user

    // puts the user in local storage
    saveUser(user);

    // sends user / redirects user to map page
    window.location = 'map';
});