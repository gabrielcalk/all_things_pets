const grid = document.querySelector('.grid')

start()

async function start(){
    const storedPlace = JSON.parse(localStorage.getItem('place'))

    const res = await fetch('/info/places',{
        method:'POST',
        body: JSON.stringify({storedPlace}),
        headers: {
            'Content-Type': 'application/json',
        },
    })
    .then((response) => response.json())
    .then((places) => {
        for (i = 0; i < places.length; i++){
            const div_main_1 = document.createElement('div')
            const div_main_2 = document.createElement('div')

            const div_image = document.createElement('div');
            const img = document.createElement('img');

            const h2 = document.createElement('h2');
            const h3 = document.createElement('h3');
            const a = document.createElement('a');
            const div_number = document.createElement('div');

            div_main_1.classList.add('grid__item');
            div_main_2.classList.add('product');

            div_image.classList.add('product__bg')

            h2.classList.add('h2_title');
            h3.classList.add('h3_address')
            img.classList.add('product__img', 'images_places')
            a.classList.add('a_website')
            div_number.classList.add('div_number')
            
            img.src = places[i].image

            h2.textContent = places[i].name
            h3.textContent = `Address: ${places[i].address}`
            a.textContent = places[i].website
            a.setAttribute("href", `${places[i].website}`);
            div_number.textContent = places[i].phoneNumber

            div_image.append(img)

            div_main_2.append(div_image)
            div_main_2.append(h2)
            div_main_2.append(h3)
            div_main_2.append(a)
            div_main_2.append(div_number)

            div_main_1.append(div_main_2)
            grid.append(div_main_1)
        }
    })
}

