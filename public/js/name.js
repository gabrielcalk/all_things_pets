const buttonListEl = document.querySelector('#buttons');
const names_dogs = document.querySelector('#names_dogs');
const names_cats = document.querySelector('#names_cats');
const button_ad_name = document.querySelector('#button_ad_name');

// Gender
const female = document.querySelector('#female')
const male = document.querySelector('#male')

function renderLetters() {
    const letters = [
      'A',
      'B',
      'C',
      'D',
      'E',
      'F',
      'G',
      'H',
      'I',
      'J',
      'K',
      'L',
      'M',
      'N',
      'O',
      'P',
      'Q',
      'R',
      'S',
      'T',
      'U',
      'V',
      'W',
      'X',
      'Y',
      'Z',
    ];

  // Dynamically create buttons
  // Create a for-loop to iterate through the letters array.
  for (var i = 0; i < letters.length; i++) {
    // Create button
    var letterBtn = document.createElement('button')
    // Assign style to the button
    letterBtn.classList.add('letter-button', 'btn', 'm-1', 'px-3');
    // Assign the letter to the data-letter attribute
    letterBtn.setAttribute('data-letter', letters[i]);
    // Display the letter
    letterBtn.textContent = letters[i];
    // Attach the letter element
    buttonListEl.append(letterBtn);
  }
};

// Delegate event listener to the parent element, <div id="buttons">
buttonListEl.addEventListener('click', function (event) {
  removeAllChildNodes(names_dogs);
  removeAllChildNodes(names_cats);

  const letter = event.target.getAttribute('data-letter')

  const dogs = fetch('/name/api/dogs', {
    headers : { 
      'Content-Type': 'application/json',
      'Accept': 'application/json'
      }
  })
  .then((response) => response.json())
  .then((names) => {
    for (j = 0; j < names.length; j++){
      if (names[j].name.charAt(0) == letter){
        let div = document.createElement('div');
        let h4 = document.createElement('h4');
        let p = document.createElement('p');
        div.classList.add('mb-4');
        h4.textContent = names[j].name;
        p.textContent = names[j].type;
        div.append(h4);
        div.append(p);
        names_dogs.append(div);
      }
    }
    if (!names_dogs.hasChildNodes()){
      let div = document.createElement('div');
      let h4 = document.createElement('h4');
      h4.textContent = 'We Could Not Find Dogs Names With This Letter...';
      div.append(h4);
      names_dogs.append(div);
    }
  });


    const cats = fetch('/name/api/cats', {
      headers : { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
        }
    })
    .then((response) => response.json())
    .then((names) => {
      for (j = 0; j < names.length; j++){
        if (names[j].name.charAt(0) == letter){
          let div = document.createElement('div');
          let h4 = document.createElement('h4');
          let p = document.createElement('p');
          div.classList.add('mb-4');
          h4.textContent = names[j].name;
          p.textContent = names[j].gender;
          div.append(h4);
          div.append(p);
          names_cats.append(div);
        }
      }
      if (!names_cats.hasChildNodes()){
        let div = document.createElement('div');
        let h4 = document.createElement('h4');
        h4.textContent = 'We Could Not Find Cats Names With This Letter...';
        div.append(h4);
        names_cats.append(div);
      }
    });
})


function removeAllChildNodes(parent) {
  while (parent.firstChild) {
      parent.removeChild(parent.firstChild);
  }
}

// Finding Female Gender
const findFemale = async () =>{
  removeAllChildNodes(names_dogs);
  removeAllChildNodes(names_cats)

  const res = await fetch('/name/api/find-female', {
    headers:{
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    }
  })
  .then((response) => response.json())
  .then((female) => {
    for (j = 0; j < female.cats.length; j++){
      let div = document.createElement('div');
      let h4 = document.createElement('h4');
      let p = document.createElement('p');
      div.classList.add('mb-4');
      h4.textContent = female.cats[j].name;
      p.textContent = female.cats[j].gender;
      div.append(h4);
      div.append(p);
      names_cats.append(div);
  };

  for (j = 0; j < female.dogs.length; j++){
    let div = document.createElement('div');
    let h4 = document.createElement('h4');
    let p = document.createElement('p');
    div.classList.add('mb-4');
    h4.textContent = female.dogs[j].name;
    p.textContent = female.dogs[j].type;
    div.append(h4);
    div.append(p);
    names_dogs.append(div);
  };
  })
}

// Finding MaleGender
const findMale = async () =>{
  removeAllChildNodes(names_dogs);
  removeAllChildNodes(names_cats)
  
  const res = await fetch('/name/api/find-male', {
    headers:{
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    }
  })
  .then((response) => response.json())
  .then((male) => {
    for (j = 0; j < male.cats.length; j++){
        let div = document.createElement('div');
        let h4 = document.createElement('h4');
        let p = document.createElement('p');
        div.classList.add('mb-4');
        h4.textContent = male.cats[j].name;
        p.textContent = male.cats[j].gender;
        div.append(h4);
        div.append(p);
        names_cats.append(div);
    };

    for (j = 0; j < male.dogs.length; j++){
      let div = document.createElement('div');
      let h4 = document.createElement('h4');
      let p = document.createElement('p');
      div.classList.add('mb-4');
      h4.textContent = male.dogs[j].name;
      p.textContent = male.dogs[j].type;
      div.append(h4);
      div.append(p);
      names_dogs.append(div);
  };
  })
}

female.addEventListener('click', findFemale);
male.addEventListener('click', findMale);

renderLetters()


  