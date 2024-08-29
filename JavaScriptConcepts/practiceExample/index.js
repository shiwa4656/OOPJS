document.getElementById('myButton').addEventListener('click', function () {
    console.log('Button clicked!');
  
    setTimeout(() => {
        console.log("Data is getting fetched");
        setTimeout(() => {
            console.log("Data fetched: {name: Illy}");
            document.getElementById("myresult").innerText = "name: Illy";
        }, 2000);
    }, 1000);
    
    console.log("End of click handler");
});
