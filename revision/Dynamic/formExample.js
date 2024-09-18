// Example function to randomly declare some usernames as taken
function usernameIsTaken(username) {
    // Generate a random number
    const randomNumber = Math.random();
    // Round the number to 0 or 1
    const randomBoolean = Math.round(randomNumber);
    // Return true or false
    return Boolean(randomBoolean)
  }
  
  document.forms.signup.addEventListener('input', (event) => {
    const username = event.target;
  
    // Simulate a request to the server to check if the username is taken
    const taken = usernameIsTaken(username.value);
  
    if (taken) {
      // Set a custom error message to inform the user
      username.setCustomValidity(`User ${username.value} is already taken, please try another name.`);
    } else {
      // Clear the custom error message
      username.setCustomValidity('');
    }
  });
  
  document.forms.signup.addEventListener('submit', (event) => {
    // Prevent the form from refreshing
    event.preventDefault();
    // Reset the form
    event.target.reset();
  })