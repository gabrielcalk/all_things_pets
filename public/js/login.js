const button_signup = document.querySelector('#button_signup')

async function loginFormHandler(event) {
    event.preventDefault();
    
    const email = document.querySelector('#email-login').value.trim();
    const password = document.querySelector('#password-login').value.trim();

    if (email && password) {
        const response = await fetch('/login', {
            method: 'POST',
            body: JSON.stringify({
                email, 
                password
            }),
            headers: { 'Content-Type': 'application/json' }
        });

        if (response.ok) {
            document.location.replace('/');
        } else {
            alert(response.statusText);
        }
    }
}

button_signup.addEventListener('click', loginFormHandler);