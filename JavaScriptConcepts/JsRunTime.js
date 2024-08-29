//call Stack
function first() {
    console.log('First function start');
    second();
    console.log('First function end');
  }
  
  function second() {
    console.log('Second function start');
    third();
    console.log('Second function end');
  }
  
  function third() {
    console.log('Third function');
  }
  
  first();

  console.log('Start');

  setTimeout(() => {
    console.log('Callback');
  }, 1000);
  
  console.log('End');
  
  // Output:
  // Start
  // End
  // Callback (after 1 second)