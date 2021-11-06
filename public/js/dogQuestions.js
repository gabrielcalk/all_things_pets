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

// First Question Inputs
const inputs_1 = [
    sporting_dogs,
    hound_dogs,
    working_dogs,
    terrier_dogs,
    companion_group,
    herding_group,
    mixed_group
]

// Second Question Inputs
const inputs_2 = [
    xsmall,
    small,
    medium,
    large,
    xlarge,
    giant
]

// Third Question Inputs
const inputs_3 = [
    potato,
    lazy,   
    moderate,
    active,
    very_active
]

// Forth Question Inputs
const inputs_4 = [
    never_children,
    rarely_children,
    sometimes_kids,
    likes_kids,
    loves_kids
]

// Fifth Question Inputs
const inputs_5 = [
    killer_dog,
    guarder,
    ready_to_alert,
    not_a_guard,
    bad_guard
]

// Sixth Question Inputs
const inputs_6 = [
    hate_dogs,
    dont_like_dogs,
    ok_dog,
    like_dog,
    love_dog
]

// Seventh Question Inputs
const inputs_7 = [
    stranger_danger,
    no_stranger,
    ok_stranger,
    like_stranger,
    love_stranger
]

// Eighth Question
const inputs_8 = [
    beauty_shop,
    extra_grooming,
    reg_grooming,
    lite_grooming,
    little_grooming
]

// Ninth Question
const inputs_9 = [
    star_student,
    above_average,
    train_me,
    dumb_dog,
    dumber_dog
]

// Tenth Question
const inputs_10 = [
    yapper,
    gossip,
    talkative,
    little_talk,
    quiet_dog
]

const inputs_picked_1 = []
const inputs_picked_2 = []
const inputs_picked_3 = []
const inputs_picked_4 = []
const inputs_picked_5 = []
const inputs_picked_6 = []
const inputs_picked_7 = []
const inputs_picked_8 = []
const inputs_picked_9 = []
const inputs_picked_10 = []

const breedGroup_array = [];
const size_array = [];
const energy_array = [];
const children_array = [];
const protective_array = [];
const otherDogs_array = [];
const strangers_array = [];
const grooming_array = [];
const trainable_array = [];
const final_array = [];



const dogs_for_user = []

