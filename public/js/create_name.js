const create_post = document.querySelector('#create_post');
const type = document.querySelector('#type');
const gender = document.querySelector('#gender');
const name_pet = document.querySelector('#name_pet_input')

const add_name = async () =>{
    try {
        const type_input = type.value;
        const gender_input = gender.value;
        const name_pet_input = name_pet.value;
        const name_pet_input_up = name_pet_input.charAt(0).toUpperCase() + name_pet_input.slice(1);

        if(name_pet_input.length <= 0){
            alert('Please, provide all the informations')
            return
        };

        const res = await fetch('/name/add_name',{
            method:'POST',
            body: JSON.stringify({type_input, gender_input, name_pet_input_up}),
            headers: {
                'Content-Type': 'application/json',
            },
        });
        if(res.ok){
            document.location.replace('/name')
        } else if (res.status == 502){
            alert('We Already Have This Name')
        } else{
            alert('Please, Provide All The Information')
            return
        }
    } catch(err){
        console.log(err)
    }
}

create_post.addEventListener('click', add_name)