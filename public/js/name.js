const buttonListEl = document.querySelector('#buttons')

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
buttonListEl.addEventListener('click', async function (event) {
    const letter = event.target.getAttribute('data-letter')

    const names = await fetch('/api/names');
    let data = await names.json()
    console.log(data)
});

renderLetters()
  