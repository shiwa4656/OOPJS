document.forms.searchbar.addEventListener('submit', (event) => {
    // Prevent the default behaviour of the form
    event.preventDefault();
  
    // Reference the form element
    const form = event.target;
  
    // Reference the input element
    const input = form.elements.search;
  
    // Apply styles to the input value
    input.style.fontWeight = "bold"; // Makes the text bold
    input.style.color = "blue"; // Changes the text color to blue
  
    // Alert the user of the search term
    alert(`You searched for ${input.value}`);
});
