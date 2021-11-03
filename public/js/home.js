const logout_button = document.querySelector('#logout')

const logout = async () =>{
    try{
        const res = await fetch('/', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
      });
      if (res.ok) {
        document.location.replace('/');
      } else {
        alert(response.statusText);
      }
    } catch(err){
      console.log(err);
    }
  }

if(logout_button){
    logout_button.addEventListener('click', logout)
}