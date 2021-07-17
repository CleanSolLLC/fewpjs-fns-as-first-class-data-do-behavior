/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

function greet(input) {
  const time = parseInt(input.split(':'));

  if (time < 12) {
    var msg = 'Good Morning';
  } else if (time >= 12 && time < 17) {

    var msg = 'Good Afternoon';

  } else if (time >= 17){
    var msg = 'Good Evening'; 
  }
  return msg;
}


  function displayMessage(string) {
       let element = document.getElementById('greeting');
   element.innerHTML = `${string}`;
  }

