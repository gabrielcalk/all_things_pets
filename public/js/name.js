const buttonListEl = document.querySelector('#buttons');
const names_pets = document.querySelector('#names_pets')

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
  removeAllChildNodes(names_pets);

    const letter = event.target.getAttribute('data-letter')

    const names = fetch('/name/api', {
      headers : { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
       }
    })
    .then((response) => response.json())
    .then((names) => {
        for (j = 0; j < names.length; j++){
          if (names[j].name.charAt(0) == letter){
            const div = document.createElement('div');
            const h4 = document.createElement('h4');
            h4.textContent = names[j].name;
            div.append(h4);
            names_pets.append(div);
          }
        }
        if (!names_pets.hasChildNodes()){
          const div = document.createElement('div');
          const h4 = document.createElement('h4');
          h4.textContent = 'We Could Not Find Names With This Letter...';
          div.append(h4);
          names_pets.append(div);
        }
    })
});

function removeAllChildNodes(parent) {
  while (parent.firstChild) {
      parent.removeChild(parent.firstChild);
  }
}
const container = document.querySelector('#container');

renderLetters()
  