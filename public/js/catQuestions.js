const find_cat = document.querySelector('#find_cat');
const main_questions = document.querySelector('#main_questions');
const footer_questions = document.querySelector('#footer_questions');
const section_cats_for_you = document.querySelector('#section_cats_for_you');

// First Question - hypoallergenic
const allergic = document.querySelector('#allergic');
const non_allergenic = document.querySelector('#non_allergenic');
const no_pref_allergenic = document.querySelector('#no_pref_allergenic');

// Second Question - grooming needs
const weekly = document.querySelector('#weekly');
const monthly = document.querySelector('#monthly');
const periodically = document.querySelector('#periodically');

// Third Question - energy level
const energetic = document.querySelector('#energetic');
const non_energetic = document.querySelector('#non_energetic');

// Forth Question - playful preference
const playful = document.querySelector('#playful');
const non_playful = document.querySelector('#non_playful');

// Fifth Question - affection preference
const affection = document.querySelector('#affection');
const non_affection = document.querySelector('#non_affection');

// Sixth Question - independence preference
const independent = document.querySelector('#independent');
const needy = document.querySelector('#needy');

// Seventh Question - cats preference for a dog in the home
const yes_dog = document.querySelector('#yes_dog');
const no_dog = document.querySelector('#no_dog');

// Eighth Question - cats preference for another cat in the home
const yes_cat = document.querySelector('#yes_cat');
const no_cat = document.querySelector('#no_cat');

//Ninth Question - cats preference for children in the home
const yes_children = document.querySelector('#yes_children');
const no_children = document.querySelector('#no_children');

// Tenth Question - fur length preference
const short_hair = document.querySelector('#short_hair');
const long_hair = document.querySelector('#long_hair');
const all_hair = document.querySelector('#all_hair');
const no_hair = document.querySelector('#no_hair');

// Eleventh Question - color preference
const black_color = document.querySelector('#black_color');
const white_color = document.querySelector('#white_color');
const blue_color = document.querySelector('#blue_color');
const red_color = document.querySelector('#red_color');
const brown_color = document.querySelector('#brown_color');
const cream_color = document.querySelector('#cream_color');
const no_color_preference = document.querySelector('#no_color_preference');

// Twelfth Question - vet needs
const yes_vet = document.querySelector('#yes_vet');
const no_vet = document.querySelector('#no_vet');
const no_recommendations_vet = document.querySelector('#no_recommendations_vet');

const inputs = [
// First Question - hypoallergenic
allergic,
non_allergenic,
non_allergenic,

// Second Question - grooming needs
weekly,
monthly,
periodically,

// Third Question - energy level
energetic,
non_energetic,

// Forth Question - playful preference
playful,
non_playful,

// Fifth Question - affection preference
affection,
non_affection,

// Sixth Question - independence preference
independent,
needy,

// Seventh Question - cats preference for a dog in the home
yes_dog,
no_dog, 

// Eighth Question - cats preference for another cat in the home
yes_cat,
no_cat, 

//Ninth Question - cats preference for children in the home
yes_children,
no_children, 

// Tenth Question - fur length preference
short_hair,
long_hair,
no_hair,
all_hair,

// Eleventh Question - color preference
no_color_preference,
white_color, 
black_color,
red_color,
blue_color,
cream_color,
brown_color,

// Twelfth Question - vet needs
yes_vet,
no_vet,
no_recommendations_vet
]

const inputs_picked = []
const cats_for_user = []

const get_inputs = async () =>{
    for(i = 0; i < inputs.length; i++){
        if(inputs[i].checked == true){
            inputs_picked.push(inputs[i].value)
        }
    }
    const res = await fetch('/questions/cat/data', {
        method: 'POST',
        body: JSON.stringify({inputs_picked}),
        headers: {
            'Content-Type': 'application/json',
        },
    })
    .then((response) => response.json())
    .then((cats) => {
        main_questions.classList.add('hide');
        footer_questions.classList.add('hide');
        section_cats_for_you.classList.remove('hide')

        for(i = 0; i < cats.length; i++){
            if( cats[i].hypo_allergenic == inputs_picked[0] && 
                cats[i].grooming_frequency == inputs_picked[1] &&
                cats[i].energy_level == inputs_picked[2] &&
                cats[i].outdoor_indoor == inputs_picked[3] &&
                cats[i].playful_pref == inputs_picked[4] && 
                cats[i].affection_level == inputs_picked[5] &&
                cats[i].like_dog == inputs_picked[6] &&
                cats[i].like_cat == inputs_picked[7] &&
                cats[i].like_children == inputs_picked[8] && 
                cats[i].fur_length == inputs_picked[9] &&
                cats[i].fur_color == inputs_picked[10]
                ){
                    cats_for_user.push(cats[i])
            }
        }
        if (cats_for_user.length == 0){
            alert('No Cats For You')
        } 

        for(i = 0; i < cats_for_user.length; i++){
            const h3_cat_name = document.createElement('h3');
            const p_cat_descr = document.createElement('p');
            const img_cat = document.createElement('img')
            const section_cats_text = document.createElement('section')
            const section_cat_all = document.createElement('section')
            
            h3_cat_name.textContent = cats_for_user[i].breed;
            p_cat_descr.textContent = cats_for_user[i].description;
            img_cat.src = cats_for_user[i].images;

            section_cats_text.append(h3_cat_name);
            section_cats_text.append(p_cat_descr);

            section_cat_all.append(img_cat);
            section_cat_all.append(section_cats_text)

            section_cat_all.classList.add('d-flex', 'justify-content-center', 'align-items-center')
            img_cat.classList.add('cat_image')

            section_cats_for_you.append(section_cat_all)
        }
    });
};

find_cat.addEventListener('click', get_inputs)