const find_cat = document.querySelector('#find_cat')
const main_questions = document.querySelector('#main_questions')
const footer_questions = document.querySelector('#footer_questions')

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
    .then((dogs) => {
        console.log(dogs)
        main_questions.classList.add('hide')
        footer_questions.classList.add('hide')
    });
};

find_cat.addEventListener('click', get_inputs)