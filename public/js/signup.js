// Done
// Getting the button on the signup page
const button_signup = document.querySelector('#button_signup')

//Posting the pets Name, email and password
async function signupFormHandler(event) {
    event.preventDefault();

    const pets = document.querySelector('#pets-signup').value.trim();
    const email = document.querySelector('#email-signup').value.trim();
    const password = document.querySelector('#password-signup').value.trim();

    if (pets && email && password) {
        const response = await fetch('/api/users', {
            method: 'POST', 
            body: JSON.stringify({
                pets,
                email,
                password   
            }),
            headers: { 'Content-Type': 'application/json' }
        });

        if (response.ok) {
            document.location.replace('/');
        } else {
            alert(response.statusText);
        };
    };
};

button_signup.addEventListener('click', signupFormHandler);