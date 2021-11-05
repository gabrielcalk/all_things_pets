const find_dog = document.querySelector('#find_dog');
const main_questions = document.querySelector('#main_questions')
const footer_questions = document.querySelector('#footer_questions');
const section_dogs_for_you = document.querySelector('#section_dogs_for_you')

// First Question
const sporting_dogs = document.querySelector('#sporting_dogs');
const hound_dogs = document.querySelector('#hound_dogs');
const working_dogs = document.querySelector('#working_dogs');
const terrier_dogs = document.querySelector('#terrier_dogs');
const companion_group = document.querySelector('#companion_group');
const herding_group = document.querySelector('#herding_group');
const mixed_group = document.querySelector('#mixed_group');

// Second Question
const xsmall = document.querySelector('#xsmall');
const small = document.querySelector('#small');
const medium = document.querySelector('#medium');
const large = document.querySelector('#large');
const xlarge = document.querySelector('#xlarge');
const giant = document.querySelector('#giant');

// Third Question
const potato = document.querySelector('#potato');
const lazy = document.querySelector('#lazy');
const moderate = document.querySelector('#moderate');
const active = document.querySelector('#active');
const very_active = document.querySelector('#very_active');

// Forth Question
const never_children = document.querySelector('#never_children');
const rarely_children = document.querySelector('#rarely_children');
const sometimes_kids = document.querySelector('#sometimes_kids');
const likes_kids = document.querySelector('#likes_kids');
const loves_kids = document.querySelector('#loves_kids');

// Fifth Question
const killer_dog = document.querySelector('#killer_dog');
const guarder = document.querySelector('#guarder');
const ready_to_alert = document.querySelector('#ready_to_alert');
const not_a_guard = document.querySelector('#not_a_guard');
const bad_guard = document.querySelector('#bad_guard');

// Sixth Question
const hate_dogs = document.querySelector('#hate_dogs');
const dont_like_dogs = document.querySelector('#dont_like_dogs');
const ok_dog = document.querySelector('#ok_dog');
const like_dog = document.querySelector('#like_dog');
const love_dog = document.querySelector('#love_dog');

// Seventh Question
const stranger_danger = document.querySelector('#stranger_danger');
const no_stranger = document.querySelector('#no_stranger');
const ok_stranger = document.querySelector('#ok_stranger');
const like_stranger = document.querySelector('#like_stranger');
const love_stranger = document.querySelector('#love_stranger');

// Eighth Question
const beauty_shop = document.querySelector('#beauty_shop');
const extra_grooming = document.querySelector('#extra_grooming');
const reg_grooming = document.querySelector('#reg_grooming');
const lite_grooming = document.querySelector('#lite_grooming');
const little_grooming = document.querySelector('#little_grooming');

// Ninth Question
const star_student = document.querySelector('#star_student');
const above_average = document.querySelector('#above_average');
const train_me = document.querySelector('#train_me');
const dumb_dog = document.querySelector('#dumb_dog');
const dumber_dog = document.querySelector('#dumber_dog');

// Tenth Question
const yapper = document.querySelector('#yapper');
const gossip = document.querySelector('#gossip');
const talkative = document.querySelector('#talkative');
const little_talk = document.querySelector('#little_talk');
const quiet_dog = document.querySelector('#quiet_dog');

const inputs = [
// First Question Inputs
sporting_dogs,
hound_dogs,
working_dogs,
terrier_dogs,
companion_group,
herding_group,
mixed_group,
// Second Question Inputs
xsmall,
small,
medium,
large,
xlarge,
giant,
// Third Question Inputs
potato,
lazy,
moderate,
active,
very_active,
// Forth Question Inputs
never_children,
rarely_children,
sometimes_kids,
likes_kids,
loves_kids,
// Fifth Question Inputs
killer_dog,
guarder,
ready_to_alert,
not_a_guard,
bad_guard,
// Sixth Question Inputs
hate_dogs,
dont_like_dogs,
ok_dog,
like_dog,
love_dog,
// Seventh Question Inputs
stranger_danger,
no_stranger,
ok_stranger,
like_stranger,
love_stranger,
// Eighth Question
beauty_shop,
extra_grooming,
reg_grooming,
lite_grooming,
little_grooming,
// Ninth Question
star_student,
above_average,
train_me,
dumb_dog,
dumber_dog,
// Tenth Question
yapper,
gossip,
talkative,
little_talk,
quiet_dog,
]

const inputs_picked = []
const dogs_for_user = []

const get_inputs = async () =>{
    for(i = 0; i < inputs.length; i++){
        if(inputs[i].checked == true){
            inputs_picked.push(inputs[i].value)
        }
    }
    const res = await fetch('/questions/dog/data', {
        method: 'POST',
        body: JSON.stringify({inputs_picked}),
        headers: {
            'Content-Type': 'application/json',
        },
    })
    .then((response) => response.json())
    .then((dogs) => {
        console.log(dogs)
        console.log(inputs_picked)
        main_questions.classList.add('hide');
        footer_questions.classList.add('hide');
        section_dogs_for_you.remove('hide')

        for(i = 0; i < dogs.length; i++){
            if( dogs[i].breedGroup.trim() == inputs_picked[0] && 
                dogs[i].size == inputs_picked[1] //&&
                // dogs[i].energy == inputs_picked[2] &&
                // dogs[i].children == inputs_picked[3] &&
                // dogs[i].protective == inputs_picked[4] && 
                // dogs[i].otherDogs == inputs_picked[5] &&
                // dogs[i].strangers == inputs_picked[6] &&
                // dogs[i].grooming == inputs_picked[7] &&
                // dogs[i].trainable == inputs_picked[8] &&
                // dogs[i].barking == inputs_picked[9]
                ){
                    dogs_for_user.push(dogs[i])
            }
        }
        console.log(dogs_for_user)
    })
}

find_dog.addEventListener('click', get_inputs)