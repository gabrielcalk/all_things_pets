const buttonListEl = document.querySelector('#buttons');
const names_dogs = document.querySelector('#names_dogs');
const names_cats = document.querySelector('#names_cats');
const button_ad_name = document.querySelector('#button_ad_name');

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

renderLetters()
  