const get_inputs = async () =>{
    for(i = 0; i < inputs_1.length; i++){
        if(inputs_1[i].checked == true){
            inputs_picked_1.push(inputs_1[i].value)
        }
    }

    for(i = 0; i < inputs_2.length; i++){
        if(inputs_2[i].checked == true){
            inputs_picked_2.push(inputs_2[i].value)
        }
    }

    for(i = 0; i < inputs_3.length; i++){
        if(inputs_3[i].checked == true){
            inputs_picked_3.push(inputs_3[i].value)
        }
    }

    for(i = 0; i < inputs_4.length; i++){
        if(inputs_4[i].checked == true){
            inputs_picked_4.push(inputs_4[i].value)
        }
    }
    
    for(i = 0; i < inputs_5.length; i++){
        if(inputs_5[i].checked == true){
            inputs_picked_5.push(inputs_5[i].value)
        }
    }

    for(i = 0; i < inputs_6.length; i++){
        if(inputs_6[i].checked == true){
            inputs_picked_6.push(inputs_6[i].value)
        }
    }

    for(i = 0; i < inputs_7.length; i++){
        if(inputs_7[i].checked == true){
            inputs_picked_7.push(inputs_7[i].value)
        }
    }

    for(i = 0; i < inputs_8.length; i++){
        if(inputs_8[i].checked == true){
            inputs_picked_8.push(inputs_8[i].value)
        }
    }

    for(i = 0; i < inputs_9.length; i++){
        if(inputs_9[i].checked == true){
            inputs_picked_9.push(inputs_9[i].value)
        }
    }

    for(i = 0; i < inputs_10.length; i++){
        if(inputs_10[i].checked == true){
            inputs_picked_10.push(inputs_10[i].value)
        }
    }
    const res = await fetch('/questions/dog/data', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    })
    .then((response) => response.json())
    .then((dogs) => {
        main_questions.classList.add('hide');
        footer_questions.classList.add('hide');
        section_dogs_for_you.classList.remove('hide')

// searching for user inputs dog breeds
        inputs_picked_1.forEach(function(user_choose){
            for (i = 0; i < dogs.length; i++){
                if (dogs[i].breedGroup.trim() == user_choose){
                    breedGroup_array.push(dogs[i])
                }
            }
        });

// searching for user inputs size
        inputs_picked_2.forEach(function(user_choose){
            for (i = 0; i < breedGroup_array.length; i++){
                if (breedGroup_array[i].size.trim() == user_choose){
                    size_array.push(breedGroup_array[i])
                }
            }
        });

// searching for user input energy
        inputs_picked_3.forEach(function(user_choose){
            for (i = 0; i < size_array.length; i++){
                if (size_array[i].energy == user_choose){
                    energy_array.push(size_array[i])
                }
            }
        });

// searching for user input children
        inputs_picked_4.forEach(function(user_choose){
            for (i = 0; i < energy_array.length; i++){
                if (energy_array[i].children == user_choose){
                    children_array.push(energy_array[i])
                }
            }
        });

// searching for user input protective
        inputs_picked_5.forEach(function(user_choose){
            for (i = 0; i < children_array.length; i++){
                if (children_array[i].protective == user_choose){
                    protective_array.push(children_array[i])
                }
            }
        });

// searching for user input other dogs
        inputs_picked_6.forEach(function(user_choose){
            for (i = 0; i < protective_array.length; i++){
                if (protective_array[i].otherDogs == user_choose){
                    otherDogs_array.push(protective_array[i])
                }
            }
        });

// searching for user input stranger
        inputs_picked_7.forEach(function(user_choose){
            for (i = 0; i < otherDogs_array.length; i++){
                if (otherDogs_array[i].strangers == user_choose){
                    strangers_array.push(otherDogs_array[i])
                }
            }
        });

// searching for user input grooming
        inputs_picked_8.forEach(function(user_choose){
            for (i = 0; i < strangers_array.length; i++){
                if (strangers_array[i].grooming == user_choose){
                    grooming_array.push(strangers_array[i])
                }
            }
        });

// searching for user input trainable
        inputs_picked_9.forEach(function(user_choose){
            for (i = 0; i < grooming_array.length; i++){
                if (grooming_array[i].trainable == user_choose){
                    trainable_array.push(grooming_array[i])
                }
            }
        });

// searching for user input barking
        inputs_picked_10.forEach(function(user_choose){
            for (i = 0; i < trainable_array.length; i++){
                if (trainable_array[i].barking == user_choose){
                    final_array.push(trainable_array[i])
                }
            }
        });

        if (final_array.length == 0){
            alert('No Dog For You')
        } 

        for(i = 0; i < final_array.length; i++){
            const h3_dog_name = document.createElement('h3');
            const p_dog_descr = document.createElement('p');
            const section_dogs_text = document.createElement('section')
            const section_dog_all = document.createElement('section')
            const ul_info = document.createElement('ul')
            const li_life = document.createElement('li')
            const li_weight = document.createElement('li')
            const li_height = document.createElement('li')
            const hr = document.createElement('hr')

            h3_dog_name_trim = final_array[i].breedName.trim()
            h3_dog_name.textContent = h3_dog_name_trim.charAt(0).toUpperCase() + h3_dog_name_trim.slice(1);
            p_dog_descr.textContent = `Description: ${final_array[i].description}`;
            
            li_life.textContent = final_array[i].life
            li_weight.textContent = final_array[i].weight
            li_height.textContent = final_array[i].height

            section_dogs_text.append(h3_dog_name);
            section_dogs_text.append(p_dog_descr);
            ul_info.append(li_life, li_weight, li_height)

            section_dog_all.append(section_dogs_text)

            section_dog_all.classList.add('my-2')
            section_dogs_for_you.append(section_dog_all)
            section_dogs_for_you.append(ul_info)
            section_dogs_for_you.append(hr)
            section_dogs_for_you.classList.add('my-2')
        }
    })
}

find_dog.addEventListener('click', get_inputs)