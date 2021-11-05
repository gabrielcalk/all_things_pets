const find_cat = document.querySelector('#find_cat');
const main_questions = document.querySelector('#main_questions');
const footer_questions = document.querySelector('#footer_questions');
const section_cats_for_you = document.querySelector('#section_cats_for_you');

// First Question
const yes_allergenic = document.querySelector('#yes_allergenic');
const no_allergenic = document.querySelector('#no_allergenic');
const no_pref_allergenic = document.querySelector('#no_pref_allergenic');

// Second Question
const minimal = document.querySelector('#minimal');
const once_per_week = document.querySelector('#once_per_week');

// Third Question
const yes_children = document.querySelector('#yes_children');
const no_children = document.querySelector('#no_children');

// Forth Question
const outdoor = document.querySelector('#outdoor');
const indoor = document.querySelector('#indoor');

// Fifth Question
const very_energetic = document.querySelector('#very_energetic');
const docile = document.querySelector('#docile');

// Sixth Question
const yes_affection = document.querySelector('#yes_affection');
const no_affection = document.querySelector('#no_affection');
const no_pref_affection = document.querySelector('#no_pref_affection');

// Seventh Question
const yes_alone = document.querySelector('#yes_alone')
const no_alone = document.querySelector('#no_alone')
const no_pref_alone = document.querySelector('#no_pref_alone');

// Eighth Question
const black_color = document.querySelector('#black_color');
const white_color = document.querySelector('#white_color');
const blue_color = document.querySelector('#blue_color');
const red_color = document.querySelector('#red_color');
const tortishell_color = document.querySelector('#tortishell_color');
const brown_color = document.querySelector('#brown_color');
const tabby_color = document.querySelector('#tabby_color');

// Ninth Question
const yes_vet = document.querySelector('#yes_vet');
const no_vet = document.querySelector('#no_vet');
const no_recommentadions_vet = document.querySelector('#no_recommentadions_vet');

const inputs = [
    // First Question
    yes_allergenic,
    no_allergenic,
    // Second Question
    minimal,
    once_per_week,
    // Third Question
    yes_children,
    no_children,
    // Forth Question
    outdoor,
    indoor,
    // fifth Question
    very_energetic,
    docile,
    // sixth Question
    yes_affection,
    no_affection,
    // seventh Question
    yes_alone,
    no_alone,
    // eighth Question
    // black_color,
    // white_color,
    // blue_color,
    // red_color,
    // tortishell_color,
    // brown_color,
    // tabby_color,
    // ninth Question
    yes_vet,
    no_vet,
    no_recommentadions_vet
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
                cats[i].like_children == inputs_picked[2] &&
                cats[i].outdoor_indoor == inputs_picked[3] &&
                cats[i].energy_level == inputs_picked[4] && 
                cats[i].affectionate == inputs_picked[5] &&
                cats[i].independence == inputs_picked[6]
                ){
                    cats_for_user.push(cats[i])
            }
        }
        if (cats_for_user.length == 0){
            console.log('No Cats For You')
        } 

        console.log(cats_for_user)

